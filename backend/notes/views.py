from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from .serializers import NoteSerializer
from .models import Note




@api_view(['GET'])
@permission_classes([IsAuthenticated])
def notes_list(request, care_request_id):
    
    if request.method == 'GET':
        notes = Note.objects.filter(care_request_id=care_request_id)
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def new_note(request, care_request_id):  

    if request.method == 'POST':
        note = NoteSerializer(data=request.data)
        note.is_valid(raise_exception=True)
        note.save(care_request_id=care_request_id)
        return Response(note.data, status=status.HTTP_200_OK)


        
        
        
        
        
        
        
        
        # serializer = NoteSerializer(data=request.data)
        # if serializer.is_valid():
        #     serializer.save(user_request=request.user)
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    

