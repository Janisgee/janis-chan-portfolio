import Background from './Background.js';
import Main from './Main.js';

export default function RootLayout() {
  return (
    <div className='rootLayout'>
      <div className='container'>
        <Background />
        <Main />
      </div>
    </div>
  );
}
