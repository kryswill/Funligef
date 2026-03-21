import { useState } from 'react'
import NewsCard from '../components/NewsCard'

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas')

  const allNews = [
    {
      id: 1,
      category: "Salud Mental",
      title: "Especialistas analizan en Funligef el estado actual de la salud mental en la República Dominicana",
      excerpt: "Expertos en salud mental se reunieron para discutir los desafíos actuales y proponer soluciones integrales que aborden tanto los aspectos clínicos como sociales del bienestar mental en el país.",
      date: "marzo 12, 2026",
      fullContent: "En un evento organizado por Funligef, especialistas de diversas áreas de la salud mental presentaron análisis detallados sobre la situación actual en República Dominicana..."
    },
    {
      id: 2,
      category: "Eventos",
      title: "Leonel Fernández encabeza clausura de la 24ª edición del Torneo de Golf de Funligef y GFDD en Florida",
      excerpt: "El presidente de Funligef participó en la ceremonia de clausura de este importante evento que reúne a líderes de negocios y personalidades del ámbito internacional.",
      date: "marzo 11, 2026",
      fullContent: "El presidente de Funligef, Leonel Fernández, fue el orador principal en la ceremonia de clausura..."
    },
    {
      id: 3,
      category: "Inversiones",
      title: "Leonel Fernández dicta conferencia magistral en el LATAM Family Office & Investors 2026 en Miami",
      excerpt: "Discurso sobre oportunidades de inversión en América Latina y el Caribe, destacando el potencial de crecimiento económico de la región.",
      date: "marzo 10, 2026",
      fullContent: "En el prestigioso evento LATAM Family Office & Investors 2026, el presidente de Funligef presentó su visión..."
    },
    {
      id: 4,
      category: "Estudios",
      title: "Radiografía de la mujer dominicana al 2026: el capital educativo choca con muros salariales y de representación política",
      excerpt: "Nuevo estudio revela brechas persistentes en igualdad de oportunidades y propone políticas públicas para cerrar las brechas de género.",
      date: "marzo 6, 2026",
      fullContent: "El último estudio del Centro de Investigación de Funligef presenta un análisis exhaustivo sobre la situación..."
    },
    {
      id: 5,
      category: "Debate Público",
      title: "Expertos analizan en Funligef el impacto de las plataformas digitales en la libertad de expresión",
      excerpt: "Panel de discusión sobre los desafíos de la libertad de expresión en la era digital y su impacto en la democracia.",
      date: "marzo 5, 2026",
      fullContent: "Un panel de expertos internacionales se reunió en las instalaciones de Funligef para debatir..."
    },
    {
      id: 6,
      category: "Educación",
      title: "Funligef e IGLOBAL analizan el potencial de la educación inclusiva en la conferencia \"Ni Uno Más Fuera del Aula\"",
      excerpt: "Evento reúne a expertos internacionales para discutir estrategias educativas inclusivas y su implementación en el sistema educativo dominicano.",
      date: "marzo 4, 2026",
      fullContent: "En colaboración con IGLOBAL, Funligef organizó la conferencia 'Ni Uno Más Fuera del Aula'..."
    },
    {
      id: 7,
      category: "Medio Ambiente",
      title: "Funligef lanza programa de reforestación en la zona este del país",
      excerpt: "Iniciativa busca plantar más de 10,000 árboles en áreas afectadas por la deforestación y promover la conciencia ambiental.",
      date: "marzo 1, 2026",
      fullContent: "Funligef anunció el lanzamiento de su programa más ambicioso de reforestación..."
    },
    {
      id: 8,
      category: "Educación",
      title: "Becas para estudios ambientales disponibles para jóvenes dominicanos",
      excerpt: "Programa de becas completo apoyará a 50 estudiantes de todo el país a cursar carreras relacionadas con ciencias ambientales.",
      date: "febrero 28, 2026",
      fullContent: "El programa de becas de Funligef para estudios ambientales ha abierto su convocatoria..."
    }
  ]

  const categories = ['todas', 'Salud Mental', 'Eventos', 'Inversiones', 'Estudios', 'Debate Público', 'Educación', 'Medio Ambiente']
  
  const filteredNews = selectedCategory === 'todas' 
    ? allNews 
    : allNews.filter(article => article.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Noticias</h1>
        
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

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay noticias en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsPage
