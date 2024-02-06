import { Outlet } from 'react-router-dom';
// import MobileNavbar from './utilities/MobileNavBar';
import Logo from './utilities/Logo';

export default function RootLayout() {
  return (
    <div className='rootLayout'>
      {/* <MobileNavbar /> */}
      <Logo />
      <Outlet />
    </div>
  );
}
