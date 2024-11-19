import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { PassengerFriend, PassengerType, UserData } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { calculateAge, validateDateOfBirth } from '../../utils';

interface PassengerFormProps {
  passenger?: PassengerFriend | null;
  onSave: (passenger: PassengerFriend) => void;
  onCancel: () => void;
  userData: UserData;
}

const NATIONALITIES = [
  'Việt Nam',
  'Mỹ',
  'Úc',
  'Canada',
  'Anh',
  'Pháp',
  'Lào',
  'Thái Lan',
];

const PROVINCES = [
  'TP.HCM',
  'Hà Nội',
  'Đà Nẵng',
  // Add all 63 provinces here
];

export const PassengerForm: React.FC<PassengerFormProps> = ({
  passenger,
  onSave,
  onCancel,
  userData
}) => {
  const [formData, setFormData] = useState<PassengerFriend>({
    parentId: '',
    id: '',
    nationality: 'Việt Nam',
    idNumber: '',
    fullName: '',
    birthPlace: '',
    birthDate: '',
    phone: '',
    email: '',
    specialNeeds: false,
    passengerType: 'adult'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (passenger) {
      setFormData({
        parentId: '',
        id: uuidv4(),
        nationality: passenger.nationality,
        idNumber: passenger.idNumber,
        fullName: passenger.fullName,
        birthPlace: passenger.birthPlace,
        birthDate: passenger.birthDate,
        phone: passenger.phone,
        email: passenger.email,
        specialNeeds: passenger.specialNeeds,
        passengerType: passenger.passengerType
      });
    }
  }, [passenger]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập tên hành khách';
    }

    if (!formData.idNumber.trim()) {
      newErrors.idNumber = 'Vui lòng nhập CCCD/CMND';
    }

    if (!formData.birthDate.trim()) {
      newErrors.birthDate = 'Vui lòng chọn ngày tháng năm sinh';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập SĐT';
    }

    if (!formData.birthPlace.trim()) {
      newErrors.birthPlace = 'Vui lòng chọn nơi sinh';
    }

    if(validateDateOfBirth(formData.birthDate)) {
      newErrors.birthDate = 'Vui lòng chọn ngày tháng năm sinh hợp lệ';
    }

    if (formData.phone && !/^(\+84|0)\d{9,10}$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const age = calculateAge(formData.birthDate)
      let type: PassengerType = '';
      if (age < 2) {
        type = 'infant';
      } else if (age >= 2 && age < 12) {
        type = 'child';
      } else if (age >= 12 && age < 60) {
        type = 'adult';
      } else if (age >= 60) {
        type = 'senior';
      }
      onSave({
        ...formData,
        id: passenger?.id || uuidv4(),
        parentId: userData.parentId,
        passengerType: type
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-lg font-medium text-gray-900">
            {passenger ? 'Chỉnh sửa thông tin hành khách' : 'Thêm hành khách mới'}
          </h3>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tên hành khách (CCCD/Passport) *
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={
                (e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                }
              }
              className={`mt-1 block w-full rounded-md shadow-sm ${errors.fullName
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              CCCD/Passport
            </label>
            <input
              type="text"
              value={formData.idNumber}
              onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
              className={`mt-1 block w-full rounded-md shadow-sm ${errors.idNumber
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
            />
            {errors.idNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.idNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ngày sinh
            </label>
            <input
              type="date"
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              className={`mt-1 block w-full rounded-md shadow-sm ${errors.birthDate
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
            />
            {errors.birthDate && (
              <p className="mt-1 text-sm text-red-600">{errors.birthDate}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Số điện thoại
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`mt-1 block w-full rounded-md shadow-sm ${errors.phone
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`mt-1 block w-full rounded-md shadow-sm ${errors.email
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Quốc tịch
            </label>
            <select
              value={formData.nationality}
              onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {NATIONALITIES.map((nationality) => (
                <option key={nationality} value={nationality}>
                  {nationality}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nơi sinh
            </label>
            {formData.nationality === 'Việt Nam' ? (
              <select
                value={formData.birthPlace}
                onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Chọn tỉnh/thành</option>
                {PROVINCES.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                value={formData.birthPlace}
                onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                className={`mt-1 block w-full rounded-md shadow-sm ${errors.birthPlace
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                  }`}
              />
            )}
            {errors.birthPlace && (
              <p className="mt-1 text-sm text-red-600">{errors.birthPlace}</p>
            )}
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};