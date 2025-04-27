import React from 'react';
import Webcam from "react-webcam";
import axios from 'axios';



const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const LiveCameraFeed = () => {
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    async () => {
      const imageSrc = webcamRef.current.getScreenshot();
  
      if (!imageSrc) {
        console.error("No image captured!");
        return;
      }
  
      // Convert base64 image to Blob
      const response = await fetch(imageSrc);
      const blob = await response.blob();
  
      const formData = new FormData();
      formData.append('image', blob, 'captured_image.jpg');
  
      try {
        const result = await axios.post('http://127.0.0.1:8000/api/v1/detection', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        console.log('Image uploaded successfully:', result.data);
      } catch (error) {
        console.error('Upload failed:', error);
      }
    },
    [webcamRef]
  );
  
  
  return (
    <>
    <div className='flex-1 bg-gradient-to-br from-blue-900 to-blue-800 shadow-lg rounded-xl p-6 border border-blue-700/50 ring-1 ring-blue-500/20'>
    <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture} className='bg-green-500 mt-2.5 text-white p-1 rounded-md'>Capture photo</button>
    </div>
    </>
  );
};

export default LiveCameraFeed;