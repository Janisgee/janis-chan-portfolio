import { NavLink } from 'react-router-dom';
import logo from '../../images/jc-logo-white.png';
import './Logo.css';

export default function Logo() {
  return (
    <NavLink to='/'>
      <img
        className='janis-logo'
        src={logo}
        alt='Janis Chan Homepage'
        title='Janis Chan Homepage'
      />
    </NavLink>
  );
}
