from django.urls import path
from . import api

urlpatterns = [
    path('api/chat/', api.ChatbotAPI.as_view(), name='ChatbotAPI'),
]