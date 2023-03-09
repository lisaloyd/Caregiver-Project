from django.urls import path
from . import views



urlpatterns = [
    path('all/', views.care_requests_list),
    path('', views.user_care_requests), 
]

























