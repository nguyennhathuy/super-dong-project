import React, { useState } from 'react';
import { Edit2, Save, X } from 'lucide-react';

interface UserData {
  personal: {
    name: string;
    phone: string;
    email: string;
  };
  company: {
    buyer: string;
    name: string;
    taxId: string;
    address: string;
  };
}

export const GeneralInfo = () => {
  const [editingSection, setEditingSection] = useState<'personal' | 'company' | null>(null);
  const [userData, setUserData] = useState<UserData>({
    personal: {
      name: 'Nguyễn Văn A',
      phone: '0901234567',
      email: 'nguyenvana@example.com',
    },
    company: {
      buyer: 'Nguyễn Văn A',
      name: 'Công ty TNHH ABC',
      taxId: '0123456789',
      address: '123 Đường ABC, Quận 1, TP.HCM',
    },
  });

  const handleEdit = (section: 'personal' | 'company') => {
    setEditingSection(section);
  };

  const handleSave = () => {
    // Here you would typically save to backend
    setEditingSection(null);
  };

  const handleCancel = () => {
    setEditingSection(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Personal Information */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Thông tin cá nhân</h3>
          {editingSection !== 'personal' ? (
            <button
              onClick={() => handleEdit('personal')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <Edit2 className="h-4 w-4" />
              <span>Chỉnh sửa</span>
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-1 text-green-600 hover:text-green-700"
              >
                <Save className="h-4 w-4" />
                <span>Lưu</span>
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
                <span>Hủy</span>
              </button>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Họ và tên
            </label>
            <input
              type="text"
              value={userData.personal.name}
              disabled={editingSection !== 'personal'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Số điện thoại
            </label>
            <input
              type="tel"
              value={userData.personal.phone}
              disabled={editingSection !== 'personal'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={userData.personal.email}
              disabled
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50"
            />
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Thông tin công ty</h3>
          {editingSection !== 'company' ? (
            <button
              onClick={() => handleEdit('company')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <Edit2 className="h-4 w-4" />
              <span>Chỉnh sửa</span>
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-1 text-green-600 hover:text-green-700"
              >
                <Save className="h-4 w-4" />
                <span>Lưu</span>
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
                <span>Hủy</span>
              </button>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Người mua hàng
            </label>
            <input
              type="text"
              value={userData.company.buyer}
              disabled={editingSection !== 'company'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tên công ty
            </label>
            <input
              type="text"
              value={userData.company.name}
              disabled={editingSection !== 'company'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mã số thuế
            </label>
            <input
              type="text"
              value={userData.company.taxId}
              disabled={editingSection !== 'company'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Địa chỉ công ty
            </label>
            <input
              type="text"
              value={userData.company.address}
              disabled={editingSection !== 'company'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};