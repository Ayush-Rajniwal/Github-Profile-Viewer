import { useTranslation, initReactI18next } from "react-i18next";

function App() {
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(navigator.language || navigator.userLanguage);
    return <p>{t("Hello World")}</p>;
}

export default App;
