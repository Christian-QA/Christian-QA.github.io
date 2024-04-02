import React from 'react';
import i18n, {TFunction} from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Messages from "../lang/en.tsx";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(Messages);

const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        {smoothScroll({id: "about", text: "header.about", t})}
                    </li>
                    <li>
                        {smoothScroll({id: "experience", text: "header.experience", t})}
                    </li>
                    {/*<li>*/}
                    {/*    {smoothScroll({id: "projects", text: "header.projects", t})}*/}
                    {/*</li>*/}
                    <li>
                        {smoothScroll({id: "contact", text: "header.contact", t})}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const smoothScroll = ({ id, text, t}: { id: string; text: string; t: TFunction<"translation", undefined> }) => {
    const handleClick = (): void => {
        const element: HTMLElement | null = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <button onClick={handleClick}>{t(text)}</button>
    );
};


export default Header;