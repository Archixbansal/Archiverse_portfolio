import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const SocialIcons = () => {
    return (
        <div className='fixed right-5 top-1/3 flex flex-col space-y-4 text-white'>

            <a href="mailto:archibansal904@gmail.com" 
                className='hover:text-blue-400 transition duration-300 transform hover:scale-110'
                target="_blank" rel="noopener noreferrer">
                <FiMail className='text-2xl' />
            </a>


            <a href="https://www.linkedin.com/in/archi-bansal-19jan2004/" 
                className='hover:text-blue-400 transition duration-300 transform hover:scale-110'
                target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className='text-2xl' />
            </a>

            <a href="https://github.com/Archixbansal" 
                className='hover:text-blue-400 transition duration-300 transform hover:scale-110'
                target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-2xl' />
            </a>

        </div>
    );
};

export default SocialIcons;

