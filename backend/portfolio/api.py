from rest_framework.views import APIView
from rest_framework.response import Response

from portfolio.views import Chatbot


# This is the view that will handle the chatbot API requests use can also modify this according to your needs.
class ChatbotAPI(APIView):
    def get(self, request):
        # Handle GET request logic here
        # Extract the necessary parameters from the request, such as 'message' and 'userId'
        message = request.GET.get('message')
        user_id = request.GET.get('userId')

        # Perform your chatbot logic with the received parameters

        response = 'Received GET request: message={}, userId={}'.format(message, user_id)
        response = Chatbot(response,user_id)
        return Response({'response': response})

    def post(self, request):
        # Handle POST request logic here
        # Extract the necessary parameters from the request data
        message = request.data.get('message')
        user_id = request.data.get('userId')

        # Perform your chatbot logic with the received parameters

        response = 'Received POST request: message={}, userId={}'.format(message, user_id)
        response = Chatbot(response,user_id)
        return Response({'response': response})
