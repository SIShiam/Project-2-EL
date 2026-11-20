import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, SearchIcon, BellIcon, CloseIcon } from './Icons'
import profileImg from '../assets/profile.png'

function Topbar({ onToggleSidebar }) {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  const notifications = [
    { id: 1, text: 'New order #1042 received from Sarah Jenkins', time: '5m ago' },
    { id: 2, text: 'Monthly revenue report is ready to download', time: '25m ago' },
    { id: 3, text: 'Stock warning: Ergonomic Keyboard has 6 items left', time: '1h ago' },
  ]

  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-slate-200 shadow-xs flex items-center justify-between px-3 sm:px-6">
      {/* Left Area */}
      <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0 mr-2">
        {/* Mobile Hamburger Button */}
        <button
          onClick={onToggleSidebar}
          type="button"
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none shrink-0"
          aria-label="Open sidebar navigation"
        >
          <MenuIcon className="w-5 h-5" />
        </button>

        {/* Desktop / Tablet Search Bar */}
        <div className="relative w-full max-w-md hidden md:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
            <SearchIcon className="w-4 h-4" />
          </span>
          <input
            type="search"
            placeholder="Search products, orders, reports..."
            className="w-full pl-9 pr-4 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Mobile Search Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle search"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right Area */}
      <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
        {/* Quick Link back to Portfolio */}
        <Link
          to="/"
          className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
          title="Return to Personal Portfolio Website"
        >
          <span>&larr;</span>
          <span>View Portfolio</span>
        </Link>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
            aria-label="Notifications"
          >
            <BellIcon className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 sm:w-80 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-50">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Notifications
                </span>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-xs text-blue-600 hover:underline cursor-pointer"
                >
                  Mark as read
                </button>
              </div>
              <div className="space-y-2">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className="p-2 rounded-lg bg-slate-50 text-xs text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <p className="font-medium text-slate-800">{item.text}</p>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile Link Chip */}
        <Link
          to="/admin/profile"
          className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
        >
          <img
            src={profileImg}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200 shrink-0"
          />
          <div className="hidden sm:block text-left">
            <p className="text-xs font-semibold text-slate-800 leading-tight">Alex Morgan</p>
            <p className="text-[10px] text-slate-500 leading-tight">Admin</p>
          </div>
        </Link>
      </div>

      {/* Expandable Mobile Search Bar */}
      {showMobileSearch && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 p-3 flex items-center space-x-2 md:hidden z-20 shadow-md">
          <input
            type="search"
            placeholder="Search products, orders, reports..."
            autoFocus
            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          <button
            onClick={() => setShowMobileSearch(false)}
            className="p-2 text-slate-500 hover:text-slate-800"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
      )}
    </header>
  )
}

export default Topbar
