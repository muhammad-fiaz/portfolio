from django.urls import path
from . import api

urlpatterns = [
    # other URLs
    path('api/auth/', api.AuthAPIView.as_view(), name='auth'),
]
