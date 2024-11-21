import { PassengerCounts, PassengerType } from "../types";

export function calculateAge(birthDate: string): number {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const referenceDate = `${year}-${month}-${day}`;

    const birth = new Date(birthDate);
    const reference = new Date(referenceDate);
    
    let age = reference.getFullYear() - birth.getFullYear();
    const monthDiff = reference.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && reference.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  }
  
  export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  }
  
  export function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  export function validatePhone(phone: string): boolean {
    return /^(0[0-9]{9})$/.test(phone);
  }

  export function calculatePassengers(passengerCount: PassengerCounts): number {
    return Object.values(passengerCount).reduce((a, b) => a + b, 0);
  }

  export function validateDateOfBirth(date: string): boolean {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    const d1 = new Date(formattedDate);
    const d2 = new Date(date);
    
    return d1.getTime() < d2.getTime()
}

export const getPassengerTypeLabel = (type: PassengerType) => {
  switch (type) {
    case '':
      return '';
    case 'disabled':
      return 'Người khuyết tật';
    case 'infant':
      return 'Trẻ sơ sinh';
    case 'child':
      return 'Trẻ em';
    case 'adult':
      return 'Người lớn';
    case 'senior':
      return 'Người cao tuổi';
    default:
      return 'Không xác định'; // Trường hợp không nằm trong danh sách
  }
}