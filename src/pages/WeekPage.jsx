import { useParams, Link } from 'react-router-dom'
import { weeks } from '../data/weeks.js'
import CodeBlock from '../components/CodeBlock'
import '../css/weekpage.css'

function WeekPage() {
  const { weekId } = useParams()
  const week = weeks.find(w => w.id === parseInt(weekId))
  
  if (!week) {
    return (
      <div className="week-page">
        <div className="not-found">
          <h1>Week Not Found</h1>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    )
  }
  
  const prevWeek = week.id > 0 ? week.id - 1 : null
  const nextWeek = week.id < 10 ? week.id + 1 : null
  
  return (
    <div className="week-page">
      <header className="week-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Week {week.id}: {week.title}</h1>
        <p className="topics">{week.topics}</p>
      </header>
      
      <div className="week-content">
        <div className="week-visual">
          <div className="sketch-preview">
            <img 
              src={week.gifPath} 
              alt={`Week ${week.id} sketch preview`}
              onError={(e) => {
                e.target.src = 'https://placehold.co/400x400/333/666?text=Week+' + week.id
              }}
            />
          </div>
          <a href={week.sketchUrl} target="_blank" rel="noopener noreferrer" className="sketch-link">
            View Live Sketch →
          </a>
        </div>
        
        <div className="week-details">
          <section className="detail-section">
            <h2>About This Project</h2>
            <p>{week.description}</p>
          </section>
          
          <section className="detail-section">
            <h2>What I Learned</h2>
            <ul className="learnings-list">
              {week.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </section>
          
          <section className="detail-section">
            <h2>Challenges</h2>
            <p>{week.challenges}</p>
          </section>
          
          <section className="detail-section">
            <h2>Code Snippet</h2>
            <CodeBlock code={week.codeSnippet} />
          </section>
        </div>
      </div>
      
      <nav className="week-nav">
        {prevWeek !== null ? (
          <Link to={`/week/${prevWeek}`} className="nav-prev">← Week {prevWeek}</Link>
        ) : <span></span>}
        {nextWeek !== null ? (
          <Link to={`/week/${nextWeek}`} className="nav-next">Week {nextWeek} →</Link>
        ) : <span></span>}
      </nav>
    </div>
  )
}

export default WeekPage
