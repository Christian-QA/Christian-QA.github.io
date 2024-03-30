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
            <div className="language-image first">
                <img src="/src/assets/language-logos/scala-ar21.svg" alt="scala"/>
            </div>
            <div className="language-image second">
                <img src="/src/assets/language-logos/java-ar21.svg" alt="java"/>
            </div>
            <div className="language-image third">
                <img src="/src/assets/language-logos/kotlinlang-ar21.svg" alt="kotlin"/>
            </div>
            <div className="language-image fourth">
                <img src="/src/assets/language-logos/javascript-ar21.svg" alt="javascript"/>
            </div>
            <div className="language-image fifth">
                <img src="/src/assets/language-logos/dartlang-official.svg" alt="dart"/>
            </div>
            <div className="language-image sixth">
                <img src="/src/assets/language-logos/typescriptlang-icon.svg" alt="typescript"/>
            </div>
            <div className="language-image seventh">
                <img src="/src/assets/language-logos/w3_html5-ar21.svg" alt="html5"/>
            </div>
            <div className="language-image eighth">
                <img src="/src/assets/language-logos/w3_css-ar21.svg" alt="css"/>
            </div>
            {/*    TODO - Add swift for loyal stamper iOS version when developed, and Python   */}


            <div className="landing-container">
                <div className="landing-text">
                    <h2>{t('landing.title')}</h2>
                    <p className="subtitle">{t('landing.subtitle')}</p>
                    <p className="tagline">{t('landing.tagline')}</p>
                </div>
            </div>
        </div>
    );
};

export default Landing;