'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiAmazon,
  SiDocker,
  SiGit,
  SiFigma,
} from 'react-icons/si';
import TechStack from '../Homepage/Components/Techstack';
import MyJourney from './Components/MyJourney';
import Education from './Components/Education';
import Experience from './Components/Experience';

export default function AboutMe() {
  const skills = {
    frontend: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
    backend: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'MongoDB', icon: SiMongodb, color: '#13AA52' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    ],
    devops: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    ],
    tools: [
      { name: 'Git', icon: SiGit, color: '#F1502F' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  };



  const softSkills = [
    'Problem-solving',
    'Team Collaboration',
    'Communication',
    'Project Management',
    'Attention to Detail',
    'Adaptability',
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white flex items-center justify-center py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-gray-100 border border-gray-200 rounded-full mb-6">
                <span className="text-sm font-semibold text-gray-700">About Me</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6 leading-tight">
                <span className="block">Computer Engineer</span>
                <span className="block">and</span>
                <span className="block">Software Developer</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm a Computer Engineer Graduate with 1 year of experience building useful and functional digital and hardware projects. 
               Creating solutions that make a difference and working with teams that share the same passion for excellence.
              </p>

              <Link
                href="/Contacts"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
              >
                Let's Connect
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right - Image (Portrait) */}
            <div className="flex justify-center">
              <div className="relative w-[320px] h-[480px] sm:w-[400px] sm:h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200">
                <img
                  src="Gemini_Generated_Image_8mumwp8mumwp8mum.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 60%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MyJourney />

      {/* Tech Stack (shared component) */}
      <TechStack />
      {/* Soft Skills (placed below TechStack) */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="border-t border-gray-200 pt-10">
            <h3 className="text-2xl font-bold text-black mb-6">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-black">{skill}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Experience />

      <Education />

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to get in touch with me!
          </p>
          <Link
            href="/Contacts"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300 group"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
