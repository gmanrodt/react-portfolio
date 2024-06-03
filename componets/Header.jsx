import React from "react";
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div>
            <main className="w-75 px-5">
                <h1 className="title">
                <Link to="/">Anna Thompson</Link>
                </h1>
            </main>
        </div>
    )
}