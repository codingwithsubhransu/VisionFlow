from django.contrib import admin
from django.urls import path,include
from .views import *

urlpatterns = [
    path('detection', DetectionApiView.as_view(), name='detected'),
]