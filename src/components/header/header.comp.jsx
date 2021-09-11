import React from "react";
import './header.styles.scss';
import logo from '../../assets/Portfolio-logo.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import behance from '../../assets/behance.svg';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return <header className='header'>
    <div className="container">
      <div className="header__items">
        <div className="header__logo">
          <Link exact to="/" >
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav--list">

            <NavLink exact activeClassName="active" to="/" >
              <li className="header__nav--item">Works</li>
            </NavLink>

            <NavLink activeClassName="active" to="/about" >
              <li className="header__nav--item">About me</li>
            </NavLink>

            <NavLink activeClassName="active" to="/resume" >
              <li className="header__nav--item">Resume</li>
            </NavLink>

            <NavLink activeClassName="active" to="/contact" >
              <li className="header__nav--item">Contact</li>
            </NavLink>

          </ul>

          <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle" ></input>
            <label for="navi-toggle" class="navigation__button">
              <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
              <ul class="navigation__list">
                <li class="navigation__item"><a href="index.html" class="navigation__link"><span>01.</span>Home</a></li>
                <li class="navigation__item"><a href="index.html" class="navigation__link"><span>02.</span>Products</a></li>
                <li class="navigation__item"><a href="#" class="navigation__link"><span>03.</span>Services</a></li>
                <li class="navigation__item"><a href="contact.html" class="navigation__link"><span>04.</span>Contact us</a></li>
              </ul>
            </nav>
          </div>
        </nav>

        <div className="header__socials">
          <a href="https://github.com/jacknichols-dev" target="_blank">
            <div className="header__socials--item">
              <img src={github} alt="github" />
              <label>Github</label>
            </div>
          </a>
          <div className="header__socials--item">
            <img src={linkedin} alt="linkedin" />
            <label>Linkedin</label>
          </div>
          <div className="header__socials--item">
            <img className="behance" src={behance} alt="behance" />
            <label>Behance</label>
          </div>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
