import React, { useState } from 'react';
import TicketAdjustment from './TicketAdjustment';

function DieuChinhThongTinHoaDon() {
  const [activeMenu, setActiveMenu] = useState('nghiepVuVe');
  const [activeSubmenu, setActiveSubmenu] = useState('dieuChinhHoaDon');

  return (
      <main className="container mx-auto px-4 py-8">
        {activeMenu === 'nghiepVuVe' && activeSubmenu === 'dieuChinhHoaDon' && (
          <TicketAdjustment />
        )}
      </main>
  );
}

export default DieuChinhThongTinHoaDon;