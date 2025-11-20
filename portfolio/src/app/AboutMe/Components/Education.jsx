'use client';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: "Dr.Yanga College's Inc. ",
      period: '2024 - 2025',
      description: 'Fused Cuircuits, Electronics, Software Engineering and Hardware Systems.',
    },
    {
      degree: 'Senior Higschool Graduate',
      institution: 'Sta.Maria National HighSchool',
      period: '2019-2020',
      description: 'Taking General Academic Strand.',
    },
    {
      degree: 'Junior High School Graduate',
      institution: 'Lolomboy National High School',
      period: '2017-2018',
    },
    {
        degree: 'Elementary Graduate',
        institution: 'Biñang 1st Elementary School',
        period: '2013-2014',
      },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-16">Education</h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black">{edu.degree}</h3>
                  <p className="text-lg text-gray-600 mt-1">{edu.institution}</p>
                </div>
                <span className="text-sm font-semibold text-gray-500 mt-2 sm:mt-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

