import React from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Messages from "../lang/en.tsx";
import '../styling/Landing.css'
import Scala from "../assets/language-logos/scala-ar21.svg"
import Java from "../assets/language-logos/java-ar21.svg"
import Kotlin from "../assets/language-logos/kotlinlang-ar21.svg"
import Dart from "../assets/language-logos/dartlang-official.svg"
import JS from "../assets/language-logos/javascript-ar21.svg"
import TS from "../assets/language-logos/typescriptlang-icon.svg"
import HTML from "../assets/language-logos/w3_html5-ar21.svg"
import CSS from "../assets/language-logos/w3_css-ar21.svg"

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
                        <img src={Scala} alt="scala" className="language-image"/>
                    </div>
                    <div className="language-container">
                        <img src={Java} alt="java" className="language-image"/>
                    </div>
                    <div className="language-container">
                        <img src={Kotlin} alt="kotlin"
                             className="language-image"/>
                    </div>
                    <div className="language-container">
                        <img src={Dart} alt="dart"
                             className="language-image"/>
                    </div>
                    <div className="language-container">
                        <img src={JS} alt="javascript"
                             className="language-image typescript"/>
                    </div>
                    <div className="language-container">
                        <img src={TS} alt="typescript"
                             className="language-image typescript"/>
                    </div>
                    <div className="language-container">
                        <img src={HTML} alt="html" className="language-image"/>
                    </div>
                    <div className="language-container">
                        <img src={CSS} alt="css" className="language-image"/>
                    </div>
                    {/*    TODO - Add Python and Swift when the respective projects have released work */}
                </div>
            </div>
        </div>
    );
};

export default Landing;