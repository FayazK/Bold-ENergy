import { Link } from 'react-router-dom';

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
          <h2 className="mb-6 text-white font-bold text-center" style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '50px' }}>
            Partner With Us
          </h2>
          <p className="text-white text-center mb-10" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '23px', maxWidth: '900px', lineHeight: '1.4' }}>
            We are an environmentally conscious renewable energy company that's focused on creating the most customer centric experience in the industry!
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6">
            <button
              className="px-10 py-4 rounded-full font-bold hover:opacity-90 transition-opacity duration-300 flex items-center gap-3"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', backgroundColor: '#FFFFFF', color: '#A1B502' }}
            >
              <img src="/greenquote.png.png" alt="Get a Quote" className="w-7 h-5" />
              GET A QUOTE
            </button>
            <button
              className="px-10 py-4 rounded-full font-bold text-white hover:opacity-90 transition-opacity duration-300 flex items-center gap-3"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', backgroundColor: '#385887' }}
            >
              <img src="/handshake.png.png" alt="Become a Sales Dealer" className="w-6 h-6" />
              BECOME A SALES DEALER
            </button>
          </div>
        </div>
      </div>

      {/* White Rectangle - Half on bold section, half on footer */}
      <div className="absolute w-full flex justify-center" style={{ top: '875.5px', zIndex: 10 }}>
        <div className="relative" style={{ width: '1350px', height: '789px', backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
          {/* Text Content */}
          <p className="absolute" style={{ left: '70px', top: '100px', fontFamily: 'Archivo, sans-serif', fontSize: '20px', fontWeight: 'bold', color: '#222222', maxWidth: '400px', paddingRight: '20px', lineHeight: '1.5' }}>
            As a national distributor of solar supplies we endeavor provide fast and knowledgeable service, we can get all the materials you need
          </p>

          {/* View Office Map */}
          <div className="absolute flex items-center gap-3" style={{ left: '70px', top: '250px' }}>
            <div className="flex items-center justify-center" style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#A1B502' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 'bold', color: '#222222' }}>
              View Our Office Map
            </span>
          </div>

          {/* Divider Line */}
          <div className="absolute" style={{ left: '70px', top: '310px', width: '400px', height: '1px', backgroundColor: '#CCCCCC' }}></div>

          {/* Contact Information */}
          <div className="absolute flex flex-col gap-4" style={{ left: '70px', top: '350px' }}>
            {/* Location */}
            <div className="flex items-center gap-3">
              <img src="/location.png.png" alt="Location" className="w-4 h-6" />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: '#222222' }}>
                30 Old Kings Hwy S, Darien, CT 06820, USA
              </span>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-3">
              <img src="/contact.png.png" alt="Contact" className="w-6 h-6" />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: '#222222' }}>
                123-456-7890
              </span>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3">
              <img src="/clock.png.png" alt="Hours" className="w-6 h-6" />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: '#222222' }}>
                Mon - Fri: 9:00 AM - 5:00 PM
              </span>
            </div>

            {/* Contact Us Button */}
            <button
              className="px-8 py-3 rounded-full text-white font-bold hover:opacity-90 transition-opacity duration-300 flex items-center justify-between mt-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', backgroundColor: '#A1B502', width: '320px', height: '50px' }}
            >
              Contact Us
              <img src="/contactus.png.png" alt="Contact Us" className="w-5 h-5" />
            </button>

            {/* Become a Sales Dealer Button */}
            <button
              className="px-8 py-3 rounded-full text-white font-bold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-3 mt-3"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', backgroundColor: '#385887', width: '320px', height: '50px' }}
            >
              <img src="/dealer.png.png" alt="Become a Sales Dealer" className="w-6 h-4" />
              BECOME A SALES DEALER
            </button>
          </div>

          {/* Blue Rectangle - Quote Form */}
          <div className="absolute flex flex-col" style={{ right: '40px', top: '50%', transform: 'translateY(-50%)', width: '759px', height: '669px', backgroundColor: '#385887', borderRadius: '10px', padding: '40px' }}>
            {/* Form Header */}
            <p className="mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '22px', color: '#A1B502' }}>
              Get your free solar estimate today.
            </p>
            <div className="flex items-center gap-4 mb-10">
              <h3 style={{ fontFamily: 'Flamante-Roma, sans-serif', fontSize: '50px', fontWeight: 'bold', color: '#FFFFFF' }}>
                Request A Quote
              </h3>
              <div style={{ width: '250px', height: '3px', backgroundColor: '#A1B502' }}></div>
            </div>

            {/* Form Fields - Grid Layout */}
            <div className="grid grid-cols-2 gap-6 mt-6" style={{ marginBottom: '60px' }}>
              {/* Solar System */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#FFFFFF' }}>
                  What You Want to Install?
                </label>
                <div className="flex items-center justify-between py-3 px-5 rounded" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#222222' }}>
                    Solar System
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* 4-6 months */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#FFFFFF' }}>
                  System Completed By?
                </label>
                <div className="flex items-center justify-between py-3 px-5 rounded" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#222222' }}>
                    4-6 months
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* 1300 KWH */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#FFFFFF' }}>
                  Monthly Electric Usage in Kwh?
                </label>
                <div className="flex items-center justify-between py-3 px-5 rounded" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#222222' }}>
                    1300 KWH
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Widegrid */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#FFFFFF' }}>
                  Solar System Type?
                </label>
                <div className="flex items-center justify-between py-3 px-5 rounded" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#222222' }}>
                    Widegrid
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Residential home */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#FFFFFF' }}>
                  Solar Panels Place?
                </label>
                <div className="flex items-center justify-between py-3 px-5 rounded" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#222222' }}>
                    Residential home
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Solar panels */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '19px', color: '#FFFFFF' }}>
                  Materials Type?
                </label>
                <div className="flex items-center justify-between py-3 px-5 rounded" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#222222' }}>
                    Solar panels
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="px-8 py-3 rounded-full text-white font-bold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2 self-center"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', backgroundColor: '#A1B502' }}
            >
              <img src="/dealer.png.png" alt="Dealer" className="w-6 h-5" />
              GET A FREE QUOTE
            </button>
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
        <div className="absolute" style={{ top: '450px', left: '250px' }}>
          <img
            src="/boldenergy.png"
            alt="Bold Energy"
            style={{ width: '353px', height: '250px' }}
          />
        </div>

        {/* Company Section */}
        <div className="absolute" style={{ top: '500px', left: 'calc(50% + 50px)', transform: 'translateX(-50%)' }}>
          <h4 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '15px' }}>
            Company
          </h4>
          <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#FFFFFF', lineHeight: '2' }}>
            <p>Homeowners</p>
            <p>Sales Dealers</p>
            <Link to="/customer-reviews" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              <p className="hover:opacity-80 transition-opacity cursor-pointer">Reviews</p>
            </Link>
            <Link to="/blogs" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              <p className="hover:opacity-80 transition-opacity cursor-pointer">Latest Blog</p>
            </Link>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="absolute" style={{ top: '450px', right: 'calc((100vw - 1350px) / 2)', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', padding: '30px', width: '370px', height: '298px' }}>
          <h4 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '30px', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '25px' }}>
            Contact Us
          </h4>

          {/* Contact Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Phone */}
            <div className="flex items-start gap-3">
              <img src="/phone.png" alt="Phone" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#FFFFFF' }}>
                123-456-7890
              </span>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <img src="/email.png" alt="Email" style={{ width: '25px', height: '17px', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#FFFFFF' }}>
                info@bold.energy
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <img src="/address.png" alt="Address" style={{ width: '24px', height: '32px', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '17px', color: '#FFFFFF', lineHeight: '1.4' }}>
                30 Old Kings Hwy S, Darien, Suite #1001, CT 06820
              </span>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="absolute flex gap-4" style={{ top: '820px', left: '250px' }}>
          {/* Facebook */}
          <div className="flex items-center justify-center rounded-full" style={{ width: '60px', height: '60px', backgroundColor: '#FFFFFF' }}>
            <img src="/fb.png" alt="Facebook" style={{ width: '12px', height: '20px' }} />
          </div>

          {/* X (Twitter) */}
          <div className="flex items-center justify-center rounded-full" style={{ width: '60px', height: '60px', backgroundColor: '#FFFFFF' }}>
            <img src="/x.png" alt="X" style={{ width: '20px', height: '20px' }} />
          </div>

          {/* Instagram */}
          <div className="flex items-center justify-center rounded-full" style={{ width: '60px', height: '60px', backgroundColor: '#FFFFFF' }}>
            <img src="/insta.png" alt="Instagram" style={{ width: '20px', height: '20px' }} />
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-center rounded-full" style={{ width: '60px', height: '60px', backgroundColor: '#FFFFFF' }}>
            <img src="/linkdin.png" alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
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
        <div className="absolute" style={{ top: '950px', left: '1650px', transform: 'translateX(-100%)' }}>
          <Link to="/privacy-policy" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
            <p className="hover:opacity-80 transition-opacity cursor-pointer" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', color: '#FFFFFF', whiteSpace: 'nowrap' }}>
              Terms & Conditions    |    Privacy Policy
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
