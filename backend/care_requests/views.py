from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .serializers import Care_RequestSerializer
from .models import Care_Request

@api_view(['GET'])
@permission_classes([AllowAny])
def care_requests_list(request):
    care_requests = Care_Request.objects.all()
    serializer = Care_RequestSerializer(care_requests, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_care_requests(request):
    
    if request.method == 'POST':
        serializer = Care_RequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(client=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        care_requests = Care_Request.objects.filter(client_id=request.user.id)
        serializer = Care_RequestSerializer(care_requests, many=True)
        return Response(serializer.data)
    

            
    