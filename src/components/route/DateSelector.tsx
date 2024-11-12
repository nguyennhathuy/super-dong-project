import React from 'react';
import { Calendar } from 'lucide-react';

interface DateSelectorProps {
  label: string;
  date: Date | null;
  setDate: (date: Date | null) => void;
  minDate?: Date;
  setShowResults: (data: boolean) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ label, date, setDate, minDate, setShowResults }) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type="date"
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={date ? date.toISOString().split('T')[0] : ''}
          min={minDate ? minDate.toISOString().split('T')[0] : undefined}
          onChange={
            (e) => {
              setDate(e.target.value ? new Date(e.target.value) : null);
              setShowResults(false);
            }
          }
        />
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default DateSelector;