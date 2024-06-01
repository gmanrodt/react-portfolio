import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

export default function Contact() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/contact');
    }, []);

    return (
        <div className="form-group">
            <h2>Contact Me</h2>
            <form>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="Name" className="form-control" id="name" placeholder="John Doe" required />
                </div> 
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email" required />
                    <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div> for
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" id="Message" rows="3" required ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}