import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

export default function Portfolio(){


    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/portfolio');
    }, []);


    return(
        <div>

        </div>
    )

}