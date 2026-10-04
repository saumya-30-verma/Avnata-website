import React, { useState } from 'react';
import { Link } from "react-router-dom";

function TrustiesDashboard({ onBackToHome }) {
  const [activeGuide, setActiveGuide] = useState('Content Guide');

  const guideOptions = [
    'Marketing Guide',
    'Sales Guide',
    'Customer Service Guide',
    'Content Guide',
    'Revenue Guide',
  ];

  return (
    <div className="flex min-h-screen bg-[#f5f8fa] text-[#213343] font-sans text-xs">
      {/* ================= LEFT SIDEBAR ================= */}
      <aside className="w-52 bg-[#1e293b] text-slate-300 flex flex-col justify-between p-3 shrink-0">
        <div className="space-y-4">
          {/* Logo / Home */}
          <div className="flex items-center gap-2 text-white font-bold text-sm px-2 py-1">
            <div className="w-5 h-5 rounded-full bg-[#ff5c35] flex items-center justify-center text-[10px]">
              A
            </div>
            <span>Home</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 font-medium">
            <Link 
              to="/crm/contacts" 
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-200 hover:bg-slate-700"
             >
              📁 Contacts
            </Link>

            <Link 
              to="/crm/companies" 
              className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-700 text-slate-200"
             >
              🏢 Companies
           </Link>

            <Link 
              to="/crm/deals" 
              className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-700 text-slate-200"
            >
              🏷️️ Deals
            </Link>
            
            {/* Left Sidebar ke nav section mein */}
            <Link to="/crm/segments"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
              📊 Segments
           </Link>             

            <div className="pt-3 text-[10px] uppercase font-semibold text-slate-400 px-2">Marketing</div>
            <Link 
              to="/crm/aeo" 
              className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-700 text-slate-200"
             >
              🎯 AEO
            </Link>

            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-700 text-slate-200">
              ✉️ Marketing Emails
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-700 text-slate-200">
              📋 Forms
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-700 text-slate-200">
              📢 Campaigns
            </a>

            <div className="pt-3 text-[10px] uppercase font-semibold text-slate-400 px-2">Content</div>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-700 text-slate-200 font-semibold text-white bg-slate-800">
              🌐 Website Pages
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-700 text-slate-200">
              📝 Blog
            </a>

            <div className="pt-3 text-[10px] uppercase font-semibold text-slate-400 px-2">Platform</div>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-700 text-slate-200">
              📈 Dashboards
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-slate-700 text-slate-200">
              ⚡ Workflows
            </a>
          </nav>
        </div>

        {/* Bottom Banner inside Sidebar */}
        <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 text-slate-200 space-y-2 mt-4">
          <p className="font-semibold text-[11px]">Complete your setup and reach your goals faster.</p>
          <button className="w-full py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-white font-medium text-center">
            ✔ Continue
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-12 bg-[#2d3e50] text-white flex items-center justify-between px-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Find in Avnata"
                className="bg-[#1e293b] text-white px-3 py-1 rounded-full text-xs w-64 border border-slate-600 focus:outline-none"
              />
            </div>
            <span className="text-xs text-white font-medium cursor-pointer">✦ Breeze Assistant</span>
          </div>

          <div className="flex items-center gap-4">
            {onBackToHome && (
              <button 
                onClick={onBackToHome} 
                className="text-xs text-slate-300 hover:text-white underline mr-2"
              >
                ← Home Page
              </button>
            )}
            <button className="border border-slate-500 rounded px-2 py-0.5 text-xs hover:bg-slate-700">
              Upgrade
            </button>
            <div className="flex items-center gap-2 font-medium bg-slate-700 px-2.5 py-1 rounded cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Trusties</span>
            </div>
          </div>
        </header>

        {/* Main Body Grid */}
        <main className="p-6 overflow-y-auto flex-1">
          <div className="max-w-[800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* LEFT COLUMN: Start Guides Card */}
            <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200 p-5 shadow-sm h-fit">
              <h2 className="font-bold text-sm text-gray-800 mb-4">Start Guides</h2>
              
              <div className="space-y-1">
                {guideOptions.map((guide) => (
                  <button
                    key={guide}
                    onClick={() => setActiveGuide(guide)}
                    className={`w-full text-left px-3 py-2 rounded-md font-medium transition ${
                      activeGuide === guide
                        ? 'bg-gray-100 text-gray-900 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {guide}
                  </button>
                ))}
              </div>

              <hr className="my-5 border-gray-200" />

              <div className="space-y-3 font-medium text-gray-600">
                <button className="flex items-center gap-2 hover:text-gray-900 w-full text-left">
                  <span>📑</span> View your plan
                </button>
                <button className="flex items-center gap-2 hover:text-gray-900 w-full text-left">
                  <span>👥</span> Invite your team <span className="text-gray-400 text-[10px]">ⓘ</span>
                </button>
              </div>

              <hr className="my-5 border-gray-200" />

              <div>
                <p className="font-semibold text-gray-700 mb-3">Ready to connect:</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold text-blue-600">
                    31
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    m
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
                    #
                  </div>
                  <button className="w-8 h-8 rounded-full border border-dashed border-gray-400 flex items-center justify-center text-gray-500 hover:bg-gray-50">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Progress & Setup Cards */}
            <div className="lg:col-span-8 space-y-5">
              
              {/* Banner Top */}
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 flex items-center justify-between text-black font-medium">
                <span>Explore the other features in your template</span>
                <a href="#" className="text-sky-700 font-semibold hover:underline">
                  See what’s been set up
                </a>
              </div>

              {/* Progress Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 font-bold text-gray-800 text-sm">
                    <span className="text-orange-500">🍱</span>
                    <span>Your Content tools progress</span>
                  </div>
                  <span className="font-bold text-gray-700">23%</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-emerald-600 h-2.5 rounded-full w-[23%]"></div>
                </div>
              </div>

              {/* Recommended Section */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-50 text-amber-500 rounded-lg text-lg">⚡</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-4">Recommended: All you need to get started</h3>
                    
                    <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 accent-emerald-600 rounded cursor-pointer" />
                        <div>
                          <p className="font-bold text-gray-800">Set up the basics</p>
                          <p className="text-gray-500 text-[11px]">Import your contacts, invite teammates, and understand HubSpot properties</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="w-20 bg-gray-100 rounded-full h-1.5 overflow-hidden mb-1">
                          <div className="bg-emerald-600 h-1.5 w-[42%]"></div>
                        </div>
                        <span className="text-[10px] text-gray-400">About 8 minutes left</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Build and manage your website */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-blue-500 rounded-lg text-lg">💻</div>
                  <h3 className="font-bold text-lg text-gray-800">Build and manage your website with CMS Hub</h3>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 accent-emerald-600 rounded cursor-pointer" />
                      <div>
                        <p className="font-bold text-gray-800">Take ownership of your website</p>
                        <p className="text-gray-500 text-[11px]">Build and customize your site with powerful content management tools</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-400">About 25 minutes</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 accent-emerald-600 rounded cursor-pointer" />
                      <div>
                        <p className="font-bold text-gray-800">Grow your audience with search engine-friendly content</p>
                        <p className="text-gray-500 text-[11px]">Publish your site and attract visitors with your content</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-400">About 24 minutes</span>
                  </div>
                </div>
              </div>

              {/* Learn more about Content tools */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4">
                <h3 className="font-bold text-lg text-gray-800">Learn more about Content tools</h3>

                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 text-teal-700 font-bold hover:underline">
                    <span>💳</span> Get started with a quick lesson on creating a high-performing website ↗
                  </a>
                  <hr className="border-gray-100" />
                  <a href="#" className="flex items-center gap-3 text-teal-700 font-bold hover:underline">
                    <span>🏪</span> Need some help? Find a partner in the HubSpot Solutions Directory ↗
                  </a>
                </div>
              </div>

              {/* Bottom Footer Text */}
              <p className="text-gray-500 text-[11px] pt-2">
                Finished setting up? <a href="#" className="font-bold text-teal-700 hover:underline">Turn off the start guide</a>, and we won't show you this page again.
              </p>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default TrustiesDashboard;