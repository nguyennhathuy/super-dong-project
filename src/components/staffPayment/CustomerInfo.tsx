const CustomerInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Thông tin đặt vé</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium text-gray-700 mb-3">Người đặt vé</h3>
          <div className="space-y-2">
            <p><span className="text-gray-500">Họ tên:</span> Nguyễn Văn A</p>
            <p><span className="text-gray-500">Email:</span> nguyenvan_a@gmail.com</p>
            <p><span className="text-gray-500">Số điện thoại:</span> (0297) 3980 111</p>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-gray-700 mb-3">Thông tin xuất hóa đơn</h3>
          <div className="space-y-2">
            <p><span className="text-gray-500">Người mua hàng:</span> Cao Hữu Quý</p>
            <p><span className="text-gray-500">Đơn vị:</span> CÔNG TY CỔ PHẦN TÀU CAO TỐC SUPERDONG-KIÊN GIANG</p>
            <p><span className="text-gray-500">Mã số thuế:</span> 1700556108</p>
            <p><span className="text-gray-500">Địa chỉ:</span> 187 Nguyễn Trung Trực, Khu phố 5, Phường Dương Đông, Thành phố Phú Quốc, Kiên Giang</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;