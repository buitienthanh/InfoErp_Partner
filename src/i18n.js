import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationVN from './i18n/vn/translation.json';
import translationEN from './i18n/en/translation.json';
import translationKr from './i18n/kr/translation.json';


// the translations
const resources = {
  vn: {
    translation: translationVN
  },
  en: {
    translation: translationEN
  },
  kr: {
    translation: translationKr
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vn",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;