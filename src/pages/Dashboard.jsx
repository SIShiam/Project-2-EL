import { useState } from 'react'
import {
  UsersIcon,
  ProductsIcon,
  RevenueIcon,
  TrendingUpIcon,
  TrendingDownIcon,
} from '../components/Icons'

function Dashboard() {
  const [timeRange, setTimeRange] = useState('monthly')

  const stats = [
    {
      id: 'users',
      title: 'Total Users',
      value: '12,450',
      change: '+12.4%',
      isPositive: true,
      timeframe: 'vs last month',
      icon: UsersIcon,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: 'products',
      title: 'Total Products',
      value: '864',
      change: '+5.2%',
      isPositive: true,
      timeframe: 'in 12 categories',
      icon: ProductsIcon,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      id: 'revenue',
      title: 'Revenue Overview',
      value: '$54,230',
      change: '+14.8%',
      isPositive: true,
      timeframe: 'this month',
      icon: RevenueIcon,
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      id: 'orders',
      title: 'Total Orders',
      value: '1,840',
      change: '-1.5%',
      isPositive: false,
      timeframe: '98% fulfilled',
      icon: UsersIcon,
      color: 'bg-amber-50 text-amber-600',
    },
  ]

  const monthlyRevenue = [
    { month: 'Jan', amount: 38, label: '$38k' },
    { month: 'Feb', amount: 42, label: '$42k' },
    { month: 'Mar', amount: 45, label: '$45k' },
    { month: 'Apr', amount: 48, label: '$48k' },
    { month: 'May', amount: 51, label: '$51k' },
    { month: 'Jun', amount: 54, label: '$54k' },
  ]

  const recentOrders = [
    {
      id: 'ORD-1042',
      customer: 'Sarah Jenkins',
      product: 'Wireless Noise-Canceling Headphones',
      amount: '$199.00',
      date: 'Today, 2:30 PM',
      status: 'Completed',
    },
    {
      id: 'ORD-1041',
      customer: 'Michael Brown',
      product: 'Mechanical Gaming Keyboard',
      amount: '$129.00',
      date: 'Today, 11:15 AM',
      status: 'Processing',
    },
    {
      id: 'ORD-1040',
      customer: 'Emma Watson',
      product: '4K Ultra-HD Monitor 27"',
      amount: '$349.00',
      date: 'Yesterday',
      status: 'Completed',
    },
    {
      id: 'ORD-1039',
      customer: 'David Miller',
      product: 'USB-C Multiport Docking Hub',
      amount: '$49.00',
      date: 'Nov 19, 2026',
      status: 'Pending',
    },
    {
      id: 'ORD-1038',
      customer: 'Lisa Anderson',
      product: 'Ergonomic Office Desk Chair',
      amount: '$289.00',
      date: 'Nov 18, 2026',
      status: 'Completed',
    },
  ]

  return (
    <div className="space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Welcome back! Here is a summary of your store activity and performance.
          </p>
        </div>
        <div className="flex items-center space-x-1 bg-white p-1 rounded-lg border border-slate-200 text-xs font-medium self-start sm:self-auto">
          <button
            onClick={() => setTimeRange('weekly')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              timeRange === 'weekly'
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setTimeRange('monthly')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              timeRange === 'monthly'
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.id}
              className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {stat.title}
                </span>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span
                    className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-md ${
                      stat.isPositive
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-rose-50 text-rose-700'
                    }`}
                  >
                    {stat.isPositive ? (
                      <TrendingUpIcon className="w-3.5 h-3.5 mr-1" />
                    ) : (
                      <TrendingDownIcon className="w-3.5 h-3.5 mr-1" />
                    )}
                    {stat.change}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{stat.timeframe}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">Revenue Performance</h2>
              <p className="text-xs text-slate-500">Monthly revenue trend (Jan - Jun)</p>
            </div>
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md self-start sm:self-auto border border-emerald-200">
              +14.8% growth vs last period
            </span>
          </div>

          <div className="pt-4 pb-2">
            <div className="h-48 flex items-end justify-between gap-2 sm:gap-4 px-2">
              {monthlyRevenue.map((item) => (
                <div key={item.month} className="flex-1 flex flex-col items-center gap-1.5 group">
                  <span className="text-[11px] font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
                    {item.label}
                  </span>
                  <div className="w-full max-w-[42px] bg-slate-100 rounded-t-md overflow-hidden h-36 flex items-end">
                    <div
                      style={{ height: `${(item.amount / 60) * 100}%` }}
                      className="w-full bg-blue-600 rounded-t-md hover:bg-blue-700 transition-all duration-200"
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-500">{item.month}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="p-2 bg-slate-50 rounded-lg">
              <p className="text-xs text-slate-500">Total 6-Month Revenue</p>
              <p className="text-sm sm:text-base font-bold text-slate-900">$278,230</p>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg">
              <p className="text-xs text-slate-500">Monthly Average</p>
              <p className="text-sm sm:text-base font-bold text-slate-900">$46,371</p>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg">
              <p className="text-xs text-slate-500">Next Month Target</p>
              <p className="text-sm sm:text-base font-bold text-blue-600">$58,000</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1">Product Categories</h2>
            <p className="text-xs text-slate-500 mb-5">Distribution of current stock</p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>Electronics</span>
                  <span className="font-semibold text-slate-900">45% (388 items)</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>Computer Accessories</span>
                  <span className="font-semibold text-slate-900">35% (302 items)</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: '35%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>Office Supplies</span>
                  <span className="font-semibold text-slate-900">20% (174 items)</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '20%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-500">Inventory Status:</span>
              <p className="font-semibold text-emerald-700">95% in stock</p>
            </div>
            <span className="px-2 py-1 bg-amber-100 text-amber-800 font-medium rounded">
              8 items low stock
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="text-base font-bold text-slate-900">Recent Orders</h2>
            <p className="text-xs text-slate-500">Latest customer purchases and order fulfillment</p>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left text-xs sm:text-sm text-slate-600 min-w-[620px]">
            <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-4 sm:px-6 py-3">Order ID</th>
                <th className="px-4 sm:px-6 py-3">Customer</th>
                <th className="px-4 sm:px-6 py-3">Product</th>
                <th className="px-4 sm:px-6 py-3">Amount</th>
                <th className="px-4 sm:px-6 py-3">Date</th>
                <th className="px-4 sm:px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 sm:px-6 py-3.5 font-semibold text-slate-900 whitespace-nowrap">
                    {order.id}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 font-medium text-slate-800 whitespace-nowrap">
                    {order.customer}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 whitespace-nowrap text-slate-700">
                    {order.product}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 font-semibold text-slate-900 whitespace-nowrap">
                    {order.amount}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 text-xs text-slate-400 whitespace-nowrap">
                    {order.date}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        order.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : order.status === 'Processing'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
