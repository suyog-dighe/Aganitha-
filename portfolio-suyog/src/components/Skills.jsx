const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'Java', icon: '☕' },
        { name: 'Python', icon: '🐍' },
        { name: 'SQL', icon: '🗄️' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'Flask', icon: '🧪' },
        { name: 'Django', icon: '🎯' },
        { name: 'Tailwind CSS', icon: '💨' },
        { name: 'LangChain', icon: '🔗' },
        { name: 'RAG', icon: '📚' },
      ],
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'MySQL', icon: '🐬' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'AWS (EC2)', icon: '☁️' },
        { name: 'Docker', icon: '🐳' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'JIRA', icon: '📋' },
        { name: 'VS Code', icon: '💻' },
        { name: 'GitHub', icon: '🔧' },
        { name: 'Windsurf', icon: '🏄' },
        { name: 'Cursor AI', icon: '🤖' },
        { name: 'REST API', icon: '🔌' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center space-x-2 px-4 py-3 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Methodologies & Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['SDLC', 'Agile Methodology', 'Team Collaboration', 'Time Management', 'Generative AI', 'API Integration', 'Machine Learning'].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
