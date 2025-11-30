// Import the Link component from React Router.
// Link is used instead of <a> because it changes the URL WITHOUT reloading the page,
// making it a true single-page application (SPA).
import { Link } from "react-router-dom";

// Import the weeks array, which contains all week metadata.
// Each object includes: id, title, topics, and gif preview path.
// This drives the "Weekly Projects" grid dynamically.
import { weeks } from "../data/weeks.js";

// Import styling for this page. Vite automatically bundles CSS imports.
import "../css/home.css";

function Home() {
  return (
    // Top-level wrapper for the Home page. Helps scope CSS styles.
    <div className="home">
      {/* ───────────────────────────────────────────────
          HERO SECTION
          Introduces the student/creator and sets tone.
         ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-text">
          <h1>Hi, I'm Your Name</h1>

          {/* A short title or identity label */}
          <p className="tagline">Creative Coder & Visual Artist</p>

          {/* Intro paragraph explaining purpose of the site */}
          <p className="bio">
            Welcome to my creative coding portfolio! This site documents my
            journey learning p5.js and generative art.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          WEEKLY PROJECTS — Dynamic Grid
          This section maps through the weeks array and
          generates one clickable project card per week.
         ─────────────────────────────────────────────── */}
      <section className="projects">
        <h2>Weekly Projects</h2>

        {/* Grid layout container */}
        <div className="projects-grid">
          {/*
            weeks.map(...)
            - Loops through the weeks array
            - Returns a <Link> (like an <a>) for each week
            - React will render one card per week dynamically

            Each card links to a URL like /week/3
            The router will match that path to <WeekPage />
          */}
          {weeks.map((week) => (
            // Link = React Router navigation.
            // key={week.id} → required for stable list rendering
            <Link
              to={`/week/${week.id}`} // Destination URL for this week
              key={week.id} // React needs a unique key per repeated element
              className="project-card"
            >
              {/* Thumbnail container */}
              <div className="card-image">
                <img
                  src={week.gifPath}
                  alt={`Week ${week.id}: ${week.title}`}
                  /*
                    onError:
                    If the provided GIF path is missing, broken, or
                    accidentally deleted, this fallback replaces the image
                    with a placeholder.

                    e.target refers to the <img> element that failed to load.
                  */
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/400x300/333/666?text=Week+" +
                      week.id;
                  }}
                />
              </div>

              {/* Card text: week number, title, topics */}
              <div className="card-content">
                <h3>Week {week.id}</h3>
                <h4>{week.title}</h4>

                {/* Topics is usually a short string like “Loops, Noise, Color Systems” */}
                <p className="topics">{week.topics}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
