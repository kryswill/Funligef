import { useState, useEffect } from 'react'
import { fetchNews } from '../services/newsService'
import NewsCard from '../components/NewsCard'

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas')
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

  const categories = ['todas', 'Educación', 'Medio Ambiente', 'General']

  const filteredNews =
    selectedCategory === 'todas'
      ? allNews
      : allNews.filter(article => article.category === selectedCategory)

  // ✅ Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Cargando noticias...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Noticias
        </h1>

        <p className="text-sm text-gray-400 text-center mb-10">
          Noticias actualizadas automáticamente sobre educación y medio ambiente
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category === 'todas' ? 'Todas' : category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay noticias en esta categoría.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsPage