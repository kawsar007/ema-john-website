import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

function Header() {
    return (
        <div className="header">
           <img src={logo} alt="logo" className="logo"/>
           <nav>
               <a href="/">Shop</a>
               <a href="/order-review">Order review</a>
               <a href="/manage-inventory">Manage Inventory</a>
           </nav>
        </div>
    )
}

export default Header
