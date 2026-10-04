import React from 'react';
import { Link } from 'react-router-dom';

function Campaigns() {
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
            <Link to="/crm/forms" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-300 hover:bg-slate-700">
              📋 Forms
            </Link>
            
            {/* Active Link */}
            <Link to="/crm/campaigns" className="flex items-center gap-2 px-2 py-1.5 rounded bg-slate-700 text-white font-semibold">
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
        <header className="h-12 bg-[#2d3e50] text-white flex items-center justify-between px-4 border-b border-slate-700 shrink-0 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Find in Avnata"
              className="bg-[#1e293b] text-white px-3 py-1 rounded-full text-sm w-64 border border-slate-600 focus:outline-none"
            />
            <span className="text-sm text-white font-medium cursor-pointer flex items-center gap-1">
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

        {/* Page Content (Scrollable Stacked Sections) */}
        <div className="bg-white text-gray-800">
          
          {/* SECTION 1: HERO (Image 1 Top) */}
          <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-700 leading-tight">
                See every campaign piece in one place
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                Managing a campaign across scattered tools means things slip through the cracks. Campaign management brings all your assets together, tracks which contacts your campaign is reaching, and gives you clear reporting on what’s working. Less tab-switching, more results.
              </p>
              <p className="text-sm text-gray-500">
                Unlock this and more with Marketing Hub Professional.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <button className="bg-[#00565b] hover:bg-[#004145] text-white font-semibold px-5 py-2 rounded-full text-sm transition">
                  Talk to Sales
                </button>
              </div>
              <div className="text-[13px] text-gray-500 space-x-2">
                <a href="#" className="text-teal-700 font-bold hover:underline">Start 14-day trial</a>
                <span>|</span>
                <a href="#" className="text-teal-700 font-bold hover:underline">View pricing</a>
              </div>
            </div>

            {/* Right Side Original Image */}
           <div className="flex justify-center items-center">
           <img 
             src="/revenue-sales campaigns.png" 
             alt="See every campaign piece in one place" 
             className="w-full max-w-md rounded-xl shadow-lg border border-gray-200 object-cover" 
           />
          </div>
          </section>

          {/* SECTION HEADER */}
          <section className="text-center py-8 border-t border-gray-100">
            <h2 className="text-4xl font-normal text-gray-700">
              All your campaigns in one place, with insights that tell you what needs attention.
            </h2>
          </section>

          {/* SECTION 2: Campaign Agent */}
          <section className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
             {/* Left Side Original Image */}
          <div className="order-2 md:order-1 flex justify-center items-center">
            <img 
              src="/revenue-sales campaigns 2.png" // 
              alt="Plan campaigns that perform with Campaign Agent" 
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

            {/* Right Side Text */}
           <div className="order-1 md:order-2 space-y-3">
              <h3 className="text-xl font-bold text-gray-700">
                  Plan campaigns that perform with Campaign Agent
              </h3>
             <p className="text-lg text-gray-600 leading-relaxed">
                  Campaign Agent uses your brand identity, past performance, and existing assets as context to help you build a connected campaign plan for your goals. Finalize the brief and create multi-channel content that matches your messaging.
             </p>
             </div>
             </section>

          {/* SECTION 3: Collaborate & Automate */}
            <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Text */}
           <div className="space-y-3">
             <h3 className="text-xl font-semibold text-gray-700">
               Collaborate, create assets, and automate the customer journey inside the campaign canvas
             </h3>
             <p className="text-lg text-gray-600 leading-relaxed">
               The campaign canvas lets your team work together to build and ship campaigns. Create assets with real-time multi-player editing, set up approvals before things go live, and orchestrate connected automations to curate the best journey for your contacts.
             </p>
           </div>

           {/* Right Side Original PNG Image */}
           <div className="flex justify-center items-center">
            <img 
              src="/revenue-sales campaigns 3.png" // 
              alt="Collaborate, create assets, and automate the customer journey" 
              className="w-full max-w-md h-auto object-contain"
             />
            </div>
           </section>

          {/* SECTION 4: Track Performance */}
           <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side Original PNG Image */}
           <div className="order-2 md:order-1 flex justify-center items-center">
            <img 
              src="/revenue-sales campaigns 4.png" // 
              alt="Track performance across multiple campaigns" 
              className="w-full max-w-md h-auto object-contain"
             />
            </div>

          {/* Right Side Text */}
            <div className="order-1 md:order-2 space-y-3">
             <h3 className="text-xl font-semibold text-gray-700">
               Track performance across multiple campaigns
             </h3>
             <p className="text-lg text-gray-600 leading-relaxed">
               Have a live view of how all your campaigns are performing: attributed revenue, pipeline influenced, ROI against spend, and contact conversion rates. See exactly what's driving results without pulling reports from multiple tools.
             </p>
            </div>
            </section>

         {/* SECTION 5: Know what needs attention */}
           <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side Text */}
           <div className="space-y-3">
             <h3 className="text-xl font-semibold text-gray-700">
               Know what needs attention before it costs you
             </h3>
             <p className="text-lg text-gray-600 leading-relaxed">
               Automatically see the most critical actions across all your live campaigns, ranked by impact. Whether something's broken or there's a new opportunity to act on, each one comes with a recommended next step so you can move fast.
             </p>
           </div>

           {/* Right Side Original PNG Image */}
          <div className="flex justify-center items-center">
            <img 
              src="/revenue-sales campaigns 5.png" // 👈 Public folder me saved PNG file ka exact name yahan dalein
              alt="Know what needs attention before it costs you" 
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </section>

          {/* ================= GENERATE LEADS COMPARISON TABLE ================= */}
