import  { React, useState } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png';

const Header = () => {

    const [Toggle, showMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

  return (
    <header>
        <nav className="container">
            <a href="index.html" className='nav__logo'>
                <img src={logo} alt=""/>
            </a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">
                    <li>
                        <NavLink to='/'>
                            <a href="#home" className={`${activeLink === 'home' ? 'active-link' : ''} nav__link`} 
                                onClick={() => {setActiveLink('home')}}>
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </NavLink> 
                    </li>

                    <li className="nav__item">
                        <NavLink to='/about'>
                        <a href="#about" className={`${activeLink === 'about' ? 'active-link' : ''} nav__link`} 
                                onClick={() => {setActiveLink('about')}}>
                            <i className="uil uil-user nav__icon"></i>
                            About
                        </a>
                        </NavLink>
                    </li>

                    <li className="nav__item">
                        <NavLink to='/skills'>
                        <a href="#about" className={`${activeLink === 'skills' ? 'active-link' : ''} nav__link`} 
                                onClick={() => {setActiveLink('skills')}}>
                            <i className="uil uil-wrench nav__icon"></i>
                            Skills
                        </a>
                        </NavLink>
                    </li>

                    <li className="nav__item">
                        <NavLink to='/portfolio '>
                        <a href="#about" className={`${activeLink === 'portfolio' ? 'active-link' : ''} nav__link`} 
                                onClick={() => {setActiveLink('portfolio')}}>
                            <i className="uil uil-briefcase nav__icon"></i>
                            Portfolio
                        </a>
                        </NavLink>
                    </li>
                    
                    <i className="uil uil-times nav__close"></i>
                </ul>
            </div>

            <div className="nav__toggle" onClick={() => {showMenu(!Toggle)}}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header