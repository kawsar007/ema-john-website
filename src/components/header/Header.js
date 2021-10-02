import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

function Header() {
    return (
        <div className="header">
           <img src={logo} alt="logo" className="logo"/>
           <nav>
               <Link to="/">Shop</Link>
               <Link to="/order-review">Order review</Link>
               <Link to="/manage-inventory">Manage Inventory</Link>
           </nav>
        </div>
    )
}

export default Header
