import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contacts() {
  // Sample Contacts Data
  const [contacts] = useState([
    {
      id: 1,
      name: 'Brian Halligan (Sample Contact)',
      firstName: 'Brian',
      lastName: 'Halligan (Sample Contact)',
      email: 'bh@hubspot.com',
      contactOwner: 'Mana',
      propertyInterest: '--',
      budget: '--',
      leadStatus: '--',
      preferredLanguage: '--',
    },
    {
      id: 2,
      name: 'Maria Johnson (Sample Contact)',
      firstName: 'Maria',
      lastName: 'Johnson (Sample Contact)',
      email: 'emailmaria@hubspot.com',
      contactOwner: 'Brian',
      propertyInterest: '--',
      budget: '--',
      leadStatus: '--',
      preferredLanguage: '--',
    },
  ]);

  return (
    <div className="flex min-h-screen bg-white font-sans text-xs text-[#213343]">
      {/* ================= LEFT SIDEBAR ================= */}
      <aside className="flex w-52 shrink-0 flex-col justify-between bg-[#1e293b] p-3 text-slate-300">
        <div className="space-y-4">
          {/* Logo / Home */}
          <Link to="/" className="flex items-center gap-2 px-2 py-1 text-sm font-bold text-white">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff5c35] text-[10px]">
              hub
            </div>
            <span>Home</span>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1 font-medium">
            <Link
              to="/crm/contacts"
              className="flex w-full items-center gap-2 rounded bg-slate-800 px-2 py-1.5 font-semibold text-white"
            >
              📁 Contacts
            </Link>
            <Link
              to="/crm/companies"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-200 hover:bg-slate-700"
            >
              🏢 Companies
            </Link>
            <Link
              to="/crm/deals"
              className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-200 hover:bg-slate-700"
            >
              🏷️ Deals <span className="ml-auto text-[10px] text-gray-400">15</span>
            </Link>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-200 hover:bg-slate-700">
              📊 Segments
            </a>

            <div className="px-2 pt-3 text-[10px] font-semibold uppercase text-slate-400">Marketing</div>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-200 hover:bg-slate-700">
              🎯 AEO
            </a>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-200 hover:bg-slate-700">
              ✉️ Marketing Emails
            </a>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-200 hover:bg-slate-700">
              📋 Forms
            </a>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-200 hover:bg-slate-700">
              📢 Campaigns
            </a>

            <div className="px-2 pt-3 text-[10px] font-semibold uppercase text-slate-400">Content</div>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-200 hover:bg-slate-700">
              🌐 Website Pages
            </a>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-200 hover:bg-slate-700">
              📝 Blog
            </a>

            <div className="px-2 pt-3 text-[10px] font-semibold uppercase text-slate-400">Platform</div>
            <Link to="/crm" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-200 hover:bg-slate-700">
              📈 Dashboards
            </Link>
            <a href="#" className="flex items-center gap-2 rounded px-2 py-1.5 text-slate-200 hover:bg-slate-700">
              ⚡ Workflows
            </a>
          </nav>
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* TOP NAVBAR */}
        <header className="flex h-12 items-center justify-between border-b border-slate-700 bg-[#2d3e50] px-4 text-white">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Find in Avnata"
              className="w-64 rounded-full border border-slate-600 bg-[#1e293b] px-4 py-1 text-xs text-white placeholder-gray-400 focus:outline-none"
            />
            <span className="cursor-pointer text-xs font-medium text-orange-400">✦ Breeze Assistant</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded border border-slate-500 px-2 py-0.5 text-xs hover:bg-slate-700">
              Upgrade 4
            </button>
            <Link
              to="/accounts"
              className="flex cursor-pointer items-center gap-2 rounded bg-slate-700 px-2.5 py-1 font-medium text-white hover:bg-slate-600"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>Trusties</span>
            </Link>
          </div>
        </header>

        {/* PAGE BODY */}
        <main className="flex-1 overflow-y-auto p-5">
          {/* Top Banner Notice */}
          <div className="mb-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-black bg-white p-5 text-sky-900 shadow-sm sm:flex-row sm:items-center">
           <div className="space-y-1.5">
             <p className="text-xs font-bold tracking-wide text-black">
               Connect your email to sync all your contacts and conversations in one place
             </p>
             <p className="text-xs text-sky-800 leading-relaxed max-w-2xl">
               Avnata uses this connection to organize communication history and enrich profiles with accurate job titles, locations, and more.
             </p>
           </div>
  
           <button className="mt-1 shrink-0 rounded-full bg-white px-4 py-2 text-xs font-normal text-black shadow hover:bg-amber-100 transition-colors sm:mt-0">
             Connect Gmail
           </button>
          </div>

          {/* Page Title & Action Bar */}
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">Contacts</h1>
            <button className="rounded-full bg-teal-700 px-4 py-2 font-bold text-white shadow-sm hover:bg-[#e04b28]">
              Add contacts
            </button>
          </div>

          {/* Contacts Filter Tabs */}
          <div className="mb-3 flex items-center border-b border-gray-200 text-xs font-medium text-gray-600">
            <button className="border-b-2 border-orange-500 pb-2 px-3 text-orange-600 font-bold">
              All contacts
            </button>
            <button className="pb-2 px-3 hover:text-gray-900">
              High Engagement
            </button>
            <button className="pb-2 px-3 text-gray-400 hover:text-gray-600">
              +
            </button>
          </div>

          {/* Filters Bar */}
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            <input
              type="text"
              placeholder="Search (/)"
              className="w-48 rounded border border-gray-300 px-2.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <select className="rounded border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700">
              <option>Contact owner</option>
            </select>
            <select className="rounded border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700">
              <option>Create date</option>
            </select>
            <select className="rounded border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700">
              <option>Last activity date</option>
            </select>

            <button className="ml-auto font-medium text-teal-700 hover:underline">
              Advanced filters
            </button>
          </div>

          {/* CONTACTS DATA TABLE */}
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-gray-200 bg-gray-50 text-gray-600 font-semibold">
                <tr>
                  <th className="w-8 p-3">
                    <input type="checkbox" className="rounded border-gray-300 accent-orange-500" />
                  </th>
                  <th className="p-3 font-bold text-gray-800">Name</th>
                  <th className="p-3">First Name</th>
                  <th className="p-3">Last Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Contact owner</th>
                  <th className="p-3">Property Interest</th>
                  <th className="p-3">Budget</th>
                  <th className="p-3">Lead Status</th>
                  <th className="p-3">Preferred language</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {contacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50">
                    <td className="p-3">
                      <input type="checkbox" className="rounded border-gray-300 accent-orange-500" />
                    </td>
                    <td className="cursor-pointer p-3 font-semibold text-teal-700 hover:underline">
                      {contact.name}
                    </td>
                    <td className="p-3 text-gray-700">{contact.firstName}</td>
                    <td className="p-3 text-gray-700">{contact.lastName}</td>
                    <td className="p-3 text-gray-700">{contact.email}</td>
                    <td className="p-3 text-gray-700">{contact.contactOwner}</td>
                    <td className="p-3 text-gray-400">{contact.propertyInterest}</td>
                    <td className="p-3 text-gray-400">{contact.budget}</td>
                    <td className="p-3 text-gray-400">{contact.leadStatus}</td>
                    <td className="p-3 text-gray-400">{contact.preferredLanguage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Contacts;