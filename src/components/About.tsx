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
        <div className="section-content">
            <h2 className="header">{t("about.header")}</h2>
            <div className="image-container">
                <img src="/src/assets/portfolio_image.png" alt="me" className="portfolio-image"></img>
                <div className="text-overlay">
                {/*Do I still want a text overlay?*/}
                </div>
            </div>
            <div className="text-container">
                <div className="about-me"><h1>{t('about.aboutMe')}</h1></div>
                <div className="about-story">
                    <p>{t('about.paragraphOne')}</p>
                    <br></br>
                    <p>{t('about.paragraphTwo')}</p>
                </div>
            </div>
        </div>
    );
};

export default About;