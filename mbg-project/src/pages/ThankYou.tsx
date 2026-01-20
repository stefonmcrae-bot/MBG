import React from 'react';
import { CheckCircle } from 'lucide-react';

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#007BFF] to-[#18DBF1] rounded-full flex items-center justify-center">
            <CheckCircle size={48} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-[#0E0E0F] mb-4">
          You're booked ✅
        </h1>
        
        <p className="text-lg text-[#555A60] mb-8">
          Payment received. You'll receive an ETA confirmation by text shortly.
        </p>
        
        <div className="bg-[#F5F7FA] rounded-lg p-6 border border-slate-200">
          <p className="text-sm text-[#555A60]">
            Our team will contact you soon to confirm your service appointment.
          </p>
        </div>
      </div>
    </div>
  );
};
