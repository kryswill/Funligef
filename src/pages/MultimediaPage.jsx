const MultimediaPage = () => {
  const multimedia = [
    {
      id: 1,
      type: "video",
      title: "Conferencia sobre Cambio Climático",
      thumbnail: "🎥",
      duration: "45:30",
      date: "marzo 10, 2026"
    },
    {
      id: 2,
      type: "gallery",
      title: "Galería: Taller de Educación Ambiental",
      thumbnail: "🖼️",
      images: 24,
      date: "marzo 8, 2026"
    },
    {
      id: 3,
      type: "podcast",
      title: "Podcast: Mujeres en la Ciencia",
      thumbnail: "🎙️",
      duration: "32:15",
      date: "marzo 5, 2026"
    },
    {
      id: 4,
      type: "video",
      title: "Documental: Ríos Dominicanos",
      thumbnail: "🎥",
      duration: "1:12:45",
      date: "marzo 1, 2026"
    },
    {
      id: 5,
      type: "gallery",
      title: "Fotos: Ceremonia de Becas 2026",
      thumbnail: "🖼️",
      images: 45,
      date: "febrero 28, 2026"
    },
    {
      id: 6,
      type: "podcast",
      title: "Entrevista: Expertos en Sostenibilidad",
      thumbnail: "🎙️",
      duration: "28:40",
      date: "febrero 25, 2026"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Multimedia</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {multimedia.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center text-6xl">
                {item.thumbnail}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-600 font-semibold uppercase">
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    {item.duration || `${item.images} fotos`}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.date}
                </p>
                <button className="mt-4 w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
                  {item.type === 'video' ? 'Ver Video' : item.type === 'gallery' ? 'Ver Galería' : 'Escuchar Podcast'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MultimediaPage
