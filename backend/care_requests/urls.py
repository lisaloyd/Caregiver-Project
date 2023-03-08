from django.urls import path
from . import views



urlpatterns = [
    path('all/', views.care_requests_list),
    path('', views.user_care_requests), 
]























# urlpatterns = [
    # path('', views.user_cars), get and post
    # path('all/', views.get_all_cars), allowany
# ]


