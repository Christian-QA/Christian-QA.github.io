import React, { useRef, useEffect } from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Messages from "../lang/en.tsx";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(Messages);

const Experience: React.FC = () => {
    const { t } = useTranslation();

    const sectionRef = useRef<HTMLDivElement>(null);
    const divRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const targetDiv = entry.target as HTMLDivElement;
                    const divId = targetDiv.id;
                    const divRect = entry.boundingClientRect;
                    const containerRect: {
                        top: number;
                        left: number;
                        bottom: number;
                        x: number;
                        width: number;
                        y: number;
                        right: number;
                        height: number
                    } = sectionRef.current?.getBoundingClientRect() || {
                        x: 0,
                        y: 0,
                        width: window.innerWidth,
                        height: window.innerHeight,
                        top: 0,
                        right: window.innerWidth,
                        bottom: window.innerHeight,
                        left: 0,
                    };
                    const containerHeight = containerRect.height;
                    const containerWidth = containerRect.width;

                    if (divRect.top >= 0 && divRect.top < containerHeight / 3 && divRect.left < containerWidth / 2) {
                        console.log(`Div ${divId} entered the top-left portion of the section`);
                        // Add any additional logic you need here
                    } else if (divRect.bottom > containerHeight / 3 && divRect.bottom <= containerHeight && divRect.left < containerWidth / 2) {
                        console.log(`Div ${divId} entered the top-left portion of the section`);
                        // Add any additional logic you need here
                    }
                });
            },
            {
                root: null, // Observe the divs within the viewport
                rootMargin: '0px', // Adjust this value if you want to change the threshold
                threshold: 0, // Trigger when the target is fully visible
            }
        );

        observerRef.current = observer;

        const observeDivs = () => {
            const divIds = ['div1', 'div2', 'div3']; // Replace with your div IDs

            divIds.forEach((divId) => {
                const divRef = divRefs.current[divId] = document.getElementById(divId) as HTMLDivElement;
                if (divRef) {
                    observer.observe(divRef);
                }
            });
        };

        // Observe the divs when the component mounts
        observeDivs();

        // Observe the divs when the sectionRef changes
        const sectionRefCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    observeDivs();
                }
            });
        };

        const sectionObserver = new IntersectionObserver(sectionRefCallback, {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        });

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        return () => {
            const divIds = ['div1', 'div2', 'div3'];

            divIds.forEach((divId) => {
                const divRef = divRefs.current[divId];
                if (divRef && observerRef.current) {
                    observerRef.current.unobserve(divRef);
                }
            });

            if (sectionRef.current) {
                sectionObserver.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="experience-section" ref={sectionRef}>
            <br /><br /><br />
            <div className="wrapper">
                <div className="large-8 large-centered">
                    <div className="wrapper">
                        <div className="circle" id="div1">
                            <h5>Some Text</h5>
                        </div>
                        <div className="vertical-line"></div>
                    </div>
                </div>
                <div className="large-8 large-centered">
                    <div className="wrapper">
                        <div className="circle" id="div2">
                            <h5>Some Text</h5>
                        </div>
                        <div className="vertical-line"></div>
                    </div>
                </div>
                <div className="large-8 large-centered">
                    <div className="wrapper">
                        <div className="circle" id="div3">
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