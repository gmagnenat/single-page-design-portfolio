import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="header__text">
        <button className='btn btn--dark'>Free Consultation</button>
      </div>
    </div>
  )
}

export default Header