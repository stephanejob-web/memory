import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fr from './locales/fr.json'
import en from './locales/en.json'
import vi from './locales/vi.json'
import es from './locales/es.json'
import ko from './locales/ko.json'
import hi from './locales/hi.json'
import it from './locales/it.json'
import zh from './locales/zh.json'
import ar from './locales/ar.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: fr
      },
      en: {
        translation: en
      },
      vi: {
        translation: vi
      },
      es: {
        translation: es
      },
      ko: {
        translation: ko
      },
      hi: {
        translation: hi
      },
      it: {
        translation: it
      },
      zh: {
        translation: zh
      },
      ar: {
        translation: ar
      }
    },
    lng: 'fr', // langue par défaut
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  })

export default i18n



