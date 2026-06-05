import { Link } from 'react-router-dom';
import { FaFileAlt, FaHandshake, FaMapMarkerAlt, FaPhone, FaClock, FaArrowRight, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useFormModal } from '../context/FormModalContext';

const Footer = () => {
  const { openHomeownerForm, openDealerForm } = useFormModal();

  return (
    <footer className="w-full relative">
      {/* Green Partner Section */}
      <div className="w-full relative overflow-hidden">
        <img
          src="/bold.png.png"
          alt=""
          aria-hidden="true"
          className="is-bg absolute inset-0"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#A1B502]/85 z-[1]" />

        <div className="relative z-[2] container-bold pt-10 sm:pt-16 lg:pt-[100px] pb-12 sm:pb-20">
          {/* Bold Section Image */}
          <div className="flex justify-center">
            <img
              src="/boldsection.png.png"
              alt="Bold Section"
              className="w-full max-w-[1100px] h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center pt-6 sm:pt-12">
            <h2
              className="mb-4 sm:mb-6 text-white font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px]"
              style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.03em' }}
            >
              Partner With Us
            </h2>
            <p
              className="text-white text-center mb-6 sm:mb-10 text-sm sm:text-base lg:text-lg xl:text-[22px] max-w-[900px] px-2"
              style={{ fontFamily: 'DM Sans, sans-serif', lineHeight: '1.5', letterSpacing: '0.02em' }}
            >
              We are an environmentally conscious renewable energy company that's focused on creating the most customer centric experience in the industry!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto items-stretch sm:items-center">
              <button
                onClick={openHomeownerForm}
                className="px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 text-sm sm:text-base"
                style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#FFFFFF', color: '#A1B502', letterSpacing: '0.05em' }}
              >
                <FaFileAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                GET A QUOTE
              </button>
              <button
                onClick={openDealerForm}
                className="px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-white hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 text-sm sm:text-base"
                style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#385887', letterSpacing: '0.05em' }}
              >
                <FaHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
                PARTNER WITH BOLD
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Card */}
      <div className="relative container-bold -mt-12 sm:-mt-16 z-10">
        <div className="max-w-[900px] mx-auto bg-white rounded-[10px] shadow-lg p-6 sm:p-8 lg:p-10 xl:p-14">
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-6 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif', color: '#222222', letterSpacing: '0.03em' }}>
            As a national distributor of solar supplies we endeavor provide fast and knowledgeable service, we can get all the materials you need
          </p>

          <div className="flex items-center gap-3 mb-5 lg:mb-6">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full" style={{ backgroundColor: '#A1B502' }}>
              <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="text-sm sm:text-base lg:text-lg font-bold" style={{ fontFamily: 'DM Sans, sans-serif', color: '#222222' }}>
              View Our Office Map
            </span>
          </div>

          <div className="w-full max-w-[400px] h-px bg-gray-300 mb-5 lg:mb-6"></div>

          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="flex items-center gap-3 sm:gap-4">
              <FaMapMarkerAlt className="w-4 h-5 sm:w-5 sm:h-6 text-[#A1B502] flex-shrink-0" />
              <span className="text-xs sm:text-sm lg:text-base" style={{ fontFamily: 'DM Sans, sans-serif', color: '#222222' }}>
                3333 Preston Road, STE 300-165, Frisco, TX 75034
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#A1B502] flex-shrink-0" />
              <span className="text-xs sm:text-sm lg:text-base" style={{ fontFamily: 'DM Sans, sans-serif', color: '#222222' }}>+1 475-221-2353</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <FaClock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#A1B502] flex-shrink-0" />
              <span className="text-xs sm:text-sm lg:text-base" style={{ fontFamily: 'DM Sans, sans-serif', color: '#222222' }}>Mon - Fri: 9:00 AM - 5:00 PM</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                onClick={openHomeownerForm}
                className="sm:flex-1 max-w-[400px] py-2.5 sm:py-3 rounded-xl text-white font-bold hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-xs sm:text-sm lg:text-base"
                style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#A1B502', letterSpacing: '0.05em' }}
              >
                <FaFileAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                GET A FREE QUOTE
              </button>

              <button
                onClick={openDealerForm}
                className="sm:flex-1 max-w-[400px] py-2.5 sm:py-3 rounded-xl font-bold text-white hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-xs sm:text-sm lg:text-base"
                style={{ fontFamily: 'DM Sans, sans-serif', backgroundColor: '#385887', letterSpacing: '0.05em' }}
              >
                <FaHandshake className="w-5 h-5" />
                PARTNER WITH BOLD
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full relative overflow-hidden -mt-10">
        <img
          src="/footer.png.jpg"
          alt=""
          aria-hidden="true"
          className="is-bg absolute inset-0"
          loading="lazy"
        />

        <div className="relative z-[1] container-bold pt-20 sm:pt-28 lg:pt-36 pb-6 sm:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center md:items-start gap-8 md:gap-8 lg:gap-12 mb-10 sm:mb-14">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="/BOLD Energy Logo.svg"
                  alt="Bold Energy"
                  className="w-[160px] sm:w-[200px] md:w-[220px] lg:w-[260px] xl:w-[300px] h-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Company Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
                Company
              </h4>
              <div className="text-sm sm:text-base lg:text-lg text-white" style={{ fontFamily: 'DM Sans, sans-serif', lineHeight: '2' }}>
                <Link to="/states-we-cover" className="block hover:opacity-80 transition-opacity text-white no-underline">States We Cover</Link>
                <Link to="/partner-with-bold-energy" className="block hover:opacity-80 transition-opacity text-white no-underline">Partner with Bold</Link>
              </div>
            </div>

            {/* Contact Us */}
            <div className="w-full md:w-auto md:max-w-[370px] justify-self-center md:justify-self-end">
              <div className="bg-white/10 rounded-[10px] p-5 sm:p-6 w-full">
                <h4 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white mb-4 sm:mb-5" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
                  Contact Us
                </h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>+1 475-221-2353</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-white break-all" style={{ fontFamily: 'DM Sans, sans-serif' }}>Support@boldenergy.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="w-4 h-5 sm:w-5 sm:h-6 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      3333 Preston Road, STE 300-165, Frisco, TX 75034
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mb-6 sm:mb-10">
            {[
              { icon: <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 text-[#385887]" />, href: 'https://www.facebook.com/BoldEnergyOfficial', label: 'Facebook' },
              { icon: <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#E1306C]" />, href: 'https://www.instagram.com/boldenergyofficial/', label: 'Instagram' },
              { icon: <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A66C2]" />, href: 'https://www.linkedin.com/company/empower-energy-solutions-inc/', label: 'LinkedIn' },
            ].map((social, i) => {
              const iconClasses = 'flex items-center justify-center rounded-full bg-white w-9 h-9 sm:w-11 sm:h-11 lg:w-[60px] lg:h-[60px] hover:scale-110 transition-transform duration-300 cursor-pointer';
              return social.href ? (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={iconClasses}
                >
                  {social.icon}
                </a>
              ) : (
                <div key={i} className={iconClasses} aria-label={social.label}>
                  {social.icon}
                </div>
              );
            })}
          </div>

          {/* Contractor License Numbers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center mb-6">
            <p className="text-white text-xs sm:text-sm" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
              Licensed & Insured
            </p>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
            <p className="text-white/80 text-xs sm:text-sm" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}>
              CT HIC #0661633 | CT ELC.0209498-E1 | NJ HIC #13VH13073100
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="w-full h-px bg-white/50 mb-4"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs sm:text-sm lg:text-base text-white text-center sm:text-left" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Copyright © 2025 Bold Energy. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3 sm:gap-5">
              <Link to="/terms-and-conditions" className="hover:opacity-80 transition-opacity text-xs sm:text-sm lg:text-base text-white no-underline" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Terms & Conditions
              </Link>
              <span className="text-white text-xs sm:text-sm">|</span>
              <Link to="/privacy-policy" className="hover:opacity-80 transition-opacity text-xs sm:text-sm lg:text-base text-white no-underline" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
