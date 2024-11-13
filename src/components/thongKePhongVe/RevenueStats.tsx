import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface RevenueStatsProps {
  dateRange: {
    startDate: Date;
    endDate: Date;
  };
}

const RevenueStats: React.FC<RevenueStatsProps> = () => {
  // Mock data
  const data = [
    {
      name: 'Phòng vé A',
      'Tháng trước': 4500,
      'Tháng hiện tại': 5200,
      'Tháng sau': 4800,
    },
    {
      name: 'Phòng vé B',
      'Tháng trước': 3800,
      'Tháng hiện tại': 4100,
      'Tháng sau': 4300,
    },
    {
      name: 'Phòng vé C',
      'Tháng trước': 5100,
      'Tháng hiện tại': 4900,
      'Tháng sau': 5300,
    },
  ];

  const topRoutes = [
    {
      name: 'Rạch Giá - Phú Quốc',
      revenue: 2500,
      percentage: 25,
      trend: 'up',
    },
    {
      name: 'Phú Quốc - Côn Đảo',
      revenue: 2200,
      percentage: 22,
      trend: 'up',
    },
  ];

  const bottomRoutes = [
    {
      name: 'Hà Tiên - Phú Quốc',
      revenue: 500,
      percentage: 5,
      trend: 'down',
    },
    {
      name: 'Nam Du - Phú Quốc',
      revenue: 300,
      percentage: 3,
      trend: 'down',
    },
  ];

  const formatRevenue = (value: number) => {
    return `${(value / 1000).toFixed(1)}tr`;
  };

  return (
    <div className="space-y-8">
      {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Doanh thu tổng theo phòng vé</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={formatRevenue} />
              <Tooltip 
                formatter={(value: number) => [`${formatRevenue(value)}`, 'Doanh thu']}
              />
              <Legend />
              <Bar dataKey="Tháng trước" fill="#9CA3AF" />
              <Bar dataKey="Tháng hiện tại" fill="#10B981" />
              <Bar dataKey="Tháng sau" fill="#FBBF24" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Tổng tháng trước</p>
            <p className="text-lg font-semibold">{formatRevenue(13400)}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600">Tổng tháng hiện tại</p>
            <p className="text-lg font-semibold text-green-600">{formatRevenue(14200)}</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-gray-600">Tổng tháng sau</p>
            <p className="text-lg font-semibold text-yellow-600">{formatRevenue(14400)}</p>
          </div>
        </div>
      </div>

      {/* Top and Bottom Routes */}
      <div className="grid grid-cols-2 gap-6">
        {/* Top Routes */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6">2 chuyến có doanh thu cao nhất</h2>
          <div className="space-y-4">
            {topRoutes.map((route, index) => (
              <div key={index} className="p-4 bg-green-50 rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{route.name}</p>
                  <p className="text-sm text-gray-600">
                    Doanh thu: {formatRevenue(route.revenue)}
                  </p>
                  <p className="text-sm text-gray-600">
                    Tỷ trọng: {route.percentage}%
                  </p>
                </div>
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Routes */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6">2 chuyến có doanh thu thấp nhất</h2>
          <div className="space-y-4">
            {bottomRoutes.map((route, index) => (
              <div key={index} className="p-4 bg-red-50 rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{route.name}</p>
                  <p className="text-sm text-gray-600">
                    Doanh thu: {formatRevenue(route.revenue)}
                  </p>
                  <p className="text-sm text-gray-600">
                    Tỷ trọng: {route.percentage}%
                  </p>
                </div>
                <TrendingDown className="w-6 h-6 text-red-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueStats;