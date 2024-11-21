import React, { useState } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import CompanyInfoForm from './CompanyInfoForm';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type BookerFormData = {
  name: string;
  phone: string;
  email: string;
  isPrimaryPassenger: boolean;
  companyContact?: string;
  companyName?: string;
  taxCode?: string;
  companyAddress?: string;
};

type FormErrors = {
  [key in keyof BookerFormData]?: string;
  
};

type Props = {
  onSubmit: (data: BookerFormData) => void;
  onBack: () => void;
  formData: BookerFormData;
  setFormData: (data: BookerFormData) => void;
};

export default function BookerInformation({ onSubmit, onBack, formData, setFormData }: Props) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [showCompanyWarning, setShowCompanyWarning] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name) {
      newErrors.name = 'Vui lòng nhập họ tên';
    } else if (!/^[\p{L}\s]+$/u.test(formData.name)) {
      newErrors.name = 'Tên không được chứa số hoặc ký tự đặc biệt';
    }

    if (!formData.phone) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }

    if (!formData.email) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    const hasCompanyInfo = formData.companyName || formData.taxCode || formData.companyAddress || formData.companyContact;
    if (hasCompanyInfo) {
      if (!formData.companyContact) newErrors.companyContact = 'Vui lòng nhập người mua hàng';
      if (!formData.companyName) newErrors.companyName = 'Vui lòng nhập tên công ty';
      if (!formData.taxCode) newErrors.taxCode = 'Vui lòng nhập mã số thuế';
      if (!formData.companyAddress) newErrors.companyAddress = 'Vui lòng nhập địa chỉ công ty';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      if (!formData.companyName && !showCompanyWarning) {
        setShowCompanyWarning(true);
        return;
      }
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PersonalInfoForm
          formData={formData}
          errors={errors}
          onChange={handleChange}
        />
        <CompanyInfoForm
          formData={formData}
          errors={errors}
          showWarning={showCompanyWarning}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
        <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-white bg-[#F7B727] hover:bg-primary-900"
            onClick={onBack}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay lại
          </button>
          
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tertiary hover:bg-tertiary-900"
          >
            Tiếp tục
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
      </div>
    </form>
  );
}