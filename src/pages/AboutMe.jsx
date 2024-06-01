import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

export default function AboutMe() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/aboutme');
    }, []);

    return (
        <div>

        </div>
    )

}