import React from 'react';
import {useTranslation} from "react-i18next";
import '../styling/Project.css'
import JS from "../assets/language-logos/javascript-ar21.svg"

const Projects: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="section-content">
            <h2 className="header">{t("projects.header")}</h2>
            <div className="projects-grid" id="projects">
                <div className="row-grid">
                    <div className="column-grid">
                        <img src={JS} alt="javascript"/>
                        <img src={JS} alt="javascript"/>
                    </div>
                    <div className="column-grid">
                        <img src={JS} alt="javascript"/>
                        <img src={JS} alt="javascript"/>
                    </div>
                    <div className="column-grid">
                        <img src={JS} alt="javascript"/>
                        <img src={JS} alt="javascript"/>
                    </div>
                    <div className="column-grid">
                        <img src={JS} alt="javascript"/>
                        <img src={JS} alt="javascript"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;