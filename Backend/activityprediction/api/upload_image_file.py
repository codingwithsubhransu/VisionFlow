import os
from datetime import datetime

def dog_image_upload_path(instance, filename):
    # Extract extension
    ext = filename.split('.')[-1]

    # Generate timestamp
    now = datetime.now()
    timestamp = now.strftime("%H%M%S")
    date_path = now.strftime("%Y-%m-%d")

    # Build filename and directory
    filename = f"img_{timestamp}.{ext}"

    return os.path.join(f"{date_path}", filename)
