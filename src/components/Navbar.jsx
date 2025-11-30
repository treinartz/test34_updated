// Import NavLink from React Router
// - NavLink is like Link but automatically applies an "active" state when the URL matches.
//   This allows styling the current page link differently (e.g., highlighting it).
import { NavLink } from "react-router-dom";

// Import the weeks data array
// - We dynamically create a link for each week based on this array
import { weeks } from "../data/weeks.js";

// Import CSS for styling the navbar specifically
import "../css/navbar.css";

// Navbar component: top-level navigation bar for the site
// - Displays brand name
// - Links to Home
// - Dynamically generates week links
function Navbar() {
  return (
    // <nav> element is semantic for navigation
    <nav className="navbar">
      {/* ───────── BRAND / SITE NAME ───────── */}
      <div className="navbar-brand">
        {/* NavLink ensures clicking navigates SPA-style without full reload */}
        <NavLink to="/">Your Name</NavLink>
      </div>

      {/* ───────── NAVIGATION LINKS ───────── */}
      <div className="navbar-links">
        {/* Home link */}
        <NavLink
          to="/"
          end // "end" ensures exact match for root path
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        {/* ───────── DYNAMIC WEEK LINKS ───────── */}
        <div className="navbar-weeks">
          {/* Label for screen readers and UI clarity */}
          <span className="weeks-label">Weeks:</span>

          {/* Map over weeks array to create a NavLink for each week */}
          {weeks.map((week) => (
            <NavLink
              key={week.id} // React requires keys for lists to track elements efficiently
              to={`/week/${week.id}`} // Navigate to WeekPage with dynamic weekId
              /*
                Dynamically set className based on isActive:
                - If current URL matches this link, apply 'active' class
                - Otherwise, use empty string
                This is how we style the currently selected week differently.
              */
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {week.id} {/* Display the week number */}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Export Navbar so it can be used in App.jsx
export default Navbar;
