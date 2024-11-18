import React from 'react';
import { UserCircle } from 'lucide-react';
import { Passenger } from '../../types';

interface PassengerListProps {
  passengers: Passenger[];
  onSeatChange: (passengerId: number, seatId: string, isReturn: boolean) => void;
  tripType: 'oneWay' | 'roundTrip'
}

const PassengerList: React.FC<PassengerListProps> = ({ passengers, tripType }) => {
  const getPassengerTypeLabel = (type: Passenger['passengerType']) => {
    switch (type) {
      case 'child':
        return 'Trẻ em';
      case 'adult':
        return 'Người lớn';
      case 'senior':
        return 'Người cao tuổi';
      case 'infant':
        return 'Trẻ sơ sinh';
      case 'disabled':
        return 'Người khuyết tật';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Danh sách hành khách</h3>
      <div className="space-y-4">
        {passengers.map((passenger, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <UserCircle className="w-6 h-6 text-blue-500" />
              <div>
                <h4 className="font-medium">{passenger.fullName}</h4>
                <span className="text-sm text-gray-600">
                  {getPassengerTypeLabel(passenger.passengerType)}
                </span>
              </div>
            </div>
            {passenger.passengerType !== 'infant' && (
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <label className="text-sm text-gray-600">Ghế đi</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      value={passenger.seatGo || ''}
                      readOnly
                      className="w-full px-3 py-2 border rounded-md bg-gray-50"
                      placeholder="Chưa chọn"
                    />
                  </div>
                </div>
                {
                  (tripType && tripType === 'roundTrip') &&
                  <div>
                    <label className="text-sm text-gray-600">Ghế về</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        value={passenger.seatReturn || ''}
                        readOnly
                        className="w-full px-3 py-2 border rounded-md bg-gray-50"
                        placeholder="Chưa chọn"
                      />
                    </div>
                  </div>
                }
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PassengerList;