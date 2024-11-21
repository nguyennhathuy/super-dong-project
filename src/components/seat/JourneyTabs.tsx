import React from 'react';
import { Calendar, Clock, Ship } from 'lucide-react';

interface Journey {
  shipCode: string;
  departureDate: string;
  departureTime: string;
}

interface JourneyTabsProps {
  activeTab: 'go' | 'return';
  onTabChange: (tab: 'go' | 'return') => void;
  journeyGo: Journey;
  journeyReturn: Journey;
  tripType: 'oneWay' | 'roundTrip'
}

const JourneyTabs: React.FC<JourneyTabsProps> = ({
  activeTab,
  onTabChange,
  journeyGo,
  journeyReturn,
  tripType
}) => {
  return (
    <div className="mb-6">
      <div className="border-b">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => onTabChange('go')}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm
              ${
                activeTab === 'go'
                  ? 'border-tertiary text-tertiary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            Lượt đi
          </button>
          {
           (tripType && tripType === 'roundTrip') && 
            <button
            onClick={() => onTabChange('return')}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm
              ${
                activeTab === 'return'
                  ? 'border-tertiary text-tertiary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            Lượt về
          </button>
          }
        </nav>
      </div>

      <div className="mt-4">
        {activeTab === 'go' ? (
          <JourneyInfo journey={journeyGo} />
        ) : (
          <JourneyInfo journey={journeyReturn} />
        )}
      </div>
    </div>
  );
};

const JourneyInfo: React.FC<{ journey: Journey }> = ({ journey }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center space-x-2">
          <Ship className="w-5 h-5 text-tertiary" />
          <div>
            <div className="text-sm text-gray-500">Mã tàu</div>
            <div className="font-medium">{journey.shipCode}</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-tertiary" />
          <div>
            <div className="text-sm text-gray-500">Ngày khởi hành</div>
            <div className="font-medium">{journey.departureDate}</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-tertiary" />
          <div>
            <div className="text-sm text-gray-500">Giờ khởi hành</div>
            <div className="font-medium">{journey.departureTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyTabs;