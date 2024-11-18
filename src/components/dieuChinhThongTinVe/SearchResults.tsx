import { FileEdit, Download, Mail } from 'lucide-react';
import { Passenger } from '../../types';


interface SearchResultsProps {
  passengers: Passenger[];
  onEdit: (passenger: Passenger) => void;
}

export default function SearchResults({ passengers, onEdit }: SearchResultsProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tên hành khách
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                CCCD/Hộ chiếu
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ngày sinh
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {passengers.map((passenger, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {passenger.fullName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {passenger.idNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(passenger.birthDate).toLocaleDateString('vi-VN')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    onClick={() => onEdit(passenger)}
                    className="text-blue-600 hover:text-blue-900"
                    title="Sửa"
                  >
                    <FileEdit className="w-5 h-5" />
                  </button>
                  <button
                    className="text-green-600 hover:text-green-900"
                    title="Tải về"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                  <button
                    className="text-purple-600 hover:text-purple-900"
                    title="Gửi Email"
                  >
                    <Mail className="w-5 h-5" />
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