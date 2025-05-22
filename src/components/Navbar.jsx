import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10 top-0 shadow-md">
      <div className="w-11/12 mx-auto flex items-center justify-between py-4">

        {/* Mobile: Hamburger Icon */}
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl focus:outline-none">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Centered ARCHIVERSE (Flex-grow to center) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-3xl sm:text-2xl font-extrabold">
          <a href="/">ARCHIVERSE</a>
        </div>



        {/* Desktop: Nav Links (Right-aligned) */}
        <div className="hidden sm:flex space-x-6 text-sm">
          <Link to='/' className="hover:text-yellow-300">Home</Link>
          <Link to='/about' className="hover:text-yellow-300">About</Link>
          <Link to='/projects' className="hover:text-yellow-300">Projects</Link>
          <Link to='/experience' className="hover:text-yellow-300">Experience</Link>
          <Link to='/contact' className="hover:text-yellow-300">Contact</Link>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-20 flex flex-col items-center justify-center space-y-6 text-xl font-medium">
          <Link to='/' onClick={closeMobileMenu}>Home</Link>
          <Link to='/about' onClick={closeMobileMenu}>About</Link>
          <Link to='/projects' onClick={closeMobileMenu}>Projects</Link>
          <Link to='/experience' onClick={closeMobileMenu}>Experience</Link>
          <Link to='/contact' onClick={closeMobileMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
