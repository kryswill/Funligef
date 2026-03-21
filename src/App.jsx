import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NewsPage from './pages/NewsPage'
import MultimediaPage from './pages/MultimediaPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/multimedia" element={<MultimediaPage />} />
            <Route path="/agenda" element={<div className="p-8"><h1 className="text-3xl font-bold">Agenda - En construcción</h1></div>} />
            <Route path="/centers" element={<div className="p-8"><h1 className="text-3xl font-bold">Centros de Estudio - En construcción</h1></div>} />
            <Route path="/biography" element={<div className="p-8"><h1 className="text-3xl font-bold">Iniciativas - En construcción</h1></div>} />
            <Route path="/resources" element={<div className="p-8"><h1 className="text-3xl font-bold">Recursos - En construcción</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
