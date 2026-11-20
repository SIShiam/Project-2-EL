import { useState } from 'react'
import { CheckCircleIcon } from '../components/Icons'

function Settings() {
  const [activeTab, setActiveTab] = useState('general')
  const [saveBanner, setSaveBanner] = useState(false)

  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'Store Admin Dashboard',
    supportEmail: 'support@example.com',
    timezone: 'UTC-06:00 (Central Time)',
    currency: 'USD ($)',
    language: 'English (US)',
  })

  const [notificationSettings, setNotificationSettings] = useState({
    orderAlerts: true,
    weeklyDigest: true,
    lowStockWarnings: true,
    securityLoginAlerts: false,
  })

  const [securityForm, setSecurityForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: false,
  })

  const handleGeneralSubmit = (e) => {
    e.preventDefault()
    setSaveBanner(true)
    setTimeout(() => setSaveBanner(false), 3000)
  }

  const handleSecuritySubmit = (e) => {
    e.preventDefault()
    if (securityForm.newPassword && securityForm.newPassword !== securityForm.confirmPassword) {
      alert('New passwords do not match.')
      return
    }
    setSecurityForm({ ...securityForm, currentPassword: '', newPassword: '', confirmPassword: '' })
    setSaveBanner(true)
    setTimeout(() => setSaveBanner(false), 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Settings</h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Manage your store preferences, email alerts, and account security.
        </p>
      </div>

      {saveBanner && (
        <div className="flex items-center gap-2 p-3 sm:p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-sm font-medium">
          <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Your settings have been saved successfully.</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-2 sm:gap-6 overflow-x-auto text-xs sm:text-sm font-medium no-scrollbar">
        <button
          onClick={() => setActiveTab('general')}
          className={`pb-3 px-1 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'general'
              ? 'border-blue-600 text-blue-600 font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          General Settings
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`pb-3 px-1 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'notifications'
              ? 'border-blue-600 text-blue-600 font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Notifications
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`pb-3 px-1 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'security'
              ? 'border-blue-600 text-blue-600 font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Security
        </button>
      </div>

      {/* Forms */}
      <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-xs max-w-3xl">
        {activeTab === 'general' && (
          <form onSubmit={handleGeneralSubmit} className="space-y-4 sm:space-y-5">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              Store & Platform Settings
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Store / Website Name
                </label>
                <input
                  type="text"
                  value={generalSettings.siteName}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, siteName: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Contact & Support Email
                </label>
                <input
                  type="email"
                  value={generalSettings.supportEmail}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, supportEmail: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Timezone
                </label>
                <select
                  value={generalSettings.timezone}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, timezone: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  <option value="UTC-06:00 (Central Time)">UTC-06:00 (Central Time)</option>
                  <option value="UTC-05:00 (Eastern Time)">UTC-05:00 (Eastern Time)</option>
                  <option value="UTC-08:00 (Pacific Time)">UTC-08:00 (Pacific Time)</option>
                  <option value="UTC+00:00 (GMT / London)">UTC+00:00 (GMT / London)</option>
                  <option value="UTC+06:00 (Dhaka / Central Asia)">UTC+06:00 (Dhaka / Central Asia)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Currency
                </label>
                <select
                  value={generalSettings.currency}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, currency: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  <option value="USD ($)">USD ($)</option>
                  <option value="EUR (€)">EUR (€)</option>
                  <option value="GBP (£)">GBP (£)</option>
                  <option value="CAD ($)">CAD ($)</option>
                </select>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
              >
                Save General Settings
              </button>
            </div>
          </form>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-5">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              Email & Alert Preferences
            </h3>

            <div className="space-y-3">
              <label className="flex items-start sm:items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-800">New Order Notifications</p>
                  <p className="text-xs text-slate-500">
                    Receive an email each time a customer completes a purchase.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationSettings.orderAlerts}
                  onChange={(e) =>
                    setNotificationSettings({
                      ...notificationSettings,
                      orderAlerts: e.target.checked,
                    })
                  }
                  className="w-4 h-4 text-blue-600 rounded mt-1 sm:mt-0"
                />
              </label>

              <label className="flex items-start sm:items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-800">Weekly Sales Summary</p>
                  <p className="text-xs text-slate-500">
                    Get a weekly digest of sales, new users, and inventory status.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationSettings.weeklyDigest}
                  onChange={(e) =>
                    setNotificationSettings({
                      ...notificationSettings,
                      weeklyDigest: e.target.checked,
                    })
                  }
                  className="w-4 h-4 text-blue-600 rounded mt-1 sm:mt-0"
                />
              </label>

              <label className="flex items-start sm:items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-800">Low Stock Warnings</p>
                  <p className="text-xs text-slate-500">
                    Alert when any product inventory drops below 10 units.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationSettings.lowStockWarnings}
                  onChange={(e) =>
                    setNotificationSettings({
                      ...notificationSettings,
                      lowStockWarnings: e.target.checked,
                    })
                  }
                  className="w-4 h-4 text-blue-600 rounded mt-1 sm:mt-0"
                />
              </label>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setSaveBanner(true)
                  setTimeout(() => setSaveBanner(false), 3000)
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <form onSubmit={handleSecuritySubmit} className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              Change Account Password
            </h3>

            <div className="space-y-3 max-w-md">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={securityForm.currentPassword}
                  onChange={(e) =>
                    setSecurityForm({ ...securityForm, currentPassword: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="At least 8 characters"
                  value={securityForm.newPassword}
                  onChange={(e) =>
                    setSecurityForm({ ...securityForm, newPassword: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  placeholder="Repeat new password"
                  value={securityForm.confirmPassword}
                  onChange={(e) =>
                    setSecurityForm({ ...securityForm, confirmPassword: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={securityForm.twoFactorEnabled}
                  onChange={(e) =>
                    setSecurityForm({ ...securityForm, twoFactorEnabled: e.target.checked })
                  }
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm font-medium text-slate-800">
                  Enable Two-Factor Authentication (2FA) for login
                </span>
              </label>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
              >
                Update Password
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default Settings
