import React from 'react';
import { UserCircle } from 'lucide-react';

interface Passenger {
  id: number;
  name: string;
  type: PassengerType;
  seatGo?: string;
  seatReturn?: string;
}

type PassengerType = 'TRE_EM' | 'NGUOI_LON' | 'NGUOI_CAO_TUOI' | 'TRE_SO_SINH' | 'NGUOI_KHUYET_TAT';

interface PassengerListProps {
  passengers: Passenger[];
  onSeatChange: (passengerId: number, seatId: string, isReturn: boolean) => void;
}

const PassengerList: React.FC<PassengerListProps> = ({ passengers, onSeatChange }) => {
  const getPassengerTypeLabel = (type: Passenger['type']) => {
    switch (type) {
      case 'TRE_EM':
        return 'Trẻ em';
      case 'NGUOI_LON':
        return 'Người lớn';
      case 'NGUOI_CAO_TUOI':
        return 'Người cao tuổi';
      case 'TRE_SO_SINH':
        return 'Trẻ sơ sinh';
      case 'NGUOI_KHUYET_TAT':
        return 'Người khuyết tật';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Danh sách hành khách</h3>
      <div className="space-y-4">
        {passengers.map((passenger) => (
          <div key={passenger.id} className="border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <UserCircle className="w-6 h-6 text-blue-500" />
              <div>
                <h4 className="font-medium">{passenger.name}</h4>
                <span className="text-sm text-gray-600">
                  {getPassengerTypeLabel(passenger.type)}
                </span>
              </div>
            </div>
            {passenger.type !== 'TRE_SO_SINH' && (
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
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PassengerList;