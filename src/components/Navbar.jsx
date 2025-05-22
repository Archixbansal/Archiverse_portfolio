import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-10 top-0">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        
        {/* ✅ Left Aligned Links (Pushed Further Left) */}
        <div className="flex space-x-8 text-sm">
          <Link to='/' className="hover:text-yellow-300">Home</Link>
          <Link to='/about' className="hover:text-yellow-300">About</Link>
          <Link to='/projects' className="hover:text-yellow-300">Projects</Link>
          <Link to='/experience' className="hover:text-yellow-300">Experience</Link>
          <Link to='/contact' className="hover:text-yellow-300">Contact</Link>
        </div>

        {/* ✅ Centered "ARCHIVERSE" */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-3xl sm:text-2xl font-extrabold">
          <a href="/">ARCHIVERSE</a>
        </div>

        {/* ✅ Mobile Menu Button (Hidden on large screens) */}
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center ${isMobileMenuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
          <button onClick={closeMobileMenu} className="text-xl absolute top-4 right-4 focus:outline-none">
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to='/about' onClick={closeMobileMenu}>About</Link></li>
            <li><Link to='/projects' onClick={closeMobileMenu}>Projects</Link></li>
            <li><Link to='/experience' onClick={closeMobileMenu}>Experience</Link></li>
            <li><Link to='/contact' onClick={closeMobileMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
