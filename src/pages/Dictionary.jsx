import { useTranslation } from '../contexts/LanguageContext'

const Dictionary = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-primary-600 to-primary-400 py-20 px-6 lg:px-20 text-center text-white">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          {t('dictionary.title')}
        </h1>
        <p className="text-xl lg:text-2xl font-light max-w-4xl mx-auto">
          {t('dictionary.subtitle')}
        </p>
      </section>

      {/* Definition */}
      <section className="w-full px-6 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t('dictionary.definition')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t('dictionary.definitionText')}
            </p>
            
            <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500">
              <p className="text-gray-700 italic">
                {t('dictionary.beforeDefinition')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="w-full bg-gray-50 px-6 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            {t('dictionary.principles')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t('dictionary.principlesList').map((principle, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {principle}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full bg-white px-6 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            {t('dictionary.benefits')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {t('dictionary.benefitsList').map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {benefit}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="w-full bg-gray-50 px-6 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            {t('dictionary.applications')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t('dictionary.applicationsList').map((application, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m5-4v1m0 0v-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {application}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dictionary