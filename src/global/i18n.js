import i18n from 'react-native-i18n';
import pt from './locales/pt';
import en from './locales/en';

i18n.fallbacks = true;

i18n.translations = {
  pt,
  en
};

export default i18n;