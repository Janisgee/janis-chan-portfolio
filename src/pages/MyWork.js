import HeadingBar from './utilities/HeadingBar';
import './MyWork.css';
import moneyTracker from '../images/works/money-tracker.png';
import nodesjs from '../images/skills/Node.js_logo.png';
import expressjs from '../images/skills/ExpressJS-logo.png';
import mongoDB from '../images/skills/MongoDB_Logo.svg.png';

export default function MyWork() {
  return (
    <div className='myWork side-wrapper'>
      <HeadingBar />

      <div className='content'>
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
        <div className='work fade-in-text'>
          <h1>Money Tracker Project</h1>

          <img
            className='work-image'
            src={moneyTracker}
            alt='Money Tracker'
            title='Money Tracker'
          />
          <p>
            Using Node.js and React skills to create this money tracker, storing
            transactions and customer accounts in external server.
          </p>

          <div className='work-skill'>
            <span>Tool used: </span>
            <img
              className='skill-image'
              src={nodesjs}
              alt='Node JS'
              title='Node JS'
            />
            <img
              className='skill-image'
              src={expressjs}
              alt='Express JS'
              title='Express JS'
            />
            <img
              className='skill-image'
              src={mongoDB}
              alt='MongoDB'
              title='MongoDB'
            />
          </div>

          <a
            href='https://money-tracker-vp3w.onrender.com'
            className='click-for-more'
            target='_blank'
            alt='More information'
            rel='noreferrer'
          >
            <h4>Click for more!</h4>
          </a>
        </div>
      </div>
    </div>
  );
}
