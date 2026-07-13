'use client';

import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Loopwork',
    description: 'A modern, all-in-one collaboration platform designed to streamline daily office operations. Features include project management, scheduling, time tracking, document management, and 14+ integrated tools for enhanced productivity and team collaboration.',
    image: '/loopwork.png',
    tags: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'Full-Stack'],
    liveDemo: 'https://inspire-loopwork.com/',
    github: 'https://github.com/Zhatwoo/Project-Management.git',
    caseStudy: '/projects/loopwork-case-study',
  },
  {
    id: 2,
    title: 'TJournal',
    description: 'An advanced trading journal platform that helps traders track performance, identify patterns, and transform their trading strategy through data-driven insights. Features include trade analytics, visual documentation, performance tracking, and multi-market support.',
    image: '/tjournal-hero.png',
    tags: ['Next.js', 'React', 'Analytics', 'Trading', 'Data Visualization'],
    liveDemo: 'https://tjournal-chi.vercel.app/',
    github: '#',
    caseStudy: '/projects/tjournal-case-study',
  },
  {
    id: 3,
    title: 'POSystem',
    description: 'A company login and management system designed for businesses to manage their operations efficiently. Features secure company-based authentication, user management, and streamlined access control for organizational workflows.',
    image: '/posystem-hero.png',
    tags: ['Next.js', 'Authentication', 'Company Management', 'Security', 'Full-Stack'],
    liveDemo: 'https://posystem-seven.vercel.app/',
    github: '#',
    caseStudy: '/projects/posystem-case-study',
  },
  {
    id: 4,
    title: 'Project Management',
    description: 'A comprehensive project management application built with modern web technologies. Features include task management, team collaboration, project tracking, and real-time updates for efficient workflow management.',
    image: '/pm.png',
    tags: ['Next.js', 'React', 'Node.js', 'Project Management', 'Full-Stack'],
    liveDemo: '#',
    github: 'https://github.com/Zhatwoo/Project-Management.git',
    caseStudy: '#',
  },
  {
    id: 5,
    title: 'Smart Budget',
    description: 'A mobile app for personal finance management. Your personal finance assistant for smarter financial decisions. Track expenses, plan budgets, and make smarter financial decisions with intelligent insights. Features include smart budget planning, expense tracking, inflation tracker, analytics, and bill reminders.',
    image: '/smartbudget.png',
    tags: ['Flutter', 'Node.js', 'Next.js', 'Finance', 'Budgeting', 'Analytics'],
    liveDemo: 'https://smartbudget-pi.vercel.app/',
    github: '#',
    caseStudy: '#',
  },
  {
    id: 6,
    title: 'Inspire Estate',
    description: 'A comprehensive real estate platform for discovering premium properties in the Philippines. Features include property search, developer listings, exclusive promotions, featured advertisements, and trusted partnerships with the country\'s most reputable real estate developers.',
    image: '/InspireEstate.jpg',
    tags: ['Next.js', 'React', 'Real Estate', 'Property Management', 'Full-Stack'],
    liveDemo: 'https://www.inspire-estate.com/',
    fallbackDemo: 'https://inspire-real-estate.vercel.app/',
    github: '#',
    caseStudy: '#',
  },
  {
    id: 7,
    title: 'I-Hub',
    description: 'I-Hub (Inspire Hub) is a coworking space platform operating in Metro Manila. Provides flexible workspace solutions for professionals, freelancers, startups, and remote teams. Features include room search and booking, capacity management, location-based services, and workspace inquiry system.',
    image: '/i-HUb.png',
    tags: ['Next.js', 'React', 'Coworking', 'Workspace Management', 'Full-Stack'],
    liveDemo: '#',
    github: '#',
    caseStudy: '#',
  },
  {
    id: 8,
    title: 'Hidamari',
    description: 'A premium Japanese restaurant website for Hidamari in Legaspi Village, Makati. Features bilingual support (EN/JP), menu browsing, lunch and dinner service pages, bento pre-orders, private dining info, photo gallery, and integrated Google Maps access directions.',
    image: '/hidamari.png',
    tags: ['Next.js', 'React', 'Restaurant', 'Bilingual', 'UI/UX'],
    liveDemo: 'https://hidamari-tei.com/',
    github: '#',
    caseStudy: '#',
  },
  {
    id: 9,
    title: 'Inspire Cinema',
    description: 'A cinema event and ticketing platform for special screenings and fan experiences in the Philippines. Features movie listings, interactive seat maps, ticket booking, event schedules, venue info, and account-based ticket management.',
    image: '/inspire-cinema.png',
    tags: ['Next.js', 'React', 'Event Booking', 'Cinema', 'Full-Stack'],
    liveDemo: 'https://inspire-cinema.com/',
    github: '#',
    caseStudy: '#',
  },
  {
    id: 10,
    title: 'JCLB Buy Back Shop',
    description: 'A pawnshop management system for JCLB Buy Back Shop. Enables item buy-back workflows, inventory listings, branch locations, customer reviews, and secure login for staff. Built with a NestJS backend for reliable API services and business logic.',
    image: '/jclb.png',
    tags: ['Next.js', 'React', 'NestJS', 'Pawnshop', 'Full-Stack'],
    liveDemo: 'https://jclb.shop/',
    github: '#',
    caseStudy: '#',
  },
  {
    id: 11,
    title: 'Centric',
    description: 'A Figma-like drag-and-drop website and storefront builder that lets teams design, manage, and publish enterprise storefronts without writing backend code. Features a visual block editor with a layers panel, live canvas preview, and reusable sections (header, hero, feature grid, footer) for rapid page assembly.',
    image: '/centric.png',
    tags: ['Next.js', 'React', 'TSX', 'Express', 'Node.js', 'Website Builder', 'Full-Stack'],
    liveDemo: '#',
    github: '#',
    caseStudy: '#',
  },
];

// Fallback Link Component - tries primary URL first, falls back if it fails
function FallbackLink({ primaryUrl, fallbackUrl, className, children }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Try to check if primary URL is accessible using a hidden iframe
    return new Promise((resolve) => {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.position = 'absolute';
      iframe.style.left = '-9999px';
      
      let resolved = false;
      const timeout = 3000; // 3 second timeout
      
      const cleanup = () => {
        if (!resolved) {
          resolved = true;
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
          setIsLoading(false);
        }
      };
      
      // If iframe loads successfully, open primary URL
      iframe.onload = () => {
        if (!resolved) {
          cleanup();
          window.open(primaryUrl, '_blank', 'noopener,noreferrer');
          resolve();
        }
      };
      
      // If iframe fails to load, use fallback
      iframe.onerror = () => {
        if (!resolved) {
          cleanup();
          window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
          resolve();
        }
      };
      
      // Timeout fallback - if iframe doesn't load in time, use fallback
      setTimeout(() => {
        if (!resolved) {
          cleanup();
          // Try primary first, but if it seems unreliable, use fallback
          // For now, we'll try primary and if user sees 404, they know to try again
          // Or we can default to fallback on timeout
          window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
          resolve();
        }
      }, timeout);
      
      // Set iframe source to test the URL
      iframe.src = primaryUrl;
      document.body.appendChild(iframe);
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={className}
    >
      {children}
    </button>
  );
}

export default function Projects() {
  return (
    <main className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black flex items-center justify-center py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-6">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">My Work</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
            Projects & Portfolio
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of projects showcasing my expertise in full-stack development,
            modern web technologies, and innovative solutions. Each project demonstrates different
            aspects of my skills and problem-solving approach.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Thumbnail */}
                <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.liveDemo !== '#' && (
                      project.fallbackDemo ? (
                        <FallbackLink
                          primaryUrl={project.liveDemo}
                          fallbackUrl={project.fallbackDemo}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 group/btn disabled:opacity-50"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                          Live Demo
                        </FallbackLink>
                      ) : (
                        <Link
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 group/btn"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                          Live Demo
                        </Link>
                      )
                    )}

                    {project.github !== '#' && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white text-sm font-semibold rounded-lg hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300 group/btn"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-black dark:bg-gray-950 text-white border-t border-transparent dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in working on exciting new projects.
            Let's discuss how we can bring your ideas to life!
          </p>
          <Link
            href="/Contacts"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300 group"
          >
            Get In Touch
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}

