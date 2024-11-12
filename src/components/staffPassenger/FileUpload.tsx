import { Upload } from 'lucide-react';

export default function FileUpload() {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle Excel file upload
      console.log('File uploaded:', file.name);
    }
  };

  return (
    <div className="flex items-center justify-center p-6 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg mb-8">
      <label className="flex flex-col items-center cursor-pointer group">
        <Upload 
          size={40} 
          className="text-gray-400 group-hover:text-indigo-600 transition-colors"
        />
        <span className="mt-2 text-sm text-gray-600 text-center">
          Nhập thông tin khách hàng <span className="font-semibold">TỰ ĐỘNG</span> bằng cách tải file lên..
        </span>
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>
    </div>
  );
}