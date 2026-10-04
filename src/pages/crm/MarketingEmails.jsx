import React from 'react';
import { Link } from 'react-router-dom';

function MarketingEmails() {
  return (
    <div className="flex h-screen bg-white text-[#213343] font-sans text-xs overflow-hidden">
      {/* ================= LEFT SIDEBAR ================= */}
      <aside className="w-52 bg-[#1e293b] text-slate-300 flex flex-col justify-between p-3 shrink-0">
        <div className="space-y-4 overflow-y-auto">
          {/* Logo / Home */}
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-sm px-2 py-1">
            <div className="w-5 h-5 rounded-full bg-[#ff5c35] flex items-center justify-center text-[10px]">
              A
            </div>
            <span>Home</span>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1 font-medium">
            <Link to="/crm/contacts" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700">
              📁 Contacts
            </Link>
            <Link to="/crm/companies" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700">
              🏢 Companies
            </Link>
            <Link to="/crm/deals" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700">
              🏷️ Deals
            </Link>
            <Link to="/crm/segments" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700">
              📊 Segments
            </Link>

            <div className="pt-3 text-[10px] uppercase font-semibold text-slate-400 px-2">Marketing</div>
            <Link to="/crm/aeo" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700">
              🎯 AEO
            </Link>
            
            {/* Active Link */}
            <Link to="/crm/marketing-emails" className="flex items-center gap-2 px-2 py-1.5 rounded bg-slate-700 text-white font-semibold">
              ✉️ Marketing Emails
            </Link>

            <Link to="/crm/forms" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              📋 Forms
            </Link>

            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              📢 Campaigns
            </a>

            <div className="pt-3 text-[10px] uppercase font-semibold text-slate-400 px-2">Content</div>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              🌐 Website Pages
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              📝 Blog
            </a>

            <div className="pt-3 text-[10px] uppercase font-semibold text-slate-400 px-2">Platform</div>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              📈 Dashboards
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              ⚡ Workflows
            </a>
          </nav>
        </div>

        {/* Bottom Banner */}
        <div className="bg-white text-slate-800 p-3 rounded-lg border border-slate-200 space-y-2 mt-4">
          <p className="font-semibold text-[11px]">Complete your setup and reach your goals faster.</p>
          <button className="w-full py-1.5 bg-[#2d3e50] hover:bg-slate-800 rounded text-white font-medium text-center">
            ✔ Continue
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Navbar */}
        <header className="h-12 bg-[#2d3e50] text-white flex items-center justify-between px-4 border-b border-slate-700 shrink-0">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Find in Avnata"
              className="bg-[#1e293b] text-white px-3 py-1 rounded-full text-xs w-64 border border-slate-600 focus:outline-none"
            />
            <span className="text-xs text-white font-medium cursor-pointer flex items-center gap-1">
              ✦ Breeze Assistant
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button className="border border-slate-500 rounded px-2.5 py-1 hover:bg-slate-700 flex items-center gap-1">
              <span>↑</span> Upgrade
            </button>
            <div className="flex items-center gap-2 font-medium bg-slate-700 px-2.5 py-1 rounded cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Trusties</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 space-y-5 flex-1 bg-white">
          {/* Header Title & Actions */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-sm font-bold text-gray-700">Marketing Email</h1>
              <p className="text-gray-800 text-xs mt-0.5 font-bold">1 marketing email</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="border border-gray-300 rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-1">
                Email tools <span className="text-[10px]">▼</span>
              </button>
              <button className="bg-[#00565b] hover:bg-[#004145] text-white font-semibold px-4 py-1.5 rounded-full text-xs">
                Create email
              </button>
            </div>
          </div>

          {/* Info Banner Notice */}
          <div className="border border-gray-300 rounded-lg p-4 bg-white relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-sm">✕</button>
            <h3 className="font-bold text-gray-700 text-sm mb-1">
              Before you send: review your email tracking settings
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed max-w-4xl">
              Email open and click tracking may require prior recipient consent in some jurisdictions, including parts of the EU. Review your tracking settings and confirm that you have obtained any necessary consent before sending.{' '}
              <a href="#" className="text-[#00565b] font-bold underline">
                Learn more about email tracking compliance ↗
              </a>{' '}
              and what actions you might need to take.
            </p>
            <button className="mt-3 border border-gray-400 rounded-full px-3 py-1 text-xs font-normal text-gray-700 hover:bg-gray-50">
              Review tracking settings
            </button>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-gray-200 flex gap-8 text-xs font-semibold">
            <button className="border-b-2 border-gray-900 pb-2 text-gray-900">Manage</button>
            <button className="pb-2 text-gray-700 hover:text-gray-800">Templates</button>
            <button className="pb-2 text-gray-700 hover:text-gray-800">Analyze</button>
            <button className="pb-2 text-gray-700 hover:text-gray-800">Health</button>
          </div>

          {/* Table Container & Views Tabs */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* View Sub-tabs */}
            <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 text-xs">
              <div className="flex items-center border-r border-gray-200">
                <button className="px-4 py-2 bg-white font-semibold text-gray-800 border-r border-gray-200 flex items-center gap-2">
                  All emails <span className="text-gray-400 text-[10px]">✕</span>
                </button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 border-r border-gray-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span> Drafts
                </button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 border-r border-gray-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span> Scheduled
                </button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 border-r border-gray-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Sent
                </button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 border-r border-gray-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span> Archived
                </button>
                <button className="px-3 py-2 text-gray-800 hover:bg-gray-100 font-bold">
                  + Add view (5/5)
                </button>
              </div>
              <div className="flex items-center gap-3 pr-3">
                <button className="font-bold text-gray-800 hover:underline">All views</button>
                <button className="border border-gray-300 rounded px-2.5 py-1 text-gray-700 hover:bg-gray-100 flex items-center gap-1">
                  📁 Folders
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="p-3 border-b border-gray-200 flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <button className="border border-gray-300 rounded px-2.5 py-1 font-bold text-gray-800 flex items-center gap-1 hover:bg-gray-50">
                  Email type <span className="text-[8px]">▼</span>
                </button>
                <button className="text-gray-600 hover:text-gray-900 font-medium text-xs">
                  + Add quick filter
                </button>
                <button className="text-gray-800 hover:text-gray-900 font-bold text-xs flex items-center gap-1">
                  ✎ Advanced filters
                </button>
              </div>
            </div>

            {/* Search and Columns Controls */}
            <div className="p-3 bg-white flex items-center justify-between border-b border-gray-200">
              <div className="relative w-72">
                <input
                  type="text"
                  placeholder="Search email name or subject line"
                  className="w-full border border-gray-700 rounded-full pl-3 pr-7 py-1 text-sm focus:outline-none focus:border-gray-500"
                />
                <span className="absolute right-2 top-1.5 text-gray-400">🔍</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="border border-gray-300 rounded-full px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50">
                  Edit columns
                </button>
                <button className="border border-gray-300 rounded-full px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50">
                  Export emails
                </button>
              </div>
            </div>

            {/* Email Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-gray-600 font-semibold text-[11px]">
                    <th className="p-3 w-8">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="p-3 font-semibold text-gray-700">
                      Email name <span className="text-gray-400">ⓘ</span>
                    </th>
                    <th className="p-3 font-semibold text-gray-700">
                      Delivered <span className="text-gray-400">ⓘ</span>
                    </th>
                    <th className="p-3 font-semibold text-gray-700">
                      Open rate <span className="text-gray-400">ⓘ</span>
                    </th>
                    <th className="p-3 font-semibold text-gray-700">
                      Click rate <span className="text-gray-400">ⓘ</span>
                    </th>
                    <th className="p-3 font-semibold text-gray-700">
                      Last updated at (GMT+5:30) <span className="text-gray-400">ⓘ</span> ↓
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="p-3 font-bold text-[#00565b] hover:underline cursor-pointer flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                      New email
                    </td>
                    <td className="p-3 text-gray-700">0</td>
                    <td className="p-3 text-gray-700">0%</td>
                    <td className="p-3 text-gray-700">0%</td>
                    <td className="p-3 text-gray-700">
                      <div>September 30, 2026</div>
                      <div className="text-[10px] text-gray-400">8:05 AM</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingEmails;