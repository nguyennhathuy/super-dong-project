import { useState } from 'react';
import RevenueStats from './RevenueStats'; 

function ThongKeInfomation() {
  const [activeMenu, setActiveMenu] = useState('thong-ke');



  return (
    <main className="container mx-auto px-4 py-8">
        {activeMenu === 'thong-ke' && <RevenueStats />}
    </main>
  );
}

export default ThongKeInfomation;