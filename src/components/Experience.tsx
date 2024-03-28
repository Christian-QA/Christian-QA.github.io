import React from 'react';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Messages from "../lang/en.tsx";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(Messages);

const Experience: React.FC = () => {
    // const { t } = useTranslation();


    return (
        <div className="experience-section" id="timeline">
            <ul className="timeline-ul">
                <li>
                    <i className="experience-item xp-1">2017</i>
                    <div className="box">
                        <h3 className="title"><span className="year">2017</span>ENTRY 1</h3>
                        <p>content for entry 1</p>
                        <button>read more</button>
                    </div>
                </li>
                <li>
                    <i className="experience-item xp-2"></i>
                    <div className="box">
                        <h3 className="title"><span className="year">2018</span>ENTRY 2</h3>
                        <p>content for entry 2</p>
                        <button>read more</button>
                    </div>
                </li>
                <li>
                    <i className="experience-item xp-3"></i>
                    <div className="box">
                        <h3 className="title"><span className="year">2019</span>ENTRY 3</h3>
                        <p>content for entry 3</p>
                        <button>read more</button>
                    </div>
                </li>
            </ul>

        </div>
    );
};

export default Experience;