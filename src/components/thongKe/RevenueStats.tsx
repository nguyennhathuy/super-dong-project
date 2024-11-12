import React, { useState } from 'react';
import { format } from 'date-fns';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Calendar } from 'lucide-react';

// Mock data
const employeeData = [
  { name: 'Nguyễn Văn A', revenue: 150 },
  { name: 'Trần Thị B', revenue: 280 },
  { name: 'Lê Văn C', revenue: 190 },
  { name: 'Phạm Thị D', revenue: 220 },
];

const routeData = [
  { route: 'RG-PQ', name: 'Rạch Giá - Phú Quốc', revenue: 320 },
  { route: 'PQ-CĐ', name: 'Phú Quốc - Côn Đảo', revenue: 250 },
  { route: 'RG-NTr', name: 'Rạch Giá - Nam Du', revenue: 180 },
];

const RevenueStats: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="space-y-8">
      {/* Filters and Summary */}
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border rounded-md px-3 py-2"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border rounded-md px-3 py-2"
              />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Áp dụng
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Doanh thu tổng của bạn</p>
                <p className="text-2xl font-bold text-blue-600">150.000.000 ₫</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Thứ hạng của bạn</p>
                <p className="text-2xl font-bold text-green-600">#2</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Doanh thu từ vé</p>
                <p className="text-2xl font-bold text-purple-600">120.000.000 ₫</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Doanh thu từ dịch vụ</p>
                <p className="text-2xl font-bold text-orange-600">30.000.000 ₫</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Doanh thu nhân viên</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={employeeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Daily Stats */}
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Doanh thu cao nhất hôm nay</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Tổng doanh thu</p>
                <p className="text-xl font-bold text-gray-800">35.000.000 ₫</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Số lượng vé</p>
                <p className="text-xl font-bold text-gray-800">45 vé</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">TB/Giao dịch</p>
                <p className="text-xl font-bold text-gray-800">778.000 ₫</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Doanh thu của bạn hôm nay</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Tổng doanh thu</p>
                <p className="text-xl font-bold text-blue-600">28.000.000 ₫</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Số lượng vé</p>
                <p className="text-xl font-bold text-blue-600">35 vé</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">TB/Giao dịch</p>
                <p className="text-xl font-bold text-blue-600">800.000 ₫</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Doanh thu theo tuyến</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={routeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="route" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueStats;