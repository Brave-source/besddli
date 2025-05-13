'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';

const DonationSection = () => {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(100);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonate = () => {
    const amount = selectedAmount === 'custom' ? customAmount : selectedAmount;
    alert(`You selected a ${donationType} donation of $${amount}`);
    //payment logic here
  };

  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading>
          Support Our Mission
        </SectionHeading>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Your contribution helps us create more opportunities for development
        </p>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-4 sm:p-6">
          {/* Toggle Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6">
            <div
              className={`flex-1 cursor-pointer p-4 rounded-lg transition text-center ${
                donationType === 'one-time'
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-white shadow-md text-gray-800'
              }`}
              onClick={() => setDonationType('one-time')}
            >
              <div className="text-base sm:text-lg">One-time</div>
              <p className="text-xs sm:text-sm mt-1">Make an instant impact with a single contribution</p>
            </div>
            <div
              className={`flex-1 cursor-pointer p-4 rounded-lg transition text-center ${
                donationType === 'monthly'
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-white shadow-md text-gray-800'
              }`}
              onClick={() => setDonationType('monthly')}
            >
              <div className="text-base sm:text-lg">Monthly</div>
              <p className="text-xs sm:text-sm mt-1">Support our mission with recurring donations</p>
            </div>
          </div>

          {/* Amount Options */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-gray-800">
            {[100, 500, 1000].map((amount) => (
              <button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`border rounded-md py-2 px-4 shadow-md transition text-sm ${
                  selectedAmount === amount
                    ? 'bg-green-100 border-green-600 text-green-700'
                    : 'hover:border-gray-400'
                }`}
              >
                ${amount}
              </button>
            ))}
            <button
              onClick={() => setSelectedAmount('custom')}
              className={`border rounded-md py-2 px-4 shadow-md transition text-sm ${
                selectedAmount === 'custom'
                  ? 'bg-green-100 border-green-600 text-green-700'
                  : 'hover:border-gray-400'
              }`}
            >
              Custom
            </button>
          </div>

          {/* Custom Amount Input */}
          {selectedAmount === 'custom' && (
            <input
              type="number"
              min="1"
              className="w-full mb-6 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          )}

          {/* Donate Button */}
          <Button
            onClick={handleDonate}
            variant="primary"
            className="w-4/5 bg-green-600 hover:bg-green-700 py-3 font-semibold text-sm sm:text-base transition"
          >
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
