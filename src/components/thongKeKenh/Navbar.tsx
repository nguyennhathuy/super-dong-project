import React from 'react';
import { Menu, ChevronDown, Ticket, FileText, PieChart } from 'lucide-react';

interface NavbarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  activeSubmenu: string;
  setActiveSubmenu: (submenu: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  activeMenu, 
  setActiveMenu, 
  activeSubmenu, 
  setActiveSubmenu 
}) => {
  const handleMenuClick = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu('');
      setActiveSubmenu('');
    } else {
      setActiveMenu(menu);
      setActiveSubmenu('');
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center">
              <Ticket className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">TicketSystem</span>
            </div>

            {/* Main Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <button 
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeMenu === 'datVe' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => handleMenuClick('datVe')}
                >
                  Đặt vé
                </button>
              </div>

              <div className="relative group">
                <button 
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeMenu === 'nghiepVu' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => handleMenuClick('nghiepVu')}
                >
                  Nghiệp vụ vé
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {activeMenu === 'nghiepVu' && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Điều chỉnh thông tin hóa đơn
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Điều chỉnh thông tin vé
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Hoàn vé & Đổi vé
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button 
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeMenu === 'thongKe' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => handleMenuClick('thongKe')}
                >
                  Thống kê
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {activeMenu === 'thongKe' && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Doanh thu của nhân viên
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Doanh thu của kênh phân phối
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Doanh thu của hệ thống phòng vé
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;