from rest_framework import routers
from django.urls import path
from . import views
#from my_app import views

app_name = 'my_app'

urlpatterns = [
    path('', views.list, name='index'), 
    path('delete/<int:Video_id>/', views.delete, name='delete'),
    path('update/<int:Video_id>/', views.update, name='update'),
    path('edit/<int:Video_id>/', views.edit, name='edit'),
    path('<int:Video_id>/', views.detail, name='detail'),
    path('get/<int:Video_id>/', views.get, name='get'),
    path('comment/create/<int:Video_id>', views.comment_create, name='comment_create'),
]
 
 #path('<int:Video_id>/', views.detail),
