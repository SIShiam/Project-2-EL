import { useState } from 'react'
import { CheckCircleIcon } from '../components/Icons'
import profileImg from '../assets/profile.png'

function Profile() {
  const [profileData, setProfileData] = useState({
    firstName: 'Alex',
    lastName: 'Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 349-2819',
    role: 'Store Administrator',
    department: 'Store Operations',
    location: 'Chicago, IL',
    bio: 'Store administrator overseeing product catalog updates, inventory counts, customer order processing, and periodic sales reporting.',
  })

  const [savedSuccess, setSavedSuccess] = useState(false)

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    setSavedSuccess(true)
    setTimeout(() => setSavedSuccess(false), 3000)
  }

  const activities = [
    { action: 'Added 12 new items to Computer Accessories', time: '2 hours ago' },
    { action: 'Updated status of order #ORD-1041 to Processing', time: '4 hours ago' },
    { action: 'Exported October sales summary report', time: 'Yesterday at 3:15 PM' },
    { action: 'Changed store default currency setting to USD', time: 'Nov 18, 2026' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Admin Profile</h1>
        <p className="text-xs sm:text-sm text-slate-500">
          View and edit your personal information, contact details, and account settings.
        </p>
      </div>

      {savedSuccess && (
        <div className="flex items-center gap-2 p-3 sm:p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-sm font-medium">
          <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Profile changes saved successfully!</span>
        </div>
      )}

      {/* Profile Header Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="h-24 sm:h-28 bg-slate-800" />
        <div className="px-4 sm:px-6 pb-6 pt-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-10 sm:-mt-12 mb-4 gap-4">
            <div className="flex items-end space-x-3 sm:space-x-4">
              <img
                src={profileImg}
                alt="Profile"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-4 ring-white shadow-md shrink-0"
              />
              <div className="pb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                    {profileData.firstName} {profileData.lastName}
                  </h2>
                  <span className="px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded">
                    Active
                  </span>
                </div>
                <p className="text-xs text-slate-500">{profileData.role}</p>
              </div>
            </div>

            <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg self-start sm:self-auto">
              Member since: Oct 2024
            </span>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100 text-center">
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
              <p className="text-base sm:text-lg font-bold text-slate-900">864</p>
              <p className="text-xs text-slate-500">Products Listed</p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
              <p className="text-base sm:text-lg font-bold text-slate-900">1,840</p>
              <p className="text-xs text-slate-500">Orders Handled</p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
              <p className="text-base sm:text-lg font-bold text-slate-900">12,450</p>
              <p className="text-xs text-slate-500">Registered Users</p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
              <p className="text-base sm:text-lg font-bold text-emerald-700">Admin</p>
              <p className="text-xs text-slate-500">Role Status</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Profile Edit Form */}
        <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
            Edit Information
          </h3>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Role Title
                </label>
                <input
                  type="text"
                  name="role"
                  value={profileData.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                Bio / Responsibilities
              </label>
              <textarea
                name="bio"
                rows="3"
                value={profileData.bio}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* Activity Feed */}
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
            Recent Activity
          </h3>

          <div className="relative pl-5 space-y-4 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {activities.map((act, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white" />
                <p className="text-xs font-medium text-slate-800 leading-snug">{act.action}</p>
                <span className="text-[11px] text-slate-400 mt-0.5 block">{act.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
