import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from './Footer';

const experiences = [
  {
    role: "Investment Banking Fellow",
    company: "Marquee Equity",
    duration: "Sept 2023 – Dec 2024",
    logo: "/marquee_equity_logo.jpeg",
    url: "https://www.linkedin.com/company/marquee-equity/",
    points: [
      "Conducted financial research on investment strategies.",
      "Authored articles and reports as part of the fellowship program.",
    ],
  },
  {
    role: "Cloud Computing Fellow",
    company: "In-house Summer Training Program",
    duration: "June 2024 – July 2024",
    logo: "/aws-3.png",
    url: "#",
    points: [
      "Completed hands-on training on AWS cloud infrastructure.",
      "Deployed scalable web applications and gained insights into cloud-native architecture.",
    ],
  },
];

const Experience = () => {
  return (
    <div className='relative z-0 w-screen min-h-screen overflow-x-hidden bg-black text-white' id='experience'>
      
      {/* 🔵 Animated Background Circles */}
      <ul className="circles">
        <li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li>
      </ul>

      {/* 🔷 Experience Section Content */}
      <div className='relative z-10 pt-16 sm:px-16'>
        <p className='font-light'>MY JOURNEY SO FAR.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Work Experience</h2>

        <VerticalTimeline className='mt-9'>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="relative vertical-timeline-element--work"
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={experience.duration}
              iconStyle={{ background: '#fff' }}
              icon={
                <a className='flex justify-center items-center w-full h-full' href={experience.url} target='_blank' rel='noreferrer'>
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </a>
              }
            >
              <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.role}</h3>
                <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                  {experience.company}
                </p>
              </div>

              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <Footer />
    </div>
  );
};

export default Experience;

