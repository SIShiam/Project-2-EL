import { Outlet } from 'react-router-dom'
import PortfolioNavbar from './PortfolioNavbar'
import PortfolioFooter from './PortfolioFooter'

function PortfolioLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col selection:bg-blue-600 selection:text-white">
      <PortfolioNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <PortfolioFooter />
    </div>
  )
}

export default PortfolioLayout
