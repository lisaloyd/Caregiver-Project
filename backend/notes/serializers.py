from rest_framework import serializers
from .models import Note

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'notes', 'care_request_id']