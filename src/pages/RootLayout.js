import { Outlet } from 'react-router-dom';
import Logo from './Logo';

export default function RootLayout() {
  return (
    <div className='rootLayout'>
      <Logo />
      <Outlet />
    </div>
  );
}
