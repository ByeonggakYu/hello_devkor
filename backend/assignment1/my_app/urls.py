from rest_framework import routers
from django.urls import path
from . import views
#from my_app import views

urlpatterns = [
    path('', views.list, name='index'), 
    path('<int:Video_id>/delete/', views.delete),
    path('<int:Video_id>/update/', views.update),
    path('<int:Video_id>/edit/', views.edit),
    path('<int:Video_id>/', views.detail),
    path('<int:Video_id>/get/', views.get),
]  

 #path('<int:Video_id>/', views.detail),
