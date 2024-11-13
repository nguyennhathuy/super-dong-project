import React, { useState } from 'react';
import { ChevronDown, Ticket, Settings, BarChart3 } from 'lucide-react';

interface NavbarProps {
  selectedMenu: string;
  selectedSubmenu: string;
  onMenuSelect: (menu: string) => void;
  onSubmenuSelect: (submenu: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  selectedMenu,
  selectedSubmenu,
  onMenuSelect,
  onSubmenuSelect
}) => {
  const [isNghiepVuOpen, setIsNghiepVuOpen] = useState(false);
  const [isThongKeOpen, setIsThongKeOpen] = useState(false);

  const menuItems = {
    'dat-ve': {
      label: 'Đặt vé',
      icon: Ticket,
      subItems: {}
    },
    'nghiep-vu': {
      label: 'Nghiệp vụ vé',
      icon: Settings,
      subItems: {
        'dieu-chinh-hoa-don': 'Điều chỉnh thông tin hóa đơn',
        'dieu-chinh-ve': 'Điều chỉnh thông tin vé',
        'hoan-doi-ve': 'Hoàn vé & Đổi vé'
      }
    },
    'thong-ke': {
      label: 'Thống kê',
      icon: BarChart3,
      subItems: {
        'doanh-thu-nhan-vien': 'Doanh thu của nhân viên',
        'doanh-thu-kenh': 'Doanh thu của kênh phân phối',
        'doanh-thu-he-thong': 'Doanh thu của hệ thống phòng vé'
      }
    }
  };

  const handleMenuClick = (menu: string) => {
    onMenuSelect(menu);
    if (menu === 'nghiep-vu') {
      setIsNghiepVuOpen(!isNghiepVuOpen);
      setIsThongKeOpen(false);
    } else if (menu === 'thong-ke') {
      setIsThongKeOpen(!isThongKeOpen);
      setIsNghiepVuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="flex space-x-4">
            {Object.entries(menuItems).map(([key, item]) => {
              const Icon = item.icon;
              return (
                <div key={key} className="relative">
                  <button
                    onClick={() => handleMenuClick(key)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors
                      ${selectedMenu === key 
                        ? 'bg-blue-500 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                    {Object.keys(item.subItems).length > 0 && (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </button>
                  
                  {Object.keys(item.subItems).length > 0 && (
                    <div
                      className={`absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all transform origin-top-right
                        ${((key === 'nghiep-vu' && isNghiepVuOpen) || 
                           (key === 'thong-ke' && isThongKeOpen))
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                    >
                      <div className="py-1">
                        {Object.entries(item.subItems).map(([subKey, subLabel]) => (
                          <button
                            key={subKey}
                            onClick={() => {
                              onSubmenuSelect(subKey);
                              setIsNghiepVuOpen(false);
                              setIsThongKeOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-2 text-sm
                              ${selectedSubmenu === subKey
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700 hover:bg-gray-50'
                              }`}
                          >
                            {subLabel}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;