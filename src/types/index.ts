export type TripType = 'oneWay' | 'roundTrip';

export type Route = {
  id: string;
  from: string;
  to: string;
};

export type PassengerType = 'adult' | 'child' | 'senior';

export type Passengers = {
  [key in PassengerType]: number;
};

export type Ferry = {
  id: string;
  name: string;
  departureTime: string;
  availableSeats: number;
  totalSeats: number;
  price: number;
};

export type BookingStep = 'route' | 'booker' | 'passengers' | 'seats' | 'payment';