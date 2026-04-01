import santiago_img from '../assets/santiago_img.jpeg'
import abril_img from '../assets/abril_img.jpeg'
import { useTranslation } from '../contexts/LanguageContext'

const AboutPage = () => {
  const { t } = useTranslation()
  const values = Object.values(t('about.valuesList'))

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-primary-600 to-primary-400 py-20 px-6 lg:px-20 text-center text-white">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          {t('about.title')}
        </h1>
      </section>

      {/* Mission & Vision */}
      <section className="w-full px-6 lg:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition border-t-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">
              {t('about.mission')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('about.missionText')}
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition border-t-4 border-green-500">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              {t('about.vision')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('about.visionText')}
            </p>
          </div>

        </div>
      </section>

      {/* Objectives */}
      <section className="w-full bg-white px-6 lg:px-20 py-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          {t('about.objectives')}
        </h2>

        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-sm">
          <ul className="space-y-4 text-gray-700">
            {t('about.objectivesList').map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="w-full px-6 lg:px-20 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          {t('about.values')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-lg font-bold text-primary-700 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section className="w-full bg-white px-6 lg:px-20 py-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          {t('about.areas')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t('about.areasList').map((area, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center font-medium text-gray-700"
            >
              {area}
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="w-full px-6 lg:px-20 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          {t('about.leadership')}
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {[{
            img: santiago_img,
            name: 'SANTIAGO VALVERDE',
            role: t('about.president')
          },
          {
            img: abril_img,
            name: 'ABRIL VALVERDE',
            role: t('about.director')
          }].map((person, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-44 h-44 mx-auto rounded-full object-cover object-[50%_25%] mb-4 border-4 border-primary-10"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {person.role}
              </h3>
              <p className="text-primary-600 font-medium">
                {person.name}
              </p>
            </div>
          ))}

        </div>
      </section>

    </div>
  )
}

export default AboutPage