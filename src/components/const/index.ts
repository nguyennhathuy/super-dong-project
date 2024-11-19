import { Account, PassengerFriend } from "../../types";

export const mockTrips = [
  {
    id: 1,
    name: 'Tàu Cao Tốc 01',
    departure: '07:00',
    date: '15/03/2024',
    availableSeats: 45,
    status: 'available'
  },
  {
    id: 2,
    name: 'Tàu Cao Tốc 02',
    departure: '09:30',
    date: '15/03/2024',
    availableSeats: 0,
    status: 'sold'
  },
  {
    id: 3,
    name: 'Tàu Cao Tốc 03',
    departure: '13:00',
    date: '15/03/2024',
    availableSeats: 12,
    status: 'available'
  }
];

export const routes = [
  'Rạch Giá',
  'Phú Quốc',
  'Côn Đảo',
  'Nam Du',
  'Hà Tiên'
];

export const vietnameseProvinces = [
  'Hà Nội', 'TP Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ',
  'An Giang', 'Bà Rịa - Vũng Tàu', 'Bắc Giang', 'Bắc Kạn', 'Bạc Liêu',
  'Bắc Ninh', 'Bến Tre', 'Bình Định', 'Bình Dương', 'Bình Phước',
  'Bình Thuận', 'Cà Mau', 'Cao Bằng', 'Đắk Lắk', 'Đắk Nông',
  'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang',
  'Hà Nam', 'Hà Tĩnh', 'Hải Dương', 'Hậu Giang', 'Hòa Bình',
  'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu',
  'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Long An', 'Nam Định',
  'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên',
  'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị',
  'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên',
  'Thanh Hóa', 'Thừa Thiên Huế', 'Tiền Giang', 'Trà Vinh', 'Tuyên Quang',
  'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái'
];

export const countries = [
  'Mỹ', 'Úc', 'Canada', 'Anh', 'Pháp', 'Lào', 'Thái Lan'
].sort();

export const accountList: Account[] = [
  {
    id: '1',
    email: 'nhanvien@gmail.com',
    password: '123456',
    fullName: 'Cao Hữu Quý',
    role: 'nhanVien'
  },
  {
    id: '2',
    email: 'khachhang@gmail.com',
    password: '123456',
    fullName: 'Nguyễn Nhật Huy',
    role: 'khachHang'
  }
]

export const passengerFriend: PassengerFriend[] = [];