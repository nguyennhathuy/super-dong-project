import { useState } from 'react';
import BookerInformation from './components/BookerInformation';
import SearchTrip from './components/booking/SearchTrip';
import ProgressBar from './components/ProgressBar';
import PassengerInfomation from './components/passenger/PassengerInfomation';
import SeatInfomation from './components/seat/SeatInfomation';
import PaymentInfomation from './components/payment/PaymentInfomation';
import AuthForm from './components/auth/AuthForm';


// const steps: { id: Step; label: string }[] = [
//   { id: 'route', label: 'Tuyến' },
//   { id: 'booker', label: 'Người đặt vé' },
//   { id: 'passengers', label: 'Hành khách' },
//   { id: 'seats', label: 'Chọn ghế ngồi' },
//   { id: 'payment', label: 'Thanh toán' },
// ];


function App() {
  const [currentStep, setCurrentStep] = useState<string>('route')
  const [isLogin, setIsLogin] = useState<boolean>(false);


  const handleSubmitSearchTrip = (data: any) => {
    setCurrentStep('booker');
  }

  const handleSubmitBooker = (data: any) => {
    console.log('Form submitted:', data);
    setCurrentStep('passengers');
  };

  const handleBackBooker = () => {
    console.log('handleBackBooker')
    setCurrentStep('route');
  }

  const handleSubmitPassenser = () => {
    setCurrentStep('seats');
  }

  const handleBackPassenser = () => {
    console.log('handleBackPassenser')
    setCurrentStep('booker');
  }

  const handleSubmitSeat = () => {
    console.log('handleSubmitSeat')
    setCurrentStep('payment');
  }

  const handleBackSeat = () => {
    console.log('handleBackPassenser')
    setCurrentStep('passengers');
  }

  const handleSubmitPayment = () => {
    console.log('handleSubmitPayment')
    //setCurrentStep('payment');
  }

  const handleBackPayment = () => {
    console.log('handleBackPassenser')
    setCurrentStep('seats');
  }

  const renderSwitch = (param: string) => {
    switch(param) {
      case 'route':
        return <SearchTrip 
                  onSubmit={handleSubmitSearchTrip}
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
        return <>Error</>;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {
          !isLogin ?
          <AuthForm 
            onSubmit={setIsLogin}
          /> : 
          <>
            <ProgressBar currentStep={currentStep} />
            {renderSwitch(currentStep)}
          </>
        }
      </div>
    </div>
  );
}

export default App;