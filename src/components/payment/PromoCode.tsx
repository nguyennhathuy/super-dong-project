interface PromoCodeProps {
  promoCode: string;
  promoApplied: boolean;
  onPromoCodeChange: (value: string) => void;
  onApplyPromo: () => void;
}

export function PromoCode({ promoCode, promoApplied, onPromoCodeChange, onApplyPromo }: PromoCodeProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Mã giảm giá</h2>
      <div className="flex space-x-4">
        <input
          type="text"
          value={promoCode}
          onChange={(e) => onPromoCodeChange(e.target.value)}
          placeholder="Nhập mã giảm giá"
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          disabled={promoApplied}
        />
        <button
          onClick={onApplyPromo}
          disabled={promoApplied}
          className={`px-4 py-2 rounded-md ${
            promoApplied
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          }`}
        >
          {promoApplied ? 'Đã áp dụng' : 'Áp dụng'}
        </button>
      </div>
    </div>
  );
}