import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HomeOwners from './pages/HomeOwners';
import CustomerReviews from './pages/CustomerReviews';
import Blogs from './pages/Blogs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PartnerWithBoldEnergy from './pages/PartnerWithBoldEnergy';
import StatesWeCover from './pages/StatesWeCover';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home-owners" element={<HomeOwners />} />
            <Route path="/customer-reviews" element={<CustomerReviews />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/partner-with-bold-energy" element={<PartnerWithBoldEnergy />} />
            <Route path="/states-we-cover" element={<StatesWeCover />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