<section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200 font-sans">
  {/* Table Header / Title */}
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
    <h2 className="text-2xl font-semibold text-gray-700">Generate Leads</h2>
    <div className="flex items-center gap-12 text-center text-xs">
      <div className="flex flex-col items-center gap-2">
        <span className="font-bold text-gray-700">Free Marketing tools</span>
        <span className="bg-gray-100 text-gray-500 font-medium px-4 py-1.5 rounded-full border border-gray-200">
          Your current plan
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="font-bold text-gray-700">Marketing Hub Professional</span>
        <button className="bg-[#00565b] hover:bg-[#004145] text-white font-semibold px-5 py-1.5 rounded-full transition shadow-sm">
          Talk to Sales
        </button>
      </div>
    </div>
  </div>

  {/* Unified Table Structure */}
  <div className="border-t border-b border-black text-xs text-gray-800">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-black">
          <th className="w-2/5 p-3"></th>
          <th className="w-3/10 p-3 border-l border-r border-black"></th>
          <th className="w-3/10 p-3"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-black">
        {/* Row 1 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900">Agent Hub</td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 2 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700">Agent Builder</td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700 leading-relaxed max-w-xs mx-auto">
            Build and deploy custom agents with advanced automation and event-based triggers.
          </td>
        </tr>

        {/* Row 3 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Prospecting agent
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 4 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700">Nurture Agent (Beta)</td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 5 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Content Agent (Beta)
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700 leading-relaxed max-w-xs mx-auto">
            Create blog posts, social posts, and landing pages from a recommendation or a full campaign in campaign agent.
          </td>
        </tr>

        {/* Row 6 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Customer agent
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 7 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900">AEO (Beta)</td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700 leading-relaxed max-w-xs mx-auto">
            Get started with 25 prompts, each run daily across 3 engines, for 2,500 answers per month. Purchase the AEO Answers Limit Increase for additional prompts and tracking volume.
          </td>
        </tr>

        {/* Row 8 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> SEO recommendations & optimizations
          </td>
          <td className="p-4 border-l border-r border-black text-center text-gray-700">Basic recommendations.</td>
          <td className="p-4 text-center text-gray-700">Advanced recommendations, full site auditing, and topics.</td>
        </tr>

        {/* Row 9 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> Ad management
          </td>
          <td className="p-4 border-l border-r border-black text-center text-gray-700">
            All available ad types. Simple website audiences only.
          </td>
          <td className="p-4 text-center text-gray-700">All available ad types. 5 audiences.</td>
        </tr>

        {/* Row 10 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Ad retargeting
          </td>
          <td className="p-4 border-l border-r border-black text-center text-gray-700">
            All available ad types<br />2 audiences
          </td>
          <td className="p-4 text-center text-gray-700">
            All available ad types<br />5 audiences
          </td>
        </tr>

        {/* Row 11 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Simple ad automation
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700">
            Unlimited simple workflows per form, with unlimited actions.
          </td>
        </tr>

        {/* Row 12 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Ad conversion events
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700">Up to 50 synced events to ad accounts</td>
        </tr>

        {/* Row 13 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> CRM segments
          </td>
          <td className="p-4 border-l border-r border-black text-center text-gray-700 leading-relaxed">
            10 active CRM segments<br />
            1,000 static CRM segments<br />
            Additional limits
          </td>
          <td className="p-4 text-center text-gray-700 leading-relaxed">
            Up to 1,200 active CRM segments and 1,200 static CRM segments. Create random samples from any CRM segment.
          </td>
        </tr>

        {/* Row 14 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Filter insights in segments (Beta)
          </td>
          <td className="p-4 border-l border-r border-black text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 15 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Segment analytics (Beta)
          </td>
          <td className="p-4 border-l border-r border-black text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 16 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Web visitor segments (Beta)
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 17 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> Live chat
          </td>
          <td className="p-4 border-l border-r border-black text-center text-gray-700">Includes HubSpot branding</td>
          <td className="p-4 text-center text-gray-700">Remove HubSpot branding</td>
        </tr>

        {/* Row 18 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Conversational bots
          </td>
          <td className="p-4 border-l border-r border-black text-center text-gray-700">Limited features</td>
          <td className="p-4 text-center text-gray-700">Additional features</td>
        </tr>

        {/* Row 19 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Facebook Messenger integration
          </td>
          <td className="p-4 border-l border-r border-black text-center text-gray-700 leading-relaxed">
            Send and receive simple messages and quick replies
          </td>
          <td className="p-4 text-center text-gray-700 leading-relaxed">
            Includes advanced Messenger bot branching and advanced reporting
          </td>
        </tr>

        {/* Row 20 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Draggable chat widget
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 21 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Logged-in visitor identification
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 22 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> WhatsApp integration
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700">Up to 1,000 messages per month</td>
        </tr>

        {/* Row 23 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> CTAs
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700 leading-relaxed">
            Includes custom targeting by device type, country, referral URL, and more.
          </td>
        </tr>

        {/* Row 24 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> Social media
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700 leading-relaxed">
            Up to 50 connected accounts, 10,000 posts per month, and post scheduling up to 3 years in advance.
          </td>
        </tr>

        {/* Row 25 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> Lead scoring
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700">Up to 5 scores.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

          {/* ================= AUTOMATE MARKETING COMPARISON TABLE ================= */}
<section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200 font-sans mb-12">
  {/* Table Title */}
  <h2 className="text-2xl font-semibold text-gray-700 mb-8">Automate Marketing</h2>

  {/* Unified Table Structure */}
  <div className="border-t border-b border-black text-xs text-gray-800">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-black">
          <th className="w-2/5 p-3"></th>
          <th className="w-3/10 p-3 border-l border-r border-black"></th>
          <th className="w-3/10 p-3"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-black">
        {/* Row 1 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> Email marketing
          </td>
          <td className="p-4 border-l border-r border-black text-center text-gray-700 leading-relaxed">
            2,000 email sends per calendar month, with HubSpot branding
          </td>
          <td className="p-4 text-center text-gray-700 leading-relaxed">
            10x marketing contact tier email send limit per calendar month<br />
            Remove HubSpot branding<br />
            Additional features
          </td>
        </tr>

        {/* Row 2 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Email automation
          </td>
          <td className="p-4 border-l border-r border-black text-center text-gray-700">
            1 automated action
          </td>
          <td className="p-4 text-center text-gray-700 leading-relaxed">
            Unlimited actions, plus omni-channel marketing automation
          </td>
        </tr>

        {/* Row 3 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Email health reporting
          </td>
          <td className="p-4 border-l border-r border-black text-center text-gray-700">
            Limited features
          </td>
          <td className="p-4 text-center text-gray-700">
            Additional features
          </td>
        </tr>

        {/* Row 4 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Messaging Insights (Beta)
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 5 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> A/B testing
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 6 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Smart content for marketing email
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 7 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Advanced personalization
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 8 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Programmable email
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700 leading-relaxed">
            Includes email marketing content powered by CRM object data.
          </td>
        </tr>

        {/* Row 9 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> AI email template upload (Beta)
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700">
            100 template uploads per account per month.
          </td>
        </tr>

        {/* Row 10 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> Cookie Management Tools
          </td>
          <td className="p-4 border-l border-r border-black text-center text-gray-700 leading-relaxed max-w-xs mx-auto">
            Create up to 100 consent banners with different geotargeting rules, languages, and banner templates. Includes support for GPC signals. Allow visitors to update their consent preferences with the cookie settings button.
          </td>
          <td className="p-4 text-center text-gray-700 leading-relaxed max-w-xs mx-auto">
            Create up to 100 consent banners with different geotargeting rules, languages, and banner templates. Includes support for GPC signals. Allow visitors to update their consent preferences with the cookie settings button. Remove HubSpot branding.
          </td>
        </tr>

        {/* Row 11 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> Reporting dashboard
          </td>
          <td className="p-4 border-l border-r border-black text-center text-gray-700">
            10 dashboards, 50 reports per dashboard
          </td>
          <td className="p-4 text-center text-gray-700">
            75 dashboards, 50 reports per dashboard
          </td>
        </tr>

        {/* Row 12 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Website traffic analytics
          </td>
          <td className="p-4 border-l border-r border-black text-center text-gray-700">
            Standard web analytics dashboard
          </td>
          <td className="p-4 text-center text-gray-700">
            Customizable website traffic analytics
          </td>
        </tr>

        {/* Row 13 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Custom reporting
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700 leading-relaxed">
            Up to 100 custom reports and 10 million events per custom reporting query
          </td>
        </tr>

        {/* Row 14 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> SEO analytics
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 15 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Google Search Console integration
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 16 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> Marketing studio (Beta)
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 17 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700">Campaign Agent</td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 18 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> Campaign management
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 19 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-medium pl-8 text-gray-700 flex items-center gap-1.5">
            <span>🔒</span> Campaign reporting
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700">
            5,000 campaigns per account
          </td>
        </tr>

        {/* Row 20 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> HubSpot Work (Beta)
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700">
            Full automation
          </td>
        </tr>

        {/* Row 21 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> Video creation & editing
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-white text-[10px]">✓</span>
          </td>
        </tr>

        {/* Row 22 */}
        <tr className="hover:bg-gray-50/50">
          <td className="p-4 font-bold text-gray-900 flex items-center gap-1.5">
            <span>🔒</span> Omni-channel marketing automation
          </td>
          <td className="p-4 border-l border-r border-black text-center"></td>
          <td className="p-4 text-center text-gray-700">
            Up to 300 workflows for 10 teams.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Footer Catalog Link */}
  <div className="text-right pt-4 text-xs text-gray-500">
    View the <a href="#" className="text-teal-700 underline font-bold">Product & Services Catalog ↗</a> for full technical limits and definitions
  </div>
</section>

        </div>
      </div>
    </div>
  );
}

export default Campaigns;