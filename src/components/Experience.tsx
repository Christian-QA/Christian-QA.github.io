import { useState, useEffect, useMemo, useRef } from 'react';
import {Trans, useTranslation} from 'react-i18next';
import '../styling/Experience.css';

const useShowBoxes = () => {
    const [showBoxes, setShowBoxes] = useState([]);
    const boxRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const triggerBottom = (window.innerHeight / 5) * 4;
            const newShowBoxes = boxRefs.current.map((box) => {
                if (box) {
                    return box.getBoundingClientRect().top < triggerBottom;
                }
                return false;
            });
            setShowBoxes(newShowBoxes);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const addBoxRef = (ref: HTMLDivElement, index: number) => {
        boxRefs.current[index] = ref;
    };

    return { showBoxes, addBoxRef };
};

const useDescriptionBoxes = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.querySelectorAll('.description-box').forEach((element) => {
            const button = element.querySelector('#timeline button');
            const buttonFront = element.querySelector('#timeline .button_front');

            if (button) {
                const handleClick = () => {
                    element.classList.toggle('active');
                    button.classList.toggle('active_button');
                    buttonFront.textContent = button.classList.contains('active_button')
                        ? t('experience.read-less')
                        : t('experience.read-more');
                };
                button.addEventListener('click', handleClick);
                return () => button.removeEventListener('click', handleClick);
            }
        });
    }, [t]);
};

const Experience = () => {
    const { t } = useTranslation();
    const { showBoxes, addBoxRef } = useShowBoxes();
    useDescriptionBoxes();

    const experienceTitleConversion = (index: number) =>
        index === 0 ? t('experience.present-year') : 2025 - index;

    const headingsAndEntries = useMemo(() => {
        const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];
        return years.reduce(
            (acc, year) => {
                acc.headings.push(`experience.heading.${year}`);
                acc.entries.push(`experience.entry.${year}`);
                return acc;
            },
            { headings: [], entries: [] }
        );
    }, []);

    return (
        <div className="section-content">
            <h2 className="header">{t('experience.header')}</h2>
            <div className="experience-container" id="timeline">
                <ul className="timeline-ul">
                    {headingsAndEntries.headings.map((heading, index) => (
                        <li key={index}>
                            <i className="experience-item">{experienceTitleConversion(index)}</i>
                            <div className={`box ${showBoxes[index] ? 'show' : ''}`} ref={(ref) => addBoxRef(ref, index)}>
                                <h3 className="title">{t(heading)}</h3>
                                <div className="description-box">
                                    <Trans i18nKey="message">
                                        <p>{t(headingsAndEntries.entries[index])}</p>
                                    </Trans>
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