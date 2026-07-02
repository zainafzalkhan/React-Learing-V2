import { Routes, Route, Navigate } from 'react-router'
import RootLayout from './layouts/RootLayout'
import ProjectsPage from './pages/ProjectsPage'
import LearningsPage from './pages/LearningsPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import PowPage from './pages/PowPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Navigate to="/projects" replace />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="learnings" element={<LearningsPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="pow" element={<PowPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
