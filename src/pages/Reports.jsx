import { useState } from 'react'
import { SearchIcon, DownloadIcon, FilterIcon } from '../components/Icons'

function Reports() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')

  const reportsData = [
    {
      id: 'REP-108',
      title: 'Monthly Sales Performance - October',
      category: 'Sales',
      generatedBy: 'Accounting Team',
      date: 'Nov 20, 2026',
      status: 'Completed',
      value: '$54,230',
    },
    {
      id: 'REP-107',
      title: 'User Growth & Customer Registrations',
      category: 'Users',
      generatedBy: 'Alex Morgan',
      date: 'Nov 18, 2026',
      status: 'Completed',
      value: '12,450 users',
    },
    {
      id: 'REP-106',
      title: 'Inventory Stock Valuation',
      category: 'Inventory',
      generatedBy: 'Warehouse Team',
      date: 'Nov 15, 2026',
      status: 'Completed',
      value: '864 items',
    },
    {
      id: 'REP-105',
      title: 'Product Returns & Exchange Requests',
      category: 'Sales',
      generatedBy: 'Support Team',
      date: 'Nov 12, 2026',
      status: 'In Review',
      value: '$1,240',
    },
    {
      id: 'REP-104',
      title: 'Payment Gateway Fee Reconciliation',
      category: 'Finance',
      generatedBy: 'Finance Dept',
      date: 'Nov 10, 2026',
      status: 'Completed',
      value: '$980.50',
    },
    {
      id: 'REP-103',
      title: 'Shipping & Delivery Carrier Audit',
      category: 'Operations',
      generatedBy: 'Logistics Lead',
      date: 'Nov 08, 2026',
      status: 'Pending',
      value: '42 shipments',
    },
  ]

  const filteredReports = reportsData.filter((rep) => {
    const matchesSearch =
      rep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rep.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rep.generatedBy.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === 'All' || rep.category === categoryFilter
    const matchesStatus = statusFilter === 'All' || rep.status === statusFilter

    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Reports</h1>
          <p className="text-xs sm:text-sm text-slate-500">
            View, search, and export store sales, inventory, and user activity reports.
          </p>
        </div>

        <button
          onClick={() => alert('Exporting all report data to CSV...')}
          className="inline-flex items-center space-x-2 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors self-start sm:self-auto cursor-pointer"
        >
          <DownloadIcon className="w-4 h-4" />
          <span>Export All CSV</span>
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <p className="text-xs font-semibold text-slate-500 uppercase">Total Reports</p>
          <p className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">48</p>
        </div>
        <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <p className="text-xs font-semibold text-slate-500 uppercase">Completed</p>
          <p className="text-xl sm:text-2xl font-bold text-emerald-700 mt-1">44</p>
        </div>
        <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <p className="text-xs font-semibold text-slate-500 uppercase">In Review</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-600 mt-1">3</p>
        </div>
        <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <p className="text-xs font-semibold text-slate-500 uppercase">Pending</p>
          <p className="text-xl sm:text-2xl font-bold text-amber-700 mt-1">1</p>
        </div>
      </div>

      <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
            <SearchIcon className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search by title, ID or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <FilterIcon className="w-3.5 h-3.5" />
            <span>Category:</span>
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-2.5 py-1.5 text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="All">All Categories</option>
            <option value="Sales">Sales</option>
            <option value="Users">Users</option>
            <option value="Inventory">Inventory</option>
            <option value="Finance">Finance</option>
            <option value="Operations">Operations</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-2.5 py-1.5 text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="All">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="In Review">In Review</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left text-xs sm:text-sm text-slate-600 min-w-[620px]">
            <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-4 sm:px-6 py-3">Report ID</th>
                <th className="px-4 sm:px-6 py-3">Title</th>
                <th className="px-4 sm:px-6 py-3">Category</th>
                <th className="px-4 sm:px-6 py-3">Generated By</th>
                <th className="px-4 sm:px-6 py-3">Date</th>
                <th className="px-4 sm:px-6 py-3">Metric Value</th>
                <th className="px-4 sm:px-6 py-3">Status</th>
                <th className="px-4 sm:px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredReports.length > 0 ? (
                filteredReports.map((rep) => (
                  <tr key={rep.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 sm:px-6 py-3.5 font-mono text-xs font-semibold text-slate-900 whitespace-nowrap">
                      {rep.id}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 font-medium text-slate-900 whitespace-nowrap">
                      {rep.title}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                        {rep.category}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 text-xs text-slate-600 whitespace-nowrap">
                      {rep.generatedBy}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 text-xs text-slate-400 whitespace-nowrap">
                      {rep.date}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 font-semibold text-slate-800 whitespace-nowrap">
                      {rep.value}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          rep.status === 'Completed'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : rep.status === 'In Review'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {rep.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 text-right whitespace-nowrap">
                      <button
                        onClick={() => alert(`Downloading ${rep.id} as PDF`)}
                        className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors cursor-pointer"
                        title="Download Report"
                      >
                        <DownloadIcon className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-8 text-center text-slate-400">
                    No reports match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="p-3.5 sm:p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>Showing {filteredReports.length} of {filteredReports.length} results</span>
          <div className="flex items-center space-x-1">
            <button className="px-3 py-1 rounded border border-slate-200 text-slate-400 cursor-not-allowed" disabled>
              Previous
            </button>
            <button className="px-3 py-1 rounded bg-blue-600 text-white font-semibold">
              1
            </button>
            <button className="px-3 py-1 rounded border border-slate-200 text-slate-400 cursor-not-allowed" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
