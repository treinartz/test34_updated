import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import WeekPage from './pages/WeekPage'
import './css/app.css'

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/week/:weekId" element={<WeekPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
