import { useState } from 'react';
import SeatMap from './SeatMap'; 
import PassengerList from './PassengerList'; 
import JourneyTabs from './JourneyTabs'; 
import { AlertTriangle, ArrowLeft, ArrowRight } from 'lucide-react';
import { Passenger } from '../../types';


interface Journey {
  shipCode: string;
  departureDate: string;
  departureTime: string;
}

interface Seat {
  id: string;
  type: 'VIP' | 'NORMAL';
  status: 'AVAILABLE' | 'BOOKED' | 'SELECTED' | 'DISABLED';
  price: number;
}

const MOCK_JOURNEY_GO: Journey = {
  shipCode: 'SuperDong III',
  departureDate: '20/11/2024',
  departureTime: '07:00',
};

const MOCK_JOURNEY_RETURN: Journey = {
  shipCode: 'SuperDong II',
  departureDate: '30/11/2024',
  departureTime: '16:00',
};

// Generate mock seats
const generateMockSeats = (): Seat[] => {
  const seats: Seat[] = [];
  for (let i = 1; i <= 36; i++) {
    seats.push({
      id: i.toString().padStart(2, '0'),
      type: i <= 12 ? 'VIP' : 'NORMAL',
      status: Math.random() > 0.7 ? 'BOOKED' : 'AVAILABLE',
      price: i <= 12 ? 200000 : 150000,
    });
  }
  return seats;
};

type Props = {
  onSubmit: () => void;
  onBack: () => void;
  tripType: 'oneWay' | 'roundTrip';
  passengers: Passenger[]
  setPassengers: (data: Passenger[]) => void
};

function SeatInfomation({ onSubmit, onBack, tripType, passengers, setPassengers }: Props) {
  const [activeTab, setActiveTab] = useState<'go' | 'return'>('go');
  // const [passengers, setPassengers] = useState<Passenger[]>(MOCK_PASSENGERS);
  const [seatsGo] = useState<Seat[]>(generateMockSeats());
  const [seatsReturn] = useState<Seat[]>(generateMockSeats());
  const handleSeatSelect = (seatId: string) => {
    const updatedPassengers = [...passengers];
    const passengerToUpdate = updatedPassengers.find(
      (p) => p.passengerType !== 'infant' && 
      (activeTab === 'go' ? !p.seatGo : !p.seatReturn)
    );

    if (passengerToUpdate) {
      if (activeTab === 'go') {
        passengerToUpdate.seatGo = seatId;
      } else {
        passengerToUpdate.seatReturn = seatId;
      }
      setPassengers(updatedPassengers);
    }
  };

  const handleAutoSelectSeats = (type: 'nearest' | 'cheapest') => {
    // Implementation for auto-selecting seats would go here
    console.log(`Auto selecting ${type} seats for ${activeTab} journey`);
  };

  const getSelectedSeats = () => {
    return passengers
      .map((p) => (activeTab === 'go' ? p.seatGo : p.seatReturn))
      .filter((seat): seat is string => !!seat);
  };

  const getMissingSeatsWarning = () => {
    const passengersNeedingSeats = passengers.filter(
      (p) => p.passengerType !== 'infant'
    );
    const seatsSelected = getSelectedSeats().length;
    return passengersNeedingSeats.length > seatsSelected;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Đặt vé tàu</h1>
          <p className="mt-2 text-gray-600">
            Vui lòng chọn ghế cho hành khách
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="flex space-x-4">
                <button
                  onClick={() => handleAutoSelectSeats('nearest')}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Tự động chọn ghế gần nhau
                </button>
                <button
                  onClick={() => handleAutoSelectSeats('cheapest')}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Tự động chọn ghế rẻ nhất
                </button>
              </div>

              <JourneyTabs
                activeTab={activeTab}
                onTabChange={setActiveTab}
                journeyGo={MOCK_JOURNEY_GO}
                journeyReturn={MOCK_JOURNEY_RETURN}
                tripType={tripType}
              />

              <PassengerList
                passengers={passengers}
                onSeatChange={() => {}}
                tripType={tripType}
              />

              {getMissingSeatsWarning() && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Vui lòng chọn ghế cho tất cả hành khách (trừ trẻ sơ sinh)
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <SeatMap
              seats={activeTab === 'go' ? seatsGo : seatsReturn}
              onSeatSelect={handleSeatSelect}
              selectedSeats={getSelectedSeats()}
            />
          </div>
        </div>

        <div className="flex justify-between mt-8 space-x-4">
        <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            onClick={onBack}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay lại
          </button>
          
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            onClick={onSubmit}
          >
            Tiếp tục
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeatInfomation;