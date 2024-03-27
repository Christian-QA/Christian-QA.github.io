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
                <img src="/src/assets/portfolio_image.jpg" alt="me" className="portfolio-image"></img>
                    <div className="text-overlay">
                        <h2>{t('about.title')}</h2>
                        <p className="subtitle">{t('about.subtitle')}</p>
                        <p className="tagline">{t('about.tagline')}</p>
                    </div>

            </div>
            <div className="text-container">
                <p>{t('about.paragraphOne')}</p>
                <br></br>
                <p>{t('about.paragraphTwo')}.</p>

                <div className="row-grid">
                    <div className="column-grid">
                        <img src="/src/assets/language-logos/scala-ar21.svg" alt="scala"/>
                        <img src="/src/assets/language-logos/java-ar21.svg" alt="java"/>
                        <img src="/src/assets/language-logos/kotlinlang-ar21.svg" alt="typescript"/>
                    </div>
                    <div className="column-grid">
                        <img src="/src/assets/language-logos/javascript-ar21.svg" alt="javascript"/>
                        <img src="/src/assets/language-logos/dartlang-official.svg" alt="dart"/>
                    </div>
                    <div className="column-grid">
                        <img src="/src/assets/language-logos/typescriptlang-icon.svg" alt="javascript"/>
                        <img src="/src/assets/language-logos/python-official.svg" alt="python"/>
                    </div>
                    <div className="column-grid">
                        <img src="/src/assets/language-logos/w3_html5-ar21.svg" alt="html"/>
                        <img src="/src/assets/language-logos/w3_css-ar21.svg" alt="css"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;