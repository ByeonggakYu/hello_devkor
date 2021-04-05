"""demo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
#from my_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('my_app.urls')),
    #path('my_app/', views.index), #views.index 는 views.py 파일의 index 라는 함수를 의미함.
]  #my_app 뒤에 / 를 붙여주면, 사용자가 슬래쉬를 붙이지 않아도 장고가 가동으로 붙여준다.
