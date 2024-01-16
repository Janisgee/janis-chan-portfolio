import { NavLink } from 'react-router-dom';
import './Main.css';
import logo from '../images/jc-logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function Main() {
  return (
    <header>
      <div className='main-wrapper'>
        <nav>
          <img
            className='janis-logo'
            src={logo}
            alt='Janis Chan Homepage'
            title='Janis Chan Homepage'
          />
          <div className='navBar'>
            <ul>
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>About</NavLink>
              </li>
              <li>
                <NavLink>My-Work</NavLink>
              </li>
              <li>
                <NavLink>Contact</NavLink>
              </li>
              <li>
                <NavLink>
                  <FontAwesomeIcon icon={faLinkedin} size='xl' /> NavLinknkedin
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <FontAwesomeIcon icon={faSquareGithub} size='xl' /> GitHub
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
