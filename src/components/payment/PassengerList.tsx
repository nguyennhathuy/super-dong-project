import { Passenger } from "../../types";

interface PassengerListProps {
  passengers: Passenger[];
}

export function PassengerList({ passengers }: PassengerListProps) {
  const totalTicketPrice = passengers.reduce((sum, p) => sum + (p.price ? p.price : 0), 0);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Thông tin hành trình</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên hành khách</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CCCD/Hộ chiếu</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tàu</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giờ khởi hành</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá (VND)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {passengers.map((passenger, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{passenger.fullName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{passenger.idNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{passenger.ship}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{passenger.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{passenger.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{(passenger.price ? passenger.price : 0).toLocaleString()}</td>
              </tr>
            ))}
            <tr className="bg-gray-50">
              <td colSpan={6} className="px-6 py-4 text-right font-medium text-gray-900">Tổng cộng:</td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{totalTicketPrice.toLocaleString()} VND</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}