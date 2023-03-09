from django.db import models
from authentication.models import User

# Create your models here.
class Care_Request(models.Model):
    client = models.ForeignKey(User, on_delete=models.CASCADE, related_name="client")
    contractor = models.ForeignKey(User, on_delete=models.CASCADE, related_name="contractor", null=True)
    zipcode = models.IntegerField()
    type_of_care = models.CharField(max_length=250)
    # care_request_id = models.Index(fields=['care_request_id'])