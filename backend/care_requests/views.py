from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import Care_RequestSerializer
from .models import Care_Request

@api_view(['GET'])
def care_requests_list(request):
    care_requests = Care_Request.objects.all()

    serializer = Care_RequestSerializer(care_requests, many=True)

    return Response(serializer.data)
