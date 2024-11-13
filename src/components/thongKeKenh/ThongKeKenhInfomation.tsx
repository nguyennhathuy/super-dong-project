import { useState } from 'react';
import RevenueChart from './RevenueChart';
import PerformanceChart from './PerformanceChart';

const revenueData = {
    labels: ['Phòng vé', 'Website', 'Mobile app', 'VNPay'],
    datasets: [
      {
        label: 'Tháng trước',
        data: [650000000, 450000000, 800000000, 600000000],
        backgroundColor: 'rgba(156, 163, 175, 0.5)',
      },
      {
        label: 'Tháng hiện tại',
        data: [800000000, 600000000, 1000000000, 800000000],
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
      },
      {
        label: 'Tháng sau',
        data: [900000000, 700000000, 1200000000, 1000000000],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
    ],
  };
  
 const performanceData = {
    labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    datasets: [
      {
        label: 'Phòng vé',
        data: [95, 93, 94, 95, 96, 94, 95],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Website',
        data: [88, 89, 90, 91, 89, 90, 92],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
      },
      {
        label: 'Mobile app',
        data: [92, 93, 91, 93, 94, 93, 95],
        borderColor: 'rgb(249, 115, 22)',
        backgroundColor: 'rgba(249, 115, 22, 0.5)',
      },
      {
        label: 'VNPay',
        data: [90, 91, 89, 90, 91, 92, 93],
        borderColor: 'rgb(168, 85, 247)',
        backgroundColor: 'rgba(168, 85, 247, 0.5)',
      },
    ],
  };



function ThongKeKenhInfomation() {
  const [activeMenu, setActiveMenu] = useState('');
  const [activeSubmenu, setActiveSubmenu] = useState('');

  return (
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Doanh thu theo kênh phân phối</h2>
              <div className="flex gap-2">
                <select className="px-3 py-1 border rounded-lg text-sm">
                  <option>Theo tháng</option>
                  <option>Theo quý</option>
                  <option>Theo năm</option>
                </select>
              </div>
            </div>
            <RevenueChart data={revenueData} />
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Tháng trước</p>
                <p className="text-lg font-bold text-blue-600">2.5 tỷ ₫</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Tháng hiện tại</p>
                <p className="text-lg font-bold text-green-600">3.2 tỷ ₫</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Tháng sau (dự kiến)</p>
                <p className="text-lg font-bold text-purple-600">3.8 tỷ ₫</p>
              </div>
            </div>
          </div>

          {/* Performance Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Hiệu suất theo kênh phân phối</h2>
              <div className="flex gap-2">
                <select className="px-3 py-1 border rounded-lg text-sm">
                  <option>7 ngày qua</option>
                  <option>30 ngày qua</option>
                  <option>90 ngày qua</option>
                </select>
              </div>
            </div>
            <PerformanceChart data={performanceData} />
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Hiệu suất trung bình</p>
                <p className="text-lg font-bold text-orange-600">92.5%</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Tổng giao dịch</p>
                <p className="text-lg font-bold text-teal-600">15,234</p>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}

export default ThongKeKenhInfomation;