import React from 'react';
import { AlertCircle } from 'lucide-react';

interface Props {
  formData: {
    companyContact?: string;
    companyName?: string;
    taxCode?: string;
    companyAddress?: string;
  };
  errors: {
    companyContact?: string;
    companyName?: string;
    taxCode?: string;
    companyAddress?: string;
  };
  showWarning: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CompanyInfoForm({ formData, errors, showWarning, onChange }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Thông tin công ty (nếu có)</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Người mua hàng
          </label>
          <input
            type="text"
            name="companyContact"
            value={formData.companyContact || ''}
            onChange={onChange}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.companyContact ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Nhập tên người đại diện"
          />
          {errors.companyContact && (
            <p className="mt-1 text-sm text-red-500">{errors.companyContact}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tên công ty
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName || ''}
            onChange={onChange}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.companyName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Nhập tên công ty"
          />
          {errors.companyName && (
            <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mã số thuế
          </label>
          <input
            type="text"
            name="taxCode"
            value={formData.taxCode || ''}
            onChange={onChange}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.taxCode ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Nhập mã số thuế"
          />
          {errors.taxCode && (
            <p className="mt-1 text-sm text-red-500">{errors.taxCode}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Địa chỉ công ty
          </label>
          <input
            type="text"
            name="companyAddress"
            value={formData.companyAddress || ''}
            onChange={onChange}
            className={`w-full px-4 py-2.5 rounded-lg border ${
              errors.companyAddress ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Nhập địa chỉ công ty"
          />
          {errors.companyAddress && (
            <p className="mt-1 text-sm text-red-500">{errors.companyAddress}</p>
          )}
        </div>

        {showWarning && !formData.companyName && (
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-orange-700">
              Sẽ không thể điều chỉnh hoặc bổ sung thông tin công ty nếu không nhập ở bước này.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}