import React from 'react';

const ActivityStatus = ({ activity = 'Eating', confidence = 93, lastUpdate = '12:34 PM' }) => {
    return (
        <div className="flex-1 bg-gradient-to-br from-blue-900 to-blue-800 shadow-lg rounded-xl p-6 border border-blue-700/50 ring-1 ring-blue-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">Activity Status</h3>
          <div className="space-y-2">
            <p className="text-gray-200">
              <span className="font-medium">Status:</span> {activity}
            </p>
            <p className="text-gray-200">
              <span className="font-medium">Confidence:</span> {confidence}%
            </p>
            <p className="text-gray-200">
              <span className="font-medium">Last Update:</span> {lastUpdate}
            </p>
          </div>
        </div>
      );
}

export default ActivityStatus;
