import React from 'react';
import logo_icon from '../Assets/logo_icon.png';

import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo_icon} alt="logo" />

            <button className='logout-button-text'>
                LOGOUT
            </button>
        </div>
    );
}

export default Header;
