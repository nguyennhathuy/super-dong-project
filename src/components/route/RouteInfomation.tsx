import { useState } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import TripSelector from './TripSelector';
import RouteSelector from './RouteSelector';
import PassengerSelector from './PassengerSelector';
import DateSelector from './DateSelector';
import TripResults from './TripResults';
import { PassengerCounts } from '../../types';
import { calculatePassengers } from '../../utils';
import Promotions from './Promotions';
import RouteHistory from './RouteHistory';


type Props = {
    onSubmit: () => void;
    totalPassenger: PassengerCounts;
    setTotalPassenger: (data: PassengerCounts) => void;
    tripType: 'oneWay' | 'roundTrip';
    setTripType: (data: 'oneWay' | 'roundTrip') => void;
    departureDate: Date | null
    returnDate: Date | null
    departurePoint: string
    destinationPoint: string
    setDepartureDate: (data: Date | null) => void;
    setReturnDate: (data: Date | null) => void;
    setDeparturePoint: (data: string) => void;
    setDestinationPoint: (data: string) => void;
}


function RouteInfomation(
    {
        onSubmit,
        totalPassenger,
        setTotalPassenger,
        tripType,
        setTripType,
        departureDate,
        returnDate,
        departurePoint,
        destinationPoint,
        setDepartureDate,
        setReturnDate,
        setDeparturePoint,
        setDestinationPoint
    }
        : Props) {
    // const [departureDate, setDepartureDate] = useState<Date | null>(null);
    // const [returnDate, setReturnDate] = useState<Date | null>(null);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [formErrors, setFormErrors] = useState<string[]>([]);
    // const [departurePoint, setDeparturePoint] = useState<string>('');
    // const [destinationPoint, setDestinationPoint] = useState<string>('');

    const handleSearch = () => {
        const errors = [
            !departurePoint && 'Vui lòng chọn điểm đi',
            !destinationPoint && 'Vui lòng chọn điểm đến',
            !departureDate && 'Vui lòng chọn ngày khởi hành',
            tripType === 'roundTrip' && !returnDate && 'Vui lòng chọn ngày về',
            (
                (departurePoint && destinationPoint) &&
                (departurePoint === destinationPoint)
            ) && 'Vui lòng chọn điểm đi và điểm đến khác nhau',
            (
                (departureDate && returnDate) &&
                (departureDate > returnDate)
            ) && 'Vui lòng chọn ngày đi sớm hơn hoặc bằng ngày về',
            calculatePassengers(totalPassenger) === 0 && 'Vui lòng chọn hành khách'
        ].filter(Boolean) as string[];
        setFormErrors(errors);
        setShowResults(errors.length === 0);
    };

    return (
        <>
            {/* Main Content */}
            <main className="bg-white rounded-xl shadow-sm pr-6 pl-6">
                
                <div className="p-6 mx-auto">
                    <h2 className="text-2xl font-semibold mb-6 mt-6">Tìm Chuyến Tàu</h2>

                    {/* Search Form */}
                    <div className="space-y-6">
                        <TripSelector
                            tripType={tripType}
                            setTripType={setTripType}
                            setShowResults={setShowResults}
                        />
                        <RouteSelector
                            setShowResults={setShowResults}
                            departurePoint={departurePoint}
                            destinationPoint={destinationPoint}
                            setDeparturePoint={setDeparturePoint}
                            setDestinationPoint={setDestinationPoint}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DateSelector
                                label="Ngày đi"
                                date={departureDate}
                                setDate={setDepartureDate}
                                setShowResults={setShowResults}
                            />
                            {tripType === 'roundTrip' && (
                                <DateSelector
                                    label="Ngày về"
                                    date={returnDate}
                                    setDate={setReturnDate}
                                    minDate={departureDate || undefined}
                                    setShowResults={setShowResults}
                                />
                            )}
                        </div>
                        <PassengerSelector
                            setShowResults={setShowResults}
                            passengerCount={totalPassenger}
                            setPassengerCount={setTotalPassenger}
                        />
                        {formErrors.length > 0 && (
                            <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                                {formErrors.map((error, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <AlertCircle className="h-5 w-5" />
                                        <span>{error}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <button
                            onClick={handleSearch}
                            className="w-full bg-tertiary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
                        >
                            <span>Tìm Tàu</span>
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>

                    {showResults &&
                        <TripResults
                            tripType={tripType}
                            onSubmit={onSubmit}
                        />
                    }
                    <h2 className="text-2xl font-semibold mb-6 mt-10">Thông tin khuyến mãi</h2>
                    <Promotions />
                    <h2 className="text-2xl font-semibold mb-6 mt-10">Tuyến đi gần nhất</h2>
                    <RouteHistory />
                </div>
            </main>
        </>
    );
}

export default RouteInfomation;