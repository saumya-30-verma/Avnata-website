import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Aeo() {
  const [brand, setBrand] = useState('Trusties');
  const [domain, setDomain] = useState('www.trusties.com');

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-[#213343] font-sans text-xs">
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
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700"
            >
              📁 Contacts
            </Link>
            <Link
              to="/crm/companies"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700"
            >
              🏢 Companies
            </Link>
            <Link
              to="/crm/deals"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700"
            >
              🏷️ Deals
            </Link>
            <Link
              to="/crm/segments"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700"
            >
              📊 Segments
            </Link>

            <div className="pt-3 text-[10px] uppercase font-semibold text-slate-400 px-2">
              Marketing
            </div>
            {/* Active Link: AEO */}
            <Link
              to="/crm/aeo"
              className="flex items-center gap-2 px-2 py-1.5 rounded bg-slate-800 text-white font-semibold"
            >
              🎯 AEO
            </Link>
            <Link
              to="/crm/marketing-emails"
              className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700"
            >
              ✉️ Marketing Emails
            </Link>
            <Link
              to="/crm/forms"
              className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700"
            >
              📋 Forms
            </Link>
            <Link
              to="/crm/campaigns"
              className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700"
            >
              📢 Campaigns
            </Link>

            <div className="pt-3 text-[10px] uppercase font-semibold text-slate-400 px-2">
              Content
            </div>
            <Link
              to="/crm/website-pages"
              className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700"
            >
              🌐 Website Pages
            </Link>
            <Link
              to="/crm/blog"
              className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700"
            >
              📝 Blog
            </Link>

            <div className="pt-3 text-[10px] uppercase font-semibold text-slate-400 px-2">
              Platform
            </div>
            <Link
              to="/crm/dashboards"
              className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700"
            >
              📈 Dashboards
            </Link>
            <Link
              to="/crm/workflows"
              className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300 hover:bg-slate-700"
            >
              ⚡ Workflows
            </Link>
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

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
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
            <span className="text-xs text-white font-medium cursor-pointer">
              ✦ Breeze Assistant
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="border border-slate-500 rounded px-2 py-0.5 text-xs hover:bg-slate-700">
              Upgrade
            </button>
            <div className="flex items-center gap-2 font-medium bg-slate-700 px-2.5 py-1 rounded cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Trusties</span>
            </div>
          </div>
        </header>

        {/* Sub Header / Breadcrumb */}
        <div className="px-8 pt-5 pb-3 border-b border-gray-100 flex items-center gap-2">
          <span className="text-gray-400 font-medium">Agent Hub</span>
          <span className="text-gray-300">/</span>

          <h1 className="text-sm font-bold text-gray-800">AEO</h1>
          <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
            Beta
          </span>
        </div>

        {/* Main Body */}
        <main className="flex-1 overflow-y-auto px-8 py-6 space-y-12 max-w-[1200px] mx-auto w-full">
          {/* Section 1: Hero Form & Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
            {/* Left Column - Form Details */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-4xl font-normal text-gray-700 leading-tight">
                AI is talking about your brand. Now you can listen.
              </h2>

              <ul className="space-y-2.5 text-gray-600 text-[14px]">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[12px] font-bold">
                    ‹
                  </span>
                  See how your business shows up across ChatGPT, Perplexity, and Gemini
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[10px] font-bold">
                    ‹
                  </span>
                  Track prompts to save time on competitive research and benchmarking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[10px] font-bold">
                    ‹
                  </span>
                  Use Content Agent recommendations to generate AEO-optimized content
                </li>
              </ul>

              {/* Input Fields */}
              <div className="pt-2">
                <p className="font-bold text-gray-700 text-[12px] mb-2">
                  Enter a brand to track its AI visibility
                </p>
                <div className="grid grid-cols-2 gap-3 max-w-lg">
                  <div>
                    <label className="block text-[13px] text-gray-700 font-bold mb-1">
                      Brand
                    </label>
                    <input
                      type="text"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-teal-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-gray-700 font-bold mb-1">
                      Domain
                    </label>
                    <input
                      type="text"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-teal-600"
                    />
                  </div>
                </div>
              </div>

              {/* Free Audit Box */}
              <div className="border border-gray-200 rounded-lg p-4 bg-white flex items-center justify-between max-w-lg">
                <div className="space-y-1 pr-4">
                  <h4 className="font-bold text-gray-700 text-lg">
                    Free technical and content audit — included on your dashboard
                  </h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    We'll scan your site and surface recommendations to improve your technical setup and content. We start with your main domain, but you can add as many domains as you like.
                  </p>
                </div>
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl text-orange-400">💥</span>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button className="bg-[#004d40] hover:bg-[#00362d] text-white font-bold px-4 py-2 rounded-full text-sm">
                  + Get started free
                </button>
              </div>
            </div>

            {/* Right Column - Illustration Placeholder */}
            <div className="lg:col-span-5 bg-[#fcfcf9] border border-gray-100 rounded-xl p-8 flex flex-col items-center justify-center min-h-[280px]">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-sm font-bold">
                  ✓
                </div>
                <div className="h-1.5 w-24 bg-gray-200 rounded mx-auto"></div>
                <div className="h-1.5 w-16 bg-emerald-400 rounded mx-auto"></div>
              </div>
              <button className="mt-8 text-teal-700 font-semibold text-xs flex items-center gap-1 hover:underline">
                › Try a sample prompt
              </button>
            </div>
          </div>

          {/* Section 2: Learn how AEO & content agent work */}
          <div className="pt-6 space-y-4">
            <h3 className="font-bold text-xl text-gray-700">
              Learn how AEO & content agent work
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 1 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col">
                <div className="bg-[#2a132e] text-white p-4 relative min-h-[120px] flex flex-col justify-between">
                  <span className="text-[12px] text-gray-300 font-bold">
                    Avnata Academy Video • Marketing
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">
                      ▶
                    </div>
                    <span className="text-sm font-semibold">
                      What is the AEO tool?
                    </span>
                  </div>
                  <span className="text-[9px] text-gray-400">
                    4 minutes • Academy
                  </span>
                </div>
                <div className="p-4 space-y-2 flex-1">
                  <h4 className="font-bold text-sm text-gray-700">
                    What is the AEO tool
                  </h4>
                  <p className="text-[15px] text-gray-500 leading-relaxed">
                    Discover how HubSpot's AEO tool gives you visibility into where your brand appears in AI generated answers so you can understand your competitive position and take action to improve it.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col">
                <div className="bg-[#0e2726] text-white p-4 relative min-h-[120px] flex flex-col justify-between">
                  <span className="text-[12px] text-gray-300 font-bold">
                    Avnata Academy Video • Marketing
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">
                      ▶
                    </div>
                    <span className="text-sm font-semibold">
                      How to Use AEO Recommendations
                    </span>
                  </div>
                  <span className="text-[9px] text-gray-400">
                    3 minutes • Practice while watching 👁
                  </span>
                </div>
                <div className="p-4 space-y-2 flex-1">
                  <h4 className="font-bold text-sm text-gray-700">
                    How to use AEO recommendations
                  </h4>
                  <p className="text-[15px] text-gray-500 leading-relaxed">
                    Showing up in AI answers isn't about gaming an algorithm; it's about building consensus across the right sources, and AEO Recommendations tells you exactly how to do that.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col">
                <div className="bg-[#3e1e35] text-white p-4 relative min-h-[120px] flex flex-col justify-between">
                  <span className="text-[12px] text-gray-300 font-bold">
                    Avnata Academy Video • Marketing
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">
                      ▶
                    </div>
                    <span className="text-sm font-semibold">
                      Improve Your AI Search Visibility
                    </span>
                  </div>
                  <span className="text-[9px] text-gray-400">
                    minutes • Academy
                  </span>
                </div>
                <div className="p-4 space-y-2 flex-1">
                  <h4 className="font-bold text-sm text-gray-700">
                    Improve your AI search visibility with prompts
                  </h4>
                  <p className="text-[15px] text-gray-500 leading-relaxed">
                    Your brand visibility in AI searches comes down to one thing: tracking the right prompts. Here are 3 best practices to get it right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Aeo;