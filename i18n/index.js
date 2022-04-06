const TranslationsEN = require('./translations.en.json');
const TranslationsPTBR = require('./translations.ptbr.json');

const i18n = {
  translations: {
    en: TranslationsEN,
    pt: TranslationsPTBR,
  },
  defaultLang: 'en',
  useBrowserDefault: true,
};

module.exports = i18n;
