import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LanguageSelector from './components/LanguageSelector'
import { LanguageProvider } from './contexts/LanguageContext'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NewsPage from './pages/NewsPage'
import MultimediaPage from './pages/MultimediaPage'
import BiographyPage from './pages/BiographyPage'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <LanguageSelector />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/multimedia" element={<MultimediaPage />} />
              <Route path="/biography" element={<BiographyPage />} />
              <Route path="/agenda" element={<div>Agenda Page - Coming Soon</div>} />
              <Route path="/centers" element={<div>Centers Page - Coming Soon</div>} />
              <Route path="/resources" element={<div>Resources Page - Coming Soon</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
