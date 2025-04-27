from django.db import models
from .upload_image_file import *

# Create your models here.

class Detection(models.Model):
    timestamp = models.DateTimeField(auto_now_add= True)
    label = models.CharField(max_length= 100)
    confidence = models.FloatField()
    image = models.ImageField(upload_to= dog_image_upload_path)

    def __str__(self):
        return self.label