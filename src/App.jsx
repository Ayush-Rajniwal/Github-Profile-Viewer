import React, { useEffect } from 'react';
import NavContainer from '@containers/NavContainer';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

function App() {
    const { i18n } = useTranslation();
    const lang = useSelector((state) => state.ui.lang);

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    return (
        <div className="app">
            <NavContainer />
        </div>
    );
}

export default App;
