import React from 'react';

interface Props {
  formData: {
    name: string;
    phone: string;
    email: string;
    isPrimaryPassenger: boolean;
  };
  errors: {
    name?: string;
    phone?: string;
    email?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PersonalInfoForm({ formData, errors, onChange }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Thông tin người đặt vé</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Nhập họ và tên đầy đủ"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Nhập số điện thoại"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Nhập địa chỉ email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isPrimaryPassenger"
            checked={formData.isPrimaryPassenger}
            onChange={onChange}
            className="w-4 h-4 text-blue-600 rounded border-gray-300"
          />
          <label className="text-sm text-gray-700">
            Tôi là hành khách chính
          </label>
        </div>
      </div>
    </div>
  );
}