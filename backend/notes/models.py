from django.db import models
from care_requests.models import Care_Request


# Create your models here.
class Note(models.Model):
    care_request = models.ForeignKey(Care_Request, on_delete=models.CASCADE)
    notes = models.CharField(max_length=255)