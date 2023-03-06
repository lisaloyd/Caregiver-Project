from django.db import models

# Create your models here.

class User(models.Model):
    is_client = models.BooleanField('user status', default=False)
