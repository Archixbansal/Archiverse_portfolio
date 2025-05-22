import React from 'react';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='relative z-0 bg-black w-screen h-screen flex justify-center items-center'>
            <ul className="circles">
                <li></li><li></li><li></li><li></li><li></li>
                <li></li><li></li><li></li><li></li><li></li>
            </ul>

            {/* ✅ Main Content */}
            <div className="flex items-center space-x-4 sm:space-x-3">
                {/* ✅ Left-Aligned Text */}
                <div className="text-left text-white">
                    <h1 className='text-5xl sm:text-6xl font-extrabold'>Archi Bansal</h1>
                    <p className='mt-3 text-lg sm:text-xl'>Software Developer</p>
                    {/* ❌ Removed Popup Button */}
                </div>

                {/* ✅ Adjusted Logo Position */}
                <div className="mt-14">
                    <img 
                        src="/name-logo.svg" 
                        alt="Archi Bansal Logo" 
                        className="w-[70vw] max-w-[350px] sm:max-w-[550px] h-auto"
                    />
                </div>
            </div>

            {/* ❌ Removed Popup Modal */}
            <Footer />
        </div>  
    );
}

export default Home;







