import React, { useState } from 'react';
import { Eye, EyeOff, Facebook, Github, Mail } from 'lucide-react';
import { UserData } from '../../types';

type AuthMode = 'login' | 'register' | 'forgot';

type Props = {
  onSubmit: (data: string) => void;
  userData: UserData;
  setUserData: (data: UserData) => void;
}

export default function AuthForm({ onSubmit, userData, setUserData }: Props) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }

    if (mode === 'register') {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Mật khẩu không khớp';
      }
      if (!formData.fullName) {
        newErrors.fullName = 'Vui lòng nhập họ tên';
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
    if(
      formData.email === "khachhang@gmail.com" && formData.password === "123456"
    ){
      setUserData({
        ...userData,
        personal: {
          ...userData.personal,
          email: "khachhang@gmail.com"
        }
      })
      onSubmit('khachHang');
    }
    if(
      formData.email === "nhanvien@gmail.com" && formData.password === "123456"
    ){
      setUserData({
        ...userData,
        personal: {
          ...userData.personal,
          email: "nhanvien@gmail.com"
        }
      })
      onSubmit('nhanVien');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {mode === 'login' && 'Đăng Nhập'}
          {mode === 'register' && 'Đăng Ký'}
          {mode === 'forgot' && 'Quên Mật Khẩu'}
        </h1>
        <p className="text-gray-600">
          {mode === 'login' && 'Chào mừng bạn trở lại'}
          {mode === 'register' && 'Tạo tài khoản mới'}
          {mode === 'forgot' && 'Nhập email để khôi phục mật khẩu'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'register' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Họ và tên
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Nhập họ và tên"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="example@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {mode !== 'forgot' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
        )}

        {mode === 'register' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
        >
          {mode === 'login' && 'Đăng Nhập'}
          {mode === 'register' && 'Đăng Ký'}
          {mode === 'forgot' && 'Gửi Yêu Cầu'}
        </button>
      </form>

      {mode === 'login' && (
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Hoặc đăng nhập với
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button className="flex justify-center items-center py-2 px-4 border rounded-lg hover:bg-gray-50 transition duration-200">
              <Facebook className="text-blue-600" size={20} />
            </button>
            <button className="flex justify-center items-center py-2 px-4 border rounded-lg hover:bg-gray-50 transition duration-200">
              <Mail className="text-red-500" size={20} />
            </button>
            <button className="flex justify-center items-center py-2 px-4 border rounded-lg hover:bg-gray-50 transition duration-200">
              <Github className="text-gray-800" size={20} />
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 text-center text-sm">
        {mode === 'login' ? (
          <>
            <button
              onClick={() => setMode('forgot')}
              className="text-blue-600 hover:underline"
            >
              Quên mật khẩu?
            </button>
            <div className="mt-2">
              Chưa có tài khoản?{' '}
              <button
                onClick={() => setMode('register')}
                className="text-blue-600 hover:underline font-medium"
              >
                Đăng ký ngay
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={() => setMode('login')}
            className="text-blue-600 hover:underline font-medium"
          >
            Quay lại đăng nhập
          </button>
        )}
      </div>
    </div>
  );
}