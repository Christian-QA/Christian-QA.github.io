import React from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Messages from "../lang/en.tsx";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(Messages);

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="about-section">
            <div className="image-container">
                <div className="image-placeholder">
                    <div className="text-overlay">
                        <h2>{t('about.title')}</h2>
                        <p className="subtitle">{t('about.subtitle')}</p>
                        <p className="tagline">{t('about.tagline')}</p>
                    </div>
                </div>
            </div>
            <div className="text-container">
                <p>{t('about.paragraphOne')}</p>
                <br></br>
                <p>{t('about.paragraphTwo')}.</p>
            </div>
        </section>
    );
};

export default About;