import LisendraPhoto from '../assets/Lisendra_photo.jpeg'

const BiographyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="w-full bg-white py-16 px-6 lg:px-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Biografía
        </h1>
        <p className="text-lg text-gray-600">
          Profesora Lisendra Germosén Fondeur
        </p>
      </section>

      {/* Main Content */}
      <section className="w-full px-6 lg:px-20 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Image */}
          <div className="flex flex-col items-center lg:items-start">
            <img
              src={LisendraPhoto}
              alt="Lisendra Germosén Fondeur"
              className="w-full max-w-[420px] h-auto object-contain rounded-2xl shadow-xl mb-6"
            />
          </div>

          {/* Text */}
          <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed text-justify">

            <p className="text-lg text-gray-800 font-medium">
              Hay quienes leen la Historia en los libros; otros, como la Profesora Lisendra Eninia Germosén Fondeur, dedicaron su vida a escribirla en el corazón de sus alumnos.
            </p>

            <p>
              Nacida un 21 de junio de 1938 en el municipio de Tamboril, provincia Santiago, dedicó su vida al magisterio formando generaciones de niños y jóvenes de Villa González, su patria chica adoptiva, y de la ciudad de Santiago de los Caballeros, donde se graduó tanto de bachiller como de Maestra Normal primaria.
            </p>

            <p>
              Hoy, su nombre trasciende las aulas de la Escuela Primaria e Intermedia Fernando Valerio para convertirse en el espíritu de la Fundación por la Educación y el Medioambiente, que lleva su nombre. Un homenaje a quien en vida hizo de la pedagogía un puente entre el pasado de las antiguas civilizaciones, la historia del país, y el futuro promisorio al que aspiraba para la niñez y la juventud dominicanas.
            </p>

            <div className="border-l-4 border-primary-500 pl-4 italic text-gray-600">
              "Dieron su vida para que ustedes hoy puedan estar aquí, discutiendo y pensando libremente."
            </div>

            <p>
              Durante más de 30 años, la Profesora Lisendra Germosén Fondeur tuvo en sus manos la tarea más hermosa: explicarles a jóvenes de 3er y 8vo grado de dónde venían para que pudieran decidir hacia dónde ir.
            </p>

            <p>
              En sus clases de Historia Universal e Historia Dominicana, las batallas no eran solo fechas para memorizar; eran lecciones de dignidad. Los héroes dejaban de ser estatuas de mármol para convertirse en personas de carne y hueso.
            </p>

            <p>
              Pero si profunda era su vocación por la historia, infinito era su humanitarismo. Conocía la realidad de cada familia, las penas calladas de sus alumnos y las angustias de padres y madres que veían en ella no solo a la maestra, sino a una consejera de confianza.
            </p>

            <p>
              Cuántas veces, al notar a un alumno distraído o triste, dedicaba esos minutos extras para escuchar y tender una mano. Cuántas veces, al terminar la jornada, se sentaba con un padre o una madre a buscar juntos soluciones para que ningún niño se quedara rezagado.
            </p>

            <div className="bg-primary-50 p-6 rounded-xl">
              <p className="italic text-gray-700">
                "Quien no conoce su historia, no puede amar su tierra; y quien no ama su tierra, no la cuidará jamás."
              </p>
            </div>

            <p>
              Hoy, al poner su nombre a esta fundación que une la educación con la defensa del medioambiente, celebramos la coherencia de su vida.
            </p>

            <p>
              La Fundación Profesora Lisendra Germosén Fondeur nace para sembrar conciencia histórica y ecológica en las nuevas generaciones.
            </p>

            <p className="font-medium text-gray-800">
              Hoy, su legado no descansa en un libro: camina con nosotros, listo para seguir formando guardianes de la memoria histórica y defensores de la naturaleza.
            </p>

          </div>

        </div>
      </section>

    </div>
  )
}

export default BiographyPage