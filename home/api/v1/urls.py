from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ProvidersViewSet,ReviewsViewSet,Service_CategoryViewSet,UsersViewSet,VendorsViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('service_category', Service_CategoryViewSet )
router.register('providers', ProvidersViewSet )
router.register('reviews', ReviewsViewSet )
router.register('vendors', VendorsViewSet )
router.register('users', UsersViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
