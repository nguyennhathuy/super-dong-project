import { Passenger } from '../../types';
import { vietnameseProvinces, countries } from '../const';

interface PassengerFormProps {
  passenger: Passenger;
  index: number;
  onChange: (index: number, data: Partial<Passenger>) => void;
  errors: Record<string, string>;
}

export default function PassengerForm({ 
  passenger, 
  index, 
  onChange, 
  errors 
}: PassengerFormProps) {
  const handleChange = (field: keyof Passenger, value: any) => {
    onChange(index, { [field]: value });
  };

  const isVietnamese = passenger.nationality === 'Việt Nam';
  const bgColor = index % 2 === 0 ? 'bg-gray-50' : 'bg-white';

  return (
    <div className={`p-6 rounded-lg mb-4 ${bgColor}`}>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quốc tịch *
          </label>
          <select
            value={passenger.nationality}
            onChange={(e) => handleChange('nationality', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="Việt Nam">Việt Nam</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          {errors[`${index}.nationality`] && (
            <p className="mt-1 text-sm text-red-600">{errors[`${index}.nationality`]}</p>
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors[`${index}.idNumber`] && (
            <p className="mt-1 text-sm text-red-600">{errors[`${index}.idNumber`]}</p>
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors[`${index}.fullName`] && (
            <p className="mt-1 text-sm text-red-600">{errors[`${index}.fullName`]}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nơi sinh
          </label>
          {isVietnamese ? (
            <select
              value={passenger.birthPlace}
              onChange={(e) => handleChange('birthPlace', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Chọn tỉnh/thành</option>
              {vietnameseProvinces.map(province => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={passenger.birthPlace}
              onChange={(e) => handleChange('birthPlace', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
            onChange={(e) => handleChange('birthDate', e.target.value)}
            max={new Date().toISOString().split('T')[0]}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors[`${index}.birthDate`] && (
            <p className="mt-1 text-sm text-red-600">{errors[`${index}.birthDate`]}</p>
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors[`${index}.phone`] && (
            <p className="mt-1 text-sm text-red-600">{errors[`${index}.phone`]}</p>
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors[`${index}.email`] && (
            <p className="mt-1 text-sm text-red-600">{errors[`${index}.email`]}</p>
          )}
        </div>

        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            checked={passenger.specialNeeds}
            onChange={(e) => handleChange('specialNeeds', e.target.checked)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
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