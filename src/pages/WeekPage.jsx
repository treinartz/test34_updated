// Import tools from React Router:
// - useParams lets us read URL parameters (e.g., /week/3 → weekId = "3")
// - Link allows navigation without full page reload (SPA behavior)
import { useParams, Link } from "react-router-dom";

// Import the master week data array.
// Each week object contains metadata plus preview image, description, etc.
import { weeks } from "../data/weeks.js";

// A custom component that renders code with syntax highlighting.
// This keeps WeekPage clean and separates concerns.
import CodeBlock from "../components/CodeBlock";

// Import styles for this page only (scoped via class names).
import "../css/weekpage.css";

function WeekPage() {
  /* ───────────────────────────────────────────────
     1. READ THE URL PARAMETER
     The route `/week/:weekId` provides a dynamic value.
     useParams() returns an object of all parameters.
     Example: if URL is /week/5 then useParams().weekId === "5"
     ─────────────────────────────────────────────── */
  const { weekId } = useParams();

  /* ───────────────────────────────────────────────
     2. LOOK UP THE CORRECT WEEK OBJECT
     weeks[] stores id as a number, but useParams gives us a string.
     parseInt() fixes this so we can compare correctly.
     
     find() returns the FIRST week whose id matches.
     If none match, week will be undefined → triggers "not found" UI.
     ─────────────────────────────────────────────── */
  const week = weeks.find((w) => w.id === parseInt(weekId));

  /* ───────────────────────────────────────────────
     3. HANDLE INVALID WEEK IDS
     If user types /week/999 or /week/banana → week is undefined.
     A professional UI always handles this gracefully.
     ─────────────────────────────────────────────── */
  if (!week) {
    return (
      <div className="week-page">
        <div className="not-found">
          <h1>Week Not Found</h1>

          {/* Use Link so we navigate without a full page reload */}
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  /* ───────────────────────────────────────────────
     4. NEXT / PREVIOUS WEEK LOGIC
     prevWeek:
       - Only exists if we're not at week 0
     nextWeek:
       - Only exists if we're not at the last week
     Adjust the upper/lower bounds based on your actual course length.
     ─────────────────────────────────────────────── */
  const prevWeek = week.id > 0 ? week.id - 1 : null;
  const nextWeek = week.id < 10 ? week.id + 1 : null;

  /* ───────────────────────────────────────────────
     5. MAIN RENDER
     The layout consists of:
     - Header with back link and topics
     - Left-side visual (sticky preview)
     - Right-side details (learning list, challenges, code)
     - Bottom navigation
     ─────────────────────────────────────────────── */
  return (
    <div className="week-page">
      {/* ───────── HEADER (Title, Topic List) ───────── */}
      <header className="week-header">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>

        {/* Dynamic title based on selected week */}
        <h1>
          Week {week.id}: {week.title}
        </h1>

        {/* Short string describing key topics covered */}
        <p className="topics">{week.topics}</p>
      </header>

      {/* ───────── MAIN PAGE GRID: VISUAL + DETAILS ───────── */}
      <div className="week-content">
        {/* LEFT COLUMN: SKETCH PREVIEW & LIVE LINK */}
        <div className="week-visual">
          {/* The preview GIF or image */}
          <div className="sketch-preview">
            <img
              src={week.gifPath}
              alt={`Week ${week.id} sketch preview`}
              /*
                onError fallback:
                If the GIF doesn't exist or fails to load,
                we replace the src with a placeholder image so
                the UI never breaks.
              */
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/400x400/333/666?text=Week+" + week.id;
              }}
            />
          </div>

          {/* External link to the live p5.js sketch.
             - target="_blank" opens in new tab
             - rel="noopener noreferrer" = security best practice
          */}
          <a
            href={week.sketchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-link"
          >
            View Live Sketch →
          </a>
        </div>

        {/* RIGHT COLUMN: DETAILS ABOUT THE PROJECT */}
        <div className="week-details">
          {/* ───────── About Section ───────── */}
          <section className="detail-section">
            <h2>About This Project</h2>
            <p>{week.description}</p>
          </section>

          {/* ───────── Learnings List ─────────
              This maps through an array of strings.
              A <li> is created for each learning.
              key={index} is acceptable here because:
                - items are static
                - order will not change
              For dynamic lists with reordering, keys should be unique IDs.
          */}
          <section className="detail-section">
            <h2>What I Learned</h2>
            <ul className="learnings-list">
              {week.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </section>

          {/* ───────── Challenges Section ───────── */}
          <section className="detail-section">
            <h2>Challenges</h2>
            <p>{week.challenges}</p>
          </section>

          {/* ───────── Code Snippet Section ─────────
              Uses a custom <CodeBlock /> component
              so WeekPage stays clean and readable.
          */}
          <section className="detail-section">
            <h2>Code Snippet</h2>
            <CodeBlock code={week.codeSnippet} />
          </section>
        </div>
      </div>

      {/* ───────── WEEK-TO-WEEK NAVIGATION ───────── */}
      <nav className="week-nav">
        {/* Only render "previous" if a previous week exists */}
        {prevWeek !== null ? (
          <Link to={`/week/${prevWeek}`} className="nav-prev">
            ← Week {prevWeek}
          </Link>
        ) : (
          <span></span>
        )}

        {/* Only render "next" if a next week exists */}
        {nextWeek !== null ? (
          <Link to={`/week/${nextWeek}`} className="nav-next">
            Week {nextWeek} →
          </Link>
        ) : (
          <span></span>
        )}
      </nav>
    </div>
  );
}

export default WeekPage;
