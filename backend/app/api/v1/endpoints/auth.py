"""Authentication endpoints."""
from fastapi import APIRouter, Depends, HTTPException, status, Request
from app.schemas.user import LoginRequest, TokenResponse
from app.schemas.common import ErrorResponse
from app.services import AuthService
from app.api.deps import get_auth_service
from middleware.i18n import get_request_locale
from app.utils.i18n import translate
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post(
    "/admin/login",
    response_model=TokenResponse,
    responses={
        401: {"model": ErrorResponse, "description": "Invalid credentials"},
    },
)
async def admin_login(
    request: Request,
    credentials: LoginRequest,
    auth_service: AuthService = Depends(get_auth_service)
):
    """Admin user login."""
    locale = get_request_locale(request)
    result = await auth_service.authenticate_admin(
        credentials.username,
        credentials.password
    )
    
    if not result:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=translate("errors.auth.invalid_credentials", locale)
        )
    
    return result


@router.post(
    "/customer/login",
    response_model=TokenResponse,
    responses={
        401: {"model": ErrorResponse, "description": "Invalid credentials"},
    },
)
async def customer_login(
    request: Request,
    credentials: LoginRequest,
    auth_service: AuthService = Depends(get_auth_service)
):
    """Customer account login."""
    locale = get_request_locale(request)
    result = await auth_service.authenticate_customer(
        credentials.username,
        credentials.password
    )
    
    if not result:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=translate("errors.auth.invalid_credentials", locale)
        )
    
    return result
