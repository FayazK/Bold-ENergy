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

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-[1440px] px-8 lg:px-16 xl:px-24 mt-[50px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/headerlogo.png"
              alt="Bold Energy"
              className="h-14 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div
            className="flex items-center gap-1"
            style={{ fontFamily: 'Archivo, sans-serif' }}
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
