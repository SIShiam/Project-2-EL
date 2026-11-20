import { Link } from 'react-router-dom'

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Building clean, interactive user interfaces for the web.',
      skills: [
        { name: 'React', level: 'Proficient' },
        { name: 'JavaScript (ES6+)', level: 'Proficient' },
        { name: 'HTML5 Semantic', level: 'Experienced' },
        { name: 'CSS3 & Responsive Design', level: 'Experienced' },
        { name: 'Tailwind CSS', level: 'Proficient' },
        { name: 'React Router DOM', level: 'Proficient' },
      ],
    },
    {
      title: 'Backend & APIs',
      description: 'Handling server logic, API endpoints, and data storage.',
      skills: [
        { name: 'Node.js', level: 'Familiar' },
        { name: 'Express.js', level: 'Familiar' },
        { name: 'RESTful APIs', level: 'Proficient' },
        { name: 'MongoDB', level: 'Familiar' },
        { name: 'JSON & Fetch API', level: 'Experienced' },
      ],
    },
    {
      title: 'Tools & Workflow',
      description: 'Development environment, version control, and build tools.',
      skills: [
        { name: 'Git & GitHub', level: 'Proficient' },
        { name: 'Vite & npm', level: 'Proficient' },
        { name: 'VS Code', level: 'Experienced' },
        { name: 'Postman', level: 'Familiar' },
        { name: 'Chrome DevTools', level: 'Proficient' },
      ],
    },
    {
      title: 'Core Concepts',
      description: 'Architectural approaches and web standards.',
      skills: [
        { name: 'Mobile-First Responsive Design', level: 'Experienced' },
        { name: 'Component-Based Architecture', level: 'Proficient' },
        { name: 'State Management & Hooks', level: 'Proficient' },
        { name: 'Debugging & Code Organization', level: 'Proficient' },
      ],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
          Capabilities
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Skills & Technologies
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm">
          A clear overview of the languages, libraries, and tools I use to build modern websites.
        </p>
      </div>

      {/* Grid of skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="border-b border-gray-100 pb-3 mb-4">
                <h2 className="text-base sm:text-lg font-bold text-gray-900">{category.title}</h2>
                <p className="text-xs text-gray-500 mt-0.5">{category.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs"
                  >
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Link */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 text-center space-y-3 max-w-xl mx-auto shadow-xs">
        <h3 className="text-lg font-bold text-gray-900">Looking for a frontend developer?</h3>
        <p className="text-xs sm:text-sm text-gray-600">
          Feel free to reach out to discuss working together on your project.
        </p>
        <div className="pt-1">
          <Link
            to="/contact"
            className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm rounded-lg transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Skills
