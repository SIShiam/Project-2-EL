import { Link } from 'react-router-dom'
import ProfileAvatar from '../../components/portfolio/ProfileAvatar'

function Home() {
  const skills = [
    'React',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Node.js',
    'Git',
    'GitHub',
  ]

  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'Full Stack',
      description: 'An online store application featuring product listing, search, interactive cart management, and checkout workflow.',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Web App',
      description: 'A responsive task organizer with status columns, task creation, deadline tracking, and local data persistence.',
      tags: ['React', 'Tailwind CSS', 'LocalStorage'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ]

  return (
    <div className="space-y-10 sm:space-y-14 py-6 sm:py-10 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <section className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl border border-gray-200/90 shadow-xs">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 sm:gap-10">
          {/* Introduction */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
              Frontend Developer
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Hi, I’m <span className="text-blue-600">Alex Morgan</span>.
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
              I build clean, responsive, and user-friendly web applications using React, modern JavaScript, and Tailwind CSS.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 pt-2">
              <Link
                to="/projects"
                className="text-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors shadow-xs"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="text-center px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg text-sm border border-gray-200 transition-colors"
              >
                Contact Me
              </Link>
              <Link
                to="/admin"
                className="text-center px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-sm transition-colors flex items-center justify-center space-x-1"
              >
                <span>Admin Dashboard</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="shrink-0 flex justify-center">
            <ProfileAvatar className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52" />
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section>
        <div className="text-center max-w-xl mx-auto mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Skills & Technologies</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Core technologies and tools I work with
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-800 text-xs sm:text-sm font-medium shadow-xs"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link
            to="/skills"
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            View all skills & competencies &rarr;
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Featured Projects</h2>
            <p className="text-xs sm:text-sm text-gray-600">Selected work from recent web projects</p>
          </div>
          <Link
            to="/projects"
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline self-start sm:self-auto"
          >
            All projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {featuredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-50 text-blue-700">
                    {proj.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">React Project</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{proj.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {proj.tags.map((tag) => (
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
                  href={proj.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg border border-gray-200 transition-colors"
                >
                  GitHub Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
