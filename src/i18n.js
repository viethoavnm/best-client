import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import localEn from './locales/en/translation.json';
import localVi from './locales/vi/translation.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: localEn
  },
  vi: {
    translation: localVi
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: 'vi',
    fallbackLng: 'vi',
    detection: {
      order: ['cookie'],
      caches: ['cookie'],
      lookupCookie: 'language'
    },
    // keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
