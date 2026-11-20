import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function PortfolioNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold px-3 py-2 rounded-lg bg-blue-50 text-sm transition-colors'
      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-lg text-sm transition-colors'

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? 'block text-blue-600 font-semibold px-3.5 py-2.5 rounded-lg bg-blue-50 text-sm'
      : 'block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3.5 py-2.5 rounded-lg text-sm'

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav className="bg-white/95 backdrop-blur-xs border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center space-x-2 group shrink-0">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                AM
              </span>
              <span className="text-lg font-bold text-gray-900 tracking-tight">
                Alex<span className="text-blue-600">.dev</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === '/'}
                  className={navLinkClass}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-2.5">
              <Link
                to="/admin"
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs"
                title="Admin Dashboard"
              >
                Admin
              </Link>
              <Link
                to="/contact"
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-2 md:hidden">
              <Link
                to="/admin"
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-900 text-white"
              >
                Admin
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg relative z-50">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                className={mobileNavLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-2 bg-slate-900 text-white font-medium text-xs rounded-lg"
              >
                Open Admin Dashboard &rarr;
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-2 bg-blue-600 text-white font-medium text-xs rounded-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default PortfolioNavbar
