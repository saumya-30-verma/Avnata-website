import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Companies() {
  const [companies] = useState([
    {
      id: 1,
      name: 'Avnata',
      owner: 'No owner',
      createDate: 'Sep 29, 2026 11:44 PM GMT+5:30',
      phone: '--',
      lastActivityDate: 'Sep 29, 2026 11:39 PM GMT+5:30',
      city: '--',
    },
  ]);

  return (
    <div className="flex h-screen bg-[#f5f8fa] font-sans text-xs text-[#213343] overflow-hidden">
      {/* LEFT SIDEBAR */}
      <aside className="flex w-52 shrink-0 flex-col justify-between bg-[#1e293b] p-3 text-slate-300">
        <div className="space-y-4 overflow-y-auto">
          {/* Logo / Home */}
          <Link to="/" className="flex items-center gap-2 px-2 py-1 text-sm font-bold text-white">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff5c35] text-[10px]">
              hub
            </div>
            <span>Home</span>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1 font-medium text-xs">
            <Link
              to="/crm/contacts"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              📁 Contacts
            </Link>
            
            {/* Active Companies Link */}
            <Link
              to="/crm/companies"
              className="flex w-full items-center gap-2 rounded bg-slate-700 px-2 py-1.5 font-semibold text-white"
            >
              🏢 Companies
            </Link>

            <Link
              to="/crm/deals"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              🏷️ Deals
            </Link>

            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              📊 Segments
            </a>

            <div className="px-2 pt-3 text-[10px] font-semibold uppercase text-slate-400">Marketing</div>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              🎯 AEO
            </a>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              ✉️ Marketing Emails
            </a>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              📋 Forms
            </a>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              📢 Campaigns
            </a>

            <div className="px-2 pt-3 text-[10px] font-semibold uppercase text-slate-400">Content</div>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              🌐 Website Pages
            </a>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              📝 Blog
            </a>

            <div className="px-2 pt-3 text-[10px] font-semibold uppercase text-slate-400">Platform</div>
            <Link to="/crm" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              📈 Dashboards
            </Link>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              ⚙️ Workflows
            </a>
          </nav>
        </div>

        {/* Bottom Banner */}
        <div className="rounded-lg bg-slate-800 p-2.5 text-center text-white">
          <p className="text-[11px] font-medium leading-tight">Complete your setup and reach your goals faster.</p>
          <button className="mt-2 w-full rounded-full bg-slate-700 py-1 text-xs font-semibold text-white hover:bg-slate-600">
            ✓ Continue
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex flex-1 flex-col min-w-0 bg-white">
        {/* TOP NAVBAR */}
        <header className="flex h-11 items-center justify-between border-b border-gray-200 bg-[#2d3e50] px-3 text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Find in Avnata"
                className="w-60 rounded-full border border-slate-600 bg-[#1e293b] px-3 py-1 pl-3 pr-8 text-xs text-white placeholder-gray-400 focus:outline-none"
              />
              <span className="absolute right-2.5 top-1.5 text-xs text-gray-400">🔍</span>
            </div>
            <span className="cursor-pointer text-xs font-medium text-white flex items-center gap-1">
              ✨ Breeze Assistant
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-300">
            <button className="flex items-center gap-1 hover:text-white">
              <span>⬆</span> Upgrade
            </button>
            <button className="hover:text-white">+</button>
            <button className="hover:text-white">📞</button>
            <button className="hover:text-white">🏪</button>
            <button className="hover:text-white">❓</button>
            <button className="hover:text-white">⚙️</button>
            <button className="hover:text-white">🔔</button>
            
            <Link
              to="/accounts"
              className="flex items-center gap-1.5 rounded-full bg-slate-700 px-2.5 py-1 text-white hover:bg-slate-600"
            >
              <span className="h-2 w-2 rounded-full bg-gray-300"></span>
              <span className="font-medium text-xs">Trusties</span>
            </Link>
          </div>
        </header>

        {/* MAIN BODY */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* HEADER SECTION */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2 shrink-0">
            <div className="flex items-center gap-1 text-xl font-bold text-gray-900">
              <h1>Companies</h1>
              <span className="cursor-pointer text-sm text-gray-500">⌄</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50">
                ⋮
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50">
                👤
              </button>
              <button className="flex items-center gap-1 rounded-full bg-[#005249] px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#003d37]">
                Add companies <span className="text-[6px]">⌄</span>
              </button>
            </div>
          </div>

          {/* TABS SECTION */}
          <div className="flex items-center border-b border-gray-200 px-6 text-xs font-medium shrink-0">
            <button className="border-b-2 border-slate-700 px-3 py-2 font-semibold text-gray-900 flex items-center gap-1.5">
              <span>📋</span> All companies
            </button>
            <button className="px-3 py-2 text-gray-500 hover:text-gray-900 flex items-center gap-1.5">
              <span>📋</span> My companies
            </button>
            <button className="px-2 py-2 text-gray-400 hover:text-gray-600 text-sm">+</button>
          </div>

          {/* FILTER TOOLBAR */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-2.5 text-xs shrink-0">
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search ( / )"
                  className="w-48 rounded-md border border-gray-300 py-1 pl-2.5 pr-7 text-xs focus:outline-none focus:ring-1 focus:ring-teal-600"
                />
                <span className="absolute right-2 top-1.5 text-xs text-gray-400">🔍</span>
              </div>

              <button className="flex items-center gap-1 rounded border border-gray-300 px-2.5 py-1 text-gray-700 hover:bg-gray-50">
                <span>≡</span> Filter
              </button>
              <button className="flex items-center gap-1 rounded border border-gray-300 px-2.5 py-1 text-gray-700 hover:bg-gray-50">
                <span>⇅</span> Sort by
              </button>

              <div className="h-4 w-[1px] bg-gray-300 mx-1"></div>

              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-gray-900">
                Company owner <span className="text-[10px]">⌄</span>
              </button>
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-gray-900">
                Create date <span className="text-[10px]">⌄</span>
              </button>
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-gray-900">
                Last activity date <span className="text-[10px]">⌄</span>
              </button>
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-gray-900">
                Lead status <span className="text-[10px]">⌄</span>
              </button>

              <button className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50">
                +
              </button>
              <button className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50">
                ✏️
              </button>

              <button className="ml-2 flex items-center gap-1 text-xs font-semibold text-gray-700 hover:underline">
                <span>≡</span> Advanced filters
              </button>
            </div>

            <div className="flex items-center gap-1">
              <div className="flex rounded border border-gray-300 p-0.5 bg-gray-50">
                <button className="rounded px-2 py-0.5 text-gray-600 hover:bg-white hover:shadow-sm">📱</button>
                <button className="rounded bg-white px-2 py-0.5 text-gray-900 shadow-sm font-semibold">📋</button>
              </div>
              <button className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                ⚙️
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                ^
              </button>
            </div>
          </div>

          {/* DATA TABLE */}
          <div className="flex-1 overflow-auto px-6">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-600 font-semibold">
                  <th className="w-8 py-3 px-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </th>
                  <th className="py-3 px-2 font-bold text-gray-800">Company name</th>
                  <th className="py-3 px-2">Company owner</th>
                  <th className="py-3 px-2 flex items-center gap-1">
                    Create Date <span className="text-[10px]">↓</span>
                  </th>
                  <th className="py-3 px-2">Phone Number</th>
                  <th className="py-3 px-2">Last Activity Date</th>
                  <th className="py-3 px-2">City</th>
                  <th className="w-8 py-3 px-2 text-right">+</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {companies.map((company) => (
                  <tr key={company.id} className="hover:bg-gray-50 group">
                    <td className="py-3 px-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="py-3 px-2 font-bold text-[#ff5c35] flex items-center gap-1.5 cursor-pointer hover:underline">
                      <span className="text-gray-400 text-[10px]">❯</span>
                      <span className="flex h-4 w-4 items-center justify-center rounded bg-[#ff5c35] text-[9px] text-white font-extrabold">
                        A
                      </span>
                      {company.name}
                    </td>
                    <td className="py-3 px-2 text-gray-600">{company.owner}</td>
                    <td className="py-3 px-2 text-gray-600">{company.createDate}</td>
                    <td className="py-3 px-2 text-gray-400">{company.phone}</td>
                    <td className="py-3 px-2 text-gray-600">{company.lastActivityDate}</td>
                    <td className="py-3 px-2 text-gray-400">{company.city}</td>
                    <td className="py-3 px-2 text-right text-gray-400 group-hover:text-gray-600 cursor-pointer">
                      ⛶
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FOOTER BAR */}
          <footer className="flex items-center justify-between border-t border-gray-200 px-6 py-2 bg-white text-xs shrink-0">
            <div>
              <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">
                1 company
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50">
                🔄
              </button>
              <button className="flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1 text-gray-700 hover:bg-gray-50 font-medium">
                📤 Export
              </button>
              <button className="flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1 text-gray-700 hover:bg-gray-50 font-medium">
                📄 Clone
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Companies;