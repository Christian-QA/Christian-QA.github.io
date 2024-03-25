import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="section-content">
            <h2>Contact Me</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required />

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;