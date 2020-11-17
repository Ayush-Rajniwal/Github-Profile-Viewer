import NavContainer from "./app/containers/NavContainer";
import { useTranslation } from "react-i18next";

function App() {
    const { i18n } = useTranslation();
    i18n.changeLanguage(navigator.language || navigator.userLanguage);
    return (
        <div className={"app"}>
            <NavContainer />
        </div>
    );
}

export default App;
