import './Main.css';
import logo from './images/jc-logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function Main() {
  return (
    <div className='main-wrapper'>
      <img
        className='janis-logo'
        src={logo}
        alt='Janis Chan Homepage'
        title='Janis Chan Homepage'
      />
      <div className='navBar'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>My-Work</li>
          <li>Contact</li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} size='xl' /> Linkedin
          </li>
          <li>
            <FontAwesomeIcon icon={faSquareGithub} size='xl' /> GitHub
          </li>
        </ul>
      </div>
    </div>
  );
}
