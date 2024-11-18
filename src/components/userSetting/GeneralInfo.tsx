import { ChangeEvent, useState } from 'react';
import { Edit2, Save, X } from 'lucide-react';
import { BookerFormData, UserData } from '../../types';

interface Props {
  userData: UserData;
  setUserData: (data: UserData) => void;
  formData: BookerFormData;
  setFormData: (data: BookerFormData) => void;
}

export const GeneralInfo = ({ userData, setUserData, formData, setFormData }: Props) => {
  const [editingSection, setEditingSection] = useState<'personal' | 'company' | null>(null);
  const [personalName, setPersonalName] = useState<string>(userData.personal.name);
  const [personalPhone, setPersonalPhone] = useState<string>(userData.personal.phone);
  const [personalMail, setPersonalMail] = useState<string>(userData.personal.email);
  const [nguoiMuaHang, setNguoiMuaHang] = useState<string>(userData.company ? userData.company.buyer : '');
  const [companyName, setCompanyName] = useState<string>(userData.company ? userData.company.name : '');
  const [companyTaxCode, setCompanyTaxCode] = useState<string>(userData.company ? userData.company.taxId : '');
  const [companyAddress, setCompanyAddress] = useState<string>(userData.company ? userData.company.address : '');
  const handleEdit = (section: 'personal' | 'company') => {
    if(editingSection === 'personal') handleSavePersonal()
    if(editingSection === 'company') handleSaveCompany()
    setEditingSection(section);
  };

  const handleSavePersonal = () => {
    const newUserData = {
      ...userData,
      personal: {
        ...userData.personal,
        name: personalName,
        phone: personalPhone,
        email: personalMail,
      },
    }
    const newFormData = {
      ...formData,
      name: personalName,
      phone: personalPhone,
      email: personalMail,
    }
    setFormData(newFormData)
    setUserData(newUserData);
    setEditingSection(null);
  };

  const handleSaveCompany = () => {
    const newUserData = {
      ...userData,
      company: {
        ...userData.company,
        buyer: nguoiMuaHang,
        name: companyName,
        taxId: companyTaxCode,
        address: companyAddress,
      }
    }
    const newFormData = {
      ...formData,
      companyContact: nguoiMuaHang,
      companyName: companyName,
      taxCode: companyTaxCode,
      companyAddress: companyAddress,
    }
    setFormData(newFormData)
    setUserData(newUserData);
    setEditingSection(null);
  };

  const handleCancel = () => {
    setEditingSection(null);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (editingSection === 'personal') {
      // Xử lý thông tin cá nhân
      if (name === 'name') setPersonalName(value);
      if (name === 'phone') setPersonalPhone(value);
      if (name === 'email') setPersonalMail(value);
    }

    if (editingSection === 'company') {
      // Xử lý thông tin công ty
      if (name === 'buyer') setNguoiMuaHang(value);
      if (name === 'companyName') setCompanyName(value);
      if (name === 'taxId') setCompanyTaxCode(value);
      if (name === 'address') setCompanyAddress(value);
    }
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
                onClick={handleSavePersonal}
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
              name='name'
              type="text"
              value={personalName}
              onChange={handleChangeInput}
              disabled={editingSection !== 'personal'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Số điện thoại
            </label>
            <input
              name='phone'
              type="tel"
              value={personalPhone}
              onChange={handleChangeInput}
              disabled={editingSection !== 'personal'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name='email'
              type="email"
              value={personalMail}
              onChange={handleChangeInput}
              disabled
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50"
            />
          </div>
        </div>
      </div>

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
                onClick={handleSaveCompany}
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
              name='buyer'
              type="text"
              value={nguoiMuaHang}
              onChange={handleChangeInput}
              disabled={editingSection !== 'company'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tên công ty
            </label>
            <input
              name='companyName'
              type="text"
              value={companyName}
              onChange={handleChangeInput}
              disabled={editingSection !== 'company'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mã số thuế
            </label>
            <input
              name='taxId'
              type="text"
              value={companyTaxCode}
              onChange={handleChangeInput}
              disabled={editingSection !== 'company'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Địa chỉ công ty
            </label>
            <input
              name='address'
              type="text"
              value={companyAddress}
              onChange={handleChangeInput}
              disabled={editingSection !== 'company'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};