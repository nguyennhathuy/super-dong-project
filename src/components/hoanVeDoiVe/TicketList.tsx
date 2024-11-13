import React from 'react';
import { RotateCcw, RefreshCw } from 'lucide-react';

interface TicketListProps {
  onRefund: (ticket: any) => void;
  onChange: (ticket: any) => void;
}

const TicketList: React.FC<TicketListProps> = ({ onRefund, onChange }) => {
  const tickets = [
    {
      id: 'VE001',
      passengerName: 'Nguyễn Văn A',
      idNumber: '079201001234',
      birthDate: '15/05/1990',
      status: 'Hợp lệ'
    },
    {
      id: 'VE002',
      passengerName: 'Trần Thị B',
      idNumber: '079201001235',
      birthDate: '20/08/1985',
      status: 'Đã hủy'
    },
    // Add more sample tickets as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mã vé
            </th>
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
              Tình trạng vé
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Thao tác
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {ticket.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {ticket.passengerName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {ticket.idNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {ticket.birthDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  ticket.status === 'Hợp lệ' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {ticket.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onRefund(ticket)}
                    disabled={ticket.status !== 'Hợp lệ'}
                    className={`inline-flex items-center px-3 py-1 rounded-md text-sm ${
                      ticket.status === 'Hợp lệ'
                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {/* <RotateCcw className="h-4 w-4 mr-1" /> */}
                    Hoàn vé
                  </button>
                  <button
                    onClick={() => onChange(ticket)}
                    disabled={ticket.status !== 'Hợp lệ'}
                    className={`
                      inline-flex 
                      items-center 
                      px-3 py-1 
                      rounded-md 
                      text-sm ${
                      ticket.status === 'Hợp lệ'
                        ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {/* <RefreshCw className="h-4 w-4 mr-1" /> */}
                    Đổi vé
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketList;