import { Outlet } from 'react-router-dom';
import './RootLayout.css';
import Navbar from './utilities/Navbar.js';
import Logo from './utilities/Logo';

export default function RootLayout() {
  return (
    <div className='rootLayout'>
      <div className='desktopLogo'>
        <Logo />
      </div>
      <div className='mobile-navbar'>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}
