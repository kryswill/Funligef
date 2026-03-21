import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Logo.png'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 m-2">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={logo} alt="Funligef Logo" className="h-20 w-auto" />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium ${
                isActive('/') ? 'text-gray-900' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm font-medium ${
                isActive('/about') ? 'text-gray-900' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Funligef
            </Link>
            <Link 
              to="/biography" 
              className={`px-3 py-2 text-sm font-medium ${
                isActive('/biography') ? 'text-gray-900' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Biografía
            </Link>
            {/* <Link 
              to="/multimedia" 
              className={`px-3 py-2 text-sm font-medium ${
                isActive('/multimedia') ? 'text-gray-900' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Multimedia
            </Link> */}
            {/* <Link 
              to="/agenda" 
              className={`px-3 py-2 text-sm font-medium ${
                isActive('/agenda') ? 'text-gray-900' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Agenda
            </Link> */}
            {/* <Link 
              to="/centers" 
              className={`px-3 py-2 text-sm font-medium ${
                isActive('/centers') ? 'text-gray-900' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Centros de Estudio
            </Link> */}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link 
              to="/" 
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/about') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Funligef
            </Link>
            <Link 
              to="/news" 
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/news') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Noticias
            </Link>
            <Link 
              to="/multimedia" 
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/multimedia') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Multimedia
            </Link>
            <Link 
              to="/agenda" 
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/agenda') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Agenda
            </Link>
            <Link 
              to="/centers" 
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/centers') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Centros de Estudio
            </Link>
            <Link 
              to="/biography" 
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/biography') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Biografía
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
