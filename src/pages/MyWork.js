import HeadingBar from './HeadingBar';
import './MyWork.css';

export default function MyWork() {
  return (
    <div className='myWork side-wrapper'>
      <HeadingBar />

      <ul className='projects to-right animation-common'>
        <li>Money Tracker Project</li>
        <li>Worldwise Project</li>
        <li>Weather Project</li>
        <li>Forkify Recipe Project</li>
        <li>Pig Game</li>
        <li>Tic Tac Toe Game</li>
        <li>Dictionary Project</li>
        <li>Shopping List Project</li>
        <li>Movie Rating Project</li>
        <li>React Quiz Project</li>
      </ul>
    </div>
  );
}
