import React, {useRef, useState} from 'react';
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import '../styling/Contact.css'

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const form = useRef<HTMLFormElement>(null);
    const confirmation = useRef<HTMLDivElement>(null);
    const error = useRef<HTMLDivElement>(null);
    const [isDisabled, setIsDisabled] = useState(false);

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsDisabled(true);
        emailjs
            .sendForm('service_kcq9eve', 'template_a79ze1b', form.current, {
                publicKey: '4C9NhAMkXGZnLE75c',
            })
            .then(
                () => {
                    if (form.current) form.current.style.display = "none";
                    if (confirmation.current) confirmation.current.style.display = "flex";
                    console.log('SUCCESS!');
                },
                (error) => {
                    if (form.current) form.current.style.display = "none";
                    if (confirmation.current) confirmation.current.style.display = "flex";
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="section-content">
            <h2 className="header">{t("contact.header")}</h2>
            <div className="confirmation-container" style={{display: "none"}} ref={confirmation}>
                <div className="confirmation-text">
                    <h3>{t("contact.confirmation-head")}</h3>
                    <p>{t("contact.confirmation-body")}</p>
                </div>
            </div>
            <div className="error-container" style={{display: "none"}} ref={error}>
                <div className="error-container">
                    <h3>{t("contact.error-head")}</h3>
                    <p>{t("contact.error-body")}</p>
                </div>
            </div>
            <form className="contact-form" id="contact" ref={form} onSubmit={sendEmail}>
                <label htmlFor="name">{t("contact.name")}</label>
                <input type="text" id="name" name="from_name" required minLength={2} maxLength={50}
                       pattern="[A-Za-z\s]+" title="Please enter a valid name (only letters and spaces)"/>
                <label htmlFor="email">{t("contact.email")}</label>
                <input type="email" id="email" name="from_email" required
                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email address"/>
                <label htmlFor="message">{t("contact.message")}</label>
                <textarea id="message" name="message" rows={15} required minLength={10} maxLength={500}
                          title="Please enter a message between 10 and 500 characters"></textarea>
                <button type="submit" value="Send" disabled={isDisabled}>{t("contact.send")}</button>
            </form>
        </div>
    );
};

export default Contact;