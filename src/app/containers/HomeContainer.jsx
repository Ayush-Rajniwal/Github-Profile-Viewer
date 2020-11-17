import React from "react";
import { useTranslation } from "react-i18next";

function HomeContainer() {
    const { t } = useTranslation();
    return (
        <div className={"home"}>
            <h1 className={"home__title"}>{t("Github Profile Viewer")}</h1>
            <h3>{t("Search, Follow & View Profiles")}</h3>
        </div>
    );
}

export default HomeContainer;
