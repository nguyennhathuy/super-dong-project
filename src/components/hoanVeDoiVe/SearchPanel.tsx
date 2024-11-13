import React from 'react';
import { Search } from 'lucide-react';

const SearchPanel = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Nghiệp vụ Hoàn vé & Đổi vé
      </h1>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mã vé
            </label>
            <input
              type="text"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Nhập mã vé"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày đặt vé
            </label>
            <input
              type="date"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ngày khởi hành
            </label>
            <input
              type="date"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Đi từ
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option value="">Chọn điểm đi</option>
              <option value="rachgia">Rạch Giá</option>
              <option value="phuquoc">Phú Quốc</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Đi đến
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option value="">Chọn điểm đến</option>
              <option value="condao">Côn Đảo</option>
              <option value="phuquoc">Phú Quốc</option>
            </select>
          </div>

          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center">
              <Search className="h-5 w-5 mr-2" />
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;