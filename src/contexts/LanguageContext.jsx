import { createContext, useContext, useState, useEffect } from 'react'

// Language translations
const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      biography: 'Biography',
      news: 'News',
      multimedia: 'Multimedia',
      agenda: 'Agenda',
      centers: 'Study Centers',
      resources: 'Resources'
    },
    // HomePage
    hero: {
      title: 'Fundación P. Lisendra Germosen Fondeur',
      subtitle: 'For education and the environment',
      learnMore: 'Learn More',
      latestNews: 'Latest News'
    },
    news: {
      latest: 'Latest News: Education and Environment',
      loading: 'Loading news...',
      noNews: 'No news available at this time.',
      tryLater: 'Try refreshing the page later.',
      showing: 'Showing the latest {count} news about education and environment',
      seeAllCategories: 'To see all categories, visit the News section'
    },
    // AboutPage
    about: {
      title: 'About Us',
      mission: 'Mission',
      missionText: 'To promote education and environmental sustainability through innovative programs and initiatives.',
      vision: 'Vision',
      visionText: 'To be a leading institution in educational and environmental development.',
      values: 'Values',
      valuesText: 'Excellence, Innovation, Commitment, Sustainability'
    },
    // BiographyPage
    biography: {
      title: 'Biography',
      name: 'P. Lisendra Germosen Fondeur',
      career: 'Career',
      achievements: 'Achievements',
      philosophy: 'Philosophy',
      legacy: 'Legacy'
    },
    // Footer
    footer: {
      about: 'About',
      links: 'Links',
      contact: 'Contact',
      contactEmail: 'Email: funpligef@gmail.com',
      copyright: '© 2026 Fundación P. Lisendra Germosen Fondeur. All rights reserved.'
    },
    // Common
    common: {
      readMore: 'Read More',
      learnMore: 'Learn More',
      viewAll: 'View All',
      backToHome: 'Back to Home',
      loading: 'Loading...',
      error: 'Error',
      retry: 'Retry'
    }
  },
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      biography: 'Biografía',
      news: 'Noticias',
      multimedia: 'Multimedia',
      agenda: 'Agenda',
      centers: 'Centros de Estudio',
      resources: 'Recursos'
    },
    // HomePage
    hero: {
      title: 'Fundación P. Lisendra Germosen Fondeur',
      subtitle: 'Por la educación y el medio ambiente',
      learnMore: 'Conócenos',
      latestNews: 'Últimas Noticias'
    },
    news: {
      latest: 'Últimas Noticias: Educación y Medio Ambiente',
      loading: 'Cargando noticias...',
      noNews: 'No hay noticias disponibles en este momento.',
      tryLater: 'Intente actualizar la página más tarde.',
      showing: 'Mostrando las últimas {count} noticias sobre educación y medio ambiente',
      seeAllCategories: 'Para ver todas las categorías, visite la sección de Noticias'
    },
    // AboutPage
    about: {
      title: 'Sobre Nosotros',
      mission: 'Misión',
      missionText: 'Promover la educación y la sostenibilidad ambiental a través de programas e iniciativas innovadoras.',
      vision: 'Visión',
      visionText: 'Ser una institución líder en el desarrollo educativo y ambiental.',
      values: 'Valores',
      valuesText: 'Excelencia, Innovación, Compromiso, Sostenibilidad'
    },
    // BiographyPage
    biography: {
      title: 'Biografía',
      name: 'P. Lisendra Germosen Fondeur',
      career: 'Trayectoria',
      achievements: 'Logros',
      philosophy: 'Filosofía',
      legacy: 'Legado'
    },
    // Footer
    footer: {
      about: 'Acerca de',
      links: 'Enlaces',
      contact: 'Contacto',
      contactEmail: 'Email: funpligef@gmail.com',
      copyright: '© 2026 Fundación P. Lisendra Germosen Fondeur. Todos los derechos reservados.'
    },
    // Common
    common: {
      readMore: 'Leer más',
      learnMore: 'Conócenos',
      viewAll: 'Ver todas',
      backToHome: 'Volver al inicio',
      loading: 'Cargando...',
      error: 'Error',
      retry: 'Reintentar'
    }
  }
}

// Create context
const LanguageContext = createContext()

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to Spanish
    const savedLanguage = localStorage.getItem('language')
    return savedLanguage || 'es'
  })

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  // Translation function
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
      if (!value) break
    }
    
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook to use language context
export const useTranslation = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}

export default LanguageContext
