from django.urls import path
from . import views
from care_requests.models import Care_Request

urlpatterns = [
    path('', views.notes_list),
]