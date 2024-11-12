import React from 'react';
import { PassengerForm } from './PassengerForm'; 
import { TripSummary } from './TripSummary'; 
import { validateEmail, validatePhone } from '../../utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export type PassengerType = 
  | ''
  | 'Trẻ sơ sinh'
  | 'Trẻ em'
  | 'Người lớn'
  | 'Người cao tuổi'
  | 'Người khuyết tật';

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
}

interface TripInfo {
    shipCode: string;
    departure: string;
    destination: string;
    departureDate: string;
    departureTime: string;
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

const MOCK_TRIP_INFO: TripInfo = {
  shipCode: 'SuperDong II',
  departure: 'Rạch Giá',
  destination: 'Côn Đảo',
  departureDate: '2024-03-20',
  departureTime: '08:00',
};

type Props = {
    onSubmit: () => void;
    onBack: () => void;
  };

const PassengerInfomation = ({ onSubmit, onBack }: Props) => {
  const [passengers, setPassengers] = React.useState<Passenger[]>([
    { ...INITIAL_PASSENGER },
    { ...INITIAL_PASSENGER },
  ]);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handlePassengerChange = (index: number, field: keyof Passenger, value: any) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = {
      ...updatedPassengers[index],
      [field]: value,
    };
    setPassengers(updatedPassengers);
    
    // Clear error for the changed field
    const errorKey = `passengers.${index}.${field}`;
    if (errors[errorKey]) {
      const newErrors = { ...errors };
      delete newErrors[errorKey];
      setErrors(newErrors);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    const usedIds = new Set<string>();

    passengers.forEach((passenger, index) => {
      if (!passenger.nationality) {
        newErrors[`passengers.${index}.nationality`] = 'Vui lòng chọn quốc tịch';
        isValid = false;
      }

      if (!passenger.idNumber) {
        newErrors[`passengers.${index}.idNumber`] = 'Vui lòng nhập CCCD/Hộ chiếu';
        isValid = false;
      } else if (usedIds.has(passenger.idNumber)) {
        newErrors[`passengers.${index}.idNumber`] = 'CCCD/Hộ chiếu đã được sử dụng';
        isValid = false;
      } else {
        usedIds.add(passenger.idNumber);
      }

      if (!passenger.fullName) {
        newErrors[`passengers.${index}.fullName`] = 'Vui lòng nhập họ tên';
        isValid = false;
      }

      if (!passenger.birthDate) {
        newErrors[`passengers.${index}.birthDate`] = 'Vui lòng chọn ngày sinh';
        isValid = false;
      }

      if (!passenger.phone) {
        newErrors[`passengers.${index}.phone`] = 'Vui lòng nhập số điện thoại';
        isValid = false;
      } else if (!validatePhone(passenger.phone)) {
        newErrors[`passengers.${index}.phone`] = 'Số điện thoại không hợp lệ';
        isValid = false;
      }

      if (!passenger.email) {
        newErrors[`passengers.${index}.email`] = 'Vui lòng nhập email';
        isValid = false;
      } else if (!validateEmail(passenger.email)) {
        newErrors[`passengers.${index}.email`] = 'Email không hợp lệ';
        isValid = false;
      }
    });

    // Check if at least one adult passenger
    const hasAdult = passengers.some(p => 
      p.passengerType === 'Người lớn' || p.passengerType === 'Người cao tuổi'
    );

    if (!hasAdult) {
      newErrors.general = 'Phải có ít nhất một hành khách là người lớn hoặc người cao tuổi';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Proceed to next step
      console.log('Form is valid, proceeding to next step');
      onSubmit()
    }
  };

  return (
    
        <>
        {errors.general && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {errors.general}
          </div>
        )}

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            {passengers.map((passenger, index) => (
              <PassengerForm
                key={index}
                passenger={passenger}
                index={index}
                onChange={handlePassengerChange}
                errors={errors}
                departureDate={MOCK_TRIP_INFO.departureDate}
              />
            ))}
          </div>
          
          <div>
            <TripSummary
              tripInfo={MOCK_TRIP_INFO}
              passengers={passengers}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-between">
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
            onClick={handleSubmit}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Tiếp tục
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
        </>
  );
}

export default PassengerInfomation;