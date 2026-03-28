import { useTranslation } from '@/i18n/index'

export default function TestTranslations() {
  const { t, locale, setLocale } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Translation Test</h1>
        <p className="mb-4">Current locale: {locale}</p>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Navigation</h2>
          <p>Home: {t.navigation.home}</p>
          <p>Bridal: {t.navigation.bridal}</p>
          <p>Language: {t.navigation.language}</p>
        </div>

        <div className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">Hero</h2>
          <p>Title: {t.hero.title}</p>
          <p>Bridal Collection: {t.hero.bridalCollection}</p>
        </div>

        <div className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">Footer</h2>
          <p>Brand Description: {t.footer.brandDescription}</p>
          <p>Bridal Dresses: {t.footer.collections.bridalDresses}</p>
        </div>

        <div className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">Language Switcher</h2>
          <div className="flex gap-4">
            <button 
              onClick={() => setLocale('en')}
              className={`px-4 py-2 rounded ${locale === 'en' ? 'bg-black text-white' : 'bg-gray-200'}`}
            >
              English
            </button>
            <button 
              onClick={() => setLocale('al')}
              className={`px-4 py-2 rounded ${locale === 'al' ? 'bg-black text-white' : 'bg-gray-200'}`}
            >
              Albanian
            </button>
            <button 
              onClick={() => setLocale('de')}
              className={`px-4 py-2 rounded ${locale === 'de' ? 'bg-black text-white' : 'bg-gray-200'}`}
            >
              German
            </button>
            <button 
              onClick={() => setLocale('ru')}
              className={`px-4 py-2 rounded ${locale === 'ru' ? 'bg-black text-white' : 'bg-gray-200'}`}
            >
              Russian
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}