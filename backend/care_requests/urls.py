from django.urls import path
from . import views

urlpatterns = [
    path('', views.care_requests_list),
]