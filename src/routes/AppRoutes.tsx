import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      {/* Legacy route redirects */}
      <Route path='/aboutme' element={<Navigate to='/about' replace />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}
