import React, { useState } from 'react';
import { Ticket, FileText, BarChart3 } from 'lucide-react';

interface SubMenuItem {
  id: string;
  label: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  subItems?: SubMenuItem[];
}

export default function Navbar({ activeMenu, setActiveMenu }: { 
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: 'dat-ve',
      label: 'Đặt vé',
      icon: <Ticket className="w-5 h-5" />,
    },
    {
      id: 'nghiep-vu-ve',
      label: 'Nghiệp vụ vé',
      icon: <FileText className="w-5 h-5" />,
      subItems: [
        { id: 'dieu-chinh-hoa-don', label: 'Điều chỉnh thông tin hóa đơn' },
        { id: 'dieu-chinh-ve', label: 'Điều chỉnh thông tin vé' },
        { id: 'hoan-doi-ve', label: 'Hoàn vé & Đổi vé' },
      ],
    },
    {
      id: 'thong-ke',
      label: 'Thống kê',
      icon: <BarChart3 className="w-5 h-5" />,
    },
  ];

  const handleMenuClick = (menuId: string, hasSubItems: boolean) => {
    if (hasSubItems) {
      setOpenSubmenu(openSubmenu === menuId ? null : menuId);
    } else {
      setActiveMenu(menuId);
      setOpenSubmenu(null);
    }
  };

  const handleSubMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    setOpenSubmenu(null);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-start">
          {menuItems.map((item) => (
            <div key={item.id} className="relative">
              <button
                onClick={() => handleMenuClick(item.id, !!item.subItems)}
                className={`flex items-center px-6 py-4 text-sm font-medium transition-colors
                  ${activeMenu === item.id || (item.subItems?.some(sub => sub.id === activeMenu))
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </button>

              {item.subItems && openSubmenu === item.id && (
                <div className="absolute z-10 left-0 mt-0 w-64 bg-white shadow-lg rounded-b-lg">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => handleSubMenuClick(subItem.id)}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors
                        ${activeMenu === subItem.id
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}