import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ChangeFormProps {
  ticket: any;
  onClose: () => void;
}

const ChangeForm: React.FC<ChangeFormProps> = ({ ticket, onClose }) => {
  const [changeFee, setChangeFee] = useState('30');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  
  const oldPrice = 500000; // Example price
  const newPrice = 600000; // Example new price
  const priceDifference = newPrice - oldPrice;
  const totalFee = (oldPrice * parseInt(changeFee) / 100) + (priceDifference > 0 ? priceDifference : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle change ticket logic here
    onClose();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Nghiệp vụ Đổi vé</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Đi từ
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option value="rachgia">Rạch Giá</option>
              <option value="phuquoc">Phú Quốc</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Đi đến
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option value="condao">Côn Đảo</option>
              <option value="phuquoc">Phú Quốc</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày khởi hành
            </label>
            <input
              type="date"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Giờ khởi hành
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option value="0600">06:00</option>
              <option value="0800">08:00</option>
              <option value="1000">10:00</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mã tàu
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option value="tau1">Tàu cao tốc 01</option>
              <option value="tau2">Tàu cao tốc 02</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Chọn ghế
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phí đổi vé
          </label>
          <select
            value={changeFee}
            onChange={(e) => setChangeFee(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="30">30%</option>
            <option value="40">40%</option>
          </select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Giá vé cũ:</span>
            <span className="font-medium">{oldPrice.toLocaleString('vi-VN')} đ</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Giá vé mới:</span>
            <span className="font-medium">{newPrice.toLocaleString('vi-VN')} đ</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Phí đổi vé:</span>
            <span className="font-medium text-red-600">
              {(oldPrice * parseInt(changeFee) / 100).toLocaleString('vi-VN')} đ
            </span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span className="text-sm font-medium">Tổng phí:</span>
            <span className="font-bold text-red-600">
              {totalFee.toLocaleString('vi-VN')} đ
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phương thức thanh toán
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
          Xác nhận đổi vé
        </button>
      </form>
    </div>
  );
}

export default ChangeForm;