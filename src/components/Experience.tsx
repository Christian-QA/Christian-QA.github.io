import React, {useState, useEffect, useMemo, useRef} from 'react';
import i18n from 'i18next';
import {initReactI18next, Trans, useTranslation} from 'react-i18next';
import Messages from '../lang/en.tsx';
import '../styling/Experience.css'

i18n.use(initReactI18next).init(Messages);

const useShowBoxes = () => {
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

    return { showBoxes, addBoxRef };
};

const useDescriptionBoxes = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const descriptionBoxElements = document.querySelectorAll('.description-box');
        descriptionBoxElements.forEach((element) => {
            const button = element.querySelector('#timeline button');
            const buttonFront = element.querySelector('#timeline .button_front');

            if (button) {
                const handleClick = () => {
                    element.classList.toggle('active');
                    button.classList.toggle('active_button');
                    buttonFront.innerHTML = button.classList.contains('active_button')
                        ? t('experience.read-less')
                        : t('experience.read-more');
                };
                button.addEventListener('click', handleClick);
                return () => button.removeEventListener('click', handleClick);
            }
        });
    }, [t]);
};

const Experience: React.FC = () => { // TODO - Fix random right scroll
    const { t } = useTranslation();
    const { showBoxes, addBoxRef } = useShowBoxes();
    useDescriptionBoxes();

    function experienceTitleConversion(index: number) {
        if (index == 0) return t("experience.present-year")
        else return 2025 - index
    }

    const headingsAndEntries = useMemo(() => {
        const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];
        return years.reduce(
            (acc: {headings: string[], entries: string[]}, year) => {
                acc.headings.push(`experience.heading.${year}`);
                acc.entries.push(`experience.entry.${year}`);
                return acc;
            },
            { headings: [], entries: [] }
        );
    }, []);

    return (
        <div className="section-content">
            <h2 className="header">{t("experience.header")}</h2>
                <div className="experience-container" id="timeline">
                    <ul className="timeline-ul">
                        {headingsAndEntries.headings.map((heading, index) => (
                            <li key={index}>
                                <i className="experience-item">{experienceTitleConversion(index)}</i>
                                <div className={`box ${showBoxes[index] ? 'show' : ''}`}
                                     ref={(ref) => addBoxRef(ref, index)}>
                                    <h3 className="title">{t(heading)}</h3>
                                    <div className="description-box">
                                        <Trans i18nKey="message" className="trans"><p className="trans">{t(headingsAndEntries.entries[index])}</p></Trans>
                                        <button className="button">
                                            <div className="button_front">{t('experience.read-more')}</div>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                        <li className="bottom">
                            <i className="experience-item">2017</i>
                        </li>
                    </ul>
                </div>
        </div>
    );
};

export default Experience;