import { useNavigate, useParams } from 'react-router-dom';
import { getSupportedLanguages } from '../i18n/languageUtils';
import { changeLanguage } from '../i18n';

export const useLocaleNavigation = () => {
  const navigate = useNavigate();
  const { locale } = useParams<{ locale: string }>();
  const currentLocale = locale || 'en';

  const navigateWithLocale = (path: string) => {
    const fullPath = path.startsWith('/') ? `/${currentLocale}${path}` : `/${currentLocale}/${path}`;
    navigate(fullPath);
  };

  const changeLocaleAndNavigate = (newLocale: string) => {
    if (getSupportedLanguages().includes(newLocale)) {
      const pathWithoutLocale = window.location.pathname.replace(`/${currentLocale}`, '') || '/';
      const newPath = `/${newLocale}${pathWithoutLocale}`;
      
      // Change i18n language
      changeLanguage(newLocale);
      
      // Navigate to new path
      navigate(newPath);
    }
  };

  return {
    navigateWithLocale,
    changeLocale: changeLocaleAndNavigate,
    currentLocale
  };
};
