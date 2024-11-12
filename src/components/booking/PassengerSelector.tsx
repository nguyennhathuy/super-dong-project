import { Baby, User, Heart, UserRound } from 'lucide-react';

interface Passengers {
  infant: number;
  child: number;
  adult: number;
  senior: number;
}

interface PassengerSelectorProps {
  passengers: Passengers;
  onUpdate: (type: keyof Passengers, value: number) => void;
  onClose: () => void;
}

export default function PassengerSelector({
  passengers,
  onUpdate,
  onClose,
}: PassengerSelectorProps) {
  const passengerTypes = [
    {
      type: 'infant' as const,
      label: 'Trẻ sơ sinh',
      description: '0 - 5 tuổi',
      icon: Baby,
    },
    {
      type: 'child' as const,
      label: 'Trẻ em',
      description: '6 - 11 tuổi',
      icon: UserRound,
    },
    {
      type: 'adult' as const,
      label: 'Người lớn',
      description: '12 - 60 tuổi',
      icon: User,
    },
    {
      type: 'senior' as const,
      label: 'Người cao tuổi',
      description: '61 tuổi trở lên',
      icon: Heart,
    },
  ];

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border p-4 z-10">
      <div className="space-y-4">
        {passengerTypes.map(({ type, label, description, icon: Icon }) => (
          <div key={type} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon className="text-gray-400" size={20} />
              <div>
                <p className="font-medium">{label}</p>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onUpdate(type, Math.max(0, passengers[type] - 1))}
                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                disabled={type === 'adult' && passengers[type] <= 1}
              >
                -
              </button>
              <span className="w-8 text-center">{passengers[type]}</span>
              <button
                type="button"
                onClick={() => onUpdate(type, passengers[type] + 1)}
                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t">
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
}