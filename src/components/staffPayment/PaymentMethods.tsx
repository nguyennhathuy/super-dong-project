import React from 'react';
import { QrCode, CreditCard, Globe2 } from 'lucide-react';

type PaymentType = 'vietqr' | 'domestic' | 'international' | null;

interface PaymentMethodsProps {
  selectedMethod: PaymentType;
  onMethodSelect: (method: any) => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ selectedMethod, onMethodSelect }) => {
  const methods = [
    {
      id: 'vietqr',
      name: 'VietQR',
      icon: QrCode,
      description: 'Quét mã QR để thanh toán qua ứng dụng ngân hàng'
    },
    {
      id: 'domestic',
      name: 'Nội địa',
      icon: CreditCard,
      description: 'Thanh toán qua thẻ ATM hoặc ví điện tử'
    },
    {
      id: 'international',
      name: 'Quốc tế',
      icon: Globe2,
      description: 'Thanh toán qua thẻ Visa/Mastercard hoặc PayPal'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Phương thức thanh toán</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {methods.map((method) => (
          <button
            key={method.id}
            className={`p-4 rounded-lg border-2 text-left transition-colors ${selectedMethod === method.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
              }`}
            onClick={() => onMethodSelect(method.id)}
          >
            <div className="flex items-center space-x-3">
              <method.icon className={`h-6 w-6 ${selectedMethod === method.id ? 'text-blue-500' : 'text-gray-400'
                }`} />
              <div>
                <h3 className="font-medium">{method.name}</h3>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
      {selectedMethod === 'vietqr' && (
          <div className="mt-6 text-center">
            <div className="bg-gray-100 p-4 rounded-lg inline-block">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=example"
                alt="QR Code"
                className="w-48 h-48"
              />
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Quét mã QR bằng ứng dụng ngân hàng để thanh toán
            </p>
          </div>
        )}

        {selectedMethod === 'domestic' && (
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Số thẻ
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tên chủ thẻ
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="NGUYEN VAN A"
                />
              </div>
            </div>
          </div>
        )}

        {selectedMethod === 'international' && (
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="4242 4242 4242 4242"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVC
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="123"
                />
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default PaymentMethods;