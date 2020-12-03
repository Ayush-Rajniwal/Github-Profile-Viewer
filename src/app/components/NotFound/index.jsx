import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NotFound() {
    const { t } = useTranslation();

    return (
        <div className="notFound u__text--center">
            <div className="notFound__title">404</div>
            <div className="notFound__msg">{t('Prof_not_found')}</div>
            <Link className="notFound__link" to="/">
                {t('Back_home')}
            </Link>
        </div>
    );
}

export default NotFound;
