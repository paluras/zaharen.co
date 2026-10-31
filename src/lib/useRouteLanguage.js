import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LANGUAGES = ["en", "ro"];

// The language lives in the URL (/epk/ro, /epk/en) so a shared link opens
// in the language it was sent in. Pages using this need a `:lang?` route.
export default function useRouteLanguage(basePath) {
  const { lang } = useParams();
  const navigate = useNavigate();
  const isValid = lang === undefined || LANGUAGES.includes(lang);
  const language = isValid && lang ? lang : "en";

  useEffect(() => {
    if (!isValid) navigate(basePath, { replace: true });
  }, [isValid, basePath, navigate]);

  useEffect(() => {
    const previousLanguage = document.documentElement.lang;
    document.documentElement.lang = language;
    return () => {
      document.documentElement.lang = previousLanguage;
    };
  }, [language]);

  const setLanguage = useCallback(
    (next) => navigate(`${basePath}/${next}`, { replace: true }),
    [basePath, navigate]
  );

  return [language, setLanguage];
}
