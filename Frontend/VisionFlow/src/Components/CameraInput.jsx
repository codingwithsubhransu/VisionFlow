import React, { useState } from 'react';

const CameraInput = ({ setCameraUrl }) => {
  const [inputUrl, setInputUrl] = useState('');

  const handleConnect = () => {
    if (inputUrl) {
      setCameraUrl(inputUrl);
      console.log('Connecting to:', inputUrl);
    }
  };

  return (
    <div className="w-full flex justify-center py-6">
      <div className="max-w-lg w-full bg-gradient-to-br from-blue-900 to-blue-800 shadow-lg rounded-xl p-6 border border-blue-700/50 ring-1 ring-blue-500/20">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Input Camera URL (e.g., http://192.168.0.101:8080/video)"
              className="w-full px-4 py-2 bg-white/95 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500 transition-all duration-300 hover:shadow-md"
            />
          </div>
          <button
            onClick={handleConnect}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 disabled:bg-gray-400 disabled:scale-100 disabled:cursor-not-allowed"
            disabled={!inputUrl}
          >
            Connect
          </button>
        </div>
        <p className="mt-3 text-sm text-gray-200 opacity-90 italic">
          Example: http://192.168.0.101:8080/video
        </p>
      </div>
    </div>
  );
};

export default CameraInput;