import React from 'react';

const Experience: React.FC = () => {
    return (
        <div className="section-content">
            <h2>Experience</h2>
            <ul>
                <li>
                    <h3>Job Title</h3>
                    <p>Company Name</p>
                    <p>Date Range</p>
                    <p>Description of your experience</p>
                </li>
                {/* Add more experience entries as needed */}
            </ul>
        </div>
    );
};

export default Experience;