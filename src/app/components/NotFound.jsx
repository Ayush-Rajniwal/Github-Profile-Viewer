import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NotFound() {
    const { t } = useTranslation();
    return (
        <div className="nf u__text--center">
            <div className="nf__title">404</div>
            <div className="nf__msg">
                { t('Profile not found!!')}
            </div>
            <Link className="nf__link" to="/">
                {t('Back to Home')}
            </Link>
        </div>
    );
}

export default NotFound;
