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
                    <li className="nav__item">
                        <NavLink to='/'>
                            <a href="#home" className={`${activeLink === 'home' ? 'active-link' : ''} nav__link`} 
                                onClick={() => {
                                    setActiveLink('home')
                                    showMenu(!Toggle)
                                }}>
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </NavLink> 
                    </li>

                    <li className="nav__item">
                        <NavLink to='/about'>
                        <a href="#about" className={`${activeLink === 'about' ? 'active-link' : ''} nav__link`} 
                                onClick={() => {
                                    setActiveLink('about')
                                    showMenu(!Toggle)
                                }}>
                            <i className="uil uil-user nav__icon"></i>
                            About
                        </a>
                        </NavLink>
                    </li>

                    <li className="nav__item">
                        <NavLink to='/qualifications'>
                        <a href="#qualifications" className={`${activeLink === 'qualifications' ? 'active-link' : ''} nav__link`} 
                                onClick={() => {
                                    setActiveLink('qualifications')
                                    showMenu(!Toggle)    
                                }}>
                            <i className="uil uil-user nav__icon"></i>
                            Qualifications
                        </a>
                        </NavLink>
                    </li>

                    <li className="nav__item">
                        <NavLink to='/skills'>
                        <a href="#skills" className={`${activeLink === 'skills' ? 'active-link' : ''} nav__link`} 
                                onClick={() => {
                                    setActiveLink('skills')
                                    showMenu(!Toggle)
                                }}>
                            <i className="uil uil-wrench nav__icon"></i>
                            Skills
                        </a>
                        </NavLink>
                    </li>

                    <li className="nav__item">
                        <NavLink to='/portfolio '>
                        <a href="#portfolio" className={`${activeLink === 'portfolio' ? 'active-link' : ''} nav__link`} 
                                onClick={() => {
                                    setActiveLink('portfolio')
                                    showMenu(!Toggle)
                                }}>
                            <i className="uil uil-briefcase nav__icon"></i>
                            Portfolio
                        </a>
                        </NavLink>
                    </li>
                    
                    <i className="uil uil-times nav__close" onClick={() => {showMenu(!Toggle)}}></i>
                </ul>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header