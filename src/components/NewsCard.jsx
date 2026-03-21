const NewsCard = ({ article }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <span className="text-sm text-primary-600 font-semibold">{article.category}</span>
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{article.date}</span>
        </div>
      </div>
    </article>
  )
}

export default NewsCard
