interface TotalAmountProps {
  totalTicketPrice: number;
  totalServicePrice: number;
  discount: number;
}

export function TotalAmount({ totalTicketPrice, totalServicePrice, discount }: TotalAmountProps) {
  const finalTotal = totalTicketPrice + totalServicePrice - discount;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="space-y-4">
        <div className="flex justify-between text-gray-900">
          <span className="font-medium">Tổng tiền:</span>
          <span>{(totalTicketPrice + totalServicePrice).toLocaleString()} VND</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span className="font-medium">Tiền được giảm:</span>
          <span>{discount.toLocaleString()} VND</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-gray-900">
          <span>Số tiền cần thanh toán:</span>
          <span>{finalTotal.toLocaleString()} VND</span>
        </div>
      </div>
    </div>
  );
}