import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

interface EditFormProps {
  passenger: {
    name: string;
    birthDate: string;
    idNumber: string;
    phone: string;
    email: string;
    nationality: string;
    birthPlace: string;
    specialStatus: boolean;
  };
  onSave: (data: any) => void;
  onCancel: () => void;
}

export default function EditForm({ passenger, onSave, onCancel }: EditFormProps) {
  const [formData, setFormData] = useState(passenger);

  const countries = [
    'Việt Nam',
    'Anh',
    'Úc',
    'Canada',
    'Lào',
    'Mỹ',
    'Pháp',
    'Thái Lan',
  ].sort((a, b) => (a === 'Việt Nam' ? -1 : b === 'Việt Nam' ? 1 : a.localeCompare(b)));

  const provinces = [
    'Hà Nội',
    'TP. Hồ Chí Minh',
    'Đà Nẵng',
    // Add more provinces...
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Thông tin Người đặt vé
        </h2>
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
          <div>
            <span className="font-medium">Họ và tên:</span> Nguyễn Văn A
          </div>
          <div>
            <span className="font-medium">Số điện thoại:</span> 0123456789
          </div>
          <div>
            <span className="font-medium">Email:</span> example@email.com
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Thông tin Hành khách
      </h2>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên hành khách *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày sinh *
            </label>
            <input
              type="date"
              required
              max={new Date().toISOString().split('T')[0]}
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CCCD/Hộ chiếu *
            </label>
            <input
              type="text"
              required
              value={formData.idNumber}
              onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số điện thoại *
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quốc tịch
            </label>
            <select
              value={formData.nationality}
              onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nơi sinh
            </label>
            {formData.nationality === 'Việt Nam' ? (
              <select
                value={formData.birthPlace}
                onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {provinces.map((province) => (
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
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            )}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="specialStatus"
              checked={formData.specialStatus}
              onChange={(e) => setFormData({ ...formData, specialStatus: e.target.checked })}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <label htmlFor="specialStatus" className="ml-2 text-sm text-gray-700">
              Tình trạng đặc thù
            </label>
          </div>
          {formData.specialStatus && (
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Upload className="w-4 h-4 mr-2" />
                Tải lên tài liệu xác nhận
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <X className="w-4 h-4 mr-2" />
            Hủy
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSave(formData);
            }}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
}