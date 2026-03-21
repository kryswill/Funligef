import santiago_img from '../assets/santiago_img.jpeg'
import abril_img from '../assets/abril_img.jpeg'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="w-full bg-white py-16 px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Sobre Funligef
        </h1>
      </section>

      {/* Misión & Visión */}
      <section className="w-full px-6 lg:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Nuestra Misión
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Fomentar el desarrollo de estrategias y métodos educativos que tiendan a potenciar las capacidades y
              habilidades de la niñez y la juventud dominicanas, con la finalidad de convertirlas en actores determinantes
              del desarrollo del país y del diseño, adopción y ejecución de políticas públicas y privadas de estudio,
              investigación y protección del medio ambiente.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Nuestra Visión
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Aspiramos a ser una institución líder en la transformación educativa y ambiental del país,
              generando impacto positivo a través de programas innovadores, investigación de vanguardia y
              alianzas estratégicas con organizaciones nacionales e internacionales.
            </p>
          </div>

        </div>
      </section>

      {/* Objetivos */}
      <section className="w-full bg-white px-6 lg:px-20 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Nuestros objetivos
        </h2>

        <div className="bg-gray-50 p-6 rounded-xl">
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-2"><span className="text-primary-600">✔</span>Promover y fomentar las formaciones educativas y medio ambientales de los niños y jovenes
              de la Republica dominicana sin distincion de religion, color, sexo o afinidad politica.</li>
            <li className="flex gap-2"><span className="text-primary-600">✔</span>Hacer hincapie en los programas educativos y medio ambientales.</li>
            <li className="flex gap-2"><span className="text-primary-600">✔</span>Participar en actividades educativas y medio ambientales con el proposito de formar y contribuir
              a la socializacion positiva de los jovenes en la Republica dominicana.
            </li>
            <li className="flex gap-2"><span className="text-primary-600">✔</span>Realizar talleres, cursos, seminarios y diplomados y tantas actividades formativas como fueren necesarias.</li>
          </ul>
        </div>
      </section>

      {/* Valores */}
      <section className="w-full px-6 lg:px-20 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10">
          Nuestros Valores
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-primary-50 p-6 rounded-xl hover:shadow-md hover:-translate-y-1 transition">
            <h3 className="text-primary-700 font-semibold mb-2">Educación</h3>
            <p className="text-gray-600">Creemos en el poder transformador de la educación como herramienta para el desarrollo
              humano y social.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl hover:shadow-md hover:-translate-y-1 transition">
            <h3 className="text-green-700 font-semibold mb-2">Sostenibilidad</h3>
            <p className="text-gray-600">Promovemos prácticas que garanticen el equilibrio entre desarrollo económico y
              protección ambiental.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl hover:shadow-md hover:-translate-y-1 transition">
            <h3 className="text-blue-700 font-semibold mb-2">Innovación</h3>
            <p className="text-gray-600">Fomentamos soluciones creativas y tecnológicas para abordar los desafíos
              sociales y ambientales.
            </p>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section className="w-full bg-white px-6 lg:px-20 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Áreas de Enfoque
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">Educación ambiental y sostenibilidad</div>
          <div className="bg-gray-50 p-4 rounded-lg">Investigación y desarrollo de políticas públicas</div>
          <div className="bg-gray-50 p-4 rounded-lg">Capacitación técnica y profesional</div>
          <div className="bg-gray-50 p-4 rounded-lg">Conservación de ecosistemas</div>
          <div className="bg-gray-50 p-4 rounded-lg">Desarrollo comunitario sostenible</div>
          <div className="bg-gray-50 p-4 rounded-lg">Alianzas internacionales para el desarrollo</div>
        </div>
      </section>

      {/* Liderazgo */}
      <section className="w-full px-6 lg:px-20 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10 text-center">
          Nuestro Liderazgo
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition">
            <img
              src={santiago_img}
              className="w-44 h-44 mx-auto rounded-full object-cover object-[50%_25%] mb-4 border-4 border-primary-100"
            />
            <h3 className="text-xl font-semibold">Presidente</h3>
            <p className="text-primary-600">SANTIAGO VALVERDE</p>
          </div>

          <div className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition">
            <img
              src={abril_img}
              className="w-44 h-44 mx-auto rounded-full object-cover object-[50%_25%] mb-4 border-4 border-primary-100"
            />
            <h3 className="text-xl font-semibold">Directora Ejecutiva</h3>
            <p className="text-primary-600">ABRIL VALVERDE</p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default AboutPage