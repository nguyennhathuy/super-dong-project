import React from 'react';
import { MapPin } from 'lucide-react';
import { routes } from '../const';



interface Props {
  setShowResults: (data: boolean) => void;
  departurePoint: string;
  destinationPoint: string;
  setDeparturePoint: (data: string) => void;
  setDestinationPoint: (data: string) => void;
}

const RouteSelector: React.FC<Props> = ({ setShowResults, departurePoint, destinationPoint, setDeparturePoint, setDestinationPoint }) => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Điểm đi
        </label>
        <div className="relative">
          <select 
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
            onChange={
              (e) => {
                setShowResults(false);
                setDeparturePoint(e.target.value);
              }
            }
            value={departurePoint}
          >
            <option value="">Chọn điểm đi</option>
            {routes.map((route) => (
              <option key={route} value={route}>{route}</option>
            ))}
          </select>
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Điểm đến
        </label>
        <div className="relative">
          <select 
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
            onChange={
              (e) => {
                setShowResults(false);
                setDestinationPoint(e.target.value);
              }
            }
            value={destinationPoint}
          >
            <option value="">Chọn điểm đến</option>
            {routes.map((route) => (
              <option key={route} value={route}>{route}</option>
            ))}
          </select>
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default RouteSelector;