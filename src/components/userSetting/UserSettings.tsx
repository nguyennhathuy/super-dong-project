import { useState } from 'react';
import { Tabs } from './Tabs';
import { GeneralInfo } from './GeneralInfo';
import { PassengerList } from './PassengerList';
import { BookerFormData, UserData } from '../../types';

interface Props {
  userData: UserData;
  setUserData: (data: UserData) => void;
  formData: BookerFormData;
  setFormData: (data: BookerFormData) => void;
}

export const UserSettings = ({ userData, setUserData, formData, setFormData }: Props) => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'Thông tin chung' },
    { id: 'passengers', label: 'Thông tin Hành khách/Đồng nghiệp' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-sm">
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        <div className="p-6">
          {
            activeTab === 'general' ? 
            <GeneralInfo 
              userData={userData}
              setUserData={setUserData}
              formData={formData}
              setFormData={setFormData}
            /> : 
            <PassengerList />
          }
        </div>
      </div>
    </div>
  );
};