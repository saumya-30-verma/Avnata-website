import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsLoggedIn(true);
      setIsLoginOpen(false);
    }
  };

  const handleAccountClick = () => {
    if (isLoggedIn) {
      // Direct Trusties / Accounts Page par le jayega
      navigate('/accounts');
    } else {
      // Login modal kholega
      setIsLoginOpen(true);
    }
  };

  const products = [
    {
      title: "Marketing Hub®",
      points: [
        "Attract and convert the right leads.",
        "Run campaigns, personalize content, and track it all."
      ]
    },
    {
      title: "Sales Hub®",
      points: [
        "Generate quality leads and close deals, faster.",
        "Automate prospecting, manage pipeline, and accelerate revenue growth."
      ]
    },
    {
      title: "Service Hub®",
      points: [
        "Streamline and scale support to serve customers faster.",
        "Drive retention with actionable insights, customer health scores, and real-time usage data."
      ]
    },
    {
      title: "Content Hub™",
      points: [
        "Create content that clicks with your audience.",
        "Build pages, publish content across channels, and stay on brand."
      ]
    },
    {
      title: "Data Hub™",
      points: [
        "Turn scattered data into unified intelligence.",
        "Combine, clean, and activate your customer data across every team and tool."
      ]
    },
    {
      title: "Revenue Hub™",
      points: [
        "Make it easy for customers to pay you.",
        "Send quotes, collect payments, and manage subscriptions."
      ]
    },
    {
      title: "Smart CRM™",
      points: [
        "All your customer data in one place.",
        "Keep your data clean, connected, and actionable."
      ]
    },
    {
      title: "Agent Hub™",
      points: [
        "Deploy and manage AI agents across the platform.",
        "Build new agents tailored to your business, powered by your data."
      ]
    },
    {
      title: "Small Business Bundle",
      points: [
        "The Starter edition of each product, at one low price.",
        "Get the essential tools your growing business needs in one simple bundle."
      ]
    },
    {
      title: "AEO (Beta)",
      points: [
        "See where your brand shows up in AI results.",
        "Get recommendations to improve your visibility."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#213343]">

      {/* ================= TOP UTILITY BAR ================= */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-end gap-5 px-6 py-2 text-[11px]">
          <button className="hover:underline">English</button>
          <button className="hover:underline">High Contrast</button>
          <a href="#" className="hover:underline">Customer Support</a>
          <a href="#" className="hover:underline">Contact Sales</a>
          <button className="text-sm font-semibold">Q</button>
          <button onClick={handleAccountClick} className="font-semibold text-[#ff5c35] hover:underline">
            {isLoggedIn ? 'Go to My Account' : 'Log in'}
          </button>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">

          {/* Logo */}
          <a
            href="/"
            className="text-[22px] font-bold tracking-tight text-[#ff5c35]"
          >
            Avnata
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-7 text-[12px] font-medium lg:flex">
            <a href="#" className="hover:text-[#ff5c35]">About</a>
            <button className="flex items-center gap-1 hover:text-[#ff5c35]">
              Products <span className="text-[10px]">⌄</span>
            </button>
            <button className="flex items-center gap-1 hover:text-[#ff5c35]">
              Solutions <span className="text-[10px]">⌄</span>
            </button>
            <a href="#" className="hover:text-[#ff5c35]">Pricing</a>
            <button className="flex items-center gap-1 hover:text-[#ff5c35]">
              Resources <span className="text-[10px]">⌄</span>
            </button>
          </nav>

          {/* Right Buttons */}
          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={handleAccountClick}
              className="rounded-md bg-[#ff5c35] px-4 py-2 text-[11px] font-semibold text-white hover:bg-[#e04b28] transition"
            >
              {isLoggedIn ? 'Go to My Account' : 'Log in'}
            </button>

            <a
              href="#"
              className="rounded-md border border-[#ff5c35] px-4 py-2 text-[11px] font-semibold text-[#ff5c35]"
            >
              Get started free
            </a>
          </div>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="px-6 pb-8 pt-12">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="text-[8px] font-bold uppercase tracking-wide text-[#213343]">
            Avnata Agentic Customer Platform
          </p>

          <h1 className="mx-auto mt-3 max-w-[780px] text-4xl font-normal leading-[1.08] tracking-tight text-[#213343] md:text-5xl">
            Build demand, win deals, and delight
            <br />
            customers — all on one platform
            <span className="text-[#ff5c35]">.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-[620px] text-[13px] leading-5 text-[#213343]">
            {isLoggedIn ? `Logged in as: ${email}` : 'Avnata aligns marketing, sales, and service around your customer data, so your teams and AI always know what customers need.'}
          </p>

          <div className="mt-5 flex justify-center gap-2">
            <button
              onClick={handleAccountClick}
              className="rounded-md bg-[#ff5c35] px-6 py-3 text-[10px] font-semibold text-white hover:bg-[#e04b28] transition"
            >
              {isLoggedIn ? 'Go to My Account' : 'Get a demo'}
            </button>

            <a
              href="#"
              className="rounded-md border border-[#ff5c35] px-6 py-3 text-[10px] font-semibold text-[#ff5c35]"
            >
              Get started free
            </a>
          </div>
        </div>
      </section>

      {/* ================= THREE IMAGE CARDS ================= */}
      <section className="px-6 pb-10 pt-6">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-1 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group relative h-[300px] overflow-hidden">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/hero-home-img1.webp?height=560&name=hero-home-img1.webp&width=800"
              alt="Customer data"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-16">
              <p className="text-[12px] font-semibold leading-4 text-white">
                All your customer data, right at your fingertips.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-[300px] overflow-hidden">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/hero-home-img2.webp?height=560&name=hero-home-img2.webp&width=800"
              alt="Marketing sales and service"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-16">
              <p className="text-[12px] font-semibold leading-4 text-white">
                Marketing, sales, and service, finally on the same page.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-[300px] overflow-hidden">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/hero-home-img3.webp?height=560&name=hero-home-img3.webp&width=800"
              alt="AI customer platform"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-16">
              <p className="text-[12px] font-semibold leading-4 text-white">
                AI you control. Results you can trust.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHAT IS AVNATA ================= */}
      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-[1000px] items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-normal text-[#213343]">
              What is Avnata?
            </h2>
          </div>
          <div>
            <p className="text-[12px] leading-5 text-[#213343]">
              Avnata brings together your teams, tools, AI, and customer data
              on the same platform, so every customer interaction can drive
              growth. Marketing generates better leads. Sales wins more
              deals. Customers stay connected.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TRUSTED CUSTOMERS ================= */}
      <section className="px-6 pb-10 pt-5">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-6 border-t border-gray-200 pt-5 md:flex-row">
          <div className="w-full border-r-0 text-center md:w-[180px] md:border-r md:text-left">
            <p className="text-[8px] font-bold uppercase leading-3 text-[#213343]">
              Trusted by 300,000+
              <br />
              customers worldwide
            </p>
          </div>

          <div className="grid w-full grid-cols-5 items-center gap-6 text-center">
            <span className="text-[13px] font-bold text-gray-500">reddit</span>
            <span className="text-[11px] font-semibold text-gray-500">Tripadvisor</span>
            <span className="text-[12px] font-bold text-gray-400">eventbrite</span>
            <span className="text-[14px] font-bold text-gray-400">ebay</span>
            <span className="text-[12px] font-bold text-gray-500">DoorDash</span>
          </div>
        </div>
      </section>

      {/* ================= POWERED BY AI ================= */}
      <section className="border-t border-gray-200 bg-[#f6f9fc] px-6 py-12">
        <div className="mx-auto max-w-[1000px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-4 lg:pl-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1 text-[8px] font-semibold">
                <span className="text-[#ff5c35]">✦</span>
                Powered by AI
              </div>

              <h2 className="max-w-[300px] text-[27px] font-normal leading-[1.12] tracking-tight text-[#213343]">
                Growing a business is hard. Avnata makes it easier.
              </h2>

              <p className="mt-3 max-w-[310px] text-[12px] leading-[1.6] text-[#213343]">
                Disconnected tools and data slow you down. Avnata connects
                everything — and everyone — in one place to make growing a
                business easier than you think.
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={handleAccountClick}
                  className="rounded-md bg-[#ff5c35] px-4 py-2.5 text-[12px] font-bold text-white hover:bg-[#e04b28] transition"
                >
                  {isLoggedIn ? 'Go to My Account' : 'Get a demo'}
                </button>

                <a
                  href="#"
                  className="rounded-md border border-[#ff5c35] bg-white px-4 py-2.5 text-[12px] font-bold text-[#f73505]"
                >
                  Get started free
                </a>
              </div>
            </div>

            {/* RIGHT CARDS */}
            <div className="lg:col-span-8">
              <div className="grid max-h-[450px] w-fit grid-cols-2 gap-x-1 gap-y-3 overflow-y-auto pr-2">
                {products.map((product) => (
                  <div
                    key={product.title}
                    className="h-[190px] w-[230px] rounded-lg border border-gray-200 bg-white p-4 transition hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#fff1ed] text-[15px] font-semibold text-[#ff5c35]">
                        ⚡
                      </div>

                      <h3 className="text-[12px] font-bold text-black">
                        {product.title}
                      </h3>
                    </div>

                    <div className="mt-2 border-t border-dashed border-gray-300"></div>

                    <ul className="mt-3 space-y-2 text-[9px] leading-[1.4] text-[#213343]">
                      {product.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-[1px] text-[8px] font-bold text-[#ff5c35]">
                            ✓
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-2 border-t border-dashed border-gray-300"></div>

                    <a
                      href="#"
                      className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-black"
                    >
                      Learn more <span>→</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= EXACT MATCH AI AGENTS SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#FAF0E6] via-[#FADCD0] to-[#F7C5B5] px-8 py-14 text-[#213343]">
        <div className="mx-auto max-w-[1080px]">

          {/* Header Row */}
          <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-start">
            
            {/* Top dashed line across the section */}
            <div className="absolute top-5 left-16 right-52 hidden border-t border-dashed border-orange-300/60 lg:block"></div>

            {/* Left Header */}
            <div className="relative z-10 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                <svg className="h-6 w-6 text-[#FF5C35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h2 className="text-2xl font-normal leading-[1.15] text-[#213343] md:text-[34px]">
                Built-in AI agents that <br />
                work for you 24/7.
              </h2>
            </div>

            {/* Right Header Content */}
            <div className="relative z-10 flex max-w-[420px] flex-col items-start gap-4 md:items-end">
              <button className="rounded-lg border border-[#213343] px-5 py-2 text-xs font-bold text-[#213343] transition hover:bg-[#213343] hover:text-white">
                Explore Agent Hub
              </button>
              <p className="text-[12px] leading-relaxed text-black/80 md:text-left">
                AI agents are your always-on teammates. They can resolve over 65% of customer inquiries, accelerate your sales pipeline, and flag accounts showing interest.
              </p>
            </div>
          </div>

          {/* Cards Carousel Layout */}
          <div className="relative mt-12 flex items-center justify-center">

            {/* Left Arrow Button */}
            <button className="absolute left-0 z-20 flex h-10 w-10 -translate-x-3 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:scale-105">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Cards Container */}
            <div className="flex w-full items-center justify-center gap-5 overflow-hidden py-4">

              {/* CARD 1: Customer Agent */}
              <div className="hidden w-[270px] shrink-0 rounded-2xl bg-[#FFF8F5]/80 p-5 shadow-sm md:block">
                <div className="relative h-[200px] overflow-hidden rounded-xl bg-[#F6ECE8] p-3 text-[10px]">
                  <div className="rounded-xl bg-[#714B5A] p-3 text-white shadow-sm">
                    <div className="flex items-center gap-1 font-bold">
                      <span className="text-pink-300">✦</span> HubBot
                    </div>
                    <p className="mt-1 text-[9px] opacity-90">
                      Hello! I'm HubBot, an AI customer... <br /> How can I help you today?
                    </p>
                  </div>
                  <div className="mt-3 rounded-lg bg-white p-2 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-amber-700"></div>
                      <span className="font-bold text-gray-700">Jane Doe</span>
                    </div>
                    <p className="mt-1 text-[8px] text-gray-400">Ask a question</p>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-sm font-bold text-[#213343]">Customer Agent</h3>
                  <p className="mt-1 text-[11px] leading-snug text-gray-600">
                    Resolve inquiries, take action in your CRM, and hand off with full context.
                  </p>
                </div>
              </div>

              {/* CARD 2: Prospecting Agent (Active Featured Card) */}
              <div className="z-10 w-[300px] shrink-0 rounded-2xl bg-white p-6 shadow-xl">
                <div className="relative h-[210px] overflow-hidden rounded-xl bg-[#F8FAFC] p-4 text-[11px]">
                  <div className="flex items-start gap-2">
                    <span className="text-base text-[#FF5C35]">✦</span>
                    <div>
                      <h4 className="font-bold text-[#213343]">Hi, I'm your prospecting agent</h4>
                      <p className="mt-1 text-[10px] leading-tight text-gray-500">
                        I'm here to help put your prospecting efforts on auto-pilot
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="rounded-lg bg-[#532637] px-4 py-2 text-[10px] font-semibold text-white shadow-md">
                      View automations
                    </button>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-base font-bold text-[#213343]">Prospecting Agent</h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-gray-600">
                    Spot buying signals, source contacts, and launch personalized outreach — instantly.
                  </p>
                  <a href="#" className="mt-3 inline-block text-[11px] font-bold text-[#213343] underline">
                    Learn more
                  </a>
                </div>
              </div>

              {/* CARD 3: Data Agent */}
              <div className="hidden w-[270px] shrink-0 rounded-2xl bg-[#FFF8F5]/80 p-5 shadow-sm md:block">
                <div className="relative h-[200px] overflow-hidden rounded-xl bg-[#F6ECE8] p-3 text-[10px]">
                  <div className="rounded-lg border border-red-200/60 bg-white/60 p-3">
                    <p className="font-bold text-gray-700">Create a Smart Property</p>
                    <p className="mt-1 text-[8px] text-gray-400">
                      Does this company sell Market... <br /> I want this to be a yes or no an...
                    </p>
                  </div>
                  <div className="mt-4">
                    <button className="rounded-lg bg-[#A06173] px-3 py-1.5 text-[9px] font-semibold text-white">
                      ✦ Generate property
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-sm font-bold text-[#213343]">Data Agent</h3>
                  <p className="mt-1 text-[11px] leading-snug text-gray-600">
                    Know which accounts are ready to buy and why.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Arrow Button */}
            <button className="absolute right-0 z-20 flex h-10 w-10 translate-x-3 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:scale-105">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

          {/* Pause Button at Bottom Center */}
          <div className="mt-8 flex justify-center">
            <button className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-50">
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* ================= INTEGRATIONS & CASE STUDIES SECTION ================= */}
      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-[1000px]">

          {/* Integrations Banner Card */}
          <div className="relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 md:flex-row md:p-10">
            <div className="z-10 max-w-[380px]">
              <h3 className="text-sm font-bold leading-snug text-[#213343] md:text-xl">
                Works with the tools you already use. 2,000+ integrations.
              </h3>
              <a href="#" className="mt-4 inline-block text-xs font-bold text-[#213343] underline decoration-[#ff5c35] decoration-2 underline underline-offset-4 hover:opacity-80">
                See all app integrations
              </a>
            </div>

            {/* Logocluster Graphic */}
            <div className="relative mt-8 flex h-36 w-full items-center justify-center overflow-hidden md:mt-0 md:w-1/2">
              <div className="grid grid-cols-4 gap-4 opacity-90 transform rotate-12 scale-110">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4A154B] text-white font-bold text-xs shadow-sm">slack</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF4A00] text-white font-bold text-xs shadow-sm">zapier</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#95BF47] text-white font-bold text-xs shadow-sm">shopify</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFE01B] text-black font-bold text-xs shadow-sm">🐵</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EA4335] text-white font-bold text-xs shadow-sm">M</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4285F4] text-white font-bold text-xs shadow-sm">G</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#36C5F0] text-white font-bold text-xs shadow-sm">slack</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF4A00] text-white font-bold text-xs shadow-sm">za</div>
              </div>
            </div>
          </div>

          {/* Case Studies Header Divider */}
          <div className="mt-14 relative flex items-center justify-between">
            <div className="relative z-10 bg-white pr-4">
              <span className="rounded border border-gray-300 px-2 py-1 text-[10px] font-semibold text-gray-700">
                Case Studies
              </span>
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dashed border-gray-300"></div>
            </div>
            <div className="relative z-10 bg-white pl-4">
              <button className="rounded-lg border border-[#213343] px-4 py-2 text-xs font-bold text-[#213343] hover:bg-[#213343] hover:text-white transition">
                See all case studies
              </button>
            </div>
          </div>

          {/* Heading and Tabs */}
          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <h2 className="text-3xl font-medium leading-tight text-black md:text-2xl max-w-[400px]">
              Remarkable results for every size business.
            </h2>
            <p className="text-xs text-black max-w-[320px] leading-relaxed">
              Scale your business with Avnata. The proof is in our customers' success.
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-8 border-b border-gray-200 text-xs font-semibold">
            <button className="border-b-2 border-[#ff5c35] pb-2 text-[#213343]">
              Enterprise
            </button>
            <button className="pb-2 text-gray-500 hover:text-[#213343]">
              Mid-Sized Business
            </button>
            <button className="pb-2 text-gray-500 hover:text-[#213343]">
              Small Business
            </button>
          </div>

        </div>
      </section>

      {/* Testimonial Card */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Side */}
              <div className="h-[280px] w-full md:h-auto bg-gray-100">
                <img
                  src="/unipart-lady.png"
                  alt="Unipart Representative"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Text / Quote Side */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="text-xs leading-relaxed text-black md:text-sm">
                  "Avnata took the time to understand our business needs fully. The pre-sales and subsequent support really stood out from the start. They committed to engage with us deeply and work side-by-side with us on the implementation. They've since more than met this commitment."
                </p>
                
                <div className="mt-6">
                  <h4 className="text-sm font-bold text-black">Adam Jones</h4>
                  <p className="text-[11px] text-black">Director of Business Development, Unipart</p>
                  <a href="#" className="mt-2 inline-block text-xs font-bold text-black underline decoration-[#ff5c35] decoration-2 underline-offset-4 hover:opacity-80">
                    Read full case study
                  </a>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 border-t border-gray-200 bg-gray-50/50 py-6 text-center md:grid-cols-2">
              <div className="border-b border-gray-200 px-4 py-2 md:border-b-0 md:border-r">
                <span className="text-3xl font-bold text-[#213343]">12</span>
                <p className="mt-1 text-[11px] text-gray-600">months for the pipeline to grow from millions to billions</p>
              </div>
              <div className="px-4 py-2">
                <span className="text-3xl font-bold text-[#213343]">5</span>
                <p className="mt-1 text-[11px] text-gray-600">point increase in net promoter score (NPS)</p>
              </div>
            </div>
          </div>

          {/* G2 Awards / Badges Section */}
          <div className="my-16 py-8 mx-auto w-full max-w-[1000px] px-6 md:px-12">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <h3 className="text-xl font-bold text-[#213343] md:text-2xl whitespace-nowrap">
                Voted #1 in 526 G2 Reports
              </h3>
              
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  { title: 'Leader', type: 'SMALL BUSINESS', topBg: 'bg-[#ff5c35]', border: 'border-orange-200' },
                  { title: 'Most Implementable', type: 'FALL 2026', topBg: 'bg-[#3b82f6]', border: 'border-blue-200' },
                  { title: 'Best Relationship', type: 'SMALL BUSINESS', topBg: 'bg-[#10b981]', border: 'border-emerald-200' },
                  { title: 'Easiest Admin', type: 'ENTERPRISE', topBg: 'bg-[#eab308]', border: 'border-yellow-200' },
                  { title: 'Best Results', type: 'MID-MARKET', topBg: 'bg-[#8b5cf6]', border: 'border-purple-200' },
                  { title: 'Best Usability', type: 'ENTERPRISE', topBg: 'bg-[#eab308]', border: 'border-yellow-200' },
                ].map((badge, idx) => (
                  <div key={idx} className={`flex h-24 w-20 flex-col justify-between rounded-b-lg border ${badge.border} bg-white p-2 text-center shadow-xs transition hover:-translate-y-1`}>
                    <div className="flex items-center justify-between text-[7px] font-semibold text-gray-500">
                      <span>FALL 2026</span>
                      <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5c35] text-[6px] font-bold text-white">G</span>
                    </div>
                    <div className="my-1">
                      <span className="text-[10px] font-bold leading-tight text-[#213343] block">{badge.title}</span>
                    </div>
                    <div className="text-[6px] font-bold tracking-wider text-gray-500 uppercase border-t border-gray-100 pt-1">
                      {badge.type}
                    </div>
                    <div className={`h-1 w-full rounded-b-md ${badge.topBg}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      {/* ================= CTA BANNER SECTION ================= */}
      <section className="bg-[#002B2A] px-6 py-20 text-white">
        <div className="mx-auto flex flex-col items-center text-center max-w-[1000px]">
          <h2 className="text-xl font-normal leading-tight md:text-4xl max-w-[700px]">
            Make impossible growth feel impossibly easy, with HubSpot<span className="text-[#ff5c35]">.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-md bg-[#ff5c35] px-6 py-3.5 text-xs font-bold text-white hover:bg-[#e04b28] transition">
              Get a demo
            </button>
            <button className="rounded-md border border-white bg-transparent px-6 py-3.5 text-xs font-bold text-white hover:bg-white hover:text-[#002B2A] transition">
              Get started free
            </button>
          </div>
        </div>
      </section>

      {/* ================= LOGIN MODAL POPUP ================= */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
            
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold"
            >
              ✕
            </button>

            <div className="text-center">
              <span className="text-2xl font-black text-[#213343]">Avnata</span>
              <h2 className="mt-3 text-xl font-bold text-[#213343]">Log in to your account</h2>
            </div>

            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com" 
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-800 focus:border-[#ff5c35] focus:outline-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full rounded-lg bg-[#ff5c35] py-3 text-sm font-bold text-white hover:bg-[#e04b28] transition"
              >
                Continue with Email
              </button>
            </form>

          </div>
        </div>
      )}

      {/* ================= FOOTER SECTION ================= */}
      <footer className="bg-[#212a31] text-gray-300 px-6 pt-16 pb-12 text-xs">
        <div className="mx-auto max-w-[1000px]">
          {/* Links Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 border-b border-gray-700 pb-12">
            
            {/* Popular Features */}
            <div>
              <h4 className="font-bold text-white mb-4 text-xs">Popular Features</h4>
              <ul className="space-y-2.5 text-[11px] text-gray-400">
                <li><a href="#" className="hover:text-white">All Products and Features</a></li>
                <li><a href="#" className="hover:text-white">Avnata AEO</a></li>
                <li><a href="#" className="hover:text-white">Free Meeting Scheduler App</a></li>
                <li><a href="#" className="hover:text-white">Agent Hub</a></li>
                <li><a href="#" className="hover:text-white">Email Tracking Software</a></li>
                <li><a href="#" className="hover:text-white">AI Content Writer</a></li>
                <li><a href="#" className="hover:text-white">AI Website Generator</a></li>
                <li><a href="#" className="hover:text-white">Email Marketing Software</a></li>
                <li><a href="#" className="hover:text-white">Lead Management Software</a></li>
                <li><a href="#" className="hover:text-white">AI Prospecting Agent</a></li>
                <li><a href="#" className="hover:text-white">Free Website Builder</a></li>
                <li><a href="#" className="hover:text-white">Free Landing Page Builder</a></li>
                <li><a href="#" className="hover:text-white">Free Online Form Builder</a></li>
                <li><a href="#" className="hover:text-white">Free Chatbot Builder</a></li>
                <li><a href="#" className="hover:text-white">Free Live Chat Software</a></li>
                <li><a href="#" className="hover:text-white">Marketing Analytics</a></li>
                <li><a href="#" className="hover:text-white">Breeze Assistant</a></li>
                <li><a href="#" className="hover:text-white">Free Web Hosting</a></li>
              </ul>
            </div>

            {/* Free Tools */}
            <div>
              <h4 className="font-bold text-white mb-4 text-xs">Free Tools</h4>
              <ul className="space-y-2.5 text-[11px] text-gray-400">
                <li><a href="#" className="hover:text-white">See All Free Business Tools</a></li>
                <li><a href="#" className="hover:text-white">AEO Grader</a></li>
                <li><a href="#" className="hover:text-white">AI Search Sensor</a></li>
                <li><a href="#" className="hover:text-white">Make My Persona</a></li>
                <li><a href="#" className="hover:text-white">Email Signature Generator</a></li>
                <li><a href="#" className="hover:text-white">Free Business Templates</a></li>
                <li><a href="#" className="hover:text-white">Software Comparisons Library</a></li>
                <li><a href="#" className="hover:text-white">Website Templates</a></li>
                <li><a href="#" className="hover:text-white">Connector for Claude</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-4 text-xs">Company</h4>
              <ul className="space-y-2.5 text-[11px] text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Management Team</a></li>
                <li><a href="#" className="hover:text-white">Board of Directors</a></li>
                <li><a href="#" className="hover:text-white">Investor Relations</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Sustainability</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            {/* Customers & Partners */}
            <div>
              <h4 className="font-bold text-white mb-4 text-xs">Customers</h4>
              <ul className="space-y-2.5 text-[11px] text-gray-400 mb-6">
                <li><a href="#" className="hover:text-white">Customer Support</a></li>
                <li><a href="#" className="hover:text-white">Join a Local User Group</a></li>
              </ul>

              <h4 className="font-bold text-white mb-4 text-xs">Partners</h4>
              <ul className="space-y-2.5 text-[11px] text-gray-400">
                <li><a href="#" className="hover:text-white">All Partner Programs</a></li>
                <li><a href="#" className="hover:text-white">Solutions Partner Program</a></li>
                <li><a href="#" className="hover:text-white">Technology Partner Program</a></li>
                <li><a href="#" className="hover:text-white">Avnata for Startups</a></li>
                <li><a href="#" className="hover:text-white">Affiliate Program</a></li>
              </ul>
            </div>

          </div>

          {/* Social Icons & Bottom Info */}
          <div className="mt-10 flex flex-col items-center">
            {/* Social Icons Row */}
            <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
              <a href="#" className="hover:text-white">f</a>
              <a href="#" className="hover:text-white">📷</a>
              <a href="#" className="hover:text-white">▶</a>
              <a href="#" className="hover:text-white">𝕏</a>
              <a href="#" className="hover:text-white">in</a>
              <a href="#" className="hover:text-white">👾</a>
              <a href="#" className="hover:text-white">🎵</a>
            </div>

            {/* Logo */}
            <h3 className="text-xl font-bold text-white tracking-wide mb-2">Avnata</h3>
            <p className="text-[10px] text-gray-500 mb-4">Copyright © 2026 Avnata, Inc.</p>

            {/* Bottom Links */}
            <div className="flex flex-wrap justify-center gap-4 text-[10px] font-semibold text-gray-300 underline underline-offset-2">
              <a href="#" className="hover:text-white">Legal Center</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Security</a>
              <a href="#" className="hover:text-white">Website Accessibility</a>
              <a href="#" className="hover:text-white">Manage Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;