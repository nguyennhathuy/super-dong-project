import React, { useState } from 'react';
import { Users, ChevronDown, Info } from 'lucide-react';
import { PassengerCounts } from '../../types';
import { calculatePassengers } from '../../utils';


interface Props {
  setShowResults: (data: boolean) => void;
  passengerCount: PassengerCounts
  setPassengerCount: (data: PassengerCounts) => void;
}

const PassengerSelector: React.FC<Props> = ({ setShowResults, passengerCount, setPassengerCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalPassengers = calculatePassengers(passengerCount)

  const updateCount = (type: keyof PassengerCounts, delta: number) => {
    setPassengerCount({
        ...passengerCount,
        [type]: Math.max(0, passengerCount[type] + delta)
    })
    setShowResults(false);
  };
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Số lượng hành khách
      </label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-gray-400" />
          <span>{totalPassengers} hành khách</span>
        </div>
        <ChevronDown className="h-5 w-5 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="p-4 space-y-4">
            {/* Passenger Types */}
            {[
              { key: 'infant', label: 'Trẻ sơ sinh (dưới 6 tuổi)' },
              { key: 'child', label: 'Trẻ em (6 - 11 tuổi)' },
              { key: 'adult', label: 'Người lớn (12 - 60 tuổi)' },
              { key: 'senior', label: 'Người cao tuổi (trên 60 tuổi)' }
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm">{label}</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateCount(key as keyof PassengerCounts, -1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">
                    {passengerCount[key as keyof PassengerCounts]}
                  </span>
                  <button
                    onClick={() => updateCount(key as keyof PassengerCounts, 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            {/* Notes */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <div className="flex items-start space-x-2 text-sm text-gray-600">
                <Info className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <p>Trẻ dưới 6 tuổi được miễn vé (ngồi chung với người lớn)</p>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-600">
                <Info className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <p>Trẻ dưới 6 tuổi vẫn tính là 01 hành khách</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;