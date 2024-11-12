interface Service {
  name: string;
  unit: string;
  price: number;
  quantity: number;
}

interface ServiceListProps {
  services: Service[];
  onQuantityChange: (index: number, value: number) => void;
}

export function ServiceList({ services, onQuantityChange }: ServiceListProps) {
  const totalServicePrice = services.reduce((sum, s) => sum + s.price * s.quantity, 0);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Dịch vụ đi kèm</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên dịch vụ</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Đơn vị tính</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá (VND)</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thành tiền</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {services.map((service, index) => (
              <tr key={service.name}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{service.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{service.unit}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{service.price.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="number"
                    min="0"
                    value={service.quantity}
                    onChange={(e) => onQuantityChange(index, parseInt(e.target.value))}
                    className="w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{(service.price * service.quantity).toLocaleString()}</td>
              </tr>
            ))}
            <tr className="bg-gray-50">
              <td colSpan={4} className="px-6 py-4 text-right font-medium text-gray-900">Tổng cộng:</td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{totalServicePrice.toLocaleString()} VND</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}