import { Search, Calendar, Download, Mail, Bike, Building2, Ticket } from 'lucide-react';

function SearchBar() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4 lg:space-y-0 lg:flex lg:space-x-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Mã vé</label>
        <div className="relative">
          <input
            type="text"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nhập mã vé..."
          />
          <Ticket className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Email hành khách</label>
        <div className="relative">
          <input
            type="email"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nhập email..."
          />
          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
        <div className="relative">
          <input
            type="tel"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nhập số điện thoại..."
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Ngày đặt vé</label>
        <div className="relative">
          <input
            type="date"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

function TicketTable() {
  const tickets = [
    {
      id: 'TK001',
      bookingTime: '2024-03-15 14:30',
      route: 'Rạch Giá - Phú Quốc',
      departureTime: '2024-03-20 08:00',
      passenger: 'Nguyễn Văn A',
      phone: '0901234567',
      email: 'nguyenvana@email.com',
      seat: 'A12',
      paymentTime: '2024-03-15 14:35',
    },
    // Add more ticket data as needed
  ];

  return (
    <div className="mt-6 bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Mã vé', 'Thời gian đặt', 'Tuyến', 'Khởi hành', 'Hành khách', 'Số điện thoại', 'Email', 'Số ghế', 'Thanh toán', 'Thao tác'].map((header) => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{ticket.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.bookingTime}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.route}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.departureTime}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.passenger}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.seat}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.paymentTime}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                <button className="text-blue-600 hover:text-blue-900">
                  <Download className="h-5 w-5 inline-block mr-1" />
                  Tải vé
                </button>
                <button className="text-green-600 hover:text-green-900">
                  <Mail className="h-5 w-5 inline-block mr-1" />
                  Gửi email
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Promotions() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Previous Trip Suggestion */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=800"
          alt="Phú Quốc"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Chuyến đi trước đây của bạn</h3>
          <p className="text-gray-600">Khám phá lại Phú Quốc với những trải nghiệm mới</p>
        </div>
      </div>

      {/* Discount Promotion */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md text-white p-6">
        <h3 className="text-xl font-bold mb-3">Ưu đãi đặc biệt</h3>
        <p className="text-2xl font-bold mb-2">Giảm giá 30%</p>
        <p className="mb-4">Cho chuyến đi tiếp theo của bạn</p>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Đặt ngay
        </button>
      </div>

      {/* Additional Services */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Dịch vụ bổ sung</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <Building2 className="h-6 w-6 text-blue-500 mr-3" />
            <div>
              <p className="font-medium">Dịch vụ lưu trú</p>
              <p className="text-sm text-gray-600">Đặt phòng khách sạn với giá ưu đãi</p>
            </div>
          </div>
          <div className="flex items-center">
            <Bike className="h-6 w-6 text-green-500 mr-3" />
            <div>
              <p className="font-medium">Thuê xe máy</p>
              <p className="text-sm text-gray-600">Giá từ 150.000đ/ngày</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderHistory() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Lịch sử đặt vé</h1>
        <SearchBar />
        <TicketTable />
        <Promotions />
      </div>
    </div>
  );
}

export default OrderHistory;