import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';


export default function Resume(){

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/resume');
    }, []);

    return(
        <div>

        </div>
    )

}