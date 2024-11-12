import { QrCode, CreditCard, Globe } from 'lucide-react';

export type PaymentType = 'vietqr' | 'domestic' | 'international' | null;

interface PaymentMethodProps {
  selectedMethod: PaymentType;
  onMethodSelect: (method: PaymentType) => void;
}

export function PaymentMethods({ selectedMethod, onMethodSelect }: PaymentMethodProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-6">Phương thức thanh toán</h3>

      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => onMethodSelect('vietqr')}
          className={`
            p-4 rounded-lg border-2 transition-colors text-center
            ${selectedMethod === 'vietqr'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:bg-gray-50'}
          `}
        >
          <QrCode className="w-8 h-8 mx-auto mb-2" />
          <span className="block font-medium">VietQR</span>
          <span className="text-sm text-gray-500">Quét mã QR</span>
        </button>

        <button
          onClick={() => onMethodSelect('domestic')}
          className={`
            p-4 rounded-lg border-2 transition-colors text-center
            ${selectedMethod === 'domestic'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:bg-gray-50'}
          `}
        >
          <CreditCard className="w-8 h-8 mx-auto mb-2" />
          <span className="block font-medium">Nội địa</span>
          <span className="text-sm text-gray-500">ATM/Ví điện tử</span>
        </button>

        <button
          onClick={() => onMethodSelect('international')}
          className={`
            p-4 rounded-lg border-2 transition-colors text-center
            ${selectedMethod === 'international'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:bg-gray-50'}
          `}
        >
          <Globe className="w-8 h-8 mx-auto mb-2" />
          <span className="block font-medium">Quốc tế</span>
          <span className="text-sm text-gray-500">Visa/Mastercard</span>
        </button>
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
}