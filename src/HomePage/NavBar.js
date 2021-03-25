import React from 'react';
import './NavBar.css';
import brandIcon from '../Icons/sofa.png';
import homeIcon from '../Icons/home.png';

function NavBar() {
    return (
    <div className='navbar'>
    <div className="brandName">
        <img className='logo' src={brandIcon} alt='' />
        <h1 className='title'>TITLE</h1>
    </div>
    <div className="navbutton">
        <img src={homeIcon} alt='' /><a href='#home'>HOME</a>
        <a href='#about'>ABOUT</a>
        <a href='#resources'>RESOURCES</a>
        <a href='#contact'>CONTACT</a>
    </div>
        </div>
    )
}

export default NavBar
