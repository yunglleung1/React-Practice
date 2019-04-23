import React from 'react';
import './Logo.css';
import logo from './firefox.png';

const Logo = () => {
  return(
    <div className = 'Logo'>
      <img className = 'logo' src={logo} alt="Logo" />
    </div>
  )
}

export default Logo;
