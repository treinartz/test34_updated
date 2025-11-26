import { NavLink } from 'react-router-dom'
import { weeks } from '../data/weeks.js'
import '../css/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">Your Name</NavLink>
      </div>
      
      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        
        <div className="navbar-weeks">
          <span className="weeks-label">Weeks:</span>
          {weeks.map((week) => (
            <NavLink
              key={week.id}
              to={`/week/${week.id}`}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {week.id}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
