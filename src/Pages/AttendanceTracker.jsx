import { useEffect, useState } from 'react';

function AttendanceTracker() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [lastStatus, setLastStatus] = useState(null); // Track last attendance status

  // Check connectivity status and set state accordingly
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      if (lastStatus !== 'start') {
        markAttendance('start'); // Mark attendance start when the user goes online
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      if (lastStatus !== 'stop') {
        markAttendance('stop'); // Mark attendance stop when the user goes offline
      }
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [lastStatus]); // Re-run the effect only if the lastStatus changes

  // Function to call the API and mark attendance
  const markAttendance = (status) => {
    // Make sure the user is online
    if (isOnline) {
      fetch('/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status,  // 'start' or 'stop'
          userId: 1,  // Example: Get user ID dynamically based on the logged-in user
          timestamp: new Date().toISOString(),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setAttendanceStatus(data.message);
          setLastStatus(status); // Store the last status (start/stop)
        })
        .catch((error) => {
          console.error('Error marking attendance:', error);
          setAttendanceStatus('Error marking attendance.'); // Handle API errors
        });
    } else {
      setAttendanceStatus('You are offline. Attendance not marked.');
    }
  };

  return (
    <div>
      <h2>Attendance Tracker</h2>
      <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
      <p>{attendanceStatus}</p>
    </div>
  );
}

export default AttendanceTracker;
