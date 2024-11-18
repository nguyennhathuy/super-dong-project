import { useMemo } from 'react';
import { Passenger, PassengerType } from '../../types';

const TICKET_PRICES = {
  '': 0,
  'infant': 0,
  'child': 120000,
  'adult': 200000,
  'senior': 150000,
  'disabled': 160000,
} as const;

interface TripSummaryProps {
  passengers: Passenger[];
  tripInfo: {
    trainCode: string;
    from: string;
    to: string;
    departureDate: string;
    departureTime: string;
  };
  onSubmit: () => void;
  onBack: () => void;
}

export default function TripSummary({ passengers, tripInfo, onSubmit, onBack }: TripSummaryProps) {
  const summary = useMemo(() => {
    const counts = passengers.reduce((acc, passenger) => {
      if (passenger.passengerType) {
        acc[passenger.passengerType] = (acc[passenger.passengerType] || 0) + 1;
      }
      return acc;
    }, {} as Record<PassengerType, number>);

    const total = Object.entries(counts).reduce((sum, [type, count]) => {
      return sum + (TICKET_PRICES[type as PassengerType] * count);
    }, 0);

    return { counts, total };
  }, [passengers]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Thông tin chuyến đi</h2>
      
      <div className="space-y-4 mb-8">
        <div className="flex justify-between">
          <span className="text-gray-600">Mã tàu:</span>
          <span className="font-medium">{tripInfo.trainCode}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Chuyến:</span>
          <span className="font-medium">{tripInfo.from} - {tripInfo.to}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Ngày khởi hành:</span>
          <span className="font-medium">{tripInfo.departureDate}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Giờ khởi hành:</span>
          <span className="font-medium">{tripInfo.departureTime}</span>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Thông tin hành khách</h3>
        {Object.entries(summary.counts).map(([type, count]) => (
          <div key={type} className="flex justify-between mb-2">
            <span>{type}:</span>
            <span>
              {count} x {TICKET_PRICES[type as PassengerType].toLocaleString('vi-VN')}đ
            </span>
          </div>
        ))}
      </div>

      <div className="border-t mt-6 pt-6">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">Tổng cộng:</span>
          <span className="text-2xl font-bold text-orange-600">
            {summary.total.toLocaleString('vi-VN')}đ
          </span>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <button
          className="w-full py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
          onClick={onSubmit}
        >
          Tiếp tục
        </button>
        <button
          className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          onClick={onBack}
        >
          Quay lại
        </button>
      </div>
    </div>
  );
}