import React, { useRef, useEffect } from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Messages from "../lang/en.tsx";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(Messages);

const Experience: React.FC = () => {
    const { t } = useTranslation();

    const divRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const divRect = entry.boundingClientRect;
                        const windowHeight = window.innerHeight;

                        if (divRect.top < windowHeight / 2 || divRect.bottom > windowHeight / 2) {
                            console.log('Div entered the top half of the screen');
                            // Add any additional logic you need here
                        }
                    }
                });
            },
            {
                root: null, // Use the browser viewport as the root
                rootMargin: '0px', // Adjust this value if you want to change the threshold
                threshold: 0, // Trigger when the target is fully visible
            }
        );

        observerRef.current = observer;

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current && observerRef.current) {
                observerRef.current.unobserve(divRef.current);
            }
        };
    }, []);

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
                <div className="large-8 large-centered" ref={divRef}>
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