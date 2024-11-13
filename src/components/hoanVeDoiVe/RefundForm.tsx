import React, { useState } from 'react';
import { X } from 'lucide-react';

interface RefundFormProps {
  ticket: any;
  onClose: () => void;
}

const RefundForm: React.FC<RefundFormProps> = ({ ticket, onClose }) => {
  const [refundFee, setRefundFee] = useState('30');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [reason, setReason] = useState('');

  const ticketPrice = 500000; // Example price
  const refundAmount = ticketPrice * (1 - parseInt(refundFee) / 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle refund logic here
    onClose();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Nghiệp vụ Hoàn vé</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lý do hoàn vé
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Giá vé
          </label>
          <div className="text-lg font-semibold text-gray-900">
            {ticketPrice.toLocaleString('vi-VN')} đ
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phí hoàn vé
          </label>
          <select
            value={refundFee}
            onChange={(e) => setRefundFee(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="30">30%</option>
            <option value="40">40%</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Số tiền hoàn lại
          </label>
          <div className="text-lg font-semibold text-green-600">
            {refundAmount.toLocaleString('vi-VN')} đ
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phương thức hoàn tiền
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">
                Tiền mặt
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="bank"
                checked={paymentMethod === 'bank'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">
                Thẻ ngân hàng/Ví điện tử
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Hoàn tất hoàn vé
        </button>
      </form>
    </div>
  );
}

export default RefundForm;