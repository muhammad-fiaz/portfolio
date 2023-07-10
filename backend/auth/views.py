from django.shortcuts import render

# Create your views here.

import os


def Chatbot(message, user_id):
    response = f"Hello {user_id} This Chatbot is still under development. so you are receiving this message."
    return response


