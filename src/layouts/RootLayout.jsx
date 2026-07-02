import { NavLink, Outlet } from 'react-router'
import './RootLayout.css'

const navItems = [
  { to: '/projects', label: 'Projects' },
  { to: '/learnings', label: 'Learnings' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/pow', label: 'POW' },
  { to: '/contact', label: 'Contact' },
]

const RootLayout = () => {
  return (
    <div className="layout">
      <header className="layout__header">
        <NavLink to="/projects" className="layout__brand">
          React Learning
        </NavLink>
        <nav className="layout__nav" aria-label="Main navigation">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `layout__nav-link${isActive ? ' layout__nav-link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
