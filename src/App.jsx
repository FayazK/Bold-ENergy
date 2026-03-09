import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormModalProvider } from './context/FormModalContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeownerFormModal from './components/HomeownerFormModal';
import DealerFormModal from './components/DealerFormModal';
import Home from './pages/Home';
import HomeOwners from './pages/HomeOwners';
import CustomerReviews from './pages/CustomerReviews';
import Blogs from './pages/Blogs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import PartnerWithBoldEnergy from './pages/PartnerWithBoldEnergy';
import StatesWeCover from './pages/StatesWeCover';
import './App.css';

function App() {
  return (
    <Router>
      <FormModalProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home-owners" element={<HomeOwners />} />
              <Route path="/customer-reviews" element={<CustomerReviews />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/partner-with-bold-energy" element={<PartnerWithBoldEnergy />} />
              <Route path="/states-we-cover" element={<StatesWeCover />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <HomeownerFormModal />
        <DealerFormModal />
      </FormModalProvider>
    </Router>
  );
}

export default App;
