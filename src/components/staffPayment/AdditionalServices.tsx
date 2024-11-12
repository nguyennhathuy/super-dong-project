import { useState } from 'react';

const AdditionalServices = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Thuê xe máy (xe số)',
      unit: 'ngày',
      price: 120000,
      quantity: 0
    },
    {
      id: 2,
      name: 'Thuê xe máy (xe tay ga)',
      unit: 'ngày',
      price: 160000,
      quantity: 0
    },
    {
      id: 3,
      name: 'Xe trung chuyển (tính theo người)',
      unit: 'người',
      price: 20000,
      quantity: 0
    }
  ]);

  const handleQuantityChange = (id: number, value: number) => {
    setServices(services.map(service =>
      service.id === id ? { ...service, quantity: Math.max(0, value) } : service
    ));
  };

  const total = services.reduce((sum, service) => sum + (service.price * service.quantity), 0);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Dịch vụ đi kèm</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên dịch vụ</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Đơn vị tính</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Giá (VND)</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng (VND)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {services.map((service) => (
                <tr key={service.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.unit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">{service.price.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      min="0"
                      value={service.quantity}
                      onChange={(e) => handleQuantityChange(service.id, parseInt(e.target.value) || 0)}
                      className="w-20 text-center rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    {(service.price * service.quantity).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50">
                <td colSpan={4} className="px-6 py-4 text-sm font-medium text-gray-900 text-right">Tổng cộng:</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right text-gray-900">{total.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;