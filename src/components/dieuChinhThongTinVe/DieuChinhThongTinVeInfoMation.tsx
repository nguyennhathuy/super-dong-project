import { useState } from 'react';
import SearchForm from './SearchForm'; 
import SearchResults from './SearchResults'; 
import EditForm from './EditForm'; 

const SAMPLE_PASSENGERS = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    idNumber: '001234567890',
    birthDate: '1990-01-01',
    phone: '0123456789',
    email: 'nguyenvana@email.com',
    nationality: 'Việt Nam',
    birthPlace: 'Hà Nội',
    specialStatus: false,
  },
  {
    id: '2',
    name: 'Trần Thị B',
    idNumber: '001234567891',
    birthDate: '1992-02-02',
    phone: '0123456788',
    email: 'tranthib@email.com',
    nationality: 'Việt Nam',
    birthPlace: 'TP. Hồ Chí Minh',
    specialStatus: false,
  },
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