import { useState } from 'react';
import BookerInformation from './components/booker/BookerInformation';
import ProgressBar from './components/ProgressBar';
import PassengerInfomation from './components/passenger/PassengerInfomation';
import SeatInfomation from './components/seat/SeatInfomation';
import PaymentInfomation from './components/payment/PaymentInfomation';
import AuthForm from './components/auth/AuthForm';
import { BarChart2, Settings, Ship, Ticket } from 'lucide-react';
import RouteInfomation from './components/route/RouteInfomation';
import { PassengerCounts } from './types';
import { calculatePassengers } from './utils';
import StaffRouteInfomation from './components/staffRoute/StaffRouteInfomation';
import Navigation from './components/staffRoute/Navigation';
import StaffPassengerInfomation from './components/staffPassenger/StaffPassengerInfomation';
import StaffSeatInfomation from './components/staffSeat/StaffSeatInfomation';
import StaffPaymentInfomation from './components/staffPayment/StaffPaymentInfomation';
import Navbar from './components/thongKe/Navbar';
import ThongKeInfomation from './components/thongKe/ThongKeInfomation';

const menuItems = [
  {
    id: 'dat-ve',
    label: 'Đặt vé',
    icon: <Ticket className="w-5 h-5" />,
  },
  {
    id: 'nghiep-vu-ve',
    label: 'Nghiệp vụ vé',
    icon: <Settings className="w-5 h-5" />,
    subItems: [
      {
        id: 1,
        name: 'Điều chỉnh thông tin hóa đơn',
      },
      {
        id: 2,
        name: 'Điều chỉnh thông tin vé',
      
      },
      {
        id: 3,
        name: 'Hoàn vé & Đổi vé',
      
      }
    ],
  },
  {
    id: 'thong-ke',
    label: 'Thống kê',
    icon: <BarChart2 className="w-5 h-5" />,
  },
];

type PassengerType =
  | ''
  | 'Trẻ sơ sinh'
  | 'Trẻ em'
  | 'Người lớn'
  | 'Người cao tuổi'
  | 'Người khuyết tật';

type BookerFormData = {
  name: string;
  phone: string;
  email: string;
  isPrimaryPassenger: boolean;
  companyContact?: string;
  companyName?: string;
  taxCode?: string;
  companyAddress?: string;
};

interface Passenger {
  nationality: string;
  idNumber: string;
  fullName: string;
  birthPlace: string;
  birthDate: string;
  phone: string;
  email: string;
  specialNeeds: boolean;
  passengerType: PassengerType;
  seatGo?: string;
  seatReturn?: string;
  ship?: string;
  date?: string;
  time?: string;
  price?: number;
}

const INITIAL_PASSENGER: Passenger = {
  nationality: '',
  idNumber: '',
  fullName: '',
  birthPlace: '',
  birthDate: '',
  phone: '',
  email: '',
  specialNeeds: false,
  passengerType: '',
};

function App() {
  const [currentStep, setCurrentStep] = useState<string>('route');
  const [isLogin, setIsLogin] = useState<string | null>(null);
  const [totalPassenger, setTotalPassenger] = useState<PassengerCounts>({
    infant: 0,
    child: 0,
    adult: 1,
    senior: 0
  });
  const [currentStepStaff, setCurrentStepStaff] = useState<string>('routeStaff')
  const [tripType, setTripType] = useState<'oneWay' | 'roundTrip'>('oneWay');
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [departurePoint, setDeparturePoint] = useState<string>('');
  const [destinationPoint, setDestinationPoint] = useState<string>('');
  const [formData, setFormData] = useState<BookerFormData>({
    name: '',
    phone: '',
    email: '',
    isPrimaryPassenger: false,
  });
  const [passengers, setPassengers] = useState<Passenger[]>(
    () => Array.from({ length: calculatePassengers(totalPassenger) }, () => ({ ...INITIAL_PASSENGER }))
  );
  const [activeMenu, setActiveMenu] = useState('dat-ve');
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [currSubItem, setCurrSubItem] = useState<number | null>(null);
  const handleMenuClick = (menuId: string) => {
    if (menuId !== 'nghiep-vu-ve') {
      setShowSubMenu(false);
      setActiveMenu(menuId);
      setCurrSubItem(null)
    }
    if (menuId === 'nghiep-vu-ve') {
      setShowSubMenu(!showSubMenu);
    }
  };
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
    console.log('done')
  }

  const handleBackPayment = () => {
    setCurrentStep('seats');
  }

  const handleSubmitSearchTripStaff = () => {
    setCurrentStepStaff('passengersStaff');
  }

  const handleSubmitPassenserStaff = () => {
    setCurrentStepStaff('seatsStaff');
  }

  const handleBackPassenserStaff = () => {
    setCurrentStepStaff('routeStaff');
  }

  const handleSubmitSeatStaff = () => {
    setCurrentStepStaff('paymentStaff');
  }

  const handleBackSeatStaff = () => {
    setCurrentStepStaff('passengersStaff');
  }

  const handleSubmitPaymentStaff = () => {
    console.log('done')
  }

  const handleBackPaymentStaff = () => {
    setCurrentStepStaff('seatsStaff');
  }

  const renderSwitch = (param: string) => {
    switch (param) {
      case 'route':
        return <RouteInfomation
          onSubmit={handleSubmitSearchTrip}
          totalPassenger={totalPassenger}
          setTotalPassenger={setTotalPassenger}
          tripType={tripType}
          setTripType={setTripType}
          departureDate={departureDate}
          returnDate={returnDate}
          departurePoint={departurePoint}
          destinationPoint={destinationPoint}
          setDepartureDate={setDepartureDate}
          setReturnDate={setReturnDate}
          setDeparturePoint={setDeparturePoint}
          setDestinationPoint={setDestinationPoint}
        />;
      case 'booker':
        return <BookerInformation
          onSubmit={handleSubmitBooker}
          onBack={handleBackBooker}
          formData={formData}
          setFormData={setFormData}
        />;
      case 'passengers':
        return <PassengerInfomation
          onSubmit={handleSubmitPassenser}
          onBack={handleBackPassenser}
          countPassenger={calculatePassengers(totalPassenger)}
          passengers={passengers}
          setPassengers={setPassengers}
        />;
      case 'seats':
        return <SeatInfomation
          onSubmit={handleSubmitSeat}
          onBack={handleBackSeat}
          passengers={passengers}
          setPassengers={setPassengers}
          tripType={tripType}
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

  const renderSwitchStaff = (param: string) => {
    switch (param) {
      case 'routeStaff':
        return <StaffRouteInfomation
          onSubmit={handleSubmitSearchTripStaff}
        />;
      case 'passengersStaff':
        return <StaffPassengerInfomation
          onSubmit={handleSubmitPassenserStaff}
          onBack={handleBackPassenserStaff}
        />;
      case 'seatsStaff':
        return <StaffSeatInfomation
          onSubmit={handleSubmitSeatStaff}
          onBack={handleBackSeatStaff}
        />
      case 'paymentStaff':
        return <StaffPaymentInfomation
          onSubmit={handleSubmitPaymentStaff}
          onBack={handleBackPaymentStaff}
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
          <Navbar
            menuItems={menuItems}
            activeMenu={activeMenu}
            showSubMenu={showSubMenu}
            onMenuClick={handleMenuClick}
            currSubItem={currSubItem}
            setCurrSubItem={setCurrSubItem}
            setActiveMenu={setActiveMenu}
            setShowSubMenu={setShowSubMenu}
          />
        )
      }


      <div className="max-w-7xl mx-auto px-4 py-8">
        {
          !isLogin &&
          <AuthForm
            onSubmit={setIsLogin}
          />
        }
        {
          isLogin === 'khachHang' &&
          <>
            <ProgressBar
              currentStep={currentStep}
            />
            {renderSwitch(currentStep)}
          </>
        }
        {
          (isLogin === 'nhanVien' && activeMenu === 'dat-ve') &&
          <>
            {renderSwitchStaff(currentStepStaff)}
          </>
        }
        {
          (isLogin === 'nhanVien' && activeMenu === 'thong-ke') &&
          <>
            <ThongKeInfomation />
          </>
        }
        {
          (isLogin === 'nhanVien' && activeMenu === 'nghiep-vu-ve' && currSubItem === 1) &&
          <>
            1
          </>
        }
        {
          (isLogin === 'nhanVien' && activeMenu === 'nghiep-vu-ve' && currSubItem === 2) &&
          <>
            2
          </>
        }
        {
          (isLogin === 'nhanVien' && activeMenu === 'nghiep-vu-ve' && currSubItem === 3) &&
          <>
            3
          </>
        }
      </div>
    </div>
  );
}

export default App;