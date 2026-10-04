import React, { useState } from 'react';

export default function AccountsPage({ onSelectAccount }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample Account Data (isise search filtering hoti hai)
  const accounts = [
    {
      id: '247558059',
      name: 'Trusties',
      domain: 'www.trusties.com',
    },
  ];

  const filteredAccounts = accounts.filter(
    (acc) =>
      acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acc.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acc.id.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-white text-[#213343]">
      
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200/80 px-8 py-5">
        <h1 className="text-xl font-bold tracking-tight text-[#213343]">
          Avnata Accounts
        </h1>

        {/* Search Bar */}
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search accounts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-gray-300 bg-white py-2 pl-4 pr-10 text-sm text-gray-800 placeholder-gray-400 focus:border-[#ff5c35] focus:outline-none"
          />
          <span className="absolute right-3.5 top-2.5 text-gray-400 text-sm">
            🔍
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1100px] px-8 pt-8">
        
        {/* Table Header Row */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-3 text-xs font-semibold text-gray-600">
          <button className="flex items-center gap-1 hover:text-gray-900">
            <span>Name</span>
            <span className="text-[10px]">⇅</span>
          </button>
          
          <button className="flex items-center gap-1 hover:text-gray-900">
            <span>Domain</span>
            <span className="text-[10px]">⇅</span>
          </button>
        </div>

        {/* Accounts List */}
        <div className="divide-y divide-gray-100">
          {filteredAccounts.map((account) => (
            <div
              key={account.id}
              onClick={() => onSelectAccount && onSelectAccount(account)}
              className="flex items-start justify-between py-5 cursor-pointer group transition hover:bg-gray-50/60 px-2 rounded-lg"
            >
              {/* Account Name */}
              <div>
                <span className="text-sm font-bold text-[#007a87] group-hover:underline">
                  {account.name}
                </span>
              </div>

              {/* Domain & Account ID */}
              <div className="text-right text-xs text-gray-600 space-y-0.5">
                <div>{account.domain}</div>
                <div className="text-gray-500 font-mono text-[11px]">
                  {account.id}
                </div>
              </div>
            </div>
          ))}

          {filteredAccounts.length === 0 && (
            <div className="py-12 text-center text-sm text-gray-400">
              No accounts found.
            </div>
          )}
        </div>

      </main>

      {/* Floating Bottom Action Icons (Right corner) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#007a87] text-white shadow-lg transition hover:scale-105">
          <span className="text-xs font-bold">⚙</span>
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg transition hover:scale-105">
          <span className="text-xs font-bold">🧠</span>
        </button>
      </div>

    </div>
  );
}