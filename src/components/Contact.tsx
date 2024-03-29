import React from 'react';
import {useTranslation} from "react-i18next";

const Contact: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="section-content">
            <h2 className="header">{t("contact.header")}</h2>
            <form className="contact-form" id="contact">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows={15} required/>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;