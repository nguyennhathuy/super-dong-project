import { useState } from 'react';
import BookerInformation from './components/booker/BookerInformation';
import ProgressBar from './components/ProgressBar';
import PassengerInfomation from './components/passenger/PassengerInfomation';
import SeatInfomation from './components/seat/SeatInfomation';
import PaymentInfomation from './components/payment/PaymentInfomation';
import AuthForm from './components/auth/AuthForm';
import { BarChart2, Settings, Ticket } from 'lucide-react';
import RouteInfomation from './components/route/RouteInfomation';
import { BookerFormData, BookingStep, Passenger, PassengerCounts, UserData } from './types';
import { calculatePassengers } from './utils';
import StaffRouteInfomation from './components/staffRoute/StaffRouteInfomation';
import StaffPassengerInfomation from './components/staffPassenger/StaffPassengerInfomation';
import StaffSeatInfomation from './components/staffSeat/StaffSeatInfomation';
import StaffPaymentInfomation from './components/staffPayment/StaffPaymentInfomation';
import Navbar from './components/thongKe/Navbar';
import ThongKeInfomation from './components/thongKe/ThongKeInfomation';
import DieuChinhThongTinHoaDon from './components/dieuChinhThongTinHoaDon/DieuChinhThongTinHoaDon';
import DieuChinhThongTinVeInfoMation from './components/dieuChinhThongTinVe/DieuChinhThongTinVeInfoMation';
import HoanVeDoiVeInfomation from './components/hoanVeDoiVe/HoanVeDoiVeInfomation';
import ThongKeKenhInfomation from './components/thongKeKenh/ThongKeKenhInfomation';
import ThongKePhongVeInfomation from './components/thongKePhongVe/ThongKePhongVeInfomation';
import { UserMenu } from './components/userSetting/UserMenu';
import { UserSettings } from './components/userSetting/UserSettings';
import OrderHistory from './components/orderHistory/OrderHistory';

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
    subItems: [
      {
        id: 4,
        name: 'Thống kê theo nhân viên',
      },
      {
        id: 5,
        name: 'Thống kê theo kênh phân phối',

      },
      {
        id: 6,
        name: 'Thống kê theo phòng vé',

      }
    ]
  },
];

const INITIAL_PASSENGER: Passenger = {
  id: '',
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
  const [currentStep, setCurrentStep] = useState<BookingStep>('route');
  const [isLogin, setIsLogin] = useState<string | null>(null);
  const [totalPassenger, setTotalPassenger] = useState<PassengerCounts>({
    infant: 0,
    child: 0,
    adult: 1,
    senior: 0
  });
  const [currentStepStaff, setCurrentStepStaff] = useState<string>('routeStaff');
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
  const [showSubMenu, setShowSubMenu] = useState<string | null>(null);
  const [currSubItem, setCurrSubItem] = useState<number | null>(null);
  const [currUserMenu, setCurrUserMenu] = useState<'order' | 'history' | 'setting'>('order');
  const [userData, setUserData] = useState<UserData>({
    personal: {
      name: '',
      phone: '',
      email: ''
    },
    company: undefined,
  });
  const handleMenuClick = (menuId: string) => {
    const toggleSubMenu = (id: string) => {
      setShowSubMenu((prev) => (prev === id ? null : id));
    };
  
    switch (menuId) {
      case 'dat-ve':
        setShowSubMenu(null);
        setActiveMenu(menuId);
        setCurrSubItem(null);
        break;
      case 'nghiep-vu-ve':
      case 'thong-ke':
        toggleSubMenu(menuId);
        break;
      default:
        console.warn(`Unhandled menuId: ${menuId}`);
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
  console.log(
    {
      formData
    }
  )
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
          <nav className="bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-1">
                  <h1 className="text-xl font-semibold text-gray-800">
                    Hệ Thống Đặt Vé
                  </h1>
                </div>
                <UserMenu
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                  currUserMenu={currUserMenu}
                  setCurrUserMenu={setCurrUserMenu}
                />
              </div>
            </div>
          </nav>
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
            setIsLogin={setIsLogin}
            currUserMenu={currUserMenu}
            setCurrUserMenu={setCurrUserMenu}
            isLogin={isLogin}
          />
        )
      }

      <div className="max-w-7xl mx-auto px-4 py-8">
        {
          !isLogin && 
          <AuthForm 
            onSubmit={setIsLogin}
            userData={userData}
            setUserData={setUserData}
          />
        }
        {
          isLogin === 'khachHang' &&
          (
            <>
              {
                currUserMenu === 'order' &&
                (
                  <>
                    <ProgressBar currentStep={currentStep} />
                    {renderSwitch(currentStep)}
                  </>
                )
              }
              {currUserMenu === 'history' && <OrderHistory />}
              {
                currUserMenu === 'setting' && 
                <UserSettings 
                  userData={userData}
                  setUserData={setUserData}
                  formData={formData}
                  setFormData={setFormData}
                />
              }
            </>
          )
        }
        {isLogin === 'nhanVien' && (
          <>
            {activeMenu === 'dat-ve' && renderSwitchStaff(currentStepStaff)}
            {activeMenu === 'thong-ke' && currSubItem &&
              {
                4: <ThongKeInfomation />,
                5: <ThongKeKenhInfomation />,
                6: <ThongKePhongVeInfomation />,
              }[currSubItem]}
            {activeMenu === 'nghiep-vu-ve' && currSubItem &&
              {
                1: <DieuChinhThongTinHoaDon />,
                2: <DieuChinhThongTinVeInfoMation />,
                3: <HoanVeDoiVeInfomation />,
              }[currSubItem]}
          </>
        )}
      </div>
    </div>
  );
}

export default App;