const Achievements = () => {
  const achievements = [
    {
      title: 'Silver Medal - Java Certification',
      organization: 'IIT Kharagpur (NPTEL)',
      description: 'Awarded Silver Medal for merit rank in Java Certification Exam by IIT Kharagpur (NPTEL).',
      icon: '🥈',
      date: '2024',
      color: 'from-gray-400 to-gray-600',
    },
    {
      title: 'Appreciation Letter',
      organization: 'Sanjivani Junior College, Kopargaon',
      description: 'Received an appreciation letter from Sanjivani Junior College, Kopargaon, for developing a dynamic website.',
      icon: '📜',
      date: '2023',
      color: 'from-blue-400 to-purple-500',
    },
    {
      title: 'Maharashtra Student Innovation Hackathon',
      organization: 'Maharashtra Government',
      description: 'Recognized for innovative ideas at the Maharashtra Student Innovation Hackathon.',
      icon: '💡',
      date: '2024',
      color: 'from-orange-400 to-red-500',
    },
  ];

  const stats = [
    { number: '5+', label: 'Projects Completed', icon: '🚀' },
    { number: '15+', label: 'Technologies Mastered', icon: '⚡' },
    { number: '3+', label: 'Awards Won', icon: '🏅' },
    { number: '4+', label: 'Certifications', icon: '📜' },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Milestones and accomplishments throughout my journey
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon Header */}
              <div className={`h-32 bg-gradient-to-br ${achievement.color} flex items-center justify-center text-6xl transform group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {achievement.date}
                  </span>
                </div>
                <p className="text-purple-600 dark:text-purple-400 font-semibold">
                  {achievement.organization}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
