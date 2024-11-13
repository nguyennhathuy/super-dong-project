import React from 'react';
import { format } from 'date-fns';

interface DateRangePickerProps {
  startDate: Date;
  endDate: Date;
  onChange: (range: { startDate: Date; endDate: Date }) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onChange
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <label className="text-sm font-medium text-gray-700">Từ ngày:</label>
        <input
          type="date"
          value={format(startDate, 'yyyy-MM-dd')}
          onChange={(e) => onChange({
            startDate: new Date(e.target.value),
            endDate
          })}
          className="form-input rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <label className="text-sm font-medium text-gray-700">Đến ngày:</label>
        <input
          type="date"
          value={format(endDate, 'yyyy-MM-dd')}
          onChange={(e) => onChange({
            startDate,
            endDate: new Date(e.target.value)
          })}
          className="form-input rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      
      <button
        onClick={() => {
          // Handle apply filter
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Áp dụng
      </button>
    </div>
  );
}

export default DateRangePicker;