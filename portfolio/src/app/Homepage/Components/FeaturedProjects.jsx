'use client';

import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Loopwork',
    description: 'A modern, all-in-one collaboration platform designed to streamline daily office operations with 14+ integrated tools.',
    image: '/loopwork.png',
    tags: ['Next.js', 'React', 'Node.js', 'Full-Stack'],
    link: 'https://loopwork-seven.vercel.app/',
    github: 'https://github.com/Zhatwoo/Project-Management.git',
    featured: true,
  },
  {
    id: 2,
    title: 'TJournal',
    description: 'Advanced trading journal platform that helps traders track performance and transform their strategy through data-driven insights.',
    image: '/tjournal-hero.png',
    tags: ['Next.js', 'React', 'Analytics', 'Trading'],
    link: 'https://tjournal-chi.vercel.app/',
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'POSystem',
    description: 'Company login and management system with secure company-based authentication and streamlined access control.',
    image: '/posystem-landing.png',
    tags: ['Next.js', 'Authentication', 'Security', 'Full-Stack'],
    link: 'https://posystem-seven.vercel.app/',
    github: '#',
    featured: true,
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my best work and innovative solutions I've built for clients and personal projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                    title="View Project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                  {project.github !== '#' && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                      title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full border border-gray-200 hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/Projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
          >
            View All Projects
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
