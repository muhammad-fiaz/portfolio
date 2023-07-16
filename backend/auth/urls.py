from django.urls import path
from . import api, auth

urlpatterns = [
    # other URLs
    path('api/auth/', api.AuthAPIView.as_view(), name='auth'),
    path('api/auth/update_email/', auth.UpdateEmailAPIView.as_view(), name='update_email'),

]
