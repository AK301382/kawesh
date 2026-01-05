"""Pydantic schemas for API contracts."""
from .common import SuccessResponse, ErrorResponse, PaginationParams, PaginatedResponse
from .contact import ContactCreate, ContactResponse
from .portfolio import PortfolioCreate, PortfolioUpdate, PortfolioResponse
from .service import ServiceInquiryCreate, ServiceInquiryResponse, ConsultationBookingCreate, ConsultationBookingResponse
from .user import AdminUserCreate, AdminUserResponse, LoginRequest, TokenResponse
from .customer import (
    CustomerRegister, CustomerLogin, CustomerUpdate, CustomerPasswordChange,
    CustomerResponse, CustomerLoginResponse
)
from .account import (
    AccountInvite, AccountAcceptInvitation, AccountLogin, AccountUpdate,
    AccountRoleUpdate, AccountPermissionsUpdate,
    AccountResponse, AccountLoginResponse, AccountListResponse
)

__all__ = [
    # Common
    "SuccessResponse", "ErrorResponse", "PaginationParams", "PaginatedResponse",
    # Contact
    "ContactCreate", "ContactResponse",
    # Portfolio
    "PortfolioCreate", "PortfolioUpdate", "PortfolioResponse",
    # Service
    "ServiceInquiryCreate", "ServiceInquiryResponse",
    "ConsultationBookingCreate", "ConsultationBookingResponse",
    # User
    "AdminUserCreate", "AdminUserResponse", "LoginRequest", "TokenResponse",
    # Customer
    "CustomerRegister", "CustomerLogin", "CustomerUpdate", "CustomerPasswordChange",
    "CustomerResponse", "CustomerLoginResponse",
    # Account
    "AccountInvite", "AccountAcceptInvitation", "AccountLogin", "AccountUpdate",
    "AccountRoleUpdate", "AccountPermissionsUpdate",
    "AccountResponse", "AccountLoginResponse", "AccountListResponse",
]