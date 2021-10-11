import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

function Header() {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo" />
            <nav>
                <Link to="/">Shop</Link>
                <Link to="/order-review">Order review</Link>
                <Link to="/manage-inventory">Manage Inventory</Link>
                <span style={{color: 'white'}}> {user.displayName} </span>
                {user.email ? <button onClick={logOut} type="button">Logout</button> : 
                 <Link to="/login">Login</Link>}

            </nav>
        </div>
    )
}

export default Header
