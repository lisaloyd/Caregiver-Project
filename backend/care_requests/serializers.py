from rest_framework import serializers
from .models import Care_Request

class Care_RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Care_Request
        fields = ['id', 'zipcode', 'type_of_care', 'client_id', 'contractor_id']