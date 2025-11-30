// Import the HashRouter, Routes, and Route components from React Router.
// - HashRouter: A router implementation that uses the URL hash (#) portion.
//   It is REQUIRED for GitHub Pages because GitHub Pages cannot handle server-side routing.
//   HashRouter ensures routes work without a server by using URLs like:   domain.com/#/week/3
// - Routes: A container that holds all Route definitions. It decides which
//   component to render based on the current URL.
// - Route: A single route definition that maps a URL path to a component.
import { HashRouter, Routes, Route } from "react-router-dom";

// Import shared UI components and page components.
// Navbar: The navigation bar displayed on every page.
// Home: The landing page with the list of weekly projects.
// WeekPage: The individual project detail page for a specific week.
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WeekPage from "./pages/WeekPage";

// Import global CSS that applies styling across the entire app.
// Keeping CSS in App ensures that global variables, layout rules, and resets
// apply before individual components load.
import "./css/app.css";

// The root component of your entire React application.
// Every other component exists *inside* this App component.
// This is the only place where you define your routing system.
function App() {
  return (
    // Wrap the entire app in <HashRouter>.
    // Why here? Because:
    // - It enables routing anywhere inside the app.
    // - It must wrap <Routes>, <Link>, <NavLink>, and any components using them.
    // - You should never nest routers. The app should have exactly one root router.
    <HashRouter>
      {/* The outer wrapper for the whole UI.
          This is purely structural so CSS can target the app layout. */}
      <div className="app">
        {/* Navbar is placed OUTSIDE <Routes> so it ALWAYS appears:
            - On Home
            - On every single WeekPage
            - On any future pages you add
            This prevents repeating <Navbar> inside every page manually. */}
        <Navbar />

        {/* main element holds only the content that changes between pages.
            Navbar stays fixed. Routes swap content based on the URL. */}
        <main className="main-content">
          {/* Routes: the routing decision engine.
              Think of this like a "switch" statement for URLs. */}
          <Routes>
            {/* Route 1: matches the homepage (domain.com/#/)
                The "element" prop tells React Router what to display. */}
            <Route path="/" element={<Home />} />

            {/* Route 2: dynamic route for each weekly project.
                "/week/:weekId" means:
                - :weekId is a URL parameter
                - WeekPage can read it using useParams()
                - Example valid routes:
                   /week/1
                   /week/7
                   /week/12
                
                This is central to making your week pages reusable and dynamic. */}
            <Route path="/week/:weekId" element={<WeekPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

// Export App so index.jsx can mount it into the actual DOM (<div id="root">)
export default App;
