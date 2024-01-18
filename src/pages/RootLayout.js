import { Outlet } from 'react-router-dom';
import Logo from './utilities/Logo';

export default function RootLayout() {
  return (
    <div className='rootLayout'>
      <Logo />
      <Outlet />
    </div>
  );
}
