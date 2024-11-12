import React from 'react';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  subItems?: any;
}

interface NavbarProps {
  menuItems: MenuItem[];
  activeMenu: string;
  showSubMenu: boolean;
  onMenuClick: (menuId: string) => void;
  currSubItem: number | null;
  setCurrSubItem: (data: number | null) => void;
  setActiveMenu: (data: string) => void
  setShowSubMenu: (data: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  menuItems,
  activeMenu,
  showSubMenu,
  onMenuClick,
  setCurrSubItem,
  setActiveMenu,
  setShowSubMenu
}) => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  onClick={() => onMenuClick(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${
                      activeMenu === item.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.subItems && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        showSubMenu  ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>
                {item.subItems && showSubMenu && (
                  <div className="absolute z-10 left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.id}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={
                            () => {
                              setActiveMenu('nghiep-vu-ve')
                              setCurrSubItem(subItem.id)
                              setShowSubMenu(false)
                            }
                          }
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;