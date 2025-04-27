import torch
import pandas
from PIL import Image

# Load YOLOv5s pretrained model (COCO dataset)
model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)
model.eval()

def detect(img_file):
    """
    Accepts an image file (e.g. request.FILES['image']) and detects if a dog is present.
    Returns: (result, confidence) where result is "dog detected" or "no dog"
    """
    try:
        # Convert uploaded image to PIL Image
        image = Image.open(img_file).convert('RGB')

        # Run YOLOv5 on the image
        results = model(image)

        # Convert results to pandas DataFrame
        detections = results.pandas().xyxy[0]

        # Filter for 'dog' class
        dog_detections = detections[detections['name'] == 'dog']

        if not dog_detections.empty:
            # Get the highest confidence score
            confidence = dog_detections['confidence'].max()
            return "dog detected", confidence
        else:
            return "no dog", 0.0
    except Exception as e:
        print(f"Error during detection: {e}")
        return "error", 0.0
