import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <img className="header__logo" src={logo} alt="" />
      <button className='btn btn--dark header__text'>Free Consultation</button>
    </div>
  )
}

export default Header