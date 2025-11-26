import { Link } from 'react-router-dom'
import { weeks } from '../data/weeks.js'
import '../css/home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>Hi, I'm Your Name</h1>
          <p className="tagline">Creative Coder & Visual Artist</p>
          <p className="bio">
            Welcome to my creative coding portfolio! This site documents my journey 
            learning p5.js and generative art.
          </p>
        </div>
      </section>
      
      <section className="projects">
        <h2>Weekly Projects</h2>
        <div className="projects-grid">
          {weeks.map((week) => (
            <Link to={`/week/${week.id}`} key={week.id} className="project-card">
              <div className="card-image">
                <img 
                  src={week.gifPath} 
                  alt={`Week ${week.id}: ${week.title}`}
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/400x300/333/666?text=Week+' + week.id
                  }}
                />
              </div>
              <div className="card-content">
                <h3>Week {week.id}</h3>
                <h4>{week.title}</h4>
                <p className="topics">{week.topics}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
