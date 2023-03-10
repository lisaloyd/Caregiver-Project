from django.urls import path
from . import views
from care_requests.models import Care_Request

urlpatterns = [
    path('', views.new_note),
    path('<int:care_request_id>/', views.notes_list),
]


















# urlpatterns = [
#     path('all/', views.care_requests_list),
#     path('<int:care_request_id>/', views.user_care_requests), 
#     path('', views.new_care_requests),
# ]
