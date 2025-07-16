import GameList from "../page/GameList";
import Login from "../page/Login";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import SignUp from "../page/SignUp";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getSupportedLanguages } from "../i18n/languageUtils";

// Component wrapper để xử lý locale
const LocaleWrapper = ({ children }: { children: React.ReactNode }) => {
  const { locale } = useParams<{ locale: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    const supportedLanguages = getSupportedLanguages();
    if (locale && supportedLanguages.includes(locale)) {
      // Only change language if it's different from current
      if (i18n.language !== locale) {
        i18n.changeLanguage(locale);
        localStorage.setItem('i18nextLng', locale);
      }
    }
  }, [locale, i18n]);

  return <>{children}</>;
};

const Navigation = () => {
  const routes = [
    {
      name: 'home',
      path: '/',
      component: GameList
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'signup',
      path: '/signup',
      component: SignUp
    }
  ];

  return (
    <Routes>
      {/* Redirect root to default locale */}
      <Route path="/" element={<Navigate to="/en" replace />} />
      
      {/* Home route with locale */}
      <Route 
        path="/:locale" 
        element={
          <LocaleWrapper>
            <GameList />
          </LocaleWrapper>
        } 
      />
      
      {/* Other routes with locale */}
      {routes.slice(1).map((route) => (
        <Route
          key={`${route.name}-localized`}
          path={`/:locale${route.path}`}
          element={
            <LocaleWrapper>
              <route.component />
            </LocaleWrapper>
          }
        />
      ))}
      
      {/* Fallback routes without locale - redirect to default locale */}
      {routes.slice(1).map((route) => (
        <Route
          key={`${route.name}-redirect`}
          path={route.path}
          element={<Navigate to={`/en${route.path}`} replace />}
        />
      ))}
    </Routes>
  );
};

export default Navigation;