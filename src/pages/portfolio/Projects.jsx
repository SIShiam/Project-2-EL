import { useState } from 'react'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'Full Stack',
      description:
        'An online storefront with product catalog browsing, search filters, interactive cart management, and checkout workflow.',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Task Management Board',
      category: 'Web App',
      description:
        'A productivity task manager featuring status columns, task creation, deadlines, and local storage data persistence.',
      tags: ['React', 'Tailwind CSS', 'Express', 'PostgreSQL'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Recipe & Meal Finder',
      category: 'Frontend',
      description:
        'A recipe discovery web application allowing users to search meals by category, view ingredients, and bookmark favorite recipes.',
      tags: ['React', 'Tailwind CSS', 'Fetch API'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      category: 'Frontend',
      description:
        'A responsive weather web app displaying current weather conditions, 5-day forecasts, and temperature unit conversions.',
      tags: ['React', 'OpenWeather API', 'Tailwind CSS'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 5,
      title: 'Hotel Booking Portal',
      category: 'Frontend',
      description:
        'A travel reservation web application with room filtering, date-range selection, amenity details, and booking confirmation.',
      tags: ['React', 'Tailwind CSS', 'React Router DOM'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'Personal Note Keeper',
      category: 'Web App',
      description:
        'A clean note-taking application featuring markdown preview, folder categorization, search filters, and local persistence.',
      tags: ['React', 'Node.js', 'LocalStorage'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ]

  const categories = ['All', 'Full Stack', 'Frontend', 'Web App']

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((item) => item.category === activeFilter)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
          Portfolio
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          My Projects
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm">
          A showcase of responsive web applications built with modern frontend tools.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              activeFilter === cat
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-50 text-blue-700">
                  {project.category}
                </span>
                <span className="text-xs text-gray-400 font-mono">React</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900">{project.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-medium rounded bg-gray-100 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-gray-100 text-xs font-medium">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg border border-gray-200 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
