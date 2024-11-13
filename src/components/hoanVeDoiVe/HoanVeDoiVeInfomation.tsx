import { useState } from 'react';
import SearchPanel from './SearchPanel';
import TicketList from './TicketList';
import RefundForm from './RefundForm';
import ChangeForm from './ChangeForm';

export type ProcessType = 'refund' | 'change' | null;

function HoanVeDoiVeInfomation() {
  const [activeProcess, setActiveProcess] = useState<ProcessType>(null);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  return (
      
      <main className="container mx-auto px-4 py-6">
        <SearchPanel />
        
        <div className={`mt-6 ${activeProcess && 'flex gap-6'}`}>
          {/* Left side - Ticket List */}
          <div className={activeProcess ? "w-[70%]" : "w-[100%]"}>
            <TicketList 
              onRefund={(ticket) => {
                setSelectedTicket(ticket);
                setActiveProcess('refund');
              }}
              onChange={(ticket) => {
                setSelectedTicket(ticket);
                setActiveProcess('change');
              }}
            />
          </div>

          {/* Right side - Process Forms */}
          <div className="w-[40%]">
            {activeProcess === 'refund' && (
              <RefundForm 
                ticket={selectedTicket}
                onClose={() => setActiveProcess(null)}
              />
            )}
            {activeProcess === 'change' && (
              <ChangeForm 
                ticket={selectedTicket}
                onClose={() => setActiveProcess(null)}
              />
            )}
          </div>
        </div>
      </main>
  );
}

export default HoanVeDoiVeInfomation;