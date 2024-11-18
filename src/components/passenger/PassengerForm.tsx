import React from 'react';
import { calculateAge } from '../../utils';
import { Passenger, PassengerType } from '../../types';



interface PassengerFormProps {
  passenger: Passenger;
  index: number;
  onChange: (index: number, field: keyof Passenger, value: any) => void;
  errors: Record<string, string>;
  departureDate: string;
}

const NATIONALITIES = [
  'Việt Nam',
  'Anh',
  'Canada',
  'Lào',
  'Mỹ',
  'Pháp',
  'Thái Lan',
  'Úc',
];

const PROVINCES = [
  'Hà Nội',
  'TP. Hồ Chí Minh',
  'Đà Nẵng',
  // Add all 63 provinces here
];

export function PassengerForm({ 
  passenger, 
  index, 
  onChange, 
  errors,
  departureDate,
}: PassengerFormProps) {
  const handleChange = (field: keyof Passenger, value: any) => {
    onChange(index, field, value);
  };

  const age = calculateAge(passenger.birthDate, departureDate);

  React.useEffect(() => {
    let type: PassengerType = '';
    if (passenger.specialNeeds) {
      type = 'disabled';
    } else if (age < 2) {
      type = 'infant';
    } else if (age >= 2 && age < 12) {
      type = 'child';
    } else if (age >= 12 && age < 60) {
      type = 'adult';
    } else if (age >= 60) {
      type = 'senior';
    }
    
    if (type !== passenger.passengerType) {
      handleChange('passengerType', type);
    }
  }, [age, passenger.specialNeeds]);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4">Hành khách {index + 1}</h3>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quốc tịch *
          </label>
          <select
            value={passenger.nationality}
            onChange={(e) => handleChange('nationality', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Chọn quốc tịch</option>
            {NATIONALITIES.map(nat => (
              <option key={nat} value={nat}>{nat}</option>
            ))}
          </select>
          {errors[`passengers.${index}.nationality`] && (
            <p className="mt-1 text-sm text-red-600">
              {errors[`passengers.${index}.nationality`]}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            CCCD/Hộ chiếu *
          </label>
          <input
            type="text"
            value={passenger.idNumber}
            onChange={(e) => handleChange('idNumber', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors[`passengers.${index}.idNumber`] && (
            <p className="mt-1 text-sm text-red-600">
              {errors[`passengers.${index}.idNumber`]}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Họ tên *
          </label>
          <input
            type="text"
            value={passenger.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors[`passengers.${index}.fullName`] && (
            <p className="mt-1 text-sm text-red-600">
              {errors[`passengers.${index}.fullName`]}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nơi sinh
          </label>
          {passenger.nationality === 'Việt Nam' ? (
            <select
              value={passenger.birthPlace}
              onChange={(e) => handleChange('birthPlace', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Chọn tỉnh/thành</option>
              {PROVINCES.map(province => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={passenger.birthPlace}
              onChange={(e) => handleChange('birthPlace', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ngày sinh *
          </label>
          <input
            type="date"
            value={passenger.birthDate}
            max={new Date().toISOString().split('T')[0]}
            onChange={(e) => handleChange('birthDate', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors[`passengers.${index}.birthDate`] && (
            <p className="mt-1 text-sm text-red-600">
              {errors[`passengers.${index}.birthDate`]}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Số điện thoại *
          </label>
          <input
            type="tel"
            value={passenger.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors[`passengers.${index}.phone`] && (
            <p className="mt-1 text-sm text-red-600">
              {errors[`passengers.${index}.phone`]}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            value={passenger.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors[`passengers.${index}.email`] && (
            <p className="mt-1 text-sm text-red-600">
              {errors[`passengers.${index}.email`]}
            </p>
          )}
        </div>

        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            checked={passenger.specialNeeds}
            onChange={(e) => handleChange('specialNeeds', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">
            Tình trạng đặc thù
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Loại vé
          </label>
          <input
            type="text"
            value={passenger.passengerType}
            readOnly
            className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}