'use client';

export default function Experience() {
  const experience = [
    {
      title: 'Software Developer',
      company: 'Inspire Holdings Inc.',
      period: 'July 2025 – July 2026',
      description:
        'Developed and maintained client-facing web applications with a focus on clean UI, full-stack delivery, and reliable deployments.',
      highlights: [
        'Built and maintained client-facing web applications using React and Next.js.',
        'Created responsive UI components with Tailwind CSS and managed deployments via Vercel.',
        'Collaborated with cross-functional teams on full-stack feature delivery using Git.',
      ],
    },
    {
      title: 'Intern, Robotics Department',
      company: "Dr. Yanga's Colleges Inc.",
      period: 'April – May 2025',
      description:
        'Supported robotics projects through embedded systems development, hardware integration, and programmed control logic.',
      highlights: [
        'Built embedded systems projects using Arduino, ESP32, and Raspberry Pi.',
        'Integrated sensors and hardware components with programmed control logic.',
      ],
    },
    {
      title: 'Intern, IT Support',
      company: 'Shaglani Trading Corp.',
      period: 'February – April 2025',
      description:
        'Provided technical support for office systems and assisted with documentation and basic network maintenance.',
      highlights: [
        'Handled technical support and system troubleshooting for office operations.',
        'Assisted with AutoCAD documentation and basic network maintenance tasks.',
      ],
    },
    {
      title: 'Self-Employed, Client-Based',
      company: 'Financial Market Fund Management',
      period: 'Ongoing',
      description:
        'Managed forex trading funds for clients using structured, risk-controlled strategies and technical market analysis.',
      highlights: [
        'Managed forex trading funds with structured, risk-controlled strategies for clients.',
        'Applied market and technical analysis for consistent fund performance.',
      ],
    },
    {
      title: 'Self-Employed',
      company: 'Computer Service',
      period: '2024',
      description:
        'Provided PC repair, setup, and maintenance services to local individual clients.',
      highlights: [
        'Delivered PC repair, setup, and maintenance services for individual clients.',
      ],
    },
    {
      title: 'Sales Assistant',
      company: 'Puregold',
      period: 'April – May 2022',
      description:
        'Assisted customers and supported daily retail floor operations.',
      highlights: [
        'Assisted customers and supported daily retail floor operations.',
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-16">Experience</h2>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">{job.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">{job.company}</p>
                </div>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                  {job.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
              {job.highlights?.length > 0 && (
                <ul className="space-y-2">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black dark:bg-white flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
