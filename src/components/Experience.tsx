import React, {useState, useEffect, useMemo, useRef} from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import Messages from '../lang/en.tsx';

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
                    buttonFront.innerHTML = buttonFront.classList.contains('active_button')
                        ? t('experience.read-less')
                        : t('experience.read-more');
                };

                button.addEventListener('click', handleClick);

                return () => button.removeEventListener('click', handleClick);
            }
        });
    }, [t]);
};

const Experience: React.FC = () => {
    const { t } = useTranslation();
    const { showBoxes, addBoxRef } = useShowBoxes();
    useDescriptionBoxes();

    const headingsAndEntries = useMemo(() => {
        const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017];
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
        <div className="experience-section" id="timeline">
            <ul className="timeline-ul">
                {headingsAndEntries.headings.map((heading, index) => (
                    <li key={index}>
                        <i className="experience-item">{index + 2017}</i>
                        <div
                            className={`box ${showBoxes[index] ? 'show' : ''}`}
                            ref={(ref) => addBoxRef(ref, index)}
                        >
                            <h3 className="title">{t(heading)}</h3>
                            <div className="description-box">
                                <p>{t(headingsAndEntries.entries[index])}</p>
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