// Language detection utilities
export interface LanguageInfo {
  currentLanguage: string;
  detectionSource: 'path' | 'domain' | 'localStorage' | 'device' | 'fallback';
  deviceLocale: string;
  domain: string;
  subdomain: string;
  pathLanguage: string | null;
  supportedLanguages: string[];
}

export const getSupportedLanguages = (): string[] => ['en', 'ja', 'vi'];

export const getPathLanguage = (): string | null => {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split('/').filter(segment => segment);
  
  // Check if first segment is a supported language
  if (pathSegments.length > 0) {
    const firstSegment = pathSegments[0].toLowerCase();
    const supportedLanguages = getSupportedLanguages();
    
    if (supportedLanguages.includes(firstSegment)) {
      return firstSegment;
    }
  }
  
  return null;
};

export const getDomainLanguage = (): string | null => {
  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];
  
  // Map subdomains to languages
  const domainLanguageMap: { [key: string]: string } = {
    'en': 'en',
    'english': 'en',
    'ja': 'ja',
    'jp': 'ja', 
    'japan': 'ja',
    'japanese': 'ja',
    'vi': 'vi',
    'vn': 'vi',
    'vietnam': 'vi',
    'vietnamese': 'vi'
  };
  
  return domainLanguageMap[subdomain.toLowerCase()] || null;
};

export const getDeviceLocale = (): string => {
  // Get device locale from various sources
  const locale = 
    navigator.language ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator as any).userLanguage ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator as any).browserLanguage ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator as any).systemLanguage ||
    'en-US';
    
  // Extract language code (e.g., 'en-US' -> 'en')
  const languageCode = locale.split('-')[0].toLowerCase();
  
  // Map common language codes to supported languages
  const localeMap: { [key: string]: string } = {
    'en': 'en',
    'ja': 'ja',
    'jp': 'ja',
    'vi': 'vi',
    'zh': 'en', // Fallback to English for Chinese
    'ko': 'en', // Fallback to English for Korean
    'th': 'en', // Fallback to English for Thai
    'fr': 'en', // Fallback to English for French
    'de': 'en', // Fallback to English for German
    'es': 'en', // Fallback to English for Spanish
    'pt': 'en', // Fallback to English for Portuguese
    'ru': 'en'  // Fallback to English for Russian
  };
  
  return localeMap[languageCode] || 'en';
};

export const getLanguageInfo = (): LanguageInfo => {
  const domain = window.location.hostname;
  const subdomain = domain.split('.')[0];
  const deviceLocale = navigator.language || 'en-US';
  const supportedLanguages = getSupportedLanguages();
  const pathLanguage = getPathLanguage();
  
  // Determine current language and source
  let currentLanguage = 'en';
  let detectionSource: 'path' | 'domain' | 'localStorage' | 'device' | 'fallback' = 'fallback';
  
  // 1. Check path-based language (highest priority)
  if (pathLanguage) {
    currentLanguage = pathLanguage;
    detectionSource = 'path';
  }
  // 2. Check domain-based language
  else {
    const domainLang = getDomainLanguage();
    if (domainLang) {
      currentLanguage = domainLang;
      detectionSource = 'domain';
    }
    // 3. Check localStorage
    else {
      const storedLang = localStorage.getItem('i18nextLng');
      if (storedLang && supportedLanguages.includes(storedLang)) {
        currentLanguage = storedLang;
        detectionSource = 'localStorage';
      }
      // 4. Check device locale
      else {
        const deviceLang = getDeviceLocale();
        currentLanguage = deviceLang;
        detectionSource = 'device';
      }
    }
  }
  
  return {
    currentLanguage,
    detectionSource,
    deviceLocale,
    domain,
    subdomain,
    pathLanguage,
    supportedLanguages
  };
};

// URL-based language switching for testing
export const setLanguageByUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  
  if (langParam && getSupportedLanguages().includes(langParam)) {
    localStorage.setItem('i18nextLng', langParam);
    return langParam;
  }
  
  return null;
};

// Helper to log language detection details
export const logLanguageDetection = () => {
  const info = getLanguageInfo();

  return info;
};
