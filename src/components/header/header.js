import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header/header.css';

function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <Link className='link-header-logo' to='/'>CompanyLogo</Link>
            </div>
            <div className="header-right">
                <Link className='link-header' to='/'>Home</Link>
                <Link className='link-header' to='/contact'>Contact</Link>
                <Link className='link-header' to='/about'>About</Link>
            </div>
        </div>

    );
}

export default Header;
