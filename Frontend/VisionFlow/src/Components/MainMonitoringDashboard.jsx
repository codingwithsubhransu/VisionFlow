import React from 'react';
import LiveCameraFeed from './LiveCameraFeed';
import ActivityStatus from './ActivityStatus';

const MainMonitoringDashboard = ({ cameraUrl }) => {
    return (
        <div className="w-full flex justify-center py-6">
          <div className="max-w-4xl w-full flex flex-col sm:flex-row gap-6">
            <LiveCameraFeed cameraUrl={cameraUrl} />
            <ActivityStatus />
          </div>
        </div>
      );
}

export default MainMonitoringDashboard;
