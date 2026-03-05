import { Link } from 'react-router-dom';
import { FaFileAlt, FaHandshake, FaMapMarkerAlt, FaPhone, FaClock, FaArrowRight, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaChevronDown } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full relative">
      <div className="w-full relative">
        <img
          src="/bold.png.png"
          alt="Bold Energy Footer"
          style={{ width: '100%', height: '1270px', objectFit: 'cover' }}
        />
        {/* Green Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#A1B502',
            opacity: '0.8',
            width: '100%',
            height: '1270px',
            zIndex: 1
          }}
        />
        {/* Bold Section Image */}
        <div className="absolute w-full flex justify-center" style={{ top: '100px', zIndex: 2 }}>
          <img
            src="/boldsection.png.png"
            alt="Bold Section"
            style={{ width: '1100px', height: '400px', objectFit: 'cover' }}
          />
        </div>

        {/* Text Content */}
        <div className="absolute w-full flex flex-col items-center" style={{ top: '550px', zIndex: 2 }}>
          <h2 className="mb-6 text-white font-bold text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', letterSpacing: '0.03em' }}>
            Partner With Us
          </h2>
          <p className="text-white text-center mb-10" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '23px', maxWidth: '900px', lineHeight: '1.4', letterSpacing: '0.03em' }}>
            We are an environmentally conscious renewable energy company that's focused on creating the most customer centric experience in the industry!
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6">
            <button
              className="px-10 py-4 rounded-full font-bold hover:opacity-90 transition-opacity duration-300 flex items-center gap-3"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', backgroundColor: '#FFFFFF', color: '#A1B502', letterSpacing: '0.2em' }}
            >
              <FaFileAlt className="w-5 h-5" />
              GET A QUOTE
            </button>
            <button
              className="px-10 py-4 rounded-full font-bold text-white hover:opacity-90 transition-opacity duration-300 flex items-center gap-3"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', backgroundColor: '#385887', letterSpacing: '0.2em' }}
            >
              <FaHandshake className="w-6 h-6" />
              BECOME A SALES DEALER
            </button>
          </div>
        </div>
      </div>

      {/* White Rectangle - Half on bold section, half on footer */}
      <div className="absolute w-full flex justify-center" style={{ top: '875.5px', zIndex: 10 }}>
        <div className="relative" style={{ width: '1350px', height: '789px', backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
          {/* Text Content */}
          <p className="absolute" style={{ left: '80px', top: '100px', fontFamily: 'Archivo, sans-serif', fontSize: '20px', fontWeight: 'bold', color: '#222222', maxWidth: '400px', paddingRight: '20px', lineHeight: '1.5', letterSpacing: '0.03em' }}>
            As a national distributor of solar supplies we endeavor provide fast and knowledgeable service, we can get all the materials you need
          </p>

          {/* View Office Map */}
          <div className="absolute flex items-center gap-3" style={{ left: '80px', top: '280px' }}>
            <div className="flex items-center justify-center" style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#A1B502' }}>
              <FaArrowRight className="w-4 h-4 text-white" />
            </div>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 'bold', color: '#222222' }}>
              View Our Office Map
            </span>
          </div>

          {/* Divider Line */}
          <div className="absolute" style={{ left: '80px', top: '360px', width: '400px', height: '1px', backgroundColor: '#CCCCCC' }}></div>

          {/* Contact Information */}
          <div className="absolute flex flex-col" style={{ left: '80px', top: '400px', gap: '25px' }}>
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-6 flex justify-center">
                <FaMapMarkerAlt className="w-5 h-6 text-[#A1B502]" />
              </div>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: '#222222', whiteSpace: 'nowrap' }}>
                30 Old Kings Hwy S, Darien, CT 06820, USA
              </span>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-4">
              <FaPhone className="w-6 h-6 text-[#A1B502]" />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: '#222222' }}>
                123-456-7890
              </span>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4">
              <FaClock className="w-6 h-6 text-[#A1B502]" />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: '#222222' }}>
                Mon - Fri: 9:00 AM - 5:00 PM
              </span>
            </div>

            {/* Contact Us Button */}
            <button
              className="px-8 py-3 rounded-full text-white font-bold hover:opacity-90 transition-opacity duration-300 flex items-center justify-between"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', backgroundColor: '#A1B502', width: '400px', height: '50px', marginTop: '10px', letterSpacing: '0.2em' }}
            >
              Contact Us
              <FaArrowRight className="w-5 h-5" />
            </button>

            {/* Become a Sales Dealer Button */}
            <button
              className="px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', backgroundColor: '#385887', color: '#FFFFFF', width: '400px', height: '50px', marginTop: '5px', letterSpacing: '0.2em', whiteSpace: 'nowrap' }}
            >
              <FaHandshake className="w-6 h-5" />
              BECOME A SALES DEALER
            </button>
          </div>

          {/* Blue Rectangle - Quote Form */}
          <div className="absolute flex flex-col" style={{ right: '60px', top: '50%', transform: 'translateY(-50%)', width: '759px', height: '669px', backgroundColor: '#385887', borderRadius: '10px', padding: '40px' }}>
            {/* Form Header */}
            <p className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '22px', color: '#A1B502', letterSpacing: '0.03em' }}>
              Get your free solar estimate today.
            </p>
            <div className="flex items-center gap-4 mb-10">
              <h3 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#FFFFFF', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>
                Request A Quote
              </h3>
              <div style={{ width: '150px', height: '3px', backgroundColor: '#A1B502' }}></div>
            </div>

            {/* Form Fields - Grid Layout */}
            <div className="grid grid-cols-2 gap-6 mt-6" style={{ marginBottom: '60px' }}>
              {[
                { label: 'What You Want to Install?', value: 'Solar System' },
                { label: 'System Completed By?', value: '4-6 months' },
                { label: 'Monthly Electric Usage in Kwh?', value: '1300 KWH' },
                { label: 'Solar System Type?', value: 'Widegrid' },
                { label: 'Solar Panels Place?', value: 'Residential home' },
                { label: 'Materials Type?', value: 'Solar panels' },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#FFFFFF' }}>
                    {field.label}
                  </label>
                  <div className="flex items-center justify-between py-3 px-5 rounded" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
                    <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#222222' }}>
                      {field.value}
                    </span>
                    <FaChevronDown className="w-3 h-3 text-[#222222]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 self-center">
              <button
                className="px-8 py-3 rounded-full text-white font-bold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', backgroundColor: '#A1B502', letterSpacing: '0.2em' }}
              >
                <FaFileAlt className="w-5 h-5" />
                GET A FREE QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <div className="w-full relative">
        <img
          src="/footer.png.jpg"
          alt="Footer"
          style={{ width: '100%', height: '1000px', objectFit: 'cover', display: 'block' }}
        />
        {/* Bold Energy Logo */}
        <Link to="/" className="absolute" style={{ top: '450px', left: '250px' }} onClick={() => window.scrollTo(0, 0)}>
          <img
            src="/boldenergy.png"
            alt="Bold Energy"
            style={{ width: '353px', height: '250px', cursor: 'pointer' }}
          />
        </Link>

        {/* Company Section */}
        <div className="absolute" style={{ top: '490px', left: 'calc(50% - 50px)', transform: 'translateX(-50%)' }}>
          <h4 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '15px', letterSpacing: '0.03em' }}>
            Company
          </h4>
          <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#FFFFFF', lineHeight: '2' }}>
            <Link to="/homeowners" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              <p className="hover:opacity-80 transition-opacity cursor-pointer">Homeowners</p>
            </Link>
            <Link to="/partner-with-bold-energy" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              <p className="hover:opacity-80 transition-opacity cursor-pointer">Sales Dealers</p>
            </Link>
            <Link to="/customer-reviews" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              <p className="hover:opacity-80 transition-opacity cursor-pointer">Reviews</p>
            </Link>
            <Link to="/blogs" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              <p className="hover:opacity-80 transition-opacity cursor-pointer">Latest Blog</p>
            </Link>
            <Link to="/states-we-cover" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              <p className="hover:opacity-80 transition-opacity cursor-pointer">States we cover</p>
            </Link>
            <Link to="/partner-with-bold-energy" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              <p className="hover:opacity-80 transition-opacity cursor-pointer">Partner with Bold</p>
            </Link>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="absolute" style={{ top: '450px', right: 'calc((100vw - 1350px) / 2)', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', padding: '30px', width: '370px', height: '298px' }}>
          <h4 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '30px', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '25px', letterSpacing: '0.03em' }}>
            Contact Us
          </h4>

          {/* Contact Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Phone */}
            <div className="flex items-start gap-3">
              <FaPhone className="w-6 h-6 text-white" style={{ flexShrink: 0 }} />
              <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#FFFFFF' }}>
                123-456-7890
              </span>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <FaEnvelope className="w-6 h-5 text-white" style={{ flexShrink: 0 }} />
              <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#FFFFFF' }}>
                info@bold.energy
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="w-6 h-8 text-white" style={{ flexShrink: 0 }} />
              <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#FFFFFF', lineHeight: '1.4' }}>
                30 Old Kings Hwy S, Darien, Suite #1001, CT 06820
              </span>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="absolute flex gap-4" style={{ top: '820px', left: '250px' }}>
          <div className="flex items-center justify-center rounded-full" style={{ width: '60px', height: '60px', backgroundColor: '#FFFFFF' }}>
            <FaFacebookF className="w-5 h-5 text-[#385887]" />
          </div>
          <div className="flex items-center justify-center rounded-full" style={{ width: '60px', height: '60px', backgroundColor: '#FFFFFF' }}>
            <FaXTwitter className="w-5 h-5 text-[#222222]" />
          </div>
          <div className="flex items-center justify-center rounded-full" style={{ width: '60px', height: '60px', backgroundColor: '#FFFFFF' }}>
            <FaInstagram className="w-5 h-5 text-[#E1306C]" />
          </div>
          <div className="flex items-center justify-center rounded-full" style={{ width: '60px', height: '60px', backgroundColor: '#FFFFFF' }}>
            <FaLinkedinIn className="w-5 h-5 text-[#0A66C2]" />
          </div>
        </div>

        {/* White Line */}
        <div className="absolute" style={{ top: '920px', left: '250px', width: '1400px', height: '0.5px', backgroundColor: '#FFFFFF' }}></div>

        {/* Copyright Text - Left */}
        <div className="absolute" style={{ top: '950px', left: '250px' }}>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#FFFFFF' }}>
            Copyright © 2025 Bold Energy. All Rights Reserved.
          </p>
        </div>

        {/* Terms & Privacy - Right */}
        <div className="absolute flex items-center" style={{ top: '950px', left: '1650px', transform: 'translateX(-100%)', whiteSpace: 'nowrap' }}>
          <Link to="/terms-and-conditions" className="hover:opacity-80 transition-opacity" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#FFFFFF', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Terms & Conditions
          </Link>
          <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#FFFFFF', margin: '0 20px' }}>|</span>
          <Link to="/privacy-policy" className="hover:opacity-80 transition-opacity" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#FFFFFF', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
