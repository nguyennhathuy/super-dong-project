import React from 'react';
import { Check } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
}

const steps = [
  { id: 1, name: 'Tuyến' },
  { id: 2, name: 'Người đặt vé' },
  { id: 3, name: 'Hành khách' },
  { id: 4, name: 'Chọn ghế ngồi' },
  { id: 5, name: 'Thanh toán' }
];

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="py-6 bg-white border-b">
      <div className="container mx-auto px-4">
        <nav aria-label="Progress">
          <ol className="flex items-center justify-between w-full max-w-4xl mx-auto">
            {steps.map((step) => (
              <li key={step.id} className="flex items-center">
                <div className="relative flex items-center">
                  {step.id < currentStep ? (
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  ) : step.id === currentStep ? (
                    <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
                      {step.id}
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full border-2 border-gray-300 text-gray-500 flex items-center justify-center font-medium">
                      {step.id}
                    </div>
                  )}
                  <span className={`ml-3 text-sm font-medium ${
                    step.id === currentStep ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.name}
                  </span>
                </div>
                {step.id !== steps.length && (
                  <div className="hidden md:block flex-1 mx-4 h-0.5 bg-gray-200" />
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default ProgressBar;