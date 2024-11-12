import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import CustomerInfo from './CustomerInfo';
import TripInfo from './TripInfo';
import AdditionalServices from './AdditionalServices';
import PromoCode from './PromoCode';
import TotalAmount from './TotalAmount';
import PaymentMethods from './PaymentMethods';
import { Timer } from './Timer';


interface Props {
  onSubmit: () => void;
  onBack: () => void;
}



function StaffPaymentInfomation({ onBack }: Props) {
  const [paymentMethod, setPaymentMethod] = useState<any>(null);
  const [showTimeoutModal, setShowTimeoutModal] = useState(false);
  const handleTimeout = () => {
    setShowTimeoutModal(true);
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Vui lòng chọn phương thức thanh toán');
      return;
    }
    // Handle payment logic based on selected method
    switch (paymentMethod) {
      case 'vietqr':
        alert('Đang tạo mã QR...');
        break;
      case 'domestic':
        alert('Chuyển hướng đến cổng thanh toán nội địa...');
        break;
      case 'international':
        alert('Chuyển hướng đến cổng thanh toán quốc tế...');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-6">
          <CustomerInfo />
          <TripInfo />
          <AdditionalServices />
          <PromoCode />
          <TotalAmount />
          <PaymentMethods 
            selectedMethod={paymentMethod}
            onMethodSelect={setPaymentMethod}
          />

          {/* Action Buttons */}
          <div className="flex justify-between pt-6">
            <button
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              onClick={onBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại
            </button>
            <button
              className={`px-6 py-2 rounded-md shadow-sm text-sm font-medium text-white ${
                paymentMethod
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!paymentMethod}
              onClick={handlePayment}
            >
              Thanh toán
            </button>
          </div>


        <Timer initialMinutes={10} onTimeout={handleTimeout} />

        {showTimeoutModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md">
              <h3 className="text-lg font-semibold mb-4">
                Thời gian giữ chỗ đã hết
              </h3>
              <p className="text-gray-600 mb-6">
                Vui lòng đặt vé lại.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Đặt vé lại
              </button>
            </div>
          </div>
        )}

        </div>
      </main>
    </div>
  );
}

export default StaffPaymentInfomation;