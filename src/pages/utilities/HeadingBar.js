import { NavLink } from 'react-router-dom';
import './HeadingBar.css';

export default function HeadingBar() {
  return (
    <nav className='headingBar'>
      <ul className='menu'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/coding-skill'>Coding Skill</NavLink>
        </li>
        <li>
          <NavLink to='/my-work'>My Work</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
