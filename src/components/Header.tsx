import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
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