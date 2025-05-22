import React from "react";
import { motion } from "framer-motion";
import calender_image from '../assets/calender_image.png';
import portfolio_image from '../assets/portfolio_image.png';
import heart_rate_image from '../assets/heart_rate_image.png';
import medical_image from '../assets/medical_image.png'
import password_image from '../assets/password_image.jpg'
import stick_image from '../assets/stick_image.jpg'
import Footer from './Footer';

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const ProjectCard = ({ image, title, description, git, technologies, index }) => (
  <motion.div
    custom={index}
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-2xl p-5 shadow-xl hover:scale-[1.02] transition-transform duration-300 border border-gray-700"
  >
    <div className="overflow-hidden rounded-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-xl"
      />
    </div>

    <h3 className="text-white text-2xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
      {title}
    </h3>
    <p className="text-gray-300 text-sm mt-2">{description}</p>

    <div className="flex flex-wrap gap-2 mt-4">
      {technologies.map((tech, idx) => (
        <span key={idx} className="text-blue-400 text-xs bg-white/5 px-2 py-1 rounded-full">
          #{tech}
        </span>
      ))}
    </div>

    <a
      href={git}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 text-sm text-green-400 border border-green-400 rounded px-3 py-1 hover:bg-green-400 hover:text-black transition-all duration-300"
    >
      View on GitHub
    </a>
  </motion.div>
);

const Projects = () => {
  return (
    <div className="bg-black text-white py-20 px-6 min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
      >
        🚀 Projects & Research
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {project.map((item, index) => (
          <ProjectCard
            key={index}
            index={index}
            image={item.image}
            title={item.title}
            description={item.description}
            git={item.git}
            technologies={item.technologies}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export const project = [
  {
    title: 'Archiverse - My Portfolio Website',
    description:
      'A fully responsive and interactive personal portfolio website built using React.js to showcase my projects, technical skills, achievements, and academic research. The website includes smooth scroll animations powered by Framer Motion, a detailed "About Me" section, and a dynamic "Projects" section where each project is visually presented using cards with tech stack tags. The "Contact Me" form is fully functional through EmailJS integration, enabling real-time email submissions without a backend. The site is optimized for both desktop and mobile views, reflecting my design sensibility and frontend development proficiency.',
    image: portfolio_image, 
    git: 'https://github.com/Archixbansal/Archiverse', 
    technologies: ['ReactJS', 'JavaScript', 'Framer Motion', 'EmailJS', 'CSS', 'Responsive Design']
  },
  {
    title: 'IoT-Based Heart Rate Monitoring System',
    description:
      'A research-focused review paper proposing the architecture of an IoT-enabled heart rate monitoring system for real-time cardiac anomaly detection and remote health tracking. The study explores existing technologies such as PPG and ECG sensors, Arduino microcontrollers, and Bluetooth communication and analyzes their integration for theoretical system design. Emphasis is placed on communication flow, data interpretation, and feasibility in telemedicine. The paper reviews multiple use-case scenarios and modern healthcare applications, and it was peer-reviewed and published in a Scopus-indexed international journal, highlighting its scholarly value.',
    image: heart_rate_image, // Replace with actual image if you have a better one
    git: 'https://github.com/Archixbansal/research-paper-heart-rate-monitoring',
    technologies: ['IoT', 'Arduino', 'Bluetooth', 'PPG', 'ECG']
  },

  {
  title: 'Calendar Application (C++)',
  description:
    'A console-based calendar generator built using C++ that displays the calendar of any user-input year with correct day alignment and leap year detection. The program uses built-in date algorithms to compute the first weekday of the year and accurately arranges dates across all twelve months. Special attention is given to leap year logic as per the Gregorian calendar rules, ensuring February has 29 days when appropriate. This project demonstrates fundamental concepts of procedural programming, control structures, and modular functions in C++. It serves as a foundational tool to understand date handling, calendar logic, and console-based formatting.',
  image: calender_image,
  git: 'https://github.com/Archixbansal/Calendar-Application',
  technologies: ['C++', 'Console App', 'Date Logic']
},
{
    title: 'Online Medical Store (PL/SQL)',
    description:
      'A robust inventory and order management system developed entirely using PL/SQL within an Oracle database. The project focuses on managing medical product data, processing customer orders, and maintaining real-time inventory accuracy using stored procedures, packages, and triggers. Key features include adding new products, validating order quantities against available stock, updating inventory levels dynamically, and ensuring data consistency through transaction control and exception handling. This database-centric project demonstrates expertise in procedural SQL programming and effective management of business logic directly at the database layer.',
    image: medical_image,
    git: 'https://github.com/Archixbansal/Online-Medical-Shop', 
    technologies: ['PL/SQL', 'Oracle SQL', 'Database', 'Procedural Programming']
},
  {
    title: 'Password Manager (Python)',
    description:
      'A straightforward command-line password manager developed in Python that helps users securely store and retrieve their passwords. The application uses a menu-driven interface allowing users to add new password entries linked to account names and retrieve saved passwords when needed. Passwords are managed using Python dictionaries for efficient key-value storage and retrieval within the program\'s runtime. This project demonstrates fundamental Python programming concepts, including data structures, user input handling, and simple CLI design.',
    image: password_image, 
    git: 'https://github.com/Archixbansal/Password-Manager', // Change this to your actual repo URL
    technologies: ['Python', 'CLI', 'Dictionary', 'Interactive']
  },

  {
  title: 'Ultrasonic Stick for Visually Impaired',
  description:
    'An assistive smart walking stick designed to enhance the mobility and safety of visually impaired individuals. This hardware project uses the HC-SR04 ultrasonic distance sensor integrated with an Arduino UNO to detect obstacles in the user’s path within a range of approximately 2 cm to 400 cm. Upon detecting an object within a threshold distance, the system triggers a buzzer to provide immediate audio feedback, allowing the user to be alerted in real-time and navigate safely. The entire setup is lightweight, low-cost, and powered by batteries, making it suitable for everyday use. The project emphasizes practical embedded systems design and demonstrates the application of sensor-based interaction for socially impactful solutions.',
  image: stick_image, // Add a path to your project image here if available

  technologies: ['Arduino UNO', 'HC-SR04 Sensor', 'Buzzer', 'Embedded Systems', 'C++', 'Hardware Prototyping']
}


];

export default Projects;
