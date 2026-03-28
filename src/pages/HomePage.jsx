import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from '../contexts/LanguageContext'
import { fetchNews } from '../services/newsService'
import NewsCard from '../components/NewsCard'
import logo from '../assets/logo.png'

const HomePage = () => {
  const { t } = useTranslation()
  const [allNews, setAllNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadNews = async () => {
      const news = await fetchNews()
      setAllNews(news)
      setLoading(false)
    }

    loadNews()
  }, [])

  // Limit to 8 articles total
  const featuredNews = allNews.slice(0, 8)

  const quickLinks = [
    { name: "Revista Global", icon: "📚" },
    { name: "Publicaciones", icon: "📖" },
    { name: "Biblioteca", icon: "📚" },
    { name: "Diccionario", icon: "📝" },
    { name: "GFDD", icon: "🌍" },
    { name: "Funligef France", icon: "🇫🇷" },
    { name: "RD2044", icon: "🎯" }
  ]

  const isLoading = loading

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <Link to="/biography">
                <img
                  src={logo}
                  alt="Lisendra Germosen Fondeur"
                  className="w-72 h-72 object-cover object-top rounded-3xl transition-transform duration-500 hover:scale-105"
                />
              </Link>
            </div>

            {/* Text Content */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t('hero.title')}
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/about" 
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('hero.learnMore')}
                </Link>
                {/* <Link 
                  to="/news" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                >
                  {t('hero.latestNews')}
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t('news.latest')}</h2>
          
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              <span className="ml-3 text-gray-600">{t('news.loading')}</span>
            </div>
          )}

          {/* News Grid */}
          {!loading && featuredNews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredNews.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && featuredNews.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-gray-500 text-lg">{t('news.noNews')}</p>
              <p className="text-gray-400 text-sm mt-2">{t('news.tryLater')}</p>
            </div>
          )}

          {/* News Info */}
          {!loading && featuredNews.length > 0 && (
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>{t('news.showing', { count: featuredNews.length })}</p>
              <p className="mt-1">{t('news.seeAllCategories')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Links Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Enlaces Rápidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {quickLinks.map((link, index) => (
              <Link 
                key={index}
                to="/resources" 
                className="text-center group"
              >
                <div className="bg-primary-100 rounded-lg p-4 mb-2 group-hover:bg-primary-200 transition-colors">
                  <div className="text-2xl">{link.icon}</div>
                </div>
                <span className="text-sm text-gray-700">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section> */}
    </>
  )
}

export default HomePage
