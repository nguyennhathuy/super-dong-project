export type TripType = 'oneWay' | 'roundTrip';
export type BookingStep = 'route' | 'booker' | 'passengers' | 'seats' | 'payment';
export type PassengerType = '' | 'infant' | 'child' | 'adult' | 'senior' | 'disabled';


export type Route = {
  id: string;
  from: string;
  to: string;
};


export type Passengers = {
  [key in PassengerType]: number;
};

export interface PassengerCounts {
  infant: number;
  child: number;
  adult: number;
  senior: number;
}


export interface UserData {
  personal: {
    name: string;
    phone: string;
    email: string;
  };
  company?: {
    buyer: string;
    name: string;
    taxId: string;
    address: string;
  };
  parentId: string
}

export type BookerFormData = {
  name: string;
  phone: string;
  email: string;
  isPrimaryPassenger: boolean;
  companyContact?: string;
  companyName?: string;
  taxCode?: string;
  companyAddress?: string;
};

export interface Passenger {
  id: string;
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

export interface Account {
  id: string,
  email: string,
  password: string,
  fullName: string,
  role: string,
}


export interface PassengerFriend {
  parentId: string,
  id: string;
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