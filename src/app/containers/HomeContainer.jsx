import React from "react";
import { useTranslation } from "react-i18next";

function HomeContainer() {
    const { t } = useTranslation();
    return (
        <div className="home">
            <h1 className="home__title">{t("Page_title")}</h1>
            <h3>{t("Page_subtitle")}</h3>
        </div>
    );
}

export default HomeContainer;
