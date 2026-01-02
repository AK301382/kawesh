"""Main application entry point."""
from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from config.settings import settings
from config.logging_config import configure_logging, get_logger
from middleware.security import SecurityHeadersMiddleware
from middleware.i18n import I18nMiddleware, get_request_locale
from database import close_db_connection
from app.api.v1.router import api_router
from app.core.exceptions import (
    NotFoundException,
    AlreadyExistsException,
    UnauthorizedException,
    ForbiddenException,
    ValidationException,
    DatabaseException,
    DuplicateException,
    AuthenticationException,
    PermissionDeniedException
)
from app.utils.i18n import translate
import logging

# Configure structured logging
configure_logging(settings.LOG_LEVEL)
logger = get_logger(__name__)

# Initialize Sentry if DSN is provided (optional)
if settings.SENTRY_DSN:
    try:
        import sentry_sdk
        from sentry_sdk.integrations.fastapi import FastApiIntegration
        
        sentry_sdk.init(
            dsn=settings.SENTRY_DSN,
            environment=settings.ENVIRONMENT,
            traces_sample_rate=1.0 if settings.DEBUG else 0.1,
            integrations=[FastApiIntegration()],
            send_default_pii=False,
            before_send=lambda event, hint: event if settings.ENVIRONMENT != "development" else None,
        )
        logger.info("✅ Sentry error tracking initialized")
    except ImportError:
        logger.info("ℹ️  Sentry SDK not installed - error tracking disabled")


def create_application() -> FastAPI:
    """Create and configure the FastAPI application."""
    
    app = FastAPI(
        title=settings.APP_NAME,
        description="Professional agency backend API with customer management",
        version=settings.APP_VERSION,
        debug=settings.DEBUG,
        docs_url="/api/docs",
        redoc_url="/api/redoc",
        openapi_url="/api/openapi.json",
    )
    
    # Add middleware (order matters - first added is executed last)
    # 1. Security headers (outermost)
    app.add_middleware(SecurityHeadersMiddleware)
    
    # 2. i18n middleware for locale detection
    app.add_middleware(I18nMiddleware)
    
    # 3. Response compression
    app.add_middleware(GZipMiddleware, minimum_size=1000)
    
    # 4. CORS middleware (innermost)
    app.add_middleware(
        CORSMiddleware,
        allow_credentials=True,
        allow_origins=settings.cors_origins_list,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    
    # Global exception handlers for i18n support
    @app.exception_handler(DuplicateException)
    async def duplicate_exception_handler(request: Request, exc: DuplicateException):
        locale = get_request_locale(request)
        # Try to translate if the detail contains a known pattern
        detail = exc.detail
        if "Email already registered" in detail:
            detail = translate("errors.auth.email_already_exists", locale)
        elif "already exists" in detail.lower():
            detail = translate("errors.validation.already_exists", locale)
        return JSONResponse(
            status_code=exc.status_code,
            content={"detail": detail}
        )
    
    @app.exception_handler(AuthenticationException)
    async def authentication_exception_handler(request: Request, exc: AuthenticationException):
        locale = get_request_locale(request)
        detail = exc.detail
        if "Invalid email or password" in detail:
            detail = translate("errors.auth.invalid_credentials", locale)
        elif "Account is deactivated" in detail:
            detail = translate("errors.auth.account_deactivated", locale)
        return JSONResponse(
            status_code=exc.status_code,
            content={"detail": detail},
            headers={"WWW-Authenticate": "Bearer"}
        )
    
    @app.exception_handler(NotFoundException)
    async def not_found_exception_handler(request: Request, exc: NotFoundException):
        locale = get_request_locale(request)
        detail = exc.detail
        if "Customer not found" in detail:
            detail = translate("errors.auth.customer_not_found", locale)
        elif "not found" in detail.lower():
            detail = translate("errors.database.not_found", locale)
        return JSONResponse(
            status_code=exc.status_code,
            content={"detail": detail}
        )
    
    @app.exception_handler(DatabaseException)
    async def database_exception_handler(request: Request, exc: DatabaseException):
        locale = get_request_locale(request)
        detail = translate("errors.database.operation_failed", locale)
        return JSONResponse(
            status_code=exc.status_code,
            content={"detail": detail}
        )
    
    @app.exception_handler(PermissionDeniedException)
    async def permission_denied_exception_handler(request: Request, exc: PermissionDeniedException):
        locale = get_request_locale(request)
        detail = translate("errors.auth.forbidden", locale)
        return JSONResponse(
            status_code=exc.status_code,
            content={"detail": detail}
        )
    
    # Include API router with /api prefix
    app.include_router(api_router, prefix="/api")
    
    # Health check endpoints
    @app.get("/")
    async def root():
        return {
            "message": "Kawesh API is running",
            "version": settings.APP_VERSION,
            "status": "healthy"
        }
    
    @app.get("/health")
    async def health_check():
        return {
            "status": "healthy",
            "message": "All systems operational"
        }
    
    # Startup event
    @app.on_event("startup")
    async def startup_event():
        logger.info(f"🚀 {settings.APP_NAME} starting up...")
        logger.info(f"📍 Environment: {settings.ENVIRONMENT}")
        logger.info(f"🔧 Debug mode: {settings.DEBUG}")
        logger.info("✅ Database connection established")
        logger.info("✅ All routes registered")
        logger.info("📚 API documentation available at /api/docs")
    
    # Shutdown event
    @app.on_event("shutdown")
    async def shutdown_event():
        logger.info(f"🔴 Shutting down {settings.APP_NAME}...")
        await close_db_connection()
        logger.info("✅ Database connection closed")
    
    return app


# Create the application instance
app = create_application()
