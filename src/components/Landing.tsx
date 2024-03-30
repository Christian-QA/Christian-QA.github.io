import React from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Messages from "../lang/en.tsx";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(Messages);

const Landing: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="section-content">
            <div className="landing-container">
                <div className="landing-text">
                    <h2>{t('about.title')}</h2>
                    <p className="subtitle">{t('about.subtitle')}</p>
                    <p className="tagline">{t('about.tagline')}</p>
                </div>
            </div>
        </div>
    );
};

export default Landing;