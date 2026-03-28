import { useTranslation } from '../contexts/LanguageContext'

const LanguageSelector = () => {
  const { language, setLanguage } = useTranslation()

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-2 border border-gray-200">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">{languages.find(lang => lang.code === language)?.flag}</span>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="text-sm border-0 bg-transparent focus:outline-none focus:ring-0 cursor-pointer"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default LanguageSelector
