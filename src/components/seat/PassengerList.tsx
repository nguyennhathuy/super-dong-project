import React from 'react';
import { UserCircle } from 'lucide-react';

type PassengerType = 
  | ''
  | 'Trẻ sơ sinh'
  | 'Trẻ em'
  | 'Người lớn'
  | 'Người cao tuổi'
  | 'Người khuyết tật';

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
  seatGo?: string;
  seatReturn?: string;
}

interface PassengerListProps {
  passengers: Passenger[];
  onSeatChange: (passengerId: number, seatId: string, isReturn: boolean) => void;
  tripType: 'oneWay' | 'roundTrip'
}

const PassengerList: React.FC<PassengerListProps> = ({ passengers, onSeatChange, tripType }) => {
  const getPassengerTypeLabel = (type: Passenger['passengerType']) => {
    switch (type) {
      case 'Trẻ em':
        return 'Trẻ em';
      case 'Người lớn':
        return 'Người lớn';
      case 'Người cao tuổi':
        return 'Người cao tuổi';
      case 'Trẻ sơ sinh':
        return 'Trẻ sơ sinh';
      case 'Người khuyết tật':
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
            {passenger.passengerType !== 'Trẻ sơ sinh' && (
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