"""API v1 main router."""
from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth,
    customers,
    accounts,
    contacts,
    portfolio,
    services,
)
from app.api.v1.endpoints.admin import (
    dashboard,
    contacts as admin_contacts,
    portfolio as admin_portfolio,
    services as admin_services,
)

# Create main API router
api_router = APIRouter()

# Include authentication endpoints
api_router.include_router(auth.router)

# Include customer & account management endpoints
api_router.include_router(customers.router, prefix="/customers", tags=["Customers"])
api_router.include_router(accounts.router, prefix="/accounts", tags=["Accounts"])

# Include public endpoints
api_router.include_router(contacts.router)
api_router.include_router(portfolio.router)
api_router.include_router(services.router)

# Include admin endpoints
api_router.include_router(dashboard.router)
api_router.include_router(admin_contacts.router)
api_router.include_router(admin_portfolio.router)
api_router.include_router(admin_services.router)