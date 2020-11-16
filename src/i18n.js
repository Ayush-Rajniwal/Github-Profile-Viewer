import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEng from "./locales/en/translations.json";
import translationHindi from "./locales/hi/translations.json";

i18n.use(LanguageDetector).init({
    resources: {
        en: {
            translations: translationEng,
        },
        hi: {
            translations: translationHindi,
        },
    },
    whitelist: ["en", "hi"],
    nonExplicitWhitelist: true,
    load: "languageOnly",
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ",",
    },

    react: {
        wait: true,
    },
});

export default i18n;
