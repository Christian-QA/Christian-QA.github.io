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
                <img src="src/assets/portfolio_image.jpg" alt="Me"/>
            </div>
            <div className="text-container">
                <h2>{t('about.title')}</h2>
                <p className="subtitle">{t('about.subtitle')}</p>
                <p className="tagline">{t('about.tagline')}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec bibendum eros, vel malesuada sapien.
                    Nullam ac dolor nec tellus bibendum pretium.</p>
                <p>Etiam eget ex vel neque sollicitudin rutrum. Suspendisse potenti. Fusce vel enim ac eros bibendum
                    facilisis. Nunc facilisis, ex vel consequat tempus, risus tellus bibendum elit, sed pharetra ligula
                    ipsum sit amet nisl.</p>
            </div>
        </section>
    );
};

export default About;