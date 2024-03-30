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
                    <h2>{t('landing.title')}</h2>
                    <p className="subtitle">{t('landing.subtitle')}</p>
                    <p className="tagline">{t('landing.tagline')}</p>
                </div>
                <div className="language-grid" id="languages">
                    <div className="language-container">
                        <img src="/src/assets/language-logos/scala-ar21.svg" alt="scala" className="language-image"/>
                    </div>
                    <div className="language-container">
                        <img src="/src/assets/language-logos/java-ar21.svg" alt="java" className="language-image"/>
                    </div>
                    <div className="language-container">
                        <img src="/src/assets/language-logos/kotlinlang-ar21.svg" alt="kotlin"
                             className="language-image"/>
                    </div>
                    <div className="language-container">
                        <img src="/src/assets/language-logos/javascript-ar21.svg" alt="javascript"
                             className="language-image"/>
                    </div>
                    <div className="language-container">
                        <img src="/src/assets/language-logos/dartlang-official.svg" alt="dart"
                             className="language-image"/>
                    </div>
                    <div className="language-container">
                        <img src="/src/assets/language-logos/typescriptlang-icon.svg" alt="typescript"
                             className="language-image"/>
                    </div>
                    <div className="language-container">
                        <img src="/src/assets/language-logos/w3_html5-ar21.svg" alt="html" className="language-image"/>
                    </div>
                    <div className="language-container">
                        <img src="/src/assets/language-logos/w3_css-ar21.svg" alt="css" className="language-image"/>
                    </div>
                    <div className="language-container">
                        <img src="/src/assets/language-logos/python-official.svg" alt="css" className="language-image"/>
                    </div>
                    {/*    TODO - Add swift for loyal stamper iOS version when developed   */}
                </div>
            </div>
        </div>
    );
};

export default Landing;