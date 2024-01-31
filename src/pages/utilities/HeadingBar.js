import { NavLink } from 'react-router-dom';
import './HeadingBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function HeadingBar() {
  return (
    <nav className='headingBar'>
      <ul className='menu'>
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
            to='/about'
            data-id='about'
            className={({ isActive }) => (isActive ? 'activeButton' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/coding-skill'
            data-id='coding-skill'
            className={({ isActive }) => (isActive ? 'activeButton' : '')}
          >
            Coding Skill
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-work'
            data-id='my-work'
            className={({ isActive }) => (isActive ? 'activeButton' : '')}
          >
            My Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            data-id='contact'
            className={({ isActive }) => (isActive ? 'activeButton' : '')}
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
            <FontAwesomeIcon icon={faLinkedin} size='xl' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/Janisgee/janis-chan-portfolio'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faSquareGithub} size='xl' />
          </a>
        </li>
      </ul>
    </nav>
  );
}
