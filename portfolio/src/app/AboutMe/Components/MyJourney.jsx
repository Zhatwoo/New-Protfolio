'use client';

export default function MyJourney() {
  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-16">My Journey</h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I graduated with a Bachelor of Science in Computer Engineering from Dr. Yanga&apos;s Colleges Inc.
            Early on, my strengths leaned toward hardware — circuits, embedded systems, and hands-on builds.
            Through software development roles and internships, I expanded into modern web and mobile stacks,
            learning frameworks that became my core tools for building production-ready applications.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Today I work across the full stack — React, Next.js, Node.js, Firebase, Supabase, and Flutter —
            while still applying my hardware background with Arduino, ESP32, and Raspberry Pi.
            That combination of software and engineering continues to shape how I design clean interfaces,
            maintainable systems, and practical solutions for real users.
          </p>
        </div>
      </div>
    </section>
  );
}
