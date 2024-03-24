import React from 'react';

const Experience: React.FC = () => {
    return (
        <section id="experience">
            <h2>My Experience</h2>
            <ul>
                <li>
                    <h3>Project 1</h3>
                    <p>Description of Project 1</p>
                    {/* Add more details about the project, like images or links */}
                </li>
                <li>
                    <h3>Project 2</h3>
                    <p>Description of Project 2</p>
                    {/* Add more details about the project, like images or links */}
                </li>
                {/* Add more project entries as needed */}
            </ul>
        </section>
    );
};

export default Experience;