from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .YOLO import *
from .serializers import *

# Create your views here.

class DetectionApiView(APIView):
    def post(self, request, format=None):
        if 'image' not in request.FILES:
            return Response({'error': 'No image provided'}, status=status.HTTP_400_BAD_REQUEST)

        img_file = request.FILES['image']
        
        result, confidence = detect(img_file)

        detection = Detection(label=result, confidence=confidence, image=img_file)
        detection.save()

        serializer = DetectionSerializer(detection)  # <-- FIXED this line
        return Response(serializer.data, status=status.HTTP_201_CREATED)


    
    def get(self, request, format= None):
        detections = Detection.objects.all()
        serializer = DetectionSerializer(detections, many=True)
        return Response(serializer.data)