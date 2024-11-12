import { useState } from 'react';
import BookingForm from './BookingForm';
import RouteList from './RouteList';
import CustomerInfo from './CustomerInfo';
import Navigation from './Navigation';

function StaffRouteInfomation() {
  const [activeTab, setActiveTab] = useState('dat-ve');
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [passengers, setPassengers] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      
      
      {activeTab === 'dat-ve' && (
        <main className="container mx-auto px-4 py-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4">
              <BookingForm 
                passengers={passengers}
                setPassengers={setPassengers}
              />
            </div>
            
            <div className="lg:col-span-8">
              <RouteList 
                passengers={passengers}
                selectedRoute={selectedRoute}
                setSelectedRoute={setSelectedRoute}
              />
            </div>
          </div>

          <CustomerInfo 
            selectedRoute={selectedRoute}
          />
        </main>
      )}
    </div>
  );
}

export default StaffRouteInfomation;