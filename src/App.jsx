import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import PortfolioLayout from './components/portfolio/PortfolioLayout'
import PortfolioHome from './pages/portfolio/Home'
import PortfolioAbout from './pages/portfolio/About'
import PortfolioSkills from './pages/portfolio/Skills'
import PortfolioProjects from './pages/portfolio/Projects'
import PortfolioContact from './pages/portfolio/Contact'

import AdminLayout from './components/Layout'
import AdminDashboard from './pages/Dashboard'
import AdminProfile from './pages/Profile'
import AdminSettings from './pages/Settings'
import AdminReports from './pages/Reports'
import AdminHelp from './pages/Help'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<PortfolioLayout />}>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/about" element={<PortfolioAbout />} />
          <Route path="/skills" element={<PortfolioSkills />} />
          <Route path="/projects" element={<PortfolioProjects />} />
          <Route path="/contact" element={<PortfolioContact />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="help" element={<AdminHelp />} />
        </Route>

        <Route path="/dashboard" element={<Navigate to="/admin" replace />} />
        <Route path="/profile" element={<Navigate to="/admin/profile" replace />} />
        <Route path="/settings" element={<Navigate to="/admin/settings" replace />} />
        <Route path="/reports" element={<Navigate to="/admin/reports" replace />} />
        <Route path="/help" element={<Navigate to="/admin/help" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
