import React from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Messages from "../lang/en.tsx";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(Messages);

const Experience: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="experience-section">
            <br/><br/><br/>
            <div className="wrapper">
                <div className="large-8 large-centered">
                    <div className="wrapper">
                        <div className="circle">
                            <h5>Some Text</h5>
                        </div>
                        <div className="vertical-line"></div>
                    </div>
                </div>
                <div className="large-8 large-centered">
                    <div className="wrapper">
                        <div className="circle">
                            <h5>Some Text</h5>
                        </div>
                        <div className="vertical-line"></div>
                    </div>
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

export default Experience;