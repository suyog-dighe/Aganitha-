const Projects = () => {
  const projects = [
    {
      title: 'Crop Disease Detection and Management System',
      description: 'Built a full-stack web app using React (frontend) and Python (backend) for crop disease detection. Integrated machine learning APIs to predict diseases from uploaded leaf images with real-time predictions.',
      image: '🌾',
      tags: ['React', 'Python', 'Machine Learning', 'AI'],
      period: 'Nov 2024 - May 2025',
      github: 'https://github.com/suyog-dighe',
      demo: '#',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Vsmart Match – Intelligent Hiring Platform',
      description: 'Developed a resume parsing platform using React, Python, and PostgreSQL for Virtusa Jatayu Hackathon. Used NLP, LangChain, and RAG to extract and match data from resumes with automated candidate scoring.',
      image: '🎯',
      tags: ['React', 'Python', 'PostgreSQL', 'NLP', 'LangChain', 'RAG'],
      period: 'Feb 2025 - Apr 2025',
      github: 'https://github.com/Prathameshbankar/VirtusaProject',
      demo: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Vitthal Rukmini Mandir Website',
      description: 'Designed and developed a dynamic, mobile-responsive website to showcase temple events, history, and donation options. Collaborated with a team using HTML, CSS, JavaScript, and PHP.',
      image: '🛕',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      period: 'Dec 2024 - Mar 2025',
      github: '#',
      demo: 'http://www.vitthalrukminimandir.org/',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Software for Dwarkamai Vruddhashram',
      description: 'Built software to track donations, manage volunteers, and monitor activities, enhancing transparency at Vruddhashram. Streamlined workflows by integrating core modules in HTML, CSS, and PHP.',
      image: '🏥',
      tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
      period: 'Jun 2024 - Nov 2024',
      github: 'https://github.com/suyog-dighe',
      demo: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Website for Sanjivani Junior College',
      description: 'Created a user-friendly interface with responsive design to enhance user experience and accessibility. Utilized HTML and CSS for structuring and styling the website.',
      image: '🎓',
      tags: ['HTML', 'CSS', 'Responsive Design'],
      period: 'Mar 2023 - May 2023',
      github: '#',
      demo: 'https://sanjivanijunior.org.in/',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'More Projects',
      description: 'Explore my other web applications and projects built with modern technologies.',
      image: '🚀',
      tags: ['React', 'AI', 'Web Apps'],
      period: '2024',
      github: '#',
      demo: '#',
      multipleButtons: true,
      buttons: [
        { text: 'AI Story Generator', link: 'https://aganitha-ten.vercel.app/' },
        { text: 'Book Finder', link: 'https://bookfinder-delta.vercel.app/' },
        { text: 'Weather App', link: '#' },
      ],
      color: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-8xl transform group-hover:scale-110 transition-transform duration-300`}>
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex-1">
                    {project.title}
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full whitespace-nowrap">
                    {project.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.multipleButtons ? (
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {project.buttons.map((button, btnIdx) => (
                      <a
                        key={btnIdx}
                        href={button.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-center"
                      >
                        {button.text}
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="flex space-x-4 pt-4">
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-center"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-center"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
