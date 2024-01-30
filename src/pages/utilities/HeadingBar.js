import { NavLink } from 'react-router-dom';
import './HeadingBar.css';

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
      </ul>
    </nav>
  );
}
