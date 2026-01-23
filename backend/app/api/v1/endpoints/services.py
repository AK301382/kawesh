"""Service inquiry endpoints."""
from fastapi import APIRouter, Depends, HTTPException, status, Request
from app.schemas.service import (
    ServiceInquiryCreate,
    ServiceInquiryResponse,
    ConsultationBookingCreate,
    ConsultationBookingResponse,
)
from app.services import ServiceInquiryService
from app.api.deps import get_service_inquiry_service, get_client_ip
from middleware.i18n import get_request_locale
from app.utils.i18n import translate
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/services", tags=["Services"])


@router.post(
    "/inquiry",
    response_model=ServiceInquiryResponse,
    status_code=status.HTTP_201_CREATED,
)
async def submit_service_inquiry(
    inquiry: ServiceInquiryCreate,
    request: Request,
    ip_address: str = Depends(get_client_ip),
    service: ServiceInquiryService = Depends(get_service_inquiry_service)
):
    """Submit a service inquiry."""
    locale = get_request_locale(request)
    try:
        result = await service.create_inquiry(inquiry.model_dump(), ip_address)
        return result
    except Exception as e:
        logger.error(f"Error creating service inquiry: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=translate("errors.services.inquiry_failed", locale)
        )


@router.post(
    "/consultation",
    response_model=ConsultationBookingResponse,
    status_code=status.HTTP_201_CREATED,
)
async def book_consultation(
    booking: ConsultationBookingCreate,
    request: Request,
    ip_address: str = Depends(get_client_ip),
    service: ServiceInquiryService = Depends(get_service_inquiry_service)
):
    """Book a consultation."""
    locale = get_request_locale(request)
    try:
        result = await service.create_consultation(booking.model_dump(), ip_address)
        return result
    except Exception as e:
        logger.error(f"Error creating consultation booking: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=translate("errors.services.booking_failed", locale)
        )
