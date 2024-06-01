import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function nav() {
    const [currentSection, setCurrentSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const id = section.id;
                const offset = section.getBoundingClientRect().top;
                if (offset < window.innerHeight / 2) {
                    setCurrentSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/aboutme" className={currentSection === 'about-me' ? 'highlighted' : ''}>About Me</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={currentSection === 'contact' ? 'highlighted' : ''}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className={currentSection === 'portfolio' ? 'highlighted' : ''}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/resume" className={currentSection === 'resume' ? 'highlighted' : ''}>Resume</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

