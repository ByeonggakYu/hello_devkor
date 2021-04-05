from rest_framework import routers
from django.urls import path
from . import views
#from my_app import views

urlpatterns = [
    path('', views.index, name='index'),
    #path('my_app/', views.index), #views.index 는 views.py 파일의 index 라는 함수를 의미함.
]  #my_app 뒤에 / 를 붙여주면, 사용자가 슬래쉬를 붙이지 않아도 장고가 가동으로 붙여준다.
