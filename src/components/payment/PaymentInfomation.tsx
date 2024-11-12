import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { BookingInfo } from './BookingInfo'; 
import { PassengerList } from './PassengerList'; 
import { ServiceList } from './ServiceList'; 
import { PromoCode } from './PromoCode'; 
import { TotalAmount } from './TotalAmount'; 
import { PaymentMethods, PaymentType } from './PaymentMethods'; 

interface Service {
  name: string;
  unit: string;
  price: number;
  quantity: number;
}

interface Passenger {
  id: number;
  name: string;
  idNumber: string;
  ship: string;
  date: string;
  time: string;
  price: number;
}

type Props = {
    onSubmit: () => void;
    onBack: () => void;
};

function PaymentInfomation({ onSubmit, onBack }: Props) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>(null);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [services, setServices] = useState<Service[]>([
    { name: 'Thuê xe máy (xe số)', unit: 'ngày', price: 120000, quantity: 0 },
    { name: 'Thuê xe máy (xe tay ga)', unit: 'ngày', price: 160000, quantity: 0 },
    { name: 'Xe trung chuyển', unit: 'người', price: 20000, quantity: 0 },
  ]);

  const passengers: Passenger[] = [
    {
      id: 1,
      name: 'Nguyễn A',
      idNumber: '111111111111',
      ship: 'SuperDong II',
      date: '20/11/2024',
      time: '07:30',
      price: 169855,
    },
    {
      id: 2,
      name: 'Trần B',
      idNumber: '222222222222',
      ship: 'SuperDong II',
      date: '20/11/2024',
      time: '07:30',
      price: 169855,
    },
    {
      id: 3,
      name: 'Lê C',
      idNumber: '333333333333',
      ship: 'SuperDong II',
      date: '20/11/2024',
      time: '07:30',
      price: 169855,
    },
  ];

  const customerInfo = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvan_a@gmail.com',
    phone: '(0297) 3980 111',
  };

  const invoiceInfo = {
    buyer: 'Hà Nguyệt Nhi',
    company: 'CÔNG TY CỔ PHẦN TÀU CAO TỐC SUPERDONG-KIÊN GIANG',
    taxId: '1700556108',
    address: '187 Nguyễn Trung Trực, Khu phố 5, Phường Dương Đông, Thành phố Phú Quốc, Kiên Giang',
  };

  const handleServiceQuantityChange = (index: number, value: number) => {
    const newServices = [...services];
    newServices[index].quantity = Math.max(0, value);
    setServices(newServices);
  };

  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === 'summer2024') {
      setPromoApplied(true);
      alert('Mã giảm giá đã được áp dụng thành công!');
    } else {
      alert('Mã giảm giá không hợp lệ!');
    }
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

  const totalTicketPrice = passengers.reduce((sum, p) => sum + p.price, 0);
  const totalServicePrice = services.reduce((sum, s) => sum + s.price * s.quantity, 0);
  const discount = promoApplied ? Math.floor((totalTicketPrice + totalServicePrice) * 0.1) : 0;
  
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        <BookingInfo customerInfo={customerInfo} invoiceInfo={invoiceInfo} />
        <PassengerList passengers={passengers} />
        <ServiceList services={services} onQuantityChange={handleServiceQuantityChange} />
        <PromoCode
          promoCode={promoCode}
          promoApplied={promoApplied}
          onPromoCodeChange={setPromoCode}
          onApplyPromo={handlePromoCode}
        />
        <TotalAmount
          totalTicketPrice={totalTicketPrice}
          totalServicePrice={totalServicePrice}
          discount={discount}
        />
        <PaymentMethods 
          selectedMethod={paymentMethod}
          onMethodSelect={setPaymentMethod}
        />

        {/* Action Buttons */}
        <div className="flex justify-between">
            <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                onClick={onBack}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Quay lại
            </button>

            <button
              type="button"
              onClick={handlePayment}
              disabled={!paymentMethod}
              className={`
                px-6 py-3 rounded-md text-base font-medium
                ${paymentMethod
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
              `}
            >
              Thanh toán
            </button>
          </div>
      </div>
    </div>
  );
}

export default PaymentInfomation;