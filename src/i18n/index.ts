import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language files
import en from '../assets/locales/en.json';
import ja from '../assets/locales/ja.json';
import vi from '../assets/locales/vi.json';

// Import language utilities
import { 
  getPathLanguage,
  getDomainLanguage, 
  getSupportedLanguages,
  setLanguageByUrl,
  getDeviceLocale
} from './languageUtils';

const resources = {
  en: {
    translation: en
  },
  ja: {
    translation: ja
  },
  vi: {
    translation: vi
  }
};

// Determine initial language based on priority
const getInitialLanguage = (): string => {
  // 1. Check URL parameter (for testing)
  const urlLang = setLanguageByUrl();
  if (urlLang) {
    return urlLang;
  }
  
  // 2. Check path-based language (localhost:3000/en/...)
  const pathLang = getPathLanguage();
  if (pathLang) {
    return pathLang;
  }
  
  // 3. Check domain-based language
  const domainLang = getDomainLanguage();
  if (domainLang) {
    return domainLang;
  }

  // 4. Check localStorage
  const storedLang = localStorage.getItem('i18nextLng');
  if (storedLang && getSupportedLanguages().includes(storedLang)) {
    return storedLang;
  }
  
  // 5. Check device locale
  const deviceLang = getDeviceLocale();
  if (deviceLang) {
    return deviceLang;
  }
  
  // 6. Fallback to default
  return 'en';
};

const initialLanguage = getInitialLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage, 
    fallbackLng: 'en',
    debug: false, // Set to true for debugging

    interpolation: {
      escapeValue: false,
    },

    // Custom detection function
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage']
    },

    // React specific options
    react: {
      useSuspense: false
    }
  });

// Function to change language and update URL
export const changeLanguage = (language: string) => {
  if (getSupportedLanguages().includes(language)) {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
    
    // Update URL path if needed
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/').filter(segment => segment);
    
    // Remove current language from path if it exists
    if (pathSegments.length > 0 && getSupportedLanguages().includes(pathSegments[0])) {
      pathSegments.shift();
    }
    
    // Add new language to path
    const newPath = `/${language}/${pathSegments.join('/')}`;
    window.history.pushState({}, '', newPath);
  }
};


export default i18n;
