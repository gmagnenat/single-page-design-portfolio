import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <a href="#">
                <img className="header__logo" src={logo} alt="" />
            </a>
            <button className="btn btn--primary">Free Consultation</button>
        </header>
    );
};

export default Header;
