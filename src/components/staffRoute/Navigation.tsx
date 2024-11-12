import React from 'react';
import { Ship, BarChart3, Ticket } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dat-ve', label: 'Đặt vé', icon: Ship },
    { id: 'nghiep-vu', label: 'Nghiệp vụ vé', icon: Ticket },
    { id: 'thong-ke', label: 'Thống kê', icon: BarChart3 },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8 h-16">
          <div className="flex items-center space-x-8">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors
                  ${activeTab === id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;