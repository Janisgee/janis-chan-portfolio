import { Outlet } from 'react-router-dom';

import Logo from './utilities/Logo';

export default function RootLayout() {
  return (
    <div className='rootLayout'>
      <div className='desktopLogo'>
        <Logo />
      </div>

      <Outlet />
    </div>
  );
}
