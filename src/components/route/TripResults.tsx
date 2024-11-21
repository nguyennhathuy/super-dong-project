import React from 'react';
import { Clock } from 'lucide-react';
import { mockTrips } from '../const';

interface TripResultsProps {
  tripType: 'oneWay' | 'roundTrip';
  onSubmit: () => void
}


const TripResults: React.FC<TripResultsProps> = ({ tripType, onSubmit }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Kết Quả Tìm Kiếm</h3>
      
      {/* Outbound Trips */}
      <div className="mb-8">
        <h4 className="text-lg font-medium mb-3">Chuyến đi</h4>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tàu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ngày
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Giờ khởi hành
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tình trạng
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockTrips.map((trip) => (
                <tr key={trip.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{trip.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {trip.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {trip.departure}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {trip.status === 'available' ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Còn {trip.availableSeats} vé
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Hết vé
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {trip.status === 'available' ? (
                      <button 
                        className="text-tertiary hover:text-secondary font-medium"
                        onClick={onSubmit}
                      >
                        Chọn
                      </button>
                    ) : (
                      <button 
                        disabled 
                        className="text-gray-400 cursor-not-allowed font-medium"
                      >
                        Chọn
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Return Trips (only for round trips) */}
      {tripType === 'roundTrip' && (
        <div>
          <h4 className="text-lg font-medium mb-3">Chuyến về</h4>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tàu
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ngày
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Giờ khởi hành
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tình trạng
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockTrips.map((trip) => (
                  <tr key={trip.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{trip.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {trip.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {trip.departure}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {trip.status === 'available' ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Còn {trip.availableSeats} vé
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Hết vé
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {trip.status === 'available' ? (
                        <button 
                          className="text-blue-600 hover:text-blue-800 font-medium"
                          onClick={onSubmit}
                        >
                          Chọn
                        </button>
                      ) : (
                        <button disabled className="text-gray-400 cursor-not-allowed font-medium">
                          Chọn
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripResults;