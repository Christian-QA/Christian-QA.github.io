import React from 'react';
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import Messages from "../lang/en.tsx";
import '../styling/About.css'
import PortfolioImage from "../assets/portfolio_image.jpg"
import GitHub from "../assets/socials/github.svg"
import LinkedIn from "../assets/socials/linkedin.svg"
import Upwork from "../assets/socials/upwork.svg"

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
                        <br/>
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/christian-redfern-6aa4291a4/"
                               className="fa fa-linkedin"><img src={LinkedIn} alt="linkedin" className="icon"/></a>
                            <a href="https://github.com/Christian-QA" className="fa fa-github"><img src={GitHub}
                                                                                                    alt="github"
                                                                                                    className="icon"/></a>
                            <a href="https://www.upwork.com/freelancers/~01c874e99ae1580bad?mp_source=share"
                               className="fa fa-upwork"><img src={Upwork}
                                                             alt="upwork" className="icon"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;