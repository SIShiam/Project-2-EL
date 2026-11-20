import { Link, NavLink } from 'react-router-dom'
import {
  DashboardIcon,
  ProfileIcon,
  SettingsIcon,
  ReportsIcon,
  HelpIcon,
  CloseIcon,
} from './Icons'
import profileImg from '../assets/profile.png'

function Sidebar({ isOpen, onClose }) {
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: DashboardIcon, exact: true },
    { name: 'Profile', path: '/admin/profile', icon: ProfileIcon },
    { name: 'Settings', path: '/admin/settings', icon: SettingsIcon },
    { name: 'Reports', path: '/admin/reports', icon: ReportsIcon, badge: '6' },
    { name: 'Help', path: '/admin/help', icon: HelpIcon },
  ]

  const navClass = ({ isActive }) =>
    `flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-blue-600 text-white font-semibold shadow-xs'
        : 'text-slate-300 hover:text-white hover:bg-slate-800'
    }`

  return (
    <>
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        
        <div className="h-16 flex items-center justify-between px-5 border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
              AD
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight">Admin Dashboard</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Close sidebar"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-1">
          
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-blue-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-colors mb-3"
          >
            <div className="flex items-center space-x-2">
              <span>&larr;</span>
              <span>View Portfolio Site</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">
              Portfolio
            </span>
          </Link>

          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Admin Navigation
          </p>

          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={onClose}
                end={item.exact}
                className={navClass}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-slate-800 text-blue-300 border border-slate-700">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            )
          })}
        </div>

        <div className="p-4 border-t border-slate-800 shrink-0">
          <NavLink
            to="/admin/profile"
            onClick={onClose}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <div className="relative shrink-0">
              <img
                src={profileImg}
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-700"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-slate-900" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate">Alex Morgan</p>
              <p className="text-xs text-slate-400 truncate">Administrator</p>
            </div>
          </NavLink>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
