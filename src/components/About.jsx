import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='service_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="relative z-0">
      {/* 🔵 Animated Background */}
      <ul className="circles">
        <li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li>
      </ul>

      {/* 🟡 Main About Content */}
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='z-10 relative flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>About Me</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👋 Hey! I’m <span className='text-teal-400 font-semibold'>Archi Bansal</span>, a passionate computer science student and developer with a growing expertise in frontend and backend development. I love creating clean, responsive web applications using <span className='text-green-400'>React.js</span> and <span className='text-green-400'>JavaScript</span>, while also diving deep into backend concepts like REST APIs, database management, and cloud computing with <span className='text-blue-400'>AWS</span>.
              <br /><br />
              🔧 Over time, I’ve built diverse projects — from a heart rate monitoring research paper published in a Scopus-indexed journal, to practical hardware solutions like an ultrasonic obstacle-detecting stick for visually impaired individuals, and software projects including calendar apps and password managers. Each project has helped me sharpen my programming skills across <span className='text-purple-400'>C++</span>, <span className='text-yellow-400'>Python</span>, <span className='text-purple-400'>PL/SQL</span>, and web technologies.
              <br /><br />
              ☁️ I also have hands-on experience with AWS cloud services, enabling me to deploy scalable and secure applications, manage cloud infrastructure, and optimize performance in real-world environments.
              <br /><br />
              🌱 I’m always eager to learn new tools and frameworks, and I enjoy combining theoretical knowledge with hands-on development. Whether it’s coding algorithms, designing user-friendly interfaces, or exploring IoT concepts, I aim to solve real-world problems with scalable and efficient solutions.
              <br /><br />
              🚀 Currently, I’m focused on expanding my full stack capabilities and preparing for industry roles, while continuing to contribute to research and personal projects that inspire me.
              <br /><br />
              ✨ Let’s connect if you’re interested in tech, collaboration, or just want to chat about cool ideas!
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1Q4G2A6PRoDHNCtndUoX-s99DPb7234pn/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />
          </div>

          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
