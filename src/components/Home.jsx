import React from 'react';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='relative z-0 bg-black w-screen h-screen flex justify-center items-center px-4 pt-20'>
      {/* Background animation */}
      <ul className="circles">
        <li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li>
      </ul>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 text-white text-center sm:text-left">
        
        {/* Text Section */}
        <div className="mb-6 sm:mb-0">
          <h1 className='text-4xl sm:text-6xl font-extrabold'>Archi Bansal</h1>
          <p className='mt-3 text-lg sm:text-xl'>Software Developer</p>
        </div>

        {/* Logo Section */}
        <div className="w-[60vw] max-w-[300px] sm:max-w-[550px] h-auto">
          <img 
            src="/name-logo.svg" 
            alt="Archi Bansal Logo" 
            className="w-full"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
