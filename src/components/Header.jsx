import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/home-owners', label: 'Homeowners' },
  { to: '/partner-with-bold-energy', label: 'Become a Dealer' },
  { to: '/states-we-cover', label: 'States we Cover' },
];

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Gradient backdrop so nav always reads over hero content */}
      <div
        className="absolute inset-x-0 top-0 h-28 sm:h-32 md:h-36 lg:h-44 bg-gradient-to-b from-black/55 via-black/25 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative pointer-events-auto">
        <nav className="container-bold mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0" aria-label="Bold Energy home">
              <img
                src="/BOLD Energy Logo.svg"
                alt="Bold Energy"
                className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div
              className="hidden lg:flex items-center gap-0.5 xl:gap-1"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {navLinks.map(({ to, label }) => {
                const isActive = location.pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`relative px-3 xl:px-4 py-2 text-sm xl:text-[15px] font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                      isActive ? 'text-[#A1B502]' : 'text-white hover:text-[#A1B502]'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 xl:left-4 right-3 xl:right-4 h-[2px] bg-[#A1B502] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A1B502] rounded shrink-0"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div
              className="lg:hidden mt-3 sm:mt-4 rounded-xl bg-black/90 backdrop-blur-md py-3 px-2 shadow-xl border border-white/10"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {navLinks.map(({ to, label }) => {
                const isActive = location.pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={`relative block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      isActive ? 'text-[#A1B502] bg-white/5' : 'text-white hover:text-[#A1B502] hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
