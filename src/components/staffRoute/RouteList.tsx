import React, { useState } from 'react';
import { Ship, Filter } from 'lucide-react';

interface RouteListProps {
  passengers: number;
  selectedRoute: any;
  setSelectedRoute: (route: any) => void;
}

const RouteList: React.FC<RouteListProps> = ({ 
  passengers, 
  selectedRoute, 
  setSelectedRoute 
}) => {
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  // Mock data for routes
  const routes = [
    { id: 1, ship: 'TÀU-01', date: '2024-03-20', time: '08:00', seats: 45 },
    { id: 2, ship: 'TÀU-02', date: '2024-03-20', time: '10:30', seats: 2 },
    { id: 3, ship: 'TÀU-03', date: '2024-03-20', time: '13:00', seats: 30 },
    { id: 4, ship: 'TÀU-04', date: '2024-03-20', time: '15:30', seats: 15 },
  ];

  const filteredRoutes = showOnlyAvailable
    ? routes.filter(route => route.seats >= passengers)
    : routes;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Danh sách tuyến</h2>
        
        <button
          onClick={() => setShowOnlyAvailable(!showOnlyAvailable)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
            ${showOnlyAvailable 
              ? 'bg-blue-50 text-blue-600' 
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
        >
          <Filter className="w-5 h-5" />
          <span>Hiển thị chuyến đủ chỗ</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Tàu</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Ngày khởi hành</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Giờ khởi hành</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Số chỗ trống</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredRoutes.map(route => (
              <tr 
                key={route.id}
                className={`hover:bg-gray-50 transition-colors ${
                  selectedRoute?.id === route.id ? 'bg-blue-50' : ''
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Ship className="w-5 h-5 text-blue-600" />
                    <span>{route.ship}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{new Date(route.date).toLocaleDateString('vi-VN')}</td>
                <td className="px-6 py-4">{route.time}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-sm
                    ${route.seats >= passengers 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {route.seats}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setSelectedRoute(route)}
                    className={`px-4 py-2 rounded-lg transition-colors
                      ${selectedRoute?.id === route.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    Chọn
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RouteList;