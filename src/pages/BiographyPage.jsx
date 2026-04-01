import LisendraPhoto from '../assets/Lisendra_photo.jpeg'
import { useTranslation } from '../contexts/LanguageContext'

const BiographyPage = () => {
  const { t } = useTranslation()
  const paragraphs = t('biography.paragraphs')

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="w-full bg-white py-16 px-6 lg:px-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('biography.title')}
        </h1>
        <p className="text-lg text-gray-600">
          {t('biography.subtitle')}
        </p>
      </section>

      {/* Content */}
      <section className="w-full px-6 lg:px-20 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          <div className="flex flex-col items-center lg:items-start">
            <img
              src={LisendraPhoto}
              alt="Lisendra Germosén Fondeur"
              className="w-full max-w-[420px] rounded-2xl shadow-xl mb-6"
            />
          </div>

          <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed text-justify">

            <p className="text-lg text-gray-800 font-medium">
              {paragraphs[0]}
            </p>

            <p>{paragraphs[1]}</p>
            <p>{paragraphs[2]}</p>

            <div className="border-l-4 border-primary-500 pl-4 italic text-gray-600">
              {t('biography.quote1')}
            </div>

            <p>{paragraphs[3]}</p>
            <p>{paragraphs[4]}</p>
            <p>{paragraphs[5]}</p>
            <p>{paragraphs[6]}</p>

            <div className="bg-primary-50 p-6 rounded-xl">
              <p className="italic text-gray-700">
                {t('biography.quote2')}
              </p>
            </div>

            <p>{paragraphs[7]}</p>
            <p>{paragraphs[8]}</p>

            <p className="font-medium text-gray-800">
              {paragraphs[9]}
            </p>

          </div>

        </div>
      </section>

    </div>
  )
}

export default BiographyPage