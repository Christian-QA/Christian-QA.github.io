import React from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Messages from "../lang/en.tsx";
import 'w3-css/w3.css';
import '../styling/About.css'

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(Messages);

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="section-content">
            <h2 className="header">{t("about.header")}</h2>
            <div className="w3-main w3-padding-large">
            <div className="w3-padding-32 w3-content" id="portfolio">
                <nav className="w3-sidebar w3-hide-medium w3-hide-small image-container">
                    <div className="bgimg"><img src="/src/assets/portfolio_image_trim.png" alt="me"/></div>
                </nav>

                <div className="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
                    <h2>About</h2>
                    <hr className="w3-opacity"/>
                    <p>{t('about.paragraphOne')}</p>
                    <br></br>
                    <p>{t('about.paragraphTwo')}</p>
                    <div className="w3-row w3-center w3-dark-grey w3-padding-16 w3-section">
                        <div className="w3-quarter w3-section">
                            <span className="w3-xlarge">14+</span>
                            <br/>
                            Partners
                        </div>
                        <div className="w3-quarter w3-section">
                            <span className="w3-xlarge">55+</span>
                            <br/>
                            Projects Done
                        </div>
                        <div className="w3-quarter w3-section">
                            <span className="w3-xlarge">89+</span>
                            <br/>
                            Happy Clients
                        </div>
                        <div className="w3-quarter w3-section">
                            <span className="w3-xlarge">150+</span>
                            <br/>
                            Meetings
                        </div>
                    </div>
                    <button className="w3-button w3-light-grey w3-padding-large w3-section">
                        <i className="fa fa-download"></i> Download Resume
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;