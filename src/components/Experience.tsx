import React, { useState, useEffect, useRef } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Messages from '../lang/en.tsx';

i18n.use(initReactI18next).init(Messages);

const Experience: React.FC = () => {
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
                        ? "Read Less"
                        : "Read More";
                };
                button.addEventListener("click", handleClick);

                // Cleanup function to remove event listener on unmount
                return () => button.removeEventListener("click", handleClick);
            }
        });
    }, [descriptionBoxes.current]); // Dependency on descriptionBoxes


    return (
        <div className="experience-section" id="timeline">
            <ul className="timeline-ul">
                <li>
                    <i className="experience-item xp-1">2025</i>
                    <div className={`box ${showBoxes[0] ? 'show' : ''}`} ref={(ref) => addBoxRef(ref, 0)}>
                        <h3 className="title">ENTRY 1</h3>
                        <div className="description-box">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button className="button"><div className="button_front">read more</div></button>
                        </div>
                    </div>
                </li>
                <li>
                    <i className="experience-item xp-2"></i>
                    <div className={`box ${showBoxes[1] ? 'show' : ''}`} ref={(ref) => addBoxRef(ref, 1)}>
                        <h3 className="title">ENTRY 2</h3>
                        <div className="description-box">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.</p>
                            <div className="button_back"><button className="button">read more</button></div>
                        </div>
                    </div>
                </li>
                <li>
                    <i className="experience-item xp-3"></i>
                    <div className={`box ${showBoxes[2] ? 'show' : ''}`} ref={(ref) => addBoxRef(ref, 2)}>
                        <h3 className="title">ENTRY 3</h3>
                        <div className="description-box">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.</p>
                            <button className="button">read more</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Experience;