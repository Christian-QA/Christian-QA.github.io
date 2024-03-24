import React from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Messages from "../lang/en.tsx";



i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(Messages);

const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <header>
            <h2>{t('landing.title')}</h2>
            <nav>
                <ul>
                    <li>
                        <button>
                            <a href="#about">About</a>
                        </button>
                    </li>
                    <li>
                        <button>
                            <a href="#projects">Projects</a>
                        </button>
                    </li>
                    <li>
                        <button>
                            <a href="#contact">Contact</a>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;