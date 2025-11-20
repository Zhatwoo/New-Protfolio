'use client';

export default function Experience() {
  const experience = [
    {
      title: 'Software Developer',
      company: 'Inspire Holdings Inc.',
      period: '2025 - Present',
      description: 'Developing my programming skills and projects Learning new technologies and frameworks.',
    },

  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-16">Experience</h2>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black">{job.title}</h3>
                  <p className="text-lg text-gray-600 mt-1">{job.company}</p>
                </div>
                <span className="text-sm font-semibold text-gray-500 mt-2 sm:mt-0">
                  {job.period}
                </span>
              </div>
              <p className="text-gray-600">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

