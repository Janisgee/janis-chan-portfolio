import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  function handleNavBarClick(e) {
    e.preventDefault();
    setNavBarOpen(!navBarOpen);
  }
  return (
    <div>
      <header>
        <div className='main-wrapper'>
          <nav id='hamburger-icon'>
            <div
              className={
                navBarOpen
                  ? 'open displayFlex navbarTop'
                  : 'displayFlex navbarTop'
              }
            >
              <div className='navBar-logo lg-hidden'>
                <Logo />
              </div>
              <div className='bars' onClick={handleNavBarClick}>
                <div className='bar bar1'></div>
                <div className='bar bar2'></div>
                <div className='bar bar3'></div>
              </div>
            </div>
            <ul
              className={
                navBarOpen
                  ? 'navBar mobile-menu to-Bottom '
                  : 'navBar display-none '
              }
            >
              <li>
                <NavLink
                  to='/'
                  data-id='home'
                  className={({ isActive }) => (isActive ? 'activeButton' : '')}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    window.location.href = '/about';
                  }}
                  data-id='about'
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    window.location.href = '/coding-skill';
                  }}
                  data-id='coding-skill'
                >
                  Coding Skill
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    window.location.href = '/my-work';
                  }}
                  data-id='my-work'
                >
                  My Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                  data-id='contact'
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/jc-janis-chan'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faLinkedin} size='xl' /> Linkedin
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/Janisgee/janis-chan-portfolio'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faSquareGithub} size='xl' /> GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
