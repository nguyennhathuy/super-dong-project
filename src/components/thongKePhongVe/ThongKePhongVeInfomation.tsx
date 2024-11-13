import { useState } from 'react';
import RevenueStats from './RevenueStats';
import DateRangePicker from './DateRangePicker';

function ThongKePhongVeInfomation() {
  const [selectedMenu, setSelectedMenu] = useState('thong-ke');
  const [selectedSubmenu, setSelectedSubmenu] = useState('doanh-thu-he-thong');
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date()
  });

  return (
      
      <main className="container mx-auto px-4 py-8">
        {selectedMenu === 'thong-ke' && selectedSubmenu === 'doanh-thu-he-thong' && (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Doanh thu hệ thống phòng vé
            </h1>
            
            <DateRangePicker
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
              onChange={setDateRange}
            />
            
            <RevenueStats dateRange={dateRange} />
          </>
        )}
      </main>
  );
}

export default ThongKePhongVeInfomation;