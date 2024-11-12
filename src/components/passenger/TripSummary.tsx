import React from 'react';
import { formatCurrency } from '../../utils';

type PassengerType = 
  | ''
  | 'Trẻ sơ sinh'
  | 'Trẻ em'
  | 'Người lớn'
  | 'Người cao tuổi'
  | 'Người khuyết tật';

const TICKET_PRICES = {
  'Trẻ sơ sinh': 0,
  'Trẻ em': 120000,
  'Người lớn': 200000,
  'Người cao tuổi': 150000,
  'Người khuyết tật': 160000,
} as const;

interface TripInfo {
  shipCode: string;
  departure: string;
  destination: string;
  departureDate: string;
  departureTime: string;
}

interface Passenger {
  nationality: string;
  idNumber: string;
  fullName: string;
  birthPlace: string;
  birthDate: string;
  phone: string;
  email: string;
  specialNeeds: boolean;
  passengerType: PassengerType;
}

interface TripSummaryProps {
  tripInfo: TripInfo;
  passengers: Passenger[];
}

export function TripSummary({ tripInfo, passengers }: TripSummaryProps) {
  const passengerCounts = React.useMemo(() => {
    return passengers.reduce((acc, passenger) => {
      if (passenger.passengerType) {
        acc[passenger.passengerType] = (acc[passenger.passengerType] || 0) + 1;
      }
      return acc;
    }, {} as Record<PassengerType, number>);
  }, [passengers]);

  const totalAmount = React.useMemo(() => {
    return Object.entries(passengerCounts).reduce((total, [type, count]) => {
      return total + (TICKET_PRICES[type as PassengerType] * count);
    }, 0);
  }, [passengerCounts]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-6">Thông tin chuyến đi</h3>
      
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-gray-600">Mã tàu</p>
          <p className="font-medium">{tripInfo.shipCode}</p>
        </div>
        
        <div>
          <p className="text-gray-600">Chuyến</p>
          <p className="font-medium">
            {tripInfo.departure} - {tripInfo.destination}
          </p>
        </div>
        
        <div>
          <p className="text-gray-600">Ngày khởi hành</p>
          <p className="font-medium">{tripInfo.departureDate}</p>
        </div>
        
        <div>
          <p className="text-gray-600">Giờ khởi hành</p>
          <p className="font-medium">{tripInfo.departureTime}</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <h4 className="font-medium mb-4">Chi tiết giá vé</h4>
        
        {Object.entries(passengerCounts).map(([type, count]) => (
          <div key={type} className="flex justify-between mb-2">
            <span>{type} x {count}</span>
            <span>{formatCurrency(TICKET_PRICES[type as PassengerType] * count)}</span>
          </div>
        ))}
        
        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Tổng cộng</span>
            <span className="text-2xl font-bold text-blue-600">
              {formatCurrency(totalAmount)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}