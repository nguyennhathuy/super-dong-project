import { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { PassengerForm } from './PassengerForm';
import { Passenger } from '../../types';
import { v4 as uuidv4 } from 'uuid';


export const PassengerList = () => {
  const [passengers, setPassengers] = useState<Passenger[]>([
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
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingPassenger, setEditingPassenger] = useState<Passenger | null>(null);

  const handleAdd = () => {
    setEditingPassenger(null);
    setShowForm(true);
  };

  const handleEdit = (passenger: Passenger) => {
    setEditingPassenger(passenger);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa hành khách này?')) {
      setPassengers(passengers.filter(p => p.id !== id));
    }
  };

  const handleSave = (passenger: Passenger) => {
    if (editingPassenger) {
      setPassengers(passengers.map(p => p.id === editingPassenger.id ? passenger : p));
    } else {
      setPassengers([...passengers, { ...passenger, id: Date.now().toString() }]);
    }
    setShowForm(false);
    setEditingPassenger(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">
          Danh sách hành khách
        </h3>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Thêm hành khách</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                STT
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tên hành khách
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                CCCD/Passport
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ngày sinh
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Số điện thoại
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quốc tịch
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nơi sinh
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {passengers.map((passenger, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {passenger.fullName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {passenger.idNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {passenger.birthDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {passenger.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {passenger.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {passenger.nationality}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {passenger.birthPlace}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => handleEdit(passenger)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(passenger.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <PassengerForm
          passenger={editingPassenger}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingPassenger(null);
          }}
        />
      )}
    </div>
  );
};