import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Error.gif';
import './NotFound.css';

function NotFound() {
    return (
        <>
        <Link to="/">Back To Shop</Link>
        <div className="error">
            <img src={error} alt="error" />
            <h2 className="error-title">404 Page Not Found</h2>
        </div>
        </>
    )
}

export default NotFound;
