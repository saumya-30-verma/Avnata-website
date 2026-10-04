import React, { useState } from 'react';

export default function App() {
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
      // Account / Dashboard page par navigate karein
      alert('Redirecting to your Account Dashboard...');
      // If using React Router: navigate('/account');
    } else {
      setIsLoginOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#213343]">
      
      {/* Header / Navbar */}
      <header className="flex items-center justify-between border-b border-gray-100 px-8 py-4">
        <div className="text-xl font-bold text-[#213343]">Avnata</div>
        
        <div>
          {/* Dynamically button change hoga */}
          <button 
            onClick={handleAccountClick}
            className="rounded-md bg-[#ff5c35] px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#e04b28] transition"
          >
            {isLoggedIn ? 'Go to My Account' : 'Log in'}
          </button>
        </div>
      </header>

      {/* Main Home Page */}
      <main className="p-10 text-center">
        <h1 className="text-3xl font-bold">Welcome to Avnata</h1>
        <p className="mt-2 text-gray-600">
          {isLoggedIn ? `Logged in as: ${email}` : 'Please log in to continue'}
        </p>
      </main>

      {/* Login Modal */}
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

    </div>
  );
}