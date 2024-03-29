import React, { useState, useEffect, useRef } from 'react';
import i18n from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import Messages from '../lang/en.tsx';

i18n.use(initReactI18next).init(Messages);

const Experience: React.FC = () => {
    const { t } = useTranslation();

    const [showBoxes, setShowBoxes] = useState<boolean[]>([]);
    const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const triggerBottom = (window.innerHeight / 5) * 4;
            const newShowBoxes = boxRefs.current.map((box) => {
                if (box) {
                    const topBox = box.getBoundingClientRect().top;
                    return topBox < triggerBottom;
                }
                return false;
            });
            setShowBoxes(newShowBoxes);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const addBoxRef = (ref: HTMLDivElement | null, index: number) => {
        boxRefs.current[index] = ref;
    };

    const descriptionBoxes = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // Loop through all description box elements with the desired class
        const elements = document.querySelectorAll(".description-box");

        elements.forEach((element) => {
            const button = element.querySelector("#timeline button");
            const buttonFront = element.querySelector("#timeline .button_front");
            if (button) {
                const handleClick = () => {
                    element.classList.toggle("active");
                    button.classList.toggle("active_button");

                    buttonFront.innerHTML = buttonFront.classList.contains("active_button")
                        ? t('experience.read-less')
                        : t('experience.read-more');
                };
                button.addEventListener("click", handleClick);

                // Cleanup function to remove event listener on unmount
                return () => button.removeEventListener("click", handleClick);
            }
        });
    }, [descriptionBoxes.current]); // Dependency on descriptionBoxes

    const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017]

    const headings: string[] = []
    const entries: string[] = []

    years.forEach(year => {
        headings.push(`experience.heading.${year}`);
        entries.push(`experience.entry.${year}`);
        console.log(year);
    });

    return (
        <div className="experience-section" id="timeline">
            <ul className="timeline-ul">
                {years.map((year, index) => (
                    <li key={index}>
                        <i className="experience-item">{year}</i>
                        <div className={`box ${showBoxes[index] ? 'show' : ''}`} ref={(ref) => addBoxRef(ref, index)}>
                            <h3 className="title">{t(headings[index])}</h3>
                            <div className="description-box">
                                <p>{t(entries[index])}</p>
                                <button className="button">
                                    <div className="button_front">read more</div>
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;