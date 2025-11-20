import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="py-6" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/headerlogo.png"
              alt="Bold Energy"
              className="h-36 w-auto"
            />
          </Link>

          {/* Navigation Buttons */}
          <div className="flex space-x-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '18px' }}>
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
              style={{ color: location.pathname === '/home-owners' ? '#A1B502' : '#FFFFFF' }}
            >
              Home Owners
            </Link>
            <Link
              to="/dealers"
              className="px-6 py-2 font-medium hover:bg-white/10 rounded-lg transition-colors duration-300"
              style={{ color: location.pathname === '/dealers' ? '#A1B502' : '#FFFFFF' }}
            >
              Dealers
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
