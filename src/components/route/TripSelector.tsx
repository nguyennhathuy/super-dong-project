import React from 'react';
import { ArrowRight, ArrowLeftRight } from 'lucide-react';

interface TripSelectorProps {
  tripType: 'oneWay' | 'roundTrip';
  setTripType: (type: 'oneWay' | 'roundTrip') => void;
  setShowResults: (data: boolean) => void;
}

const TripSelector: React.FC<TripSelectorProps> = (props) => {
  const { 
    tripType,
    setTripType,
    setShowResults
   } = props
  return (
    <div className="flex space-x-4">
      <button
        onClick={
          () => {
            setTripType('oneWay');
            setShowResults(false);
          }
        }
        className={`flex-1 py-3 px-4 rounded-lg border-2 transition duration-200 flex items-center justify-center space-x-2
          ${tripType === 'oneWay' 
            ? 'border-tertiary bg-tertiary-100 text-tertiary' 
            : 'border-gray-300 hover:border-secondary hover:text-secondary'}`}
        disabled={tripType === 'oneWay'}
      >
        <ArrowRight className="h-5 w-5" />
        <span>Một chiều</span>
      </button>
      <button
        onClick={
          () => {
            setTripType('roundTrip');
            setShowResults(false);
          }
        }
        className={`flex-1 py-3 px-4 rounded-lg border-2 transition duration-200 flex items-center justify-center space-x-2
          ${tripType === 'roundTrip' 
            ? 'border-tertiary bg-blue-50 text-tertiary' 
            : 'border-gray-300 hover:border-secondary hover:text-secondary'}`}
        disabled={tripType === 'roundTrip'}
      >
        <ArrowLeftRight className="h-5 w-5" />
        <span>Khứ hồi</span>
      </button>
    </div>
  );
};

export default TripSelector;