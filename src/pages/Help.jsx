import { useState } from 'react'
import { ChatIcon, MailIcon, BookOpenIcon } from '../components/Icons'

function Help() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How do I add a new product to inventory?',
      answer:
        'To add a new product, go to the Products section from your dashboard, click "Add Product", and fill out the product title, SKU, price, initial stock quantity, and category.',
    },
    {
      question: 'How do I update an order status?',
      answer:
        'From the Dashboard or Orders list, click on any order row to view order details. You can update the status to "Processing", "Completed", or "Cancelled" using the status dropdown.',
    },
    {
      question: 'How do I export sales reports?',
      answer:
        'Navigate to the Reports page using the sidebar navigation. Choose your desired category filter, and click the "Export All CSV" button at the top right to download your report file.',
    },
    {
      question: 'How do I update my account password?',
      answer:
        'Click on "Settings" in the sidebar, open the "Security" tab, enter your current password followed by your new password, and click "Update Password".',
    },
    {
      question: 'When are low-stock warnings triggered?',
      answer:
        'Low stock warnings trigger automatically whenever a product’s available inventory quantity drops below 10 units. You can configure this alert under Settings > Notifications.',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Help & Support</h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Frequently asked questions and support resources for the admin dashboard.
        </p>
      </div>

      {/* Support Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <ChatIcon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Live Chat Support</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Chat directly with our support team during working hours (Monday to Friday, 9am - 5pm).
            </p>
          </div>
          <button
            onClick={() => alert('Opening live chat...')}
            className="mt-4 w-full py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
          >
            Start Chat
          </button>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <MailIcon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Email Support</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Send us an email anytime and our team will get back to you within 24 business hours.
            </p>
          </div>
          <a
            href="mailto:support@example.com"
            className="mt-4 block text-center w-full py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-semibold text-xs rounded-lg transition-colors"
          >
            support@example.com
          </a>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <BookOpenIcon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Documentation</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Read step-by-step guides on managing products, inventory tracking, and payment processing.
            </p>
          </div>
          <button
            onClick={() => alert('Opening user documentation...')}
            className="mt-4 w-full py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
          >
            Read User Guide
          </button>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-xs">
        <h2 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-3.5 text-left font-semibold text-xs sm:text-sm text-slate-800 hover:bg-slate-50 focus:outline-none transition-colors cursor-pointer"
                >
                  <span className="pr-2">{faq.question}</span>
                  <span className="text-slate-400 font-bold shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-3.5 pb-3.5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Help
