import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMenuClick = (menu: string) => {
    if (menu === 'nghiepVuVe') {
      setShowSubMenu(!showSubMenu);
    }
    setActiveMenu(menu);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <Menu className="h-6 w-6 mr-4" />
          
          <div className="flex space-x-1">
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${
                activeMenu === 'datVe' ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
              onClick={() => handleMenuClick('datVe')}
            >
              Đặt vé
            </button>

            <div className="relative">
              <button 
                className={`px-4 py-2 rounded-md transition-colors flex items-center ${
                  activeMenu === 'nghiepVuVe' ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`}
                onClick={() => handleMenuClick('nghiepVuVe')}
              >
                Nghiệp vụ vé
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {showSubMenu && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-1 text-gray-700">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Điều chỉnh thông tin hóa đơn
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Điều chỉnh thông tin vé
                  </button>
                  <button 
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => setShowSubMenu(false)}
                  >
                    Hoàn vé & Đổi vé
                  </button>
                </div>
              )}
            </div>

            <button 
              className={`px-4 py-2 rounded-md transition-colors ${
                activeMenu === 'thongKe' ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
              onClick={() => handleMenuClick('thongKe')}
            >
              Thống kê
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;