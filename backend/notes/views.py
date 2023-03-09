from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from .serializers import NoteSerializer
from .models import Note



@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def notes_list(request):
    
    
    if request.method == 'POST':
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user_request=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        user_requests = Note.objects.filter(user_request_id=request.user.id)
        serializer = NoteSerializer(user_requests, many=True)
        return Response(serializer.data)
    

