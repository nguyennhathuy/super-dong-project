const TripInfo = () => {
  const trips = [
    {
      id: 1,
      name: 'Nguyễn A',
      idNumber: '111111111111',
      ship: 'SuperDong II',
      date: '20/11/2024',
      time: '07:30',
      price: 169855
    },
    {
      id: 2,
      name: 'Trần B',
      idNumber: '222222222222',
      ship: 'SuperDong II',
      date: '20/11/2024',
      time: '07:30',
      price: 169855
    },
    {
      id: 3,
      name: 'Lê C',
      idNumber: '333333333333',
      ship: 'SuperDong II',
      date: '20/11/2024',
      time: '07:30',
      price: 169855
    }
  ];

  const total = trips.reduce((sum, trip) => sum + trip.price, 0);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Hành trình</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên hành khách</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CCCD/Hộ chiếu</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tàu</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giờ khởi hành</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng (VND)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {trips.map((trip) => (
                <tr key={trip.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trip.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.idNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.ship}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trip.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{trip.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50">
                <td colSpan={6} className="px-6 py-4 text-sm font-medium text-gray-900 text-right">Tổng cộng:</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right text-gray-900">{total.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;