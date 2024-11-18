import { useState } from 'react';
import FileUpload from './FileUpload';
import PassengerForm from './PassengerForm';
import TripSummary from './TripSummary';
import { Passenger } from '../../types';

const initialPassenger: Passenger = {
  id: '',
  nationality: 'Việt Nam',
  idNumber: '',
  fullName: '',
  birthPlace: '',
  birthDate: '',
  phone: '',
  email: '',
  specialNeeds: false,
  passengerType: '',
};

const tripInfo = {
  trainCode: 'SuperDong II',
  from: 'Rạch Giá',
  to: 'Côn Đảo',
  departureDate: '2024-03-20',
  departureTime: '08:00',
};

interface Props {
  onSubmit: () => void;
  onBack: () => void;
}

export default function StaffPassengerInfomation({ onSubmit, onBack }: Props) {
  const [passengers, setPassengers] = useState<Passenger[]>([
    { ...initialPassenger },
    { ...initialPassenger },
    { ...initialPassenger },
  ]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validatePassenger = (passenger: Passenger, index: number) => {
    const newErrors: Record<string, string> = {};

    if (!passenger.nationality) {
      newErrors[`${index}.nationality`] = 'Vui lòng chọn quốc tịch';
    }

    if (!passenger.idNumber) {
      newErrors[`${index}.idNumber`] = 'Vui lòng nhập CCCD/Hộ chiếu';
    }

    if (!passenger.fullName) {
      newErrors[`${index}.fullName`] = 'Vui lòng nhập họ tên';
    }

    if (!passenger.birthDate) {
      newErrors[`${index}.birthDate`] = 'Vui lòng nhập ngày sinh';
    }

    if (!passenger.phone) {
      newErrors[`${index}.phone`] = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10}$/.test(passenger.phone)) {
      newErrors[`${index}.phone`] = 'Số điện thoại không hợp lệ';
    }

    if (!passenger.email) {
      newErrors[`${index}.email`] = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(passenger.email)) {
      newErrors[`${index}.email`] = 'Email không hợp lệ';
    }

    return newErrors;
  };

  const handlePassengerChange = (index: number, data: Partial<Passenger>) => {
    const updatedPassengers = passengers.map((p, i) => {
      if (i === index) {
        const updated = { ...p, ...data };
        
        // Calculate passenger type based on age and special condition
        if (updated.birthDate && updated.specialNeeds) {
          updated.passengerType = 'disabled';
        } else if (updated.birthDate) {
          const age = calculateAge(updated.birthDate);
          if (age < 2) updated.passengerType = 'infant';
          else if (age >= 2 && age < 12) updated.passengerType = 'child';
          else if (age >= 61) updated.passengerType = 'senior';
          else updated.passengerType = 'adult';
        }

        return updated;
      }
      return p;
    });

    setPassengers(updatedPassengers);
    
    // Validate the updated passenger
    const newErrors = validatePassenger(updatedPassengers[index], index);
    setErrors(prev => ({ ...prev, ...newErrors }));
  };

  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <FileUpload />
            
            <div className="space-y-6">
              {passengers.map((passenger, index) => (
                <PassengerForm
                  key={index}
                  passenger={passenger}
                  index={index}
                  onChange={handlePassengerChange}
                  errors={errors}
                />
              ))}
            </div>
          </div>
          
          <div>
            <TripSummary 
              passengers={passengers}
              tripInfo={tripInfo}
              onSubmit={onSubmit}
              onBack={onBack}
            />
          </div>
        </div>
      </main>
    </div>
  );
}