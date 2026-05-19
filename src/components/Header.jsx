import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/home-owners', label: 'HomeOwners' },
  { to: '/partner-with-bold-energy', label: 'Dealers' },
  { to: '/customer-reviews', label: 'Reviews' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/states-we-cover', label: 'States' },
];

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-[1440px] px-4 lg:px-16 xl:px-24 mt-4 lg:mt-[50px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/headerlogo.png"
              alt="Bold Energy"
              className="h-14 lg:h-20 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div
            className="hidden lg:flex items-center gap-1"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`
                    relative px-4 py-2 text-[15px] font-medium rounded-full
                    transition-all duration-300 whitespace-nowrap
                    ${isActive
                      ? 'text-[#A1B502]'
                      : 'text-white hover:text-[#A1B502]'
                    }
                  `}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-[#A1B502] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
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
            className="lg:hidden mt-4 rounded-xl bg-black/90 backdrop-blur-sm py-4 px-2"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    relative block px-4 py-3 text-[15px] font-medium rounded-full
                    transition-all duration-300 whitespace-nowrap
                    ${isActive
                      ? 'text-[#A1B502]'
                      : 'text-white hover:text-[#A1B502]'
                    }
                  `}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 w-5 h-[2px] bg-[#A1B502] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
