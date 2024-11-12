import React from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  initialMinutes: number;
  onTimeout: () => void;
}

export function Timer({ initialMinutes, onTimeout }: TimerProps) {
  const [seconds, setSeconds] = React.useState(initialMinutes * 60);
  
  React.useEffect(() => {
    if (seconds <= 0) {
      onTimeout();
      return;
    }

    const timer = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, onTimeout]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const percentage = (seconds / (initialMinutes * 60)) * 100;

  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
        <Clock className="w-5 h-5 text-blue-500" />
        <div>
          <p className="text-sm text-gray-600">Thời gian giữ chỗ</p>
          <p className={`text-lg font-bold ${seconds <= 60 ? 'text-red-500' : 'text-blue-500'}`}>
            {String(minutes).padStart(2, '0')}:{String(remainingSeconds).padStart(2, '0')}
          </p>
        </div>
      </div>
      <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 rounded-full ${
            percentage <= 20 ? 'bg-red-500' : 'bg-blue-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}