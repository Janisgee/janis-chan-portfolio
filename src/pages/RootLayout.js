import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className='rootLayout'>
      <Outlet />
    </div>
  );
}
