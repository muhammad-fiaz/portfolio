from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class AuthAPIView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        # Perform authentication logic here (e.g., check credentials)
        # Replace the example logic with your actual authentication implementation
        # this email and password is the Sample Demo Purpose Only you can change it according to your requirement
        if email == 'example@gmail.com' and password == 'password':
            # Authentication successful
            response = Response({'message': 'Authentication successful'})
            print(email, password)
            return response
        else:
            # Authentication failed
            print(email, password)

            return Response({'message': 'Authentication failed'}, status=status.HTTP_401_UNAUTHORIZED)
