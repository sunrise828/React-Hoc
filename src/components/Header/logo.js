import React from 'react';
import LogoImage from '../../assets/image/logo.png';

const logoStyle = {
    backgroundImage: `url(${LogoImage})`,
    backgroundSize: 'cover',
    width: '90px',
    height: '100%'
}

const Logo = () => 
    <div style={logoStyle}></div>    

export default Logo;
