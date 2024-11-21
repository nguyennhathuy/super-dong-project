import React from 'react';
import { Info } from 'lucide-react';

interface Seat {
  id: string;
  type: 'VIP' | 'NORMAL';
  status: 'AVAILABLE' | 'BOOKED' | 'SELECTED' | 'DISABLED';
  price: number;
}

interface SeatMapProps {
  seats: Seat[];
  onSeatSelect: (seatId: string) => void;
  selectedSeats: string[];
}

const SeatMap: React.FC<SeatMapProps> = ({ seats, onSeatSelect, selectedSeats }) => {
  const getSeatColor = (status: Seat['status']) => {
    switch (status) {
      case 'AVAILABLE':
        return 'bg-green-500 hover:bg-green-600';
      case 'BOOKED':
        return 'bg-gray-500';
      case 'SELECTED':
        return 'bg-primary';
      case 'DISABLED':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Sơ đồ ghế</h3>
          <div className="flex items-center space-x-2">
            <Info className="w-5 h-5 text-tertiary" />
            <span className="text-sm text-gray-600">Nhấp vào ghế để chọn</span>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-3 mb-6">
          {seats.map((seat) => (
            <button
              key={seat.id}
              onClick={() => seat.status === 'AVAILABLE' && onSeatSelect(seat.id)}
              disabled={seat.status === 'BOOKED' || seat.status === 'DISABLED'}
              className={`
                ${getSeatColor(seat.status)}
                w-12 h-12 rounded-lg flex items-center justify-center
                text-white font-medium transition-colors duration-200
                ${seat.type === 'VIP' ? 'border-2 border-primary' : ''}
              `}
            >
              {seat.id}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-sm">Ghế trống</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-500 rounded"></div>
            <span className="text-sm">Đã đặt</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-primary rounded"></div>
            <span className="text-sm">Đang chọn</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-sm">Không khả dụng</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatMap;