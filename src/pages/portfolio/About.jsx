import { Link } from 'react-router-dom'
import ProfileAvatar from '../../components/portfolio/ProfileAvatar'

function About() {
  const experiences = [
    {
      role: 'Frontend Development Student',
      institution: 'React & Web Development Course',
      period: '2024 - Present',
      description: 'Building multi-page responsive React web applications, interactive dashboards, component libraries, and implementing state management and routing.',
    },
    {
      role: 'Web Development Trainee',
      institution: 'Frontend Fundamentals',
      period: '2023 - 2024',
      description: 'Learned HTML5 semantic structure, CSS3 responsive layouts (Flexbox & Grid), JavaScript ES6+ features, and Git version control.',
    },
  ]

  const highlights = [
    {
      title: 'Responsive Design',
      description: 'Ensuring interfaces look great and navigate smoothly on mobile phones, tablets, and desktops.',
    },
    {
      title: 'Component Architecture',
      description: 'Structuring clean, reusable React components with predictable state and modular styles.',
    },
    {
      title: 'Modern Tooling',
      description: 'Working with Vite, Tailwind CSS, React Router DOM, and Git for efficient development workflows.',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12">
      
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <ProfileAvatar className="w-32 h-32 sm:w-40 sm:h-40" />

        <div className="space-y-3 text-center md:text-left flex-1">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
            About Me
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            I’m Alex Morgan, Frontend Web Developer
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto md:mx-0">
            I am a web developer with a strong focus on crafting responsive, clean, and intuitive user interfaces. I enjoy working with modern frontend technologies like React and Tailwind CSS to solve problems and build functional web products.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <Link
              to="/contact"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm rounded-lg transition-colors"
            >
              Contact Me
            </Link>
            <Link
              to="/skills"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-xs sm:text-sm rounded-lg transition-colors border border-gray-200"
            >
              View My Skills
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4 text-center sm:text-left">
          Core Focus Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-xs"
            >
              <h3 className="text-base font-bold text-gray-900 mb-1.5">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center sm:text-left">
          Learning & Experience
        </h2>

        <div className="relative pl-5 space-y-6 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-5 top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white" />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">{exp.role}</h3>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-gray-500 mb-1.5">{exp.institution}</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
