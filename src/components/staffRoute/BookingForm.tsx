import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface BookingFormProps {
  passengers: number;
  setPassengers: (count: number) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ passengers, setPassengers }) => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const locations = ['Rạch Giá', 'Phú Quốc', 'Côn Đảo'];
  const ticketPrice = 200000; // 200,000 VND per person

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Tìm chuyến</h2>
      
      <div className="space-y-6">
        {/* Trip Type Selection */}
        <div className="flex space-x-4 p-1 bg-gray-100 rounded-lg w-fit">
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              !isRoundTrip ? 'bg-white shadow-sm' : 'text-gray-600'
            }`}
            onClick={() => setIsRoundTrip(false)}
          >
            Một chiều
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              isRoundTrip ? 'bg-white shadow-sm' : 'text-gray-600'
            }`}
            onClick={() => setIsRoundTrip(true)}
          >
            Khứ hồi
          </button>
        </div>

        {/* Route Selection */}
        <div className="space-y-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="">Đi từ</option>
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="">Đi tới</option>
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Date Selection */}
        <div className="space-y-4">
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

          {isRoundTrip && (
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                min={departureDate}
              />
            </div>
          )}
        </div>

        {/* Passenger Count */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Số lượng hành khách
          </label>
          <input
            type="number"
            min="1"
            value={passengers}
            onChange={(e) => setPassengers(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Estimated Price */}
        <div className="pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600">Số tiền tạm tính:</span>
            <span className="text-lg font-semibold text-blue-600">
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
              }).format(passengers * ticketPrice)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;