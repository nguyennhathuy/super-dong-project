import React, { useState } from 'react';
import { Search, Download, Mail, Edit2 } from 'lucide-react';

interface SearchFormData {
  email: string;
  phone: string;
  bookingDate: string;
  departureDate: string;
  from: string;
  to: string;
}

interface TicketData {
  shipCode: string;
  trip: string;
  bookingDate: string;
  departureDate: string;
  departureTime: string;
}

interface InvoiceData {
  customerName: string;
  companyName: string;
  taxCode: string;
  companyAddress: string;
}

const TicketAdjustment: React.FC = () => {
  const [searchData, setSearchData] = useState<SearchFormData>({
    email: '',
    phone: '',
    bookingDate: '',
    departureDate: '',
    from: '',
    to: '',
  });

  const [selectedTicket, setSelectedTicket] = useState<InvoiceData | null>(null);

  const mockResults: TicketData[] = [
    {
      shipCode: 'TK001',
      trip: 'Rạch Giá - Phú Quốc',
      bookingDate: '01/03/2024',
      departureDate: '05/03/2024',
      departureTime: '08:00',
    },
    {
      shipCode: 'TK002',
      trip: 'Phú Quốc - Côn Đảo',
      bookingDate: '02/03/2024',
      departureDate: '06/03/2024',
      departureTime: '09:30',
    },
  ];

  const locations = ['Rạch Giá', 'Phú Quốc', 'Côn Đảo'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
  };

  const handleEdit = (ticket: TicketData) => {
    setSelectedTicket({
      customerName: '',
      companyName: '',
      taxCode: '',
      companyAddress: '',
    });
  };

  const handleSave = () => {
    // Implement save logic
    setSelectedTicket(null);
  };

  return (
    <div className={selectedTicket ? "flex gap-6" : "space-y-8"}>
      {/* Left Section - Search and Results */}
      <div className={selectedTicket ? "w-3/5" : "w-5/5"}>
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Điều chỉnh thông tin hóa đơn</h1>
        
        {/* Search Form */}
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email người đặt vé
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={searchData.email}
                  onChange={(e) => setSearchData({ ...searchData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Số điện thoại người đặt vé
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={searchData.phone}
                  onChange={(e) => setSearchData({ ...searchData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ngày đặt vé
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={searchData.bookingDate}
                  onChange={(e) => setSearchData({ ...searchData, bookingDate: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ngày đi
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={searchData.departureDate}
                  onChange={(e) => setSearchData({ ...searchData, departureDate: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Đi từ
                </label>
                <select
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={searchData.from}
                  onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
                >
                  <option value="">Chọn điểm đi</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Đi đến
                </label>
                <select
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={searchData.to}
                  onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
                >
                  <option value="">Chọn điểm đến</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2"
            >
              <Search size={20} />
              Tìm kiếm
            </button>
          </form>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mã tàu
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Chuyến
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ngày đặt vé
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ngày khởi hành
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Giờ khởi hành
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockResults.map((ticket, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ticket.shipCode}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ticket.trip}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ticket.bookingDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ticket.departureDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ticket.departureTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => handleEdit(ticket)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Edit2 size={20} />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Download size={20} />
                      </button>
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <Mail size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Section - Invoice Edit Form */}
      {selectedTicket && (
        <div className="w-2/5">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-6">Thông tin hóa đơn</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Họ tên người mua hàng
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={selectedTicket.customerName}
                  onChange={(e) =>
                    setSelectedTicket({ ...selectedTicket, customerName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tên công ty
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={selectedTicket.companyName}
                  onChange={(e) =>
                    setSelectedTicket({ ...selectedTicket, companyName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mã số thuế
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={selectedTicket.taxCode}
                  onChange={(e) =>
                    setSelectedTicket({ ...selectedTicket, taxCode: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Địa chỉ công ty
                </label>
                <textarea
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  value={selectedTicket.companyAddress}
                  onChange={(e) =>
                    setSelectedTicket({ ...selectedTicket, companyAddress: e.target.value })
                  }
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedTicket(null)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketAdjustment;