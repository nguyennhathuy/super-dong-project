import React from 'react';
import { Check } from 'lucide-react';
import { BookingStep } from '../types';

interface Props {
  currentStep: BookingStep;
}

const steps: { id: BookingStep; label: string }[] = [
  { id: 'route', label: 'Tuyến' },
  { id: 'booker', label: 'Người đặt vé' },
  { id: 'passengers', label: 'Hành khách' },
  { id: 'seats', label: 'Chọn ghế ngồi' },
  { id: 'payment', label: 'Thanh toán' },
];

export default function ProgressBar({ currentStep }: Props) {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => {
          const isCompleted = steps.findIndex(s => s.id === currentStep) > index;
          const isCurrent = step.id === currentStep;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isCompleted
                      ? 'bg-primary'
                      : isCurrent
                      ? 'bg-tertiary'
                      : 'bg-gray-200'
                  } ${isCompleted || isCurrent ? 'text-white' : 'text-gray-500'}`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    isCurrent ? 'text-tertiary font-medium' : isCompleted ? 'text-primary' : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 ${
                    isCompleted ? 'bg-primary' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}