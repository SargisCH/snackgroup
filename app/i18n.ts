import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../public/locales/en/common.json';
import hy from '../public/locales/hy/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: en,
      },
      hy: {
        common: hy,
      },
    },
    fallbackLng: 'en',
    lng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
