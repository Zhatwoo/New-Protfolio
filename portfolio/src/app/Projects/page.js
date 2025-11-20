'use client';

import Link from 'next/link';
import { ExternalLink, Github, FileText } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and comprehensive admin dashboard. Features include user authentication, shopping cart, order tracking, and analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=500&fit=crop',
    tags: ['Next.js', 'Node.js', 'Firebase', 'Stripe', 'MongoDB'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/ecommerce',
    caseStudy: '/projects/ecommerce-case-study',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and analytics dashboard. Built with modern technologies for seamless user experience.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux', 'Node.js'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/taskmanager',
    caseStudy: '/projects/taskmanager-case-study',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Data visualization and analytics platform with interactive charts, real-time metrics, and customizable reports. Perfect for businesses to track their performance and make data-driven decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tags: ['Next.js', 'Chart.js', 'Node.js', 'PostgreSQL', 'TypeScript'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/analytics',
    caseStudy: '/projects/analytics-case-study',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media management platform that allows users to schedule posts, analyze engagement, and manage multiple social accounts from one place.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/social-dashboard',
    caseStudy: '/projects/social-dashboard-case-study',
  },
  {
    id: 5,
    title: 'Weather Forecast App',
    description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features include 7-day forecasts, hourly updates, and weather alerts.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop',
    tags: ['Next.js', 'OpenWeather API', 'Tailwind CSS', 'TypeScript'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/weather-app',
    caseStudy: '/projects/weather-app-case-study',
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'A modern blogging platform with rich text editor, comment system, user authentication, and SEO optimization. Built for content creators who want a beautiful and functional blog.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
    tags: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/blog-platform',
    caseStudy: '/projects/blog-platform-case-study',
  },
  {
    id: 7,
    title: 'Real Estate Listing Platform',
    description: 'A full-featured real estate platform with property listings, advanced search filters, virtual tours, and agent management system. Perfect for real estate agencies.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Mapbox', 'Firebase'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/realestate',
    caseStudy: '/projects/realestate-case-study',
  },
  {
    id: 8,
    title: 'Fitness Tracking App',
    description: 'A comprehensive fitness tracking application with workout plans, progress tracking, nutrition logging, and social features. Helps users achieve their fitness goals.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop',
    tags: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'Chart.js'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/fitness-app',
    caseStudy: '/projects/fitness-app-case-study',
  },
  {
    id: 9,
    title: 'Learning Management System',
    description: 'An educational platform for online courses with video streaming, quizzes, assignments, and progress tracking. Designed for both students and instructors.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS S3', 'Stripe'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/lms',
    caseStudy: '/projects/lms-case-study',
  },
];

export default function Projects() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-b from-white via-gray-50 to-white flex items-center justify-center py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-block px-4 py-2 bg-gray-100 border border-gray-200 rounded-full mb-6">
            <span className="text-sm font-semibold text-gray-700">My Work</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Projects & Portfolio
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of projects showcasing my expertise in full-stack development, 
            modern web technologies, and innovative solutions. Each project demonstrates different 
            aspects of my skills and problem-solving approach.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Thumbnail */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      Live Demo
                    </Link>
                    
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-300 text-black text-sm font-semibold rounded-lg hover:border-black hover:bg-gray-50 transition-colors duration-300 group/btn"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Link>
                    
                    <Link
                      href={project.caseStudy}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-300 text-black text-sm font-semibold rounded-lg hover:border-black hover:bg-gray-50 transition-colors duration-300 group/btn"
                    >
                      <FileText className="w-4 h-4" />
                      Case Study
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in working on exciting new projects. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <Link
            href="/Contact"
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

