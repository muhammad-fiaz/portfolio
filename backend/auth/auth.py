from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class UpdateEmailAPIView(APIView):
    def post(self, request):
        # Get the new email from the request data
        new_email = request.data.get('email')

        # Validate the new email (You can add custom validation here if needed)
        if new_email:
            # Update the email address in the database or perform any other required actions
            # For now, we'll just print the new email
            print("New Email:", new_email)

            # Return a success response
            return Response({'message': 'Email updated successfully'})
        else:
            # Return an error response if the new email is not provided
            return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)
