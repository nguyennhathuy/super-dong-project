import { useState } from 'react';
import BookerInformation from './components/booker/BookerInformation';
import ProgressBar from './components/ProgressBar';
import PassengerInfomation from './components/passenger/PassengerInfomation';
import SeatInfomation from './components/seat/SeatInfomation';
import PaymentInfomation from './components/payment/PaymentInfomation';
import AuthForm from './components/auth/AuthForm';
import { Ship } from 'lucide-react';
import RouteInfomation from './components/route/RouteInfomation';
import { PassengerCounts } from './types';
import { calculatePassengers } from './utils';
import StaffRouteInfomation from './components/staffRoute/staffRouteInfomation';
import Navigation from './components/staffRoute/Navigation';


function App() {
  const [currentStep, setCurrentStep] = useState<string>('route');
  const [isLogin, setIsLogin] = useState<string | null>(null);
  const [totalPassenger, setTotalPassenger] = useState<PassengerCounts>({
      infant: 0,
      child: 0,
      adult: 1,
      senior: 0
  });
  const [activeTab, setActiveTab] = useState('dat-ve');
  const handleSubmitSearchTrip = () => {
    setCurrentStep('booker');
  }

  const handleSubmitBooker = (data: any) => {
    console.log(data);
    setCurrentStep('passengers');
  };

  const handleBackBooker = () => {
    setCurrentStep('route');
  }

  const handleSubmitPassenser = () => {
    setCurrentStep('seats');
  }

  const handleBackPassenser = () => {
    setCurrentStep('booker');
  }

  const handleSubmitSeat = () => {
    setCurrentStep('payment');
  }

  const handleBackSeat = () => {
    setCurrentStep('passengers');
  }

  const handleSubmitPayment = () => {
    setCurrentStep('payment');
  }

  const handleBackPayment = () => {
    setCurrentStep('seats');
  }

  const renderSwitch = (param: string) => {
    switch (param) {
      case 'route':
        return <RouteInfomation
          onSubmit={handleSubmitSearchTrip}
          totalPassenger={totalPassenger}
          setTotalPassenger={setTotalPassenger}
        />;
      case 'booker':
        return <BookerInformation
          onSubmit={handleSubmitBooker}
          onBack={handleBackBooker}
        />;
      case 'passengers':
        return <PassengerInfomation
          onSubmit={handleSubmitPassenser}
          onBack={handleBackPassenser}
          countPassenger={calculatePassengers(totalPassenger)} 
        />;
      case 'seats':
        return <SeatInfomation
          onSubmit={handleSubmitSeat}
          onBack={handleBackSeat}
        />
      case 'payment':
        return <PaymentInfomation
          onSubmit={handleSubmitPayment}
          onBack={handleBackPayment}
        />
      default:
        return <>404</>;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {
        (isLogin && isLogin === 'khachHang') && (
          <header className="bg-blue-700 text-white py-4">
            <div className="container mx-auto px-4">
              <div className="flex items-center space-x-2">
                <Ship className="h-8 w-8" />
                <h1 className="text-2xl font-bold">Đặt Vé Tàu</h1>
              </div>
            </div>
          </header>
        )
      }
      {
        (isLogin && isLogin === 'nhanVien') && (
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        )
      }
        
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {
          !isLogin ?
            <AuthForm
              onSubmit={setIsLogin}
            /> :
          isLogin === 'khachHang' ?
            <>
              <ProgressBar 
                currentStep={currentStep} 
              />
              {renderSwitch(currentStep)}
            </> :
          <StaffRouteInfomation />
        }
      </div>
    </div>
  );
}

export default App;