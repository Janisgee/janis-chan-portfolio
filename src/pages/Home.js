import Background from './utilities/Background.js';
import Navbar from './utilities/Navbar.js';

export default function Home() {
  return (
    <div className='homeContainer'>
      <Background />
      <div className='home-navBar'>
        <Navbar />
      </div>
    </div>
  );
}
