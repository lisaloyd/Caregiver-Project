from django.urls import path, include
from . import views



urlpatterns = [
    path('all/', views.care_requests_list),
    path('<int:care_request_id>/', views.user_care_requests), 
    path('', views.new_care_requests),
    path('<int:care_request_id>/notes/', include('notes.urls')),
]


























