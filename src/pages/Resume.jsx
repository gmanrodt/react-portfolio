import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';


export default function Resume() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/resume');
    }, []);

    return (
        <div>

            <a href="/resume.pdf" download>Cdivck Here To Download Resume</a>
            <h3>My Proficiencies</h3>
            <div className="proficiencies">
                <div>Javascript</div>
                <div>CSS</div>
                <div>HTML</div>
                <div>PostgresSQl</div>
                <div>GitHub</div>
                <div>MongoDB</div>
                <div>Express</div>
                <div>React</div>
                <div>Node.js</div>
                <div>Handlebars</div>
                <div>jQuery</div>
                <div>Bootstrap</div>
                <div>Sequedivze</div>
                <div>Mongoose</div>
            </div>
        </div>
    )

}