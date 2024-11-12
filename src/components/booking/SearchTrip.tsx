import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, ArrowLeftRight } from 'lucide-react';
import PassengerSelector from './PassengerSelector';

interface Route {
  id: number;
  from: string;
  to: string;
}

const ROUTES: Route[] = [
  { id: 1, from: 'Rạch Giá', to: 'Côn Đảo' },
  { id: 2, from: 'Phú Quốc', to: 'Côn Đảo' },
  { id: 3, from: 'Côn Đảo', to: 'Rạch Giá' },
  { id: 4, from: 'Côn Đảo', to: 'Phú Quốc' },
];

type Props = {
  onSubmit: (data: any) => void;
};

export default function SearchTrip({ onSubmit }: Props) {
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way');
  const [showPassengerSelector, setShowPassengerSelector] = useState(false);
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    departDate: '',
    returnDate: '',
    passengers: {
      infant: 0, // 0-5 tuổi
      child: 0,  // 6-11 tuổi
      adult: 1,  // 12-60 tuổi
      senior: 0, // 61+ tuổi
    },
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalPassengers = Object.values(formData.passengers).reduce((a, b) => a + b, 0);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.departure) {
      newErrors.departure = 'Vui lòng chọn điểm đi';
    }
    if (!formData.destination) {
      newErrors.destination = 'Vui lòng chọn điểm đến';
    }
    if (!formData.departDate) {
      newErrors.departDate = 'Vui lòng chọn ngày đi';
    }
    if (tripType === 'round-trip' && !formData.returnDate) {
      newErrors.returnDate = 'Vui lòng chọn ngày về';
    }
    if (totalPassengers < 1) {
      newErrors.passengers = 'Vui lòng chọn ít nhất 1 hành khách';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Searching for trips:', formData);
      onSubmit(formData);
      // Handle search logic here
    }
  };

  const handlePassengerUpdate = (type: keyof typeof formData.passengers, value: number) => {
    setFormData(prev => ({
      ...prev,
      passengers: {
        ...prev.passengers,
        [type]: value
      }
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setTripType('one-way')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${tripType === 'one-way'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          <ArrowRight size={20} />
          Một chiều
        </button>
        <button
          onClick={() => setTripType('round-trip')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${tripType === 'round-trip'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          <ArrowLeftRight size={20} />
          Khứ hồi
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Điểm đi
            </label>
            <div className="relative">
              <select
                value={formData.departure}
                onChange={(e) => setFormData(prev => ({ ...prev, departure: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Chọn điểm đi</option>
                {ROUTES.map(route => (
                  <option key={`from-${route.id}`} value={route.from}>
                    {route.from}
                  </option>
                ))}
              </select>
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            {errors.departure && (
              <p className="text-red-500 text-sm mt-1">{errors.departure}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Điểm đến
            </label>
            <div className="relative">
              <select
                value={formData.destination}
                onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Chọn điểm đến</option>
                {ROUTES.map(route => (
                  <option key={`to-${route.id}`} value={route.to}>
                    {route.to}
                  </option>
                ))}
              </select>
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            {errors.destination && (
              <p className="text-red-500 text-sm mt-1">{errors.destination}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày đi
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.departDate}
                onChange={(e) => setFormData(prev => ({ ...prev, departDate: e.target.value }))}
                min={new Date().toISOString().split('T')[0]}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            {errors.departDate && (
              <p className="text-red-500 text-sm mt-1">{errors.departDate}</p>
            )}
          </div>

          {tripType === 'round-trip' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ngày về
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.returnDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, returnDate: e.target.value }))}
                  min={formData.departDate || new Date().toISOString().split('T')[0]}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              {errors.returnDate && (
                <p className="text-red-500 text-sm mt-1">{errors.returnDate}</p>
              )}
            </div>
          )}
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hành khách
          </label>
          <button
            type="button"
            onClick={() => setShowPassengerSelector(!showPassengerSelector)}
            className="w-full flex items-center justify-between px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <div className="flex items-center gap-3">
              <Users className="text-gray-400" size={20} />
              <span>
                {totalPassengers} hành khách
              </span>
            </div>
            <span className="text-gray-400">▼</span>
          </button>
          {showPassengerSelector && (
            <PassengerSelector
              passengers={formData.passengers}
              onUpdate={handlePassengerUpdate}
              onClose={() => setShowPassengerSelector(false)}
            />
          )}
          {errors.passengers && (
            <p className="text-red-500 text-sm mt-1">{errors.passengers}</p>
          )}
        </div>

        <div className="text-sm text-gray-600 space-y-1">
          <p>• Trẻ dưới 6 tuổi được miễn vé (ngồi chung với người lớn) và vẫn được tính là 1 hành khách</p>
          <p>• Mỗi người lớn chỉ được đi kèm 1 trẻ em miễn vé</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition duration-200 font-medium text-lg flex items-center justify-center gap-2"
        >
          Tìm Tàu
        </button>
      </form>
    </div>
  );
}