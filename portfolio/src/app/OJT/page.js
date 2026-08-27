'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Wrench, Cpu, CircuitBoard, X, ChevronLeft, ChevronRight } from 'lucide-react';

const hourLogs = [
  { month: 'February', hours: 16 },
  { month: 'March', hours: 104 },
  { month: 'April', hours: 144 },
  { month: 'May', hours: 160 },
  { month: 'June', hours: 152 },
  { month: 'July', hours: 24 },
];

const totalHours = hourLogs.reduce((sum, log) => sum + log.hours, 0);

const journey = [
  {
    id: 1,
    date: 'April 23, 2025',
    title: 'Alab Tour Guidance & Exhibit Maintenance',
    description:
      'Supported guest tours at the Alab innovation space and performed routine maintenance on the hologram fan stand within the robotics exhibit area.',
    tags: ['Tour Support', 'Exhibit Maintenance'],
    images: ['/ojt/1000000085.jpg'],
  },
  {
    id: 2,
    date: 'April 24, 2025',
    title: 'Aquarium Assembly for Competition',
    description:
      'Assembled the aquarium enclosure prepared for an upcoming robotics competition, ensuring structural fit and readiness for system integration.',
    tags: ['Assembly', 'Competition Prep'],
    images: ['/ojt/1000000116.jpg'],
  },
  {
    id: 3,
    date: 'April 25, 2025',
    title: 'Blue Ocean Post-Test Recovery',
    description:
      'Conducted maintenance and inspection on the Blue Ocean robot following underwater testing, addressing issues identified after the unit sank during trials.',
    tags: ['Blue Ocean', 'Diagnostics'],
    images: ['/ojt/1000000124.jpg'],
  },
  {
    id: 4,
    date: 'April 28, 2025',
    title: 'Aquarium Disassembly & Packing Prep',
    description:
      'Dismantled the aquarium setup and prepared components for packing ahead of shipment for the robotics competition in Greece.',
    tags: ['Logistics', 'Greece Competition'],
    images: ['/ojt/1000000302.jpg'],
  },
  {
    id: 5,
    date: 'April 29, 2025',
    title: 'Competition Packing & Metanoia Hand Build',
    description:
      'Packed competition materials, validated Arduino and PCA board functionality, and began assembling Metanoia’s robotic hand.',
    tags: ['Arduino', 'PCA Board', 'Metanoia'],
    images: ['/ojt/1000000334.jpg', '/ojt/1000000333.jpg', '/ojt/1000000337.jpg'],
  },
  {
    id: 6,
    date: 'May 2, 2025',
    title: 'Metanoia Hand System Maintenance',
    description:
      'Performed detailed maintenance on Metanoia’s hand assembly, reviewing servo placement, cable routing, and mechanical integrity.',
    tags: ['Metanoia', 'Mechatronics'],
    images: ['/ojt/1000000361.jpg'],
  },
  {
    id: 7,
    date: 'May 5, 2025',
    title: 'Lower Limb & Servo Maintenance',
    description:
      'Maintained Metanoia’s foot assemblies and servo motors, focusing on alignment, hardware reliability, and motion readiness.',
    tags: ['Actuators', 'Mechanical Systems'],
    images: ['/ojt/1000000381.jpg', '/ojt/1000000376.jpg'],
  },
  {
    id: 8,
    date: 'May 6, 2025',
    title: 'Right-Hand Motion Sequence Development',
    description:
      'Developed the action sequence firmware for Metanoia’s right hand, translating intended gestures into controlled servo movements.',
    tags: ['Embedded Software', 'Motion Control'],
    images: ['/ojt/1000000383.jpg'],
  },
  {
    id: 9,
    date: 'May 8, 2025',
    title: 'Bilateral Hand Control Refinement',
    description:
      'Debugged and refined control code for both Metanoia hands to improve synchronization, response accuracy, and overall gesture performance.',
    tags: ['Debugging', 'Dual-Hand Control'],
    images: ['/ojt/IMG_4327.jpeg'],
  },
  {
    id: 10,
    date: 'May 9, 2025',
    title: 'Right-Hand Finger Orientation Calibration',
    description:
      'Finalized finger orientation on Metanoia’s right hand, calibrating joint alignment for consistent and natural motion paths.',
    tags: ['Calibration', 'Precision Assembly'],
    images: [
      '/ojt/att.pX2AnleVY6kgrZcjT9V48zpnuKBv8oDxPUYjYB0LBNM.jpeg',
      '/ojt/IMG_4329.png',
    ],
  },
  {
    id: 11,
    date: 'May 13, 2025',
    title: 'Motor Wheel Redesign',
    description:
      'Redesigned the motor wheel component to improve mechanical fit, durability, and drive performance within the Metanoia system.',
    tags: ['Mechanical Design', 'Iteration'],
    images: ['/ojt/att.J4IAMQaKfEsEQnu0xet4_KSgayQ-NnVdDEkR_hna0PE.jpeg'],
  },
  {
    id: 12,
    date: 'May 14, 2025',
    title: 'Servo Remodeling & Replacement',
    description:
      'Remodeled mounting interfaces and replaced selected servo motors to strengthen reliability and motion consistency.',
    tags: ['Hardware Upgrade', 'Reliability'],
    images: ['/ojt/IMG_4348.jpeg'],
  },
  {
    id: 13,
    date: 'May 15, 2025',
    title: 'Sequence Finalization & 3D-Print Integration',
    description:
      'Completed action sequencing, servo integration, and 3D-printed part finishing to bring Metanoia’s motion system to a production-ready state.',
    tags: ['System Integration', '3D Printing'],
    images: ['/ojt/att.J4IAMQaKfEsEQnu0xet4_KSgayQ-NnVdDEkR_hna0PE.jpeg'],
  },
];

export default function OjtJourney() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (images, index, title) => {
    setLightbox({ images, index, title });
  };

  const closeLightbox = () => setLightbox(null);

  const showPrev = () => {
    setLightbox((current) => {
      if (!current) return current;
      const nextIndex = (current.index - 1 + current.images.length) % current.images.length;
      return { ...current, index: nextIndex };
    });
  };

  const showNext = () => {
    setLightbox((current) => {
      if (!current) return current;
      const nextIndex = (current.index + 1) % current.images.length;
      return { ...current, index: nextIndex };
    });
  };

  useEffect(() => {
    if (!lightbox) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightbox]);

  return (
    <main className="bg-white dark:bg-black">
      <section className="min-h-[55vh] bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black flex items-center justify-center py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-6">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">On-the-Job Training</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
            OJT Journey
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Hands-on robotics experience spanning exhibit operations, competition preparation,
            and the design, assembly, and control of Metanoia.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            <div className="inline-flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{totalHours} hours logged</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              <span>April – May 2025</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              <span>Robotics & Metanoia</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-black border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">
                Hours Log
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Monthly breakdown of completed OJT hours.
              </p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total completed</p>
              <p className="text-3xl font-bold text-black dark:text-white">{totalHours} hrs</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {hourLogs.map((log) => (
              <div
                key={log.month}
                className="p-5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-center"
              >
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {log.month}
                </p>
                <p className="text-2xl font-bold text-black dark:text-white">{log.hours}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">hours</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
              The Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A professional log of robotics work — from exhibit support and competition prep to Metanoia system integration.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gray-300 dark:bg-gray-700" />

            <div className="space-y-10">
              {journey.map((entry) => (
                <article key={entry.id} className="relative pl-12 sm:pl-16">
                  <div className="absolute left-[0.7rem] sm:left-[1.15rem] top-6 w-3.5 h-3.5 rounded-full bg-black dark:bg-white border-4 border-white dark:border-gray-950" />

                  <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
                        <CircuitBoard className="w-3.5 h-3.5" />
                        {entry.date}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">
                      {entry.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                      {entry.description}
                    </p>

                    {entry.images?.length > 0 && (
                      <div
                        className={`mb-5 grid gap-3 ${
                          entry.images.length === 1
                            ? 'grid-cols-1'
                            : entry.images.length === 3
                              ? 'grid-cols-1 sm:grid-cols-3'
                              : 'grid-cols-1 sm:grid-cols-2'
                        }`}
                      >
                        {entry.images.map((src, imageIndex) => (
                          <button
                            key={`${entry.id}-${src}`}
                            type="button"
                            onClick={() => openLightbox(entry.images, imageIndex, entry.title)}
                            className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 text-left cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                            aria-label={`View ${entry.title} photo`}
                          >
                            <img
                              src={src}
                              alt={`${entry.title} photo`}
                              className="w-full h-56 sm:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-black dark:bg-white text-white dark:text-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            From Hardware Roots to Software Craft
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
            This OJT built the foundation I still use today — discipline, troubleshooting,
            and building things that work in the real world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/Projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/AboutMe"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white dark:border-black text-white dark:text-black font-semibold rounded-lg hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close photo viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {lightbox.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 sm:left-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}

          <div
            className="max-w-6xl w-full flex flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={lightbox.images[lightbox.index]}
              alt={lightbox.title}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center text-white/90">
              <p className="font-semibold">{lightbox.title}</p>
              {lightbox.images.length > 1 && (
                <p className="text-sm text-white/60 mt-1">
                  {lightbox.index + 1} / {lightbox.images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
