import React, { useState } from "react";
import './header.styles.scss';
import logo from '../../assets/Portfolio-logo.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import behance from '../../assets/behance.svg';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  const navScrollHandler = () => {
    if (window.scrollY >= 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', navScrollHandler)

  return <header className={scrolled ? 'header scrolled' : 'header'}>
    <div className="container">
      <div className="header__items">
        <div className={scrolled ? "header__logo logo-scrolled" : "header__logo"}>
          <Link exact to="/" >
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav--list">

            <NavLink exact activeClassName={scrolled ? "active active__scrolled" : "active"} to="/" >
              <li className="header__nav--item">Works</li>
            </NavLink>

            <NavLink activeClassName={scrolled ? "active active__scrolled" : "active"} to="/about" >
              <li className="header__nav--item">About me</li>
            </NavLink>

            <NavLink activeClassName={scrolled ? "active active__scrolled" : "active"} to="/resume" >
              <li className="header__nav--item">Resume</li>
            </NavLink>

            <NavLink activeClassName={scrolled ? "active active__scrolled" : "active"} to="/contact" >
              <li className="header__nav--item">Contact</li>
            </NavLink>

          </ul>
        </nav >

        <div className="header__socials">
          <a href="https://github.com/jacknichols-dev" target="_blank">
            <div className={scrolled ? "header__socials--item  social-scrolled" : "header__socials--item"}>
              <img src={github} alt="github" />
              <label>Github</label>
            </div>
          </a>
          <div className={scrolled ? "header__socials--item  social-scrolled" : "header__socials--item"}>
            <img src={linkedin} alt="linkedin" />
            <label>Linkedin</label>
          </div>
          <div className={scrolled ? "header__socials--item social-scrolled" : "header__socials--item"}>
            <img className="behance" src={behance} alt="behance" />
            <label>Behance</label>
          </div>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
