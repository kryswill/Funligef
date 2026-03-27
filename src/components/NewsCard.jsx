const NewsCard = ({ article }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {article.imageUrl && (
        <div className="aspect-video bg-gray-200 overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-primary-600 font-semibold">{article.category}</span>
          {article.source && (
            <span className="text-xs text-gray-500">{article.source}</span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
          {article.url ? (
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary-600 transition-colors"
            >
              {article.title}
            </a>
          ) : (
            article.title
          )}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{article.date}</span>
          {article.url && (
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Leer más →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default NewsCard
