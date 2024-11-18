import { useState } from 'react';
import SearchForm from './SearchForm'; 
import SearchResults from './SearchResults'; 
import EditForm from './EditForm';
import { v4 as uuidv4 } from 'uuid';
import { Passenger } from '../../types';

const SAMPLE_PASSENGERS: Passenger[]  = [
  {
    id: uuidv4(),
    nationality: '',
    idNumber: '111111111111',
    fullName: 'Nguyễn A Kha Nguyễn',
    birthPlace: '',
    birthDate: '20/11/1996',
    phone: '0948003912',
    email: 'nguyena@gmail.com',
    specialNeeds: false,
    passengerType: 'adult',
    ship: 'SuperDong II',
    date: '20/11/2024',
    time: '07:30',
    price: 169855,
  },
  {
    id: uuidv4(),
    nationality: '',
    idNumber: '111111111111',
    fullName: 'Nguyễn A Huy Nguyễn',
    birthPlace: '',
    birthDate: '20/11/1996',
    phone: '0948003912',
    email: 'nguyena@gmail.com',
    specialNeeds: false,
    passengerType: 'adult',
    ship: 'SuperDong II',
    date: '20/11/2024',
    time: '07:30',
    price: 169855,
  },
  {
    id: uuidv4(),
    nationality: '',
    idNumber: '111111111111',
    fullName: 'Nguyễn A Quý Nguyễn',
    birthPlace: '',
    birthDate: '20/11/1996',
    phone: '0948003912',
    email: 'nguyena@gmail.com',
    specialNeeds: false,
    passengerType: 'adult',
    ship: 'SuperDong II',
    date: '20/11/2024',
    time: '07:30',
    price: 169855,
  }
];

function DieuChinhThongTinVeInfoMation() {
  const [activeMenu, setActiveMenu] = useState('dieu-chinh-ve');
  const [selectedPassenger, setSelectedPassenger] = useState<any>(null);

  const handleSearch = (formData: any) => {
    // Handle search logic
    console.log('Search:', formData);
  };

  const handleEdit = (passenger: any) => {
    setSelectedPassenger(passenger);
  };

  const handleSave = (formData: any) => {
    console.log('Save:', formData);
    setSelectedPassenger(null);
  };

  const handleCancel = () => {
    setSelectedPassenger(null);
  };

  return (
      
      <main className="max-w-7xl mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Điều chỉnh thông tin vé
        </h1>

        <div className="space-y-6">
          <SearchForm onSearch={handleSearch} />

          <div className="grid grid-cols-12 gap-6">
            <div className={`${selectedPassenger ? 'col-span-5' : 'col-span-12'}`}>
              <SearchResults
                passengers={SAMPLE_PASSENGERS}
                onEdit={handleEdit}
              />
            </div>
            
            {selectedPassenger && (
              <div className="col-span-7">
                <EditForm
                  passenger={selectedPassenger}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              </div>
            )}
          </div>
        </div>
      </main>
  );
}

export default DieuChinhThongTinVeInfoMation;