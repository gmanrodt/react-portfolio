import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import Project from "../components/Project";
export default function Portfolio(){


    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/portfolio');
    }, []);


    return(
        <div>
                <Project/>
        </div>
    )

}