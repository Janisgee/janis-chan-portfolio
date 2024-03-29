import moneyTracker from '../../images/works/money-tracker.png';
import nodesjs from '../../images/skills/Node.js_logo.png';
import expressjs from '../../images/skills/ExpressJS-logo.png';
import mongoDB from '../../images/skills/MongoDB_Logo.svg.png';

export default function MoneyTracker() {
  return (
    <div className='work fade-in-text'>
      <h1>Money Tracker Project</h1>

      <a
        href='https://money-tracker-vp3w.onrender.com'
        className='click-for-more'
        target='_blank'
        alt='More information'
        rel='noreferrer'
      >
        <img
          className='work-image'
          src={moneyTracker}
          alt='Money Tracker'
          title='Money Tracker'
        />
      </a>
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
        className='clickForMore'
        target='_blank'
        alt='More information'
        rel='noreferrer'
      >
        Click for more ...
      </a>
    </div>
  );
}
