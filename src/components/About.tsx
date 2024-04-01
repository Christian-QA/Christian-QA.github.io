import React from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Messages from "../lang/en.tsx";
import '../styling/About.css'
import PortfolioImage from "../assets/portfolio_image.jpg"

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(Messages);

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="section-content">
            <h2 className="header">{t("about.header")}</h2>
            <div className="about-section">
                <div className="image-container">
                    <img src={PortfolioImage} alt="me" className="portfolio-image"></img>
                    <div className="text-overlay">
                        {/*Do I still want a text overlay?*/}
                    </div>
                </div>
                <div className="text-container">
                    <div className="about-story">
                        <h2>{t('about.subheading')}</h2>
                        <hr/>
                        <br/>
                        <p>{t('about.paragraphOne')}</p>
                        <br/>
                        <p>{t('about.paragraphTwo')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;