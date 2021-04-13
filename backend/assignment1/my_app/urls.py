from rest_framework import routers
from django.urls import path
from . import views
#from my_app import views

urlpatterns = [
    path('', views.list, name='index'), 
    path('<int:Video_id>/delete/', views.delete, name='delete'),
    path('<int:Video_id>/update/', views.update, name='update'),
    path('<int:Video_id>/edit/', views.edit, name='edit'),
    path('<int:Video_id>/', views.detail, name='detail'),
    path('<int:Video_id>/get/', views.get, name='get'),
]
 
 #path('<int:Video_id>/', views.detail),
