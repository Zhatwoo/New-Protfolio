'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white flex items-center justify-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
        {/* Top badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-block px-4 py-2 bg-gray-100 border border-gray-200 rounded-full">
            <span className="text-sm font-semibold text-gray-700">
              Welcome to My Portfolio
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center text-black mb-6 leading-tight tracking-tight">
          Hello, I'm{' '}
          <span className="bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
            [Your Name]
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
          A passionate full-stack developer crafting beautiful, functional digital experiences. 
          Specializing in modern web technologies and user-centered design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-black font-semibold rounded-lg hover:border-black hover:bg-gray-50 transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">50+</div>
            <p className="text-sm text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">30+</div>
            <p className="text-sm text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">5+</div>
            <p className="text-sm text-gray-600">Years Experience</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
