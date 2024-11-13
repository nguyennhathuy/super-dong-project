import React, { useState, useRef, useEffect } from 'react';
import { History, Settings, LogOut, User2, Ship } from 'lucide-react';

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void
}

interface Props {
    isLogin: string | null;
    setIsLogin: (data: string | null) => void;
    currUserMenu: 'order' | 'history' | 'setting'
    setCurrUserMenu: (data: 'order' | 'history' | 'setting') => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors duration-200"
  >
    {icon}
    <span className="text-sm font-medium">{text}</span>
  </button>
);

export const UserMenu = ({ setIsLogin, currUserMenu, setCurrUserMenu, isLogin }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsLogin(null);
    setIsOpen(false);
    setCurrUserMenu('order')
  };

  const handleHistoryClick = () => {
    setCurrUserMenu('history')
    setIsOpen(false);
  };

  const handleSettingsClick = () => {
    setCurrUserMenu('setting')
    setIsOpen(false);
  };
  
  const handleOrderClick = () => {
    setCurrUserMenu('order')
    setIsOpen(false);
  }
  console.log({ isLogin })
  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        aria-label="Menu người dùng"
      >
        <User2 className="w-6 h-6 text-gray-700" />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" />
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-60 md:w-72 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-gray-200">
          <div className="py-2">
            {
                !(isLogin === 'nhanVien') &&
                <MenuItem
                    icon={<Ship className="w-5 h-5 text-gray-600" />}
                    text="Dặt vé"
                    onClick={handleOrderClick}
                />
            }
            {
                !(isLogin === 'nhanVien') &&
                <MenuItem
                    icon={<History className="w-5 h-5 text-gray-600" />}
                    text="Tra cứu Lịch sử đặt vé"
                    onClick={handleHistoryClick}
                />
            }
            {
                !(isLogin === 'nhanVien') &&
                <MenuItem
                    icon={<Settings className="w-5 h-5 text-gray-600" />}
                    text="Thiết lập thông tin"
                    onClick={handleSettingsClick}
                />
            }

            <div className="h-px bg-gray-200 my-2" />
            <MenuItem
              icon={<LogOut className="w-5 h-5 text-red-500" />}
              text="Đăng xuất"
              onClick={handleLogout}
            />
          </div>
        </div>
      )}
    </div>
  );
};