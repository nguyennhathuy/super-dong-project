interface BookingInfoProps {
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  invoiceInfo: {
    buyer: string;
    company: string;
    taxId: string;
    address: string;
  };
}

export function BookingInfo({ customerInfo, invoiceInfo }: BookingInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Thông tin người đặt vé</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Họ tên</label>
            <p className="mt-1 text-gray-900">{customerInfo.name}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-gray-900">{customerInfo.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
            <p className="mt-1 text-gray-900">{customerInfo.phone}</p>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Người mua hàng</label>
            <p className="mt-1 text-gray-900">{invoiceInfo.buyer}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Đơn vị xuất hóa đơn</label>
            <p className="mt-1 text-gray-900">{invoiceInfo.company}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Mã số thuế</label>
            <p className="mt-1 text-gray-900">{invoiceInfo.taxId}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Địa chỉ</label>
            <p className="mt-1 text-gray-900">{invoiceInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}