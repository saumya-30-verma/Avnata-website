import React from 'react';
import { Link } from 'react-router-dom';

function Forms() {
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
            <Link to="/crm/marketing-emails" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700">
              ✉️ Marketing Emails
            </Link>
            
            {/* Active Link */}
            <Link to="/crm/forms" className="flex items-center gap-2 px-2 py-1.5 rounded bg-slate-700 text-white font-semibold">
              📋 Forms
            </Link>
            
            <Link to="/crm/campaigns" className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700">
              📢 Campaigns
            </Link>

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

        {/* Page Main Content */}
        <div className="p-8 max-w-6xl mx-auto w-full flex-1 bg-white">
          <h1 className="text-lg font-bold text-gray-700 mb-12">Forms</h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-normal text-gray-700 leading-tight">
                Capture even more quality leads with high-converting, smart forms
              </h2>

              <div className="space-y-4 pt-2 text-xs leading-relaxed text-gray-600">
                {/* Feature 1 */}
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center shrink-0 font-bold text-[10px]">
                    →
                  </span>
                  <p>
                    <strong className="text-gray-700 font-bold">Drive engagement</strong> by designing forms your visitors want to fill out. Create multi-step forms in minutes using the drag-and-drop builder, then add your brand kits for styling
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center shrink-0 font-bold text-[10px]">
                    →
                  </span>
                  <p>
                    <strong className="text-gray-700 font-bold">Qualify more leads faster</strong> by asking the right questions. Personalize your form with conditional logic and show, hide or skip questions based on your visitor's answers.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center shrink-0 font-bold text-[10px]">
                    →
                  </span>
                  <p>
                    <strong className="text-gray-700 font-bold">Boost conversion</strong> by streamlining form completion. Form shortening AI gives the data for you through enrichment - no need to ask your visitors for it!
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button className="bg-[#00565b] hover:bg-[#004145] text-white font-semibold px-5 py-2 rounded-full text-xs transition">
                  Create form
                </button>
              </div>
            </div>

            {/* Right Illustration Column */}
             <div className="lg:col-span-5 flex justify-center items-center">
                <img 
                 src="/revenue-sales-forms.png"
                 alt="Forms Illustration" 
                 className="w-full max-w-xs object-contain"
                />
            </div>
        </div>
    </div>
  </div>
 </div>
);
}

export default Forms;