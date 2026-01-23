"""Admin dashboard endpoints."""
from fastapi import APIRouter, Depends
from app.core.dependencies import get_current_admin_user
from app.services import ContactService, PortfolioService, ServiceInquiryService
from app.api.deps import (
    get_contact_service,
    get_portfolio_service,
    get_service_inquiry_service,
)
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/admin/dashboard", tags=["Admin - Dashboard"])


@router.get("/stats")
async def get_dashboard_stats(
    current_user: dict = Depends(get_current_admin_user),
    contact_service: ContactService = Depends(get_contact_service),
    portfolio_service: PortfolioService = Depends(get_portfolio_service),
    service_inquiry_service: ServiceInquiryService = Depends(get_service_inquiry_service),
):
    """Get dashboard statistics."""
    # Get counts from all services
    contact_count = await contact_service.get_count()
    portfolio_count = await portfolio_service.get_count()
    inquiry_count = await service_inquiry_service.get_inquiry_count()
    consultation_count = await service_inquiry_service.get_consultation_count()
    
    # Get new/unread counts
    new_contacts = await contact_service.get_new_count()
    published_portfolio = await portfolio_service.get_published_count()
    
    return {
        "contacts": {
            "total": contact_count,
            "new": new_contacts
        },
        "portfolio": {
            "total": portfolio_count,
            "published": published_portfolio
        },
        "service_inquiries": inquiry_count,
        "consultation_bookings": consultation_count,
    }


@router.get("/recent-activity/{limit}")
async def get_recent_activity(
    limit: int = 5,
    current_user: dict = Depends(get_current_admin_user),
    contact_service: ContactService = Depends(get_contact_service),
):
    """Get recent activity for dashboard."""
    # Get recent contacts
    recent_contacts = await contact_service.get_recent(limit)
    
    return {
        "recent_contacts": recent_contacts,
    }

