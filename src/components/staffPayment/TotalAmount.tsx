const TotalAmount = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Tổng tiền</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Tổng cộng:</span>
          <span className="font-medium">509,565 VND</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Tiền được giảm:</span>
          <span>0 VND</span>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span>Số tiền cần thanh toán:</span>
          <span>509,565 VND</span>
        </div>
      </div>
    </div>
  );
};

export default TotalAmount;