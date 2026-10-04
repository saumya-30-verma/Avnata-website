import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import AccountsPage from "./pages/AccountsPage";
import Trusties from "./pages/Trusties";

import Dashboard from "./pages/crm/Dashboard";
import Deals from "./pages/crm/Deals";
import Contacts from "./pages/crm/Contacts";
import Companies from "./pages/crm/Companies";
import Segments from './pages/crm/Segments';
import Aeo from './pages/crm/Aeo'
import MarketingEmails from './pages/crm/MarketingEmails';
import Forms from './pages/crm/Forms';
import Campaigns from './pages/crm/Campaigns';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* /accounts par Trusties set kar diya hai */}
        <Route path="/accounts" element={<Trusties />} />
        <Route path="/accounts-old" element={<AccountsPage />} />

        <Route path="/crm" element={<Dashboard />} />
        <Route path="/crm/deals" element={<Deals />} />
        <Route path="/crm/contacts" element={<Contacts />} />
        <Route path="/crm/companies" element={<Companies />} />
        <Route path="/crm/segments" element={<Segments />} />
        <Route path="/crm/aeo" element={<Aeo />} />
        <Route path="/crm/marketing-emails" element={<MarketingEmails />} />
        <Route path="/crm/forms" element={<Forms />} />
        <Route path="/crm/campaigns" element={<Campaigns />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;