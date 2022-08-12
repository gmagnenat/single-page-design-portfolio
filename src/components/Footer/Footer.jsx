import React from 'react';
import logo from '../../assets/logo.svg';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <a href="#">
                <img className="footer__logo" src={logo} alt="" />
            </a>
            <button className="btn btn--primary">Free Consultation</button>
        </footer>
    );
};

export default Footer;
