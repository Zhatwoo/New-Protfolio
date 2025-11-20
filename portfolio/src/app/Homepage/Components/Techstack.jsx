'use client';

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiVercel,
  SiAmazon,
  SiArduino,
  SiRaspberrypi,
} from 'react-icons/si';
import { FiCpu } from 'react-icons/fi';

function Esp32Icon({ size = 24, color = 'currentColor', className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
      <path d="M7 7v10" />
      <path d="M12 7v10" />
      <path d="M17 7v10" />
      <path d="M9 3v2" />
      <path d="M15 3v2" />
      <path d="M9 21v-2" />
      <path d="M15 21v-2" />
    </svg>
  );
}

const techStack = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    category: 'Tools & Deployment',
    technologies: [
      { name: 'Git', icon: SiGit, color: '#F1502F' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    ],
  },
  {
    category: 'Hardware',
    technologies: [
      { name: 'Arduino', icon: SiArduino, color: '#00979D' },
      { name: 'ESP32', icon: Esp32Icon, color: '#6CC24A' },
      { name: 'Circuits', icon: FiCpu, color: '#4B5563' },
      { name: 'Raspberry Pi', icon: SiRaspberrypi, color: '#C51A4A' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I work with modern technologies to build scalable, efficient, user-friendly applications and tools.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {techStack.map((stack, index) => (
            <div key={index} className="group">
              {/* Category Title */}
              <h3 className="text-xl font-bold text-black mb-8 flex items-center">
                <span className="w-1 h-8 bg-black rounded mr-3"></span>
                {stack.category}
              </h3>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stack.technologies.map((tech, techIndex) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={techIndex}
                      className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-gray-200"
                    >
                      <IconComponent size={40} color={tech.color} className="mb-3" />
                      <span className="text-sm font-semibold text-gray-800 text-center">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
