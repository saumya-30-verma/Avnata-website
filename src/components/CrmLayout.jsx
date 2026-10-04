import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function CrmLayout() {
  const location = useLocation();

  // Active page highlight karne ke liye helper function
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-[#f5f8fa] text-[#213343] font-sans text-xs overflow-hidden">
      {/* ================= SHARED LEFT SIDEBAR ================= */}
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
            <Link
              to="/crm/contacts"
              className={`flex items-center gap-2 rounded px-2 py-1.5 ${
                isActive('/crm/contacts') ? 'bg-slate-700 text-white font-semibold' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              📁 Contacts
            </Link>
            <Link
              to="/crm/companies"
              className={`flex items-center gap-2 rounded px-2 py-1.5 ${
                isActive('/crm/companies') ? 'bg-slate-700 text-white font-semibold' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              🏢 Companies
            </Link>
            <Link
              to="/crm/deals"
              className={`flex items-center gap-2 rounded px-2 py-1.5 ${
                isActive('/crm/deals') ? 'bg-slate-700 text-white font-semibold' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              🏷️ Deals
            </Link>
            <Link
              to="/crm/segments"
              className={`flex items-center gap-2 rounded px-2 py-1.5 ${
                isActive('/crm/segments') ? 'bg-slate-700 text-white font-semibold' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              📊 Segments
            </Link>

            <div className="pt-3 text-[10px] uppercase font-semibold text-slate-400 px-2">
              Marketing
            </div>
            <Link
              to="/crm/aeo"
              className={`flex items-center gap-2 rounded px-2 py-1.5 ${
                isActive('/crm/aeo') ? 'bg-slate-700 text-white font-semibold' : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              🎯 AEO
            </Link>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              ✉️ Marketing Emails
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              📋 Forms
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              📢 Campaigns
            </a>

            <div className="pt-3 text-[10px] uppercase font-semibold text-slate-400 px-2">
              Content
            </div>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              🌐 Website Pages
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              📝 Blog
            </a>

            <div className="pt-3 text-[10px] uppercase font-semibold text-slate-400 px-2">
              Platform
            </div>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              📈 Dashboards
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              ⚡ Workflows
            </a>
          </nav>
        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 text-slate-200 space-y-2 mt-4">
          <p className="font-semibold text-[11px]">
            Complete your setup and reach your goals faster.
          </p>
          <button className="w-full py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-white font-medium text-center">
            ✔ Continue
          </button>
        </div>
      </aside>

      {/* Dynamic Content Area (Page load hone ke liye) */}
      <div className="flex-1 flex flex-col min-w-0 bg-white overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default CrmLayout;