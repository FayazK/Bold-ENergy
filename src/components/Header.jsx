import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="py-6" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
        <div className="flex items-center relative">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/headerlogo.png"
              alt="Bold Energy"
              className="h-36 w-auto"
            />
          </Link>

          {/* Navigation Buttons - Right */}
          <div className="ml-auto flex space-x-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px', whiteSpace: 'nowrap' }}>
            <Link
              to="/"
              className="px-6 py-2 font-medium hover:bg-white/10 rounded-lg transition-colors duration-300"
              style={{ color: location.pathname === '/' ? '#A1B502' : '#FFFFFF' }}
            >
              Home
            </Link>
            <Link
              to="/home-owners"
              className="px-6 py-2 font-medium hover:bg-white/10 rounded-lg transition-colors duration-300"
              style={{ color: location.pathname === '/home-owners' ? '#A1B502' : '#FFFFFF', whiteSpace: 'nowrap' }}
            >
              HomeOwners
            </Link>
            <Link
              to="/partner-with-bold-energy"
              className="px-6 py-2 font-medium hover:bg-white/10 rounded-lg transition-colors duration-300"
              style={{ color: location.pathname === '/partner-with-bold-energy' ? '#A1B502' : '#FFFFFF' }}
            >
              Dealers
            </Link>
            <Link
              to="/customer-reviews"
              className="px-6 py-2 font-medium hover:bg-white/10 rounded-lg transition-colors duration-300"
              style={{ color: location.pathname === '/customer-reviews' ? '#A1B502' : '#FFFFFF' }}
            >
              Reviews
            </Link>
            <Link
              to="/blogs"
              className="px-6 py-2 font-medium hover:bg-white/10 rounded-lg transition-colors duration-300"
              style={{ color: location.pathname === '/blogs' ? '#A1B502' : '#FFFFFF' }}
            >
              Blogs
            </Link>
            <Link
              to="/states-we-cover"
              className="px-6 py-2 font-medium hover:bg-white/10 rounded-lg transition-colors duration-300"
              style={{ color: location.pathname === '/states-we-cover' ? '#A1B502' : '#FFFFFF' }}
            >
              States
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
