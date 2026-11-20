import { Link } from 'react-router-dom'

function PortfolioFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Bio / Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                AM
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                Alex Morgan
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Frontend & Full Stack React Developer building responsive, reliable, and accessible web applications.
            </p>
            <div className="flex items-center space-x-2 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Pages
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">About Me</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-blue-400 transition-colors">Skills</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Links & Switcher */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Admin
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/admin" className="text-blue-400 hover:underline font-medium">
                  Admin Dashboard &rarr;
                </Link>
              </li>
              <li>
                <Link to="/admin/reports" className="hover:text-slate-300 transition-colors">
                  Reports Table
                </Link>
              </li>
              <li>
                <Link to="/admin/settings" className="hover:text-slate-300 transition-colors">
                  Settings Form
                </Link>
              </li>
              <li className="pt-2 text-xs text-slate-500">
                Email: alex.morgan@example.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>&copy; 2026 Alex Morgan. All rights reserved.</p>
          <p>Personal Portfolio & Admin Dashboard</p>
        </div>
      </div>
    </footer>
  )
}

export default PortfolioFooter
