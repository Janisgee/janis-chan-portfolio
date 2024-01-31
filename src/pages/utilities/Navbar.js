import { NavLink } from 'react-router-dom';

import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  return (
    <div>
      <header>
        <div className='main-wrapper'>
          <nav>
            <ul className='navBar'>
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
