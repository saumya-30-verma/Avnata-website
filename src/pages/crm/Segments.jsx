import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Segments() {
  const [activeTab, setActiveTab] = useState('Manage');
  const [activeViewTab, setActiveViewTab] = useState('All segments');

  const segmentsData = [
    {
      id: 1,
      name: 'High Engagement',
      size: 0,
      type: 'Active',
      object: 'Contact',
      lastUpdated: 'Sep 29, 2026 11:39 PM',
      updatedBy: 'Saumya Verma',
      creator: 'Saumya Verma',
      folder: '-',
      usedInCount: 0,
    },
  ];

  return (
    <div className="flex h-screen bg-[#f5f8fa] font-sans text-xs text-[#213343] overflow-hidden">
      {/* LEFT SIDEBAR */}
      <aside className="flex w-52 shrink-0 flex-col justify-between bg-[#1e293b] p-3 text-slate-300">
        <div className="space-y-4 overflow-y-auto">
          {/* Logo / Home */}
          <Link to="/" className="flex items-center gap-2 px-2 py-1 text-sm font-bold text-white">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff5c35] text-[10px]">
              A
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

            <Link
              to="/crm/companies"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              🏢 Companies
            </Link>

            <Link
              to="/crm/deals"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              🏷️️ Deals
            </Link>

            {/* Active Segments Link */}
            <Link
              to="/crm/segments"
              className="flex w-full items-center gap-2 rounded bg-slate-700 px-2 py-1.5 font-semibold text-white"
            >
              📊 Segments
            </Link>

            <div className="px-2 pt-3 text-[10px] font-semibold uppercase text-slate-400">Marketing</div>
            <Link
              to="/crm/aeo" 
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              🎯 AEO
            </Link>

            <Link
              to="/crm/marketing emails"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              ✉️ Marketing Emails
            </Link>

            <Link
              to="/crm/forms" 
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              📋 Forms
            </Link>

            <Link
              to="/crm/campaigns"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              📢 Campaigns
            </Link>

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
          <button className="mt-2 w-full rounded-full bg-slate-700 py-1 text-xs font-semibold text-white hover:bg-slate-600 flex items-center justify-center gap-1">
            <span>✏️</span> Continue
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

        {/* PAGE HEADER AREA */}
        <div className="flex flex-1 flex-col overflow-y-auto px-6 pt-4">
          <div className="flex items-center justify-between shrink-0 mb-3">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Segments</h1>
              <p className="text-xs font-semibold text-black mt-0.5">1 segment</p>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 text-xs text-gray-700 hover:text-gray-900 font-bold mr-2">
                What's new? 💡
              </button>
              <button className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50">
                Admin settings ⌄
              </button>
              <button className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50">
                Import
              </button>
              <button className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50">
                Quick create ⌄
              </button>
              <button className="rounded-full bg-[#005249] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#003d37]">
                Create segment ⌄
              </button>
            </div>
          </div>

          {/* MAIN TABS: Manage / Analyze */}
          <div className="flex items-center border-b border-gray-200 text-xs font-medium shrink-0 mb-4">
            <button
              onClick={() => setActiveTab('Manage')}
              className={`pb-2 px-3 font-semibold ${
                activeTab === 'Manage'
                  ? 'border-b-2 border-gray-900 text-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Manage
            </button>
            <button
              onClick={() => setActiveTab('Analyze')}
              className={`pb-2 px-3 font-semibold ${
                activeTab === 'Analyze'
                  ? 'border-b-2 border-gray-900 text-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Analyze
            </button>
          </div>

          {/* TABLE CONTAINER CARD */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden mb-6">
            {/* VIEW TABS BAR */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50/50 px-2 pt-1 text-xs">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveViewTab('All segments')}
                  className={`flex items-center gap-2 px-3 py-2 font-medium rounded-t border-t border-l border-r border-transparent ${
                    activeViewTab === 'All segments'
                      ? 'bg-white border-gray-200 text-gray-900 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>All segments</span>
                  <span className="text-gray-400 hover:text-gray-600 text-xs">✕</span>
                </button>
                <button
                  onClick={() => setActiveViewTab('Unused segments')}
                  className={`px-3 py-2 font-medium ${
                    activeViewTab === 'Unused segments'
                      ? 'bg-white border-t border-l border-r border-gray-200 text-gray-900 font-semibold rounded-t'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Unused segments
                </button>
                <button
                  onClick={() => setActiveViewTab('Recently deleted')}
                  className={`px-3 py-2 font-medium ${
                    activeViewTab === 'Recently deleted'
                      ? 'bg-white border-t border-l border-r border-gray-200 text-gray-900 font-semibold rounded-t'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Recently deleted
                </button>
                <button className="px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">
                  + Add view (3/5)
                </button>
              </div>

              <div className="flex items-center gap-3 pr-2">
                <button className="font-medium text-gray-700 hover:text-gray-900">All views</button>
                <button className="flex items-center gap-1 rounded border border-gray-300 bg-white px-2.5 py-1 text-gray-700 hover:bg-gray-50 shadow-sm font-medium">
                  📁 Folders
                </button>
              </div>
            </div>

            {/* FILTER TOOLBAR */}
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 text-xs bg-white">
              <div className="flex items-center gap-3 flex-wrap">
                <button className="flex items-center gap-1 font-bold text-gray-700 hover:text-gray-900">
                  All creators ⌄
                </button>
                <button className="flex items-center gap-1 font-bold text-gray-700 hover:text-gray-900">
                  All types ⌄
                </button>
                <button className="flex items-center gap-1 font-bold text-gray-700 hover:text-gray-900">
                  All objects ⌄
                </button>
                <button className="flex items-center gap-1 font-bold text-gray-700 hover:text-gray-900">
                  Used in ⌄
                </button>

                <div className="flex items-center gap-1 border-l border-gray-200 pl-2">
                  <button className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50">
                    +
                  </button>
                  <button className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50">
                    ✏️
                  </button>
                </div>

                <button className="flex items-center gap-1 font-bold text-gray-700 hover:text-gray-900 ml-1">
                  <span>≡</span> Advanced filters
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex h-7 w-7 items-center justify-center text-gray-400 hover:text-gray-600">
                  ↩
                </button>
                <button className="flex h-7 w-7 items-center justify-center text-gray-400 hover:text-gray-600">
                  📋
                </button>
                <button className="flex h-7 w-7 items-center justify-center text-gray-400 hover:text-gray-600">
                  🗂️
                </button>
              </div>
            </div>

            {/* SEARCH & ACTIONS ROW */}
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 bg-white">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search segments"
                  className="w-full rounded-full border border-gray-300 py-1 pl-3 pr-8 text-xs focus:outline-none focus:ring-1 focus:ring-teal-600"
                />
                <span className="absolute right-2.5 top-1.5 text-xs text-gray-400">🔍</span>
              </div>

              <button className="rounded border border-gray-300 px-3 py-1 font-medium text-gray-700 hover:bg-gray-50">
                Actions ⌄
              </button>
            </div>

            {/* SEGMENTS TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/50 text-gray-600 font-medium">
                    <th className="w-10 px-3 py-2.5 text-center">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="px-3 py-2.5">Name ℹ️</th>
                    <th className="px-3 py-2.5">Size ℹ️</th>
                    <th className="px-3 py-2.5">Type ℹ️</th>
                    <th className="px-3 py-2.5">Object ℹ️</th>
                    <th className="px-3 py-2.5">Last updated (GMT+5:30) ℹ️</th>
                    <th className="px-3 py-2.5">Creator ℹ️</th>
                    <th className="px-3 py-2.5">Folder ℹ️</th>
                    <th className="px-3 py-2.5">Used in (Count) ℹ️</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {segmentsData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="px-3 py-3 text-center">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-3 py-3 font-semibold text-teal-800 cursor-pointer hover:underline">
                        {row.name}
                      </td>
                      <td className="px-3 py-3 text-gray-700">{row.size}</td>
                      <td className="px-3 py-3">
                        <span className="inline-flex items-center gap-1.5 font-medium text-gray-700">
                          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                          {row.type}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-gray-700">{row.object}</td>
                      <td className="px-3 py-3 text-gray-700">
                        <div>{row.lastUpdated}</div>
                        <div className="text-[10px] text-gray-400">by {row.updatedBy}</div>
                      </td>
                      <td className="px-3 py-3 text-gray-700">{row.creator}</td>
                      <td className="px-3 py-3 text-gray-400">{row.folder}</td>
                      <td className="px-3 py-3 text-gray-700">{row.usedInCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Segments;