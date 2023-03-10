from django.urls import path
from . import views
from care_requests.models import Care_Request

urlpatterns = [
    path('', views.new_note),
    path('<int:note_id>/', views.notes_detail),
]




# urlpatterns = [
#     path('all/', views.care_requests_list),
#     path('<int:care_request_id>/', views.user_care_requests), get and put
#     path('', views.new_care_requests),
#      path('<int:care_request_id>/notes/', include('notes.urls')),
# ]
















