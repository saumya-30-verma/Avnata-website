import React from 'react';
import { Link } from 'react-router-dom';

function Deals() {
  const pipelineStages = [
    { name: 'Visitor Engaged', count: 0 },
    { name: 'Lead Captured', count: 0 },
    { name: 'Property selection', count: 0 },
    { name: 'Property viewing', count: 0 },
    { name: 'Offer draft', count: 0 },
    { name: 'Negotiation', count: 0 },
    { name: 'Property sold', count: 0 },
  ];

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
            
            <Link
              to="/crm/companies"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              🏢 Companies
            </Link>

            {/* Active Deals Link */}
            <Link
              to="/crm/deals"
              className="flex w-full items-center gap-2 rounded bg-slate-700 px-2 py-1.5 font-semibold text-white"
            >
              🏷️ Deals
            </Link>

            <Link
              to="/crm/segments"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
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

            <Link 
              to="/crm/website pages"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              🌐 Website Pages
            </Link>

            <Link 
              to="/crm/blogs" 
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white">
              📝 Blog
            </Link>

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

        {/* MAIN BODY AREA */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* PAGE HEADER */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2 shrink-0">
            <div className="flex items-center gap-1 text-xl font-normal text-gray-900">
              <h1>Deals</h1>
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
                Add deals <span className="text-[10px]">⌄</span>
              </button>
            </div>
          </div>

          {/* TABS */}
          <div className="flex items-center border-b border-gray-200 px-6 text-xs font-medium shrink-0">
            <button className="border-b-2 border-slate-700 px-3 py-2 font-semibold text-gray-900 flex items-center gap-1.5">
              <span>📋</span> All deals
            </button>
            <button className="px-3 py-2 text-gray-500 hover:text-gray-900 flex items-center gap-1.5">
              <span>📋</span> My deals
            </button>
            <button className="px-2 py-2 text-gray-400 hover:text-gray-600 text-sm">+</button>
          </div>

          {/* FILTER & PIPELINE SELECTOR TOOLBAR */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-2.5 text-xs shrink-0">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search ( / )"
                  className="w-44 rounded-md border border-gray-300 py-1 pl-2.5 pr-7 text-xs focus:outline-none focus:ring-1 focus:ring-teal-600"
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
                Deal owner <span className="text-[10px]">⌄</span>
              </button>
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-gray-900">
                Create date <span className="text-[10px]">⌄</span>
              </button>
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-gray-900">
                Last activity date <span className="text-[10px]">⌄</span>
              </button>
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-gray-900">
                Close date <span className="text-[10px]">⌄</span>
              </button>

              <button className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50">
                +
              </button>
              <button className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50">
                ✏️
              </button>

              <button className="ml-1 flex items-center gap-1 text-xs font-semibold text-gray-700 hover:underline">
                <span>≡</span> Advanced filters
              </button>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button className="rounded-md border border-gray-300 px-3 py-1 font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-1">
                Prospect Buyers pipeline <span className="text-[10px]">⌄</span>
              </button>
              
              <div className="flex rounded border border-gray-300 p-0.5 bg-gray-50">
                <button className="rounded bg-white px-2 py-0.5 text-gray-900 shadow-sm font-semibold">🗂️</button>
                <button className="rounded px-2 py-0.5 text-gray-600 hover:bg-white hover:shadow-sm">📋</button>
              </div>

              <button className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                ⚙️
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                ^
              </button>
            </div>
          </div>

          {/* PIPELINE STAGES BAR */}
          <div className="overflow-x-auto px-6 py-3 border-b border-gray-100 bg-white shrink-0">
            <div className="flex items-center gap-2 min-w-max">
              {pipelineStages.map((stage, idx) => (
                <div
                  key={idx}
                  className="flex w-48 items-center justify-between rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                >
                  <span className="truncate">{stage.name}</span>
                  <span className="ml-2 font-bold text-gray-500">{stage.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* EMPTY STATE / CONTENT AREA */}
          <div className="flex-1 overflow-y-auto flex items-center justify-center p-8 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-3xl">
              {/* Text & Action Section */}
              <div className="space-y-3 text-left">
                <h2 className="text-lg font-bold text-gray-900">
                  Build a winning sales process
                </h2>
                <p className="text-xs text-gray-600">
                  Use{' '}
                  <a href="#" className="font-semibold text-teal-700 hover:underline inline-flex items-center gap-0.5">
                    Deals ↗
                  </a>{' '}
                  to track opportunities across your custom sales pipeline and report on your revenue.
                </p>
                <p className="text-xs text-gray-600">
                  Read:{' '}
                  <a href="#" className="font-bold text-teal-700 hover:underline inline-flex items-center gap-0.5">
                    How to design your sales process in Avnata ↗
                  </a>
                </p>

                <div className="flex items-center gap-3 pt-3">
                  <button className="rounded-full bg-[#005249] px-4 py-2 font-bold text-white shadow hover:bg-[#003d37]">
                    Add deal
                  </button>
                  <button className="rounded-full border border-black bg-white px-4 py-2 font-bold text-gray-800 shadow-sm hover:bg-gray-50">
                    Import data from a file
                  </button>
                </div>
              </div>

              {/* Briefcase Illustration */}
              <div className="shrink-0">
                <div className="relative flex h-48 w-56 items-center justify-center rounded-xl bg-sky-50/50 p-4">
                  <svg
                    width="140"
                    height="140"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Isometric Briefcase SVG Graphic */}
                    <path
                      d="M20 50 L60 25 L100 50 L60 75 Z"
                      fill="#D97706"
                      stroke="#1E293B"
                      strokeWidth="3"
                    />
                    <path
                      d="M20 50 L60 75 L60 100 L20 75 Z"
                      fill="#B45309"
                      stroke="#1E293B"
                      strokeWidth="3"
                    />
                    <path
                      d="M60 75 L100 50 L100 75 L60 100 Z"
                      fill="#D97706"
                      stroke="#1E293B"
                      strokeWidth="3"
                    />
                    <path
                      d="M45 34 C45 25 75 25 75 34"
                      fill="none"
                      stroke="#1E293B"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <rect
                      x="54"
                      y="68"
                      width="12"
                      height="12"
                      rx="2"
                      fill="#F59E0B"
                      stroke="#1E293B"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER BAR */}
          <footer className="flex items-center justify-between border-t border-gray-200 px-6 py-2 bg-white text-xs shrink-0">
            <div>
              <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">
                0 deals
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50">
                🔄
              </button>
              <button className="flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1 text-gray-700 hover:bg-gray-50 font-medium">
                📤 Export
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50">
                ↩
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50">
                📋
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Deals;