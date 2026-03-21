import { Link } from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import LisendraPhoto from '../assets/Lisendra_photo.jpeg'

const HomePage = () => {
  const featuredNews = [
    {
      id: 1,
      category: "Salud Mental",
      title: "Especialistas analizan en Funligef el estado actual de la salud mental en la República Dominicana",
      excerpt: "Expertos en salud mental se reunieron para discutir los desafíos actuales y proponer soluciones...",
      date: "marzo 12, 2026"
    },
    {
      id: 2,
      category: "Eventos",
      title: "Leonel Fernández encabeza clausura de la 24ª edición del Torneo de Golf de Funligef y GFDD en Florida",
      excerpt: "El presidente de Funligef participó en la ceremonia de clausura de este importante evento...",
      date: "marzo 11, 2026"
    },
    {
      id: 3,
      category: "Inversiones",
      title: "Leonel Fernández dicta conferencia magistral en el LATAM Family Office & Investors 2026 en Miami",
      excerpt: "Discurso sobre oportunidades de inversión en América Latina y el Caribe...",
      date: "marzo 10, 2026"
    },
    {
      id: 4,
      category: "Estudios",
      title: "Radiografía de la mujer dominicana al 2026: el capital educativo choca con muros salariales y de representación política",
      excerpt: "Nuevo estudio revela brechas persistentes en igualdad de oportunidades...",
      date: "marzo 6, 2026"
    },
    {
      id: 5,
      category: "Debate Público",
      title: "Expertos analizan en Funligef el impacto de las plataformas digitales en la libertad de expresión",
      excerpt: "Panel de discusión sobre los desafíos de la libertad de expresión en la era digital...",
      date: "marzo 5, 2026"
    },
    {
      id: 6,
      category: "Educación",
      title: "Funligef e IGLOBAL analizan el potencial de la educación inclusiva en la conferencia \"Ni Uno Más Fuera del Aula\"",
      excerpt: "Evento reúne a expertos internacionales para discutir estrategias educativas inclusivas...",
      date: "marzo 4, 2026"
    }
  ]

  const quickLinks = [
    { name: "Revista Global", icon: "📚" },
    { name: "Publicaciones", icon: "📖" },
    { name: "Biblioteca", icon: "📚" },
    { name: "Diccionario", icon: "📝" },
    { name: "GFDD", icon: "🌍" },
    { name: "Funligef France", icon: "🇫🇷" },
    { name: "RD2044", icon: "🎯" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

             {/* Image */}
            <div className="flex justify-center">
              <Link to="/biography">
                <img
                  src={LisendraPhoto}
                  alt="Lisendra Germosen Fondeur"
                  className="w-72 h-72 object-cover object-top rounded-3xl shadow-lg border-4 border-white ransition-transform duration-500 hover:scale-105"
                />
              </Link>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fundación P. Lisendra Germosen Fondeur
              </h2>
              <p className="text-xl md:text-1xl mb-8 max-w-3xl">
                "Por la educación y el medio ambiente"
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/about"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Conócenos
                </Link>
              </div>
            </div>

           

          </div>

        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Últimas Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNews.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/news"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Ver todas las noticias
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
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
      </section>
    </>
  )
}

export default HomePage
