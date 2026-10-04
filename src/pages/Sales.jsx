import React from 'react';

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#213343] font-sans">
      {/* Top Utility Bar */}
      <div className="border-b border-gray-200 bg-white text-[11px] text-gray-600 px-6 py-1.5">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-black">🌐 English ▾</button>
            <button className="flex items-center gap-1 hover:text-black">👁️ High Contrast</button>
            <a href="#" className="hover:text-black">💬 Customer Support</a>
            <a href="#" className="hover:text-black">👤 Contact Sales</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-black">🔍</button>
            <a href="#" className="hover:text-black">Log In</a>
            <button className="flex items-center gap-1 hover:text-black">About ▾</button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white px-6 py-3">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href="#" className="text-2xl font-black tracking-tight text-[#ff5c35]">
              Avnata
            </a>

            {/* Nav Links */}
            <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
              <button className="flex items-center gap-1 hover:text-[#ff5c35]">Products ▾</button>
              <button className="flex items-center gap-1 hover:text-[#ff5c35]">Solutions ▾</button>
              <a href="#" className="hover:text-[#ff5c35]">Pricing</a>
              <button className="flex items-center gap-1 hover:text-[#ff5c35]">Resources ▾</button>
            </nav>
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center gap-3">
            <button className="rounded-md bg-[#ff5c35] px-4 py-2 text-xs font-bold text-white hover:bg-[#e04b28] transition">
              Get a demo
            </button>
            <button className="rounded-md border border-[#ff5c35] bg-white px-4 py-2 text-xs font-bold text-[#ff5c35] hover:bg-orange-50 transition">
              Start 14-day free trial
            </button>
          </div>
        </div>
      </header>

      {/* Announcement Banner */}
      <div className="bg-[#CBDCCB] px-4 py-2.5 text-center text-xs text-[#1C3026]">
        <span>Avnata is a Challenger in the 2026 Gartner® Magic Quadrant™ for CRM Sales.</span>
        <button className="ml-3 rounded bg-[#1C3026] px-3 py-1 text-[11px] font-bold text-white hover:opacity-90">
          Learn more
        </button>
      </div>

      {/* Hero / Sales Hub Header Section */}
      <section className="px-6 pt-8 pb-12 text-center">
        <div className="mx-auto max-w-[800px]">
          {/* Breadcrumb */}
          <div className="mb-6 text-left text-xs text-black">
            <a href="#" className="underline hover:text-black">Home</a> &gt; <span>Sales Hub</span>
          </div>

          {/* Sales Hub Sub-logo */}
          <div className="mb-2 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wide text-black">
            <span className="text-base">🟧</span> Sales Hub®
          </div>

          {/* Main Title */}
          <h1 className="text-4xl font-normal text-black md:text-5xl font-serif">
            Sales Software
          </h1>

          <p className="mt-3 text-sm text-black md:text-base">
            More selling. Less everything else.
          </p>

          {/* CTA Action Buttons */}
          <div className="mt-6 flex justify-center gap-3">
            <button className="rounded-md bg-[#ff5c35] px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#e04b28] transition">
              Get a demo
            </button>
            <button className="rounded-md border border-[#ff5c35] bg-white px-6 py-3 text-xs font-bold text-[#ff5c35] shadow-sm hover:bg-orange-50 transition">
              Start 14-day free trial
            </button>
          </div>
        </div>
      </section>

      {/* App UI Dashboard Preview Section */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-[1100px] overflow-hidden rounded-xl border border-gray-300 bg-white shadow-2xl">
          <div className="flex min-h-[500px]">
            
            {/* Sidebar */}
            <div className="w-12 bg-[#3b0b2e] flex flex-col items-center py-4 text-white gap-6 text-sm">
              <div className="h-6 w-6 rounded bg-[#ff5c35] flex items-center justify-center text-xs font-bold">A</div>
              <div className="cursor-pointer opacity-70 hover:opacity-100">🏠</div>
              <div className="cursor-pointer opacity-70 hover:opacity-100">📌</div>
              <div className="cursor-pointer opacity-70 hover:opacity-100">📊</div>
              <div className="cursor-pointer opacity-70 hover:opacity-100">👥</div>
              <div className="cursor-pointer opacity-70 hover:opacity-100">📁</div>
              <div className="mt-auto cursor-pointer opacity-70 hover:opacity-100">⚙️</div>
            </div>

            {/* Main Interface */}
            <div className="flex-1 bg-gray-100 flex flex-col">
              
              {/* Dashboard Header Bar */}
              <div className="bg-[#3b0b2e] px-4 py-2 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded w-64 text-gray-300">
                  <span>🔍 Search Avnata</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <span>✨ Assistant</span>
                  <span className="bg-purple-900 px-2 py-0.5 rounded text-[10px]">Playful Grounds ▾</span>
                </div>
              </div>

              {/* Sub Header Navigation */}
              <div className="bg-white border-b px-6 py-3 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-sm text-gray-800">Sales Beth Robinson ▾</h2>
                </div>
                <div className="flex gap-6 text-xs font-medium text-gray-500 border-b">
                  <span className="border-b-2 border-black text-black pb-1 cursor-pointer">Summary</span>
                  <span className="hover:text-black cursor-pointer">Leads</span>
                  <span className="hover:text-black cursor-pointer">Deals</span>
                  <span className="hover:text-black cursor-pointer">Schedule</span>
                  <span className="hover:text-black cursor-pointer">Feed</span>
                </div>
              </div>

              {/* Dashboard Body Content */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                
                {/* Column 1: Tasks */}
                <div className="bg-white p-4 rounded border border-gray-200">
                  <div className="flex justify-between font-bold border-b pb-2 mb-3">
                    <span>Your tasks</span>
                    <span className="text-gray-400 font-normal">Due today ▾</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-[10px] uppercase font-bold">High Priority</span>
                      <span className="text-lg font-bold text-purple-900">3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-[10px] uppercase font-bold">All Tasks</span>
                      <span className="text-lg font-bold text-purple-900">75</span>
                    </div>
                    <div className="border-t pt-2 space-y-1 text-gray-600">
                      <div className="flex justify-between"><span>📋 To-dos</span><span className="font-bold">(42)</span></div>
                      <div className="flex justify-between"><span>📞 Calls</span><span className="font-bold">(0)</span></div>
                      <div className="flex justify-between"><span>✉️ Emails</span><span className="font-bold">(32)</span></div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Outreach Activities */}
                <div className="bg-white p-4 rounded border border-gray-200">
                  <div className="font-bold border-b pb-2 mb-3">Your outreach activities (17)</div>
                  <div className="p-3 bg-gray-50 border rounded text-center my-4">
                    <div className="font-bold text-gray-800">Prospecting agent</div>
                    <div className="text-[10px] text-gray-500">5 contacts enrolled</div>
                    <button className="mt-3 text-xs text-purple-700 underline font-semibold">Review emails</button>
                  </div>
                </div>

                {/* Column 3: Calendar Schedule */}
                <div className="bg-white p-4 rounded border border-gray-200">
                  <div className="flex gap-4 font-bold border-b pb-2 mb-3">
                    <span className="border-b-2 border-black pb-1">Schedule</span>
                    <span className="text-gray-400">Insights</span>
                  </div>
                  <div className="space-y-2 text-[11px]">
                    <div className="p-1.5 bg-purple-50 border border-purple-200 rounded text-purple-900">
                      <span className="font-bold">8:00 AM</span> Call Christine P.
                    </div>
                    <div className="p-1.5 bg-orange-50 border border-orange-200 rounded text-orange-900">
                      <span className="font-bold">9:00 AM</span> Beth &lt;&gt; Schwartz Meyer
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE SECTION ================= */}
      <section className="bg-white px-6 py-20 text-[#213343]">
        <div className="mx-auto max-w-[800px]">
          {/* Top Pill / Badge */}
          <div className="mb-6 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-2xs">
              <span className="text-[#ff5c35]">✦</span> Business Solutions
            </span>
            <div className="h-[1px] flex-1 border-b border-dashed border-gray-300"></div>
          </div>

          {/* Heading & Subtext Grid */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <h2 className="font-serif text-2xl font-normal leading-tight md:text-3xl text-black">
              Every rep. Full context. Every deal.
            </h2>
            <p className="text-sm leading-relaxed text-black md:self-center">
              AI that knows when to reach out, what to say, and how to move deals forward – turning conversations into closed deals.
            </p>
          </div>

          {/* Feature Highlight Graphic Card */}
          <div className="relative mb-20 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50/40 via-purple-50/30 to-gray-50 p-8 md:p-12">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              
              {/* Graphic Mockup Area */}
              <div className="relative flex justify-center py-4">
                {/* Agent Card Mockup */}
                <div className="w-full max-w-[340px] rounded-xl border border-gray-200/80 bg-white p-5 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-100 text-pink-600 font-bold text-lg">
                      🎯
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Hi, I'm your prospecting agent.</h4>
                      <p className="mt-1 text-[11px] text-gray-500 leading-snug">
                        I'm here to help put your prospecting efforts on auto-pilot. I have 44 enrollments waiting for your review today.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 rounded border border-gray-200 bg-gray-50 p-2 text-[10px] text-gray-400">
                    Ask my selling persona...
                  </div>
                </div>

                {/* Overlapping Dark Popup Menu */}
                <div className="absolute -bottom-4 right-4 w-52 rounded-xl bg-[#2e0927] p-3 text-white shadow-2xl md:right-8">
                  <div className="mb-2 text-xs font-bold text-white">Enroll</div>
                  <div className="space-y-1 text-[11px]">
                    <div className="rounded bg-pink-200/20 px-2 py-1.5 font-medium text-pink-200 cursor-pointer">
                      Manually enroll contacts
                    </div>
                    <div className="px-2 py-1 text-gray-300 hover:text-white cursor-pointer">
                      Manually enroll companies
                    </div>
                    <div className="px-2 py-1 text-gray-300 hover:text-white cursor-pointer">
                      Set up automated enrollment
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div>
                <h3 className="text-xl font-bold text-[#213343] md:text-2xl">
                  Create Pipeline
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-black md:text-sm">
                  Know when to reach out and who to target. Sales Hub's AI-powered tools surface accounts showing real buying signals, so reps focus on leads that are actually going somewhere.
                </p>
              </div>

            </div>
          </div>

          {/* 6 Grid Features */}
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-3">
            
            {/* Feature 1 */}
            <div className="border-l-2 border-transparent pl-2">
              <div className="mb-2 text-lg">📌</div>
              <h4 className="text-sm font-bold text-black">Breeze Prospecting Agent (Beta)</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Find accounts, source buying committees, and execute personalized outreach with an AI agent that learns from your best reps over time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border-l-2 border-transparent pl-2">
              <div className="mb-2 text-lg">🤝</div>
              <h4 className="text-sm font-bold text-black">Lead Management</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Manage leads and activities on one AI-powered workspace and turn more leads into deals.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border-l-2 border-transparent pl-2">
              <div className="mb-2 text-lg">🔄</div>
              <h4 className="text-sm font-bold text-black">Sales Automation</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Set up automated multi-channel outreach that adapts based on prospect engagement.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border-l-2 border-transparent pl-2">
              <div className="mb-2 text-lg">🤖</div>
              <h4 className="text-sm font-bold text-black">Buying Groups</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Map every decision maker, champion, and influencer automatically, so reps are never single-threaded on a high-stakes deal.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="border-l-2 border-transparent pl-2">
              <div className="mb-2 text-lg">📞</div>
              <h4 className="text-sm font-bold text-black">Call Tracking</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Make calls efficiently with a power dialer, voicemail drops, and CRM logging for your most important conversations.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="border-l-2 border-transparent pl-2">
              <div className="mb-2 text-lg">🖥️</div>
              <h4 className="text-sm font-bold text-black">Avnata Sales Extensions</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Work where reps already live. Access Avnata directly in Gmail or Outlook, and research prospects or take action from any webpage without switching tabs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= REVENUE HUB INTEGRATION BANNER ================= */}
      <section className="bg-[#002B2A] py-16 px-6 text-white">
        <div className="mx-auto max-w-[900px] flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Graphic Card */}
          <div className="w-full md:w-[330px] shrink-0 bg-[#FDFBF7] rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg text-[#213343]">
            <img 
              src="/revenue-sales-hub.png" 
              alt="Revenue Hub + Sales Hub" 
              className="w-full h-auto max-h-[220px] object-contain rounded-xl"
            />
            </div>
          {/* Right Text Content */}
          <div className="flex-1 space-y-4 text-left">
            {/* Pill Tag */}
            <div className="inline-block border border-gray-600 bg-black/20 rounded px-3 py-1 text-[11px] font-semibold text-gray-200 tracking-wide">
              Revenue Hub + Sales Hub
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-xl font-bold tracking-tight text-white">
              Win the deal. Quote fast. Get paid.
            </h2>

            {/* Subtext */}
            <p className="text-xs md:text-sm text-white leading-relaxed max-w-[600px]">
              Don't let separate sales and CPQ tools slow you down. Close deals in Sales Hub, then quote, bill, and collect payment in Revenue Hub — all without switching platforms.
            </p>

            {/* Link */}
            <div className="pt-2">
              <a 
                href="#" 
                className="text-xs md:text-sm font-bold text-white underline decoration-[#ff5c35] decoration-2 underline-offset-4 hover:opacity-80 transition"
              >
                Explore Revenue Hub
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PROGRESS DEALS SECTION ================= */}
      <section className="bg-white px-6 py-20 text-[#213343]">
        <div className="mx-auto max-w-[900px]">
          
          {/* Main Top Grid (Heading & Visual Mockup) */}
          <div className="mb-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            
            {/* Left Column: Heading & Description */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-black md:text-2xl">
                Progress Deals
              </h2>
              <p className="text-sm leading-relaxed text-black md:text-base">
                Keep deals moving from first conversation to closed-won. Deal progression drafts follow-ups, suggests next steps, and keeps your CRM current automatically — so reps always know what moves the deal forward.
              </p>
            </div>

            {/* Right Column: Overlapping Card Graphic */}
            <div className="relative flex justify-center py-6">
              {/* Dark Back Card (Deal Score 85) */}
              <div className="w-full max-w-[340px] rounded-2xl bg-[#032B2B] p-6 text-white shadow-xl">
                <div className="text-[11px] font-medium text-gray-300">Deal Score</div>
                
                <div className="mt-3 flex items-center gap-6">
                  {/* Score Circle */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-emerald-400 text-2xl font-bold text-white">
                    85
                  </div>

                  {/* Score Factors */}
                  <div className="space-y-2 text-[11px]">
                    <div className="font-semibold text-gray-300">Key factors</div>
                    <div>
                      <div className="text-gray-400">Progression</div>
                      <div className="flex items-center gap-1.5 font-medium text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        Deal probability is 80%
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400">Engagement</div>
                      <div className="flex items-center gap-1.5 text-gray-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
                        5 days until next scheduled activity
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* White Floating Card (Deal Insights) */}
              <div className="absolute -top-4 right-2 w-64 rounded-xl border border-gray-100 bg-white p-4 shadow-2xl md:right-6">
                <h4 className="text-xs font-bold text-gray-900">Deal Insights</h4>
                <div className="mt-3 flex items-start gap-2.5">
                  <div className="rounded bg-gray-100 p-1.5 text-xs">💬</div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-800">Recent Activity</div>
                    <div className="text-[9px] text-gray-500">
                      Latest 5 activities June 20 2025 to Aug 5 2025
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom 6 Features Grid */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
            
            {/* Feature 1 */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-2 text-xl">⭐</div>
              <h4 className="text-sm font-bold text-black">Deal Scoring</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Use AI to automatically score, rank, and prioritize which deals are most likely to close.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-2 text-xl">🔀</div>
              <h4 className="text-sm font-bold text-black">Deal Pipelines</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Easily add, score, and track deals so nothing falls through the cracks.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-2 text-xl">✦</div>
              <h4 className="text-sm font-bold text-black">AI Guided Selling</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Guide sellers in a workspace that surfaces leads, deals, tasks, and next best actions with smart queues and daily action summaries.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-2 text-xl">📋</div>
              <h4 className="text-sm font-bold text-black">Avnata Notetaker</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Capture every meeting automatically, prep with full customer context, and send follow-up recordings instantly.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-2 text-xl">📑</div>
              <h4 className="text-sm font-bold text-black">Playbooks</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Build a library of sales content for your team to share and track which documents close deals.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-2 text-xl">🔄</div>
              <h4 className="text-sm font-bold text-black">Deal Progression</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                AI analyzes conversation transcripts, emails, and deal history to suggest CRM updates, draft follow-up emails, and next steps to keep deals moving forward.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CLOSE DEALS SECTION ================= */}
      <section className="bg-white px-6 py-20 text-[#213343]">
        <div className="mx-auto max-w-[1100px]">
          
          {/* Main Top Grid (Visual Mockup & Heading) */}
          <div className="mb-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            
            {/* Left Column: Overlapping Cards Graphic (Analytics & Dashboard) */}
            <div className="relative flex justify-center py-6">
              {/* Back Card (Sales Rep Dashboard) */}
              <div className="absolute top-4 left-2 w-56 rounded-xl border border-gray-200 bg-[#D3E4D8]/60 p-4 shadow-md md:left-6">
                <div className="text-[10px] font-bold text-gray-700">Sales Rep Dashboard</div>
                <div className="mt-2 text-[9px] font-semibold text-gray-600">My Tasks</div>
                <div className="mt-2 space-y-1.5 text-[8px] text-gray-500">
                  <div className="rounded border border-gray-200 bg-white p-1">Title</div>
                  <div className="flex items-center gap-1 rounded border border-gray-200 bg-white p-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span> Email Success
                  </div>
                  <div className="flex items-center gap-1 rounded border border-gray-200 bg-white p-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span> Call Alex
                  </div>
                </div>
              </div>

              {/* Front Card (Recent Deal Amount by Source Bar Chart) */}
              <div className="relative z-10 ml-12 w-full max-w-[340px] rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-gray-900">Recent Deal Amount by Source</h4>
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-[9px] text-gray-500">All Time ▾</span>
                </div>

                {/* Horizontal Bar Chart Visual */}
                <div className="mt-4 space-y-2 text-[9px]">
                  <div>
                    <div className="flex justify-between text-gray-500 mb-0.5">
                      <span>Organic Search</span>
                      <span className="font-semibold text-gray-700">$50,200.00</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full bg-[#ff5c35] rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-gray-500 mb-0.5">
                      <span>Paid Search</span>
                      <span className="font-semibold text-gray-700">$41,000.00</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full bg-[#ff5c35] rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-gray-500 mb-0.5">
                      <span>Direct Marketing</span>
                      <span className="font-semibold text-gray-700">$21,800.00</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full bg-[#ff5c35] rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-gray-500 mb-0.5">
                      <span>Referrals</span>
                      <span className="font-semibold text-gray-700">$12,900.00</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full bg-[#ff5c35] rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-gray-500 mb-0.5">
                      <span>Paid Social</span>
                      <span className="font-semibold text-gray-700">$16,750.00</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full bg-[#ff5c35] rounded-full" style={{ width: '38%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Heading & Description */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-black md:text-2xl">
                Close Deals
              </h2>
              <p className="text-sm leading-relaxed text-black md:text-base">
                Give leaders a real-time view of pipeline health, deal plans, rep performance, and revenue risk — all from the same data your reps work in every day.
              </p>
            </div>

          </div>

          {/* Bottom 6 Features Grid */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
            
            {/* Feature 1 */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-2 text-xl">📋</div>
              <h4 className="text-sm font-bold text-black">Deal Plans</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Give every deal a shared path to close with milestones, owners, and dates your buyers can see and act on directly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-2 text-xl">📝</div>
              <h4 className="text-sm font-bold text-black">CPQ in Revenue Hub</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                AI-powered CPQ — configure, price, quote — accelerates the quoting process from one unified platform.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-2 text-xl">🎯</div>
              <h4 className="text-sm font-bold text-black">Sales Methodology Scoring</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Standardize how your team sells by automatically extracting conversation context and mapping it to your sales framework.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-2 text-xl">📊</div>
              <h4 className="text-sm font-bold text-black">Sales Analytics &amp; Reporting</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Get full visibility into your process to measure performance and deliver results.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-2 text-xl">📑</div>
              <h4 className="text-sm font-bold text-black">Conversation Intelligence</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Bring the voice of the customer into your CRM and provide better coaching.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="mb-2 text-xl">📈</div>
              <h4 className="text-sm font-bold text-black">Forecasting</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-black">
                Get a comprehensive view of your pipeline with AI-powered projections.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CUSTOMER PROOF / REAL STORIES SECTION ================= */}
      <section className="bg-white px-6 py-20 text-[#213343]">
        <div className="mx-auto max-w-[800px]">
          
          {/* Top Pill & Button Row */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex flex-1 items-center gap-2 pr-4">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-2xs">
                Customer Proof
              </span>
              <div className="h-[1px] flex-1 border-b border-dashed border-gray-300"></div>
            </div>
            <button className="rounded-md border border-black bg-white px-4 py-2 text-xs font-bold text-black hover:bg-gray-50 transition">
              Explore case studies
            </button>
          </div>

          {/* Heading & Subtext */}
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
            <h2 className="font-serif text-3xl font-normal leading-tight text-[#213343] md:text-3xl">
              Real Growth, Real 
              <br/>
              Stories
            </h2>
            <p className="text-xs text-black md:text-sm">
              See how sales teams are using Sales Hub to convert opportunities faster with AI.
            </p>
          </div>

          {/* Video / Customer Testimonial Media Card */}
          <div className="relative mb-16 overflow-hidden rounded-2xl bg-teal-900 shadow-xl">
            {/* Background Pattern / Video Thumbnail Placeholder */}
            <div className="relative flex h-[350px] w-full items-center justify-center bg-gradient-to-r from-emerald-800 to-teal-900 md:h-[450px]">
              
              {/* Decorative Dot Grid Overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)',
                  backgroundSize: '24px 24px'
                }}
              ></div>

              {/* Center Play Button */}
              <button className="group relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#ff5c35] text-white shadow-2xl transition hover:scale-110 hover:bg-[#e04b28]">
                <div className="ml-1 h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-white"></div>
              </button>

              {/* Representative Image Overlaid (Optional if you use local file) */}
              {/* <img src="/unipart-lady.png" alt="Customer Story" className="absolute inset-0 h-full w-full object-cover opacity-80" /> */}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mb-16 grid grid-cols-1 gap-8 border-b border-gray-100 pb-16 md:grid-cols-4">
            
            {/* Left Column Text */}
            <div>
              <h3 className="font-serif text-lg font-bold leading-snug text-[#213343]">
                See why companies like to work with Sales Hub.
              </h3>
              <a href="#" className="mt-3 inline-block text-xs font-bold text-black underline underline-offset-4 hover:opacity-80">
                Download the ROI report
              </a>
            </div>

            {/* Stat 1 */}
            <div className="border-l border-gray-200 pl-6">
              <div className="font-serif text-4xl font-normal text-black md:text-3xl">
                73%
              </div>
              <p className="mt-2 text-xs leading-relaxed text-black">
                of sales professionals say Avnata increased their win rate
              </p>
            </div>

            {/* Stat 2 */}
            <div className="border-l border-gray-200 pl-6">
              <div className="font-serif text-4xl font-normal text-black md:text-3xl">
                94%
              </div>
              <p className="mt-2 text-xs leading-relaxed text-black">
                more deals closed after 6 months
              </p>
            </div>

            {/* Stat 3 */}
            <div className="border-l border-gray-200 pl-6">
              <div className="font-serif text-4xl font-normal text-black md:text-3xl">
                82%
              </div>
              <p className="mt-2 text-xs leading-relaxed text-black">
                more meetings booked with prospecting agent
              </p>
            </div>

          </div>

          {/* Customer Logos Bar */}
          <div className="flex flex-wrap items-center justify-between gap-6 opacity-75 grayscale transition hover:grayscale-0">
            <span className="font-black tracking-tight text-red-800 text-sm">MOREHOUSE</span>
            <span className="font-bold tracking-widest text-blue-900 text-sm">KAPLAN</span>
            <span className="font-extrabold text-amber-500 text-sm">GAMESQUARE</span>
            <span className="font-semibold text-emerald-600 text-sm">gofundme</span>
            <span className="font-bold text-orange-500 text-sm">eventbrite</span>
            <span className="font-extrabold text-red-600 text-sm">DOORDASH</span>
            <span className="font-bold text-red-700 text-sm">✚ Red Cross</span>
            <span className="font-bold text-orange-400 text-sm">amika:</span>
          </div>

        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="bg-[#FDFBF7] px-6 py-20 text-[#213343]">
        <div className="mx-auto max-w-[800px]">
          
          {/* Section Heading */}
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-normal text-[#213343] md:text-3xl">
              Grow Without Limits: Sales Hub Pricing
            </h2>
            <p className="mt-3 text-sm text-black">
              Sales software that scales with you.
            </p>
          </div>

          {/* Pricing Cards 4-Column Grid */}
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Free Tier */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-2 text-[#ff5c35] text-lg">🌗</div>
              <h3 className="text-lg font-bold text-black">Free</h3>
              <p className="mt-1 text-xs text-black">No credit card required</p>
              
              <div className="mt-4 text-xl font-bold text-black">
                $0<span className="text-sm font-normal text-black">/month</span>
              </div>

              <ul className="mt-6 space-y-3 text-xs text-black">
                <li className="flex items-start gap-2">
                  <span className="text-black">✓</span>
                  <span>Track deals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">✓</span>
                  <span>Engage visitors with live chat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">✓</span>
                  <span>Schedule meetings without the back-and-forth</span>
                </li>
              </ul>
            </div>

            {/* Starter Tier */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-2 text-[#ff5c35] text-lg">🟠</div>
              <h3 className="text-xl font-bold text-black">Starter</h3>
              <p className="mt-1 text-xs text-black">Starts at</p>
              
              <div className="mt-4 text-lg font-bold text-black">
                $10 <span className="text-base text-black line-through">$20</span><span className="text-sm font-normal text-black">/month</span>
              </div>
              <p className="text-[10px] text-black">per seat*</p>

              <ul className="mt-6 space-y-3 text-xs text-black">
                <li className="flex items-start gap-2">
                  <span className="text-black">✓</span>
                  <span>Automate personalized outreach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">✓</span>
                  <span>Schedule meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">✓</span>
                  <span>Report on outcomes</span>
                </li>
              </ul>
            </div>

            {/* Professional Tier */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-2 text-[#ff5c35] text-lg">🔴</div>
              <h3 className="text-xl font-bold text-[#213343]">Professional</h3>
              <p className="mt-1 text-xs text-black">Starts at</p>
              
              <div className="mt-4 text-lg font-bold text-black">
                $100<span className="text-sm font-normal text-black">/month</span>
              </div>
              <p className="text-[10px] text-black">per seat</p>

              <ul className="mt-6 space-y-3 text-xs text-black">
                <li className="flex items-start gap-2">
                  <span className="text-black">✓</span>
                  <span>Find and engage high-value prospects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">✓</span>
                  <span>Customize sales workflows and sequences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">✓</span>
                  <span>Record and transcribe calls</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Tier */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-2 text-[#ff5c35] text-lg">🔴🔴</div>
              <h3 className="text-xl font-bold text-black">Enterprise</h3>
              <p className="mt-1 text-xs text-black">Starts at</p>
              
              <div className="mt-4 text-lg font-bold text-[#213343]">
                $150<span className="text-sm font-normal text-black">/month</span>
              </div>
              <p className="text-[10px] text-black">per seat</p>

              <ul className="mt-6 space-y-3 text-xs text-black">
                <li className="flex items-start gap-2">
                  <span className="text-black">✓</span>
                  <span>Create custom objects for unique processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">✓</span>
                  <span>Manage complex pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black">✓</span>
                  <span>Advanced analytics and reporting</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Pricing Action Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-md bg-[#ff3908e0] px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#e04b28] transition">
              Demo premium editions
            </button>
            <button className="rounded-md border border-[#ff5c35] bg-white px-6 py-3 text-xs font-bold text-[#ff5c35] shadow-sm hover:bg-orange-50 transition">
              Start 14-day free trial
            </button>
          </div>

          {/* Footer Terms Note */}
          <p className="mt-10 text-center text-[11px] leading-relaxed text-black max-w-[850px] mx-auto">
            *Discount available for new customers only. Offer available for a limited time. For more detailed information on product packaging and the limits that apply, please see our <a href="#" className="font-bold underline text-black">pricing page</a>. Price shown in USD and subject to applicable tax.
          </p>

        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="bg-white px-6 py-20 text-[#213343]">
        <div className="mx-auto max-w-[700px]">
          
          {/* Section Heading */}
          <h2 className="mb-10 text-xl font-semibold tracking-tight text-black md:text-xl">
            Frequently Asked Questions
          </h2>

          {/* FAQ 2-Column Accordion Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            
            {/* Left Column */}
            <div className="space-y-4">
              
              <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-5 shadow-2xs transition hover:border-gray-300 cursor-pointer">
                <span className="text-sm font-bold text-black">
                  What is sales software?
                </span>
                <span className="text-gray-400 text-xs">▼</span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-5 shadow-2xs transition hover:border-gray-300 cursor-pointer">
                <span className="text-sm font-bold text-black">
                  Do you have CPQ capabilities?
                </span>
                <span className="text-gray-400 text-xs">▼</span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-5 shadow-2xs transition hover:border-gray-300 cursor-pointer">
                <span className="text-sm font-bold text-black leading-snug">
                  Do I have to use Avnata as a CRM in order to get value from Sales Hub? What if I already have a CRM?
                </span>
                <span className="text-gray-400 text-xs ml-2">▼</span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-5 shadow-2xs transition hover:border-gray-300 cursor-pointer">
                <span className="text-sm font-bold text-black">
                  How much does Avnata's sales software cost?
                </span>
                <span className="text-gray-400 text-xs">▼</span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-5 shadow-2xs transition hover:border-gray-300 cursor-pointer">
                <span className="text-sm font-bold text-black leading-snug">
                  Can I implement Avnata's software without dedicated programmers/developers?
                </span>
                <span className="text-gray-400 text-xs ml-2">▼</span>
              </div>

            </div>

            {/* Right Column */}
            <div className="space-y-4">
              
              <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-5 shadow-2xs transition hover:border-gray-300 cursor-pointer">
                <span className="text-sm font-bold text-[#213343] leading-snug">
                  How is Sales Hub different from other sales solutions, like Salesforce?
                </span>
                <span className="text-gray-400 text-xs ml-2">▼</span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-5 shadow-2xs transition hover:border-gray-300 cursor-pointer">
                <span className="text-sm font-bold text-[#213343]">
                  What are popular sales software features?
                </span>
                <span className="text-gray-400 text-xs">▼</span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-5 shadow-2xs transition hover:border-gray-300 cursor-pointer">
                <span className="text-sm font-bold text-[#213343] leading-snug">
                  How much time does it take to implement sales software?
                </span>
                <span className="text-gray-400 text-xs ml-2">▼</span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-5 shadow-2xs transition hover:border-gray-300 cursor-pointer">
                <span className="text-sm font-bold text-[#213343]">
                  What kind of ROI can I expect from Sales Hub?
                </span>
                <span className="text-gray-400 text-xs">▼</span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200/80 bg-white p-5 shadow-2xs transition hover:border-gray-300 cursor-pointer">
                <span className="text-sm font-bold text-[#213343]">
                  Can I customize my Sales Hub account?
                </span>
                <span className="text-gray-400 text-xs">▼</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= BOTTOM CTA BANNER SECTION ================= */}
      <section className="bg-[#FDFBF7] px-6 py-20 text-[#213343]">
        <div className="mx-auto max-w-[800px] flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Text & CTA Buttons */}
          <div className="flex-1 space-y-6 text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-black md:text-xl">
              Start closing with complete context.
            </h2>
            
            <p className="text-sm text-black md:text-base">
              Stop losing time to admin. Your team deserves a tool that sells with them.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="rounded-md bg-[#ff3604] px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-[#e04b28] transition">
                Get a demo
              </button>
              <button className="rounded-md border border-[#ff5c35] bg-white px-6 py-3.5 text-sm font-bold text-[#ff5c35] shadow-sm hover:bg-orange-50 transition">
                Start 14-day free trial
              </button>
            </div>
          </div>

          {/* Right Image with Orange Backdrop Card */}
          <div className="relative flex shrink-0 items-center justify-center">
            {/* Orange Backdrop Shape */}
            <div className="absolute h-64 w-64 rotate-12 rounded-3xl bg-[#ff5c35]"></div>

            {/* Main Image Frame */}
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-4 border-white shadow-xl bg-gray-200">
              <img 
                src="/team-working.jpg" 
                alt="Team collaborating in office" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER SECTION ================= */}
      <footer className="bg-[#1f2429] px-6 pt-16 pb-12 text-white">
        <div className="mx-auto max-w-[800px]">
          
          {/* Main Footer Links Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            
            {/* Popular Features (Spans 5 cols - Split in 2 sub-columns) */}
            <div className="md:col-span-5 pr-0 md:pr-6 md:border-r md:border-gray-700/60">
              <h3 className="mb-6 text-xs font-bold text-white">Popular Features</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-gray-300">
                <a href="#" className="hover:underline">All Products and Features</a>
                <a href="#" className="hover:underline">AI Prospecting Agent</a>
                <a href="#" className="hover:underline">Avnata AEO</a>
                <a href="#" className="hover:underline">Free Website Builder</a>
                <a href="#" className="hover:underline">Free Meeting Scheduler App</a>
                <a href="#" className="hover:underline">Free Landing Page Builder</a>
                <a href="#" className="hover:underline">Agent Hub</a>
                <a href="#" className="hover:underline">Free Online Form Builder</a>
                <a href="#" className="hover:underline">Email Tracking Software</a>
                <a href="#" className="hover:underline">Free Chatbot Builder</a>
                <a href="#" className="hover:underline">AI Content Writer</a>
                <a href="#" className="hover:underline">Free Live Chat Software</a>
                <a href="#" className="hover:underline">AI Website Generator</a>
                <a href="#" className="hover:underline">Marketing Analytics</a>
                <a href="#" className="hover:underline">Email Marketing Software</a>
                <a href="#" className="hover:underline">Breeze Assistant</a>
                <a href="#" className="hover:underline">Lead Management Software</a>
                <a href="#" className="hover:underline">Free Web Hosting</a>
              </div>
            </div>

            {/* Free Tools (Spans 3 cols) */}
            <div className="md:col-span-3">
              <h3 className="mb-6 text-xs font-bold text-white">Free Tools</h3>
              <ul className="space-y-3 text-xs text-gray-300">
                <li><a href="#" className="hover:underline">See All Free Business Tools</a></li>
                <li><a href="#" className="hover:underline">AEO Grader</a></li>
                <li><a href="#" className="hover:underline">AI Search Sensor</a></li>
                <li><a href="#" className="hover:underline">Make My Persona</a></li>
                <li><a href="#" className="hover:underline">Email Signature Generator</a></li>
                <li><a href="#" className="hover:underline">Free Business Templates</a></li>
                <li><a href="#" className="hover:underline">Software Comparisons Library</a></li>
                <li><a href="#" className="hover:underline">Website Templates</a></li>
                <li><a href="#" className="hover:underline">Connector for Claude</a></li>
              </ul>
            </div>

            {/* Company (Spans 2 cols) */}
            <div className="md:col-span-2">
              <h3 className="mb-6 text-xs font-bold text-white">Company</h3>
              <ul className="space-y-3 text-xs text-gray-300">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Management Team</a></li>
                <li><a href="#" className="hover:underline">Board of Directors</a></li>
                <li><a href="#" className="hover:underline">Investor Relations</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Sustainability</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>

            {/* Customers & Partners (Spans 2 cols) */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="mb-4 text-xs font-bold text-white">Customers</h3>
                <ul className="space-y-3 text-xs text-gray-300">
                  <li><a href="#" className="hover:underline">Customer Support</a></li>
                  <li><a href="#" className="hover:underline">Join a Local User Group</a></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xs font-bold text-white">Partners</h3>
                <ul className="space-y-3 text-xs text-gray-300">
                  <li><a href="#" className="hover:underline">All Partner Programs</a></li>
                  <li><a href="#" className="hover:underline">Solutions Partner Program</a></li>
                  <li><a href="#" className="hover:underline">Technology Partner Program</a></li>
                  <li><a href="#" className="hover:underline">Avnata for Startups</a></li>
                  <li><a href="#" className="hover:underline">Affiliate Program</a></li>
                </ul>
              </div>
            </div>

          </div>

          {/* Social Icons & Divider Row */}
          <div className="my-12 flex items-center justify-between gap-4">
            <div className="h-[1px] flex-1 bg-gray-700/60"></div>
            <div className="flex items-center gap-5 text-gray-300 text-lg">
              <a href="#" className="hover:text-white transition">facebook</a>
              <a href="#" className="hover:text-white transition">instagram</a>
              <a href="#" className="hover:text-white transition">youtube</a>
              <a href="#" className="hover:text-white transition">twitter</a>
              <a href="#" className="hover:text-white transition">linkedin</a>
              <a href="#" className="hover:text-white transition">reddit</a>
              <a href="#" className="hover:text-white transition">tiktok</a>
            </div>
            <div className="h-[1px] flex-1 bg-gray-700/60"></div>
          </div>

          {/* Brand Logo */}
          <div className="mb-8 flex justify-center">
            <span className="font-bold text-2xl tracking-tight text-white">Avnata</span>
          </div>

          {/* Footer Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-bold">
            <a href="#" className="underline hover:text-white">Legal Center</a>
            <span>|</span>
            <a href="#" className="underline hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="underline hover:text-white">Manage Cookies</a>
          </div>

        </div>

        {/* Floating AI Prompt Bar */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[500px]">
          <div className="relative flex items-center rounded-full bg-white px-5 py-3 shadow-[0_0_25px_rgba(255,92,53,0.3)] border border-orange-200">
            <input 
              type="text" 
              placeholder="Ask me anything" 
              className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
            />
            <button className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
              ↑
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}