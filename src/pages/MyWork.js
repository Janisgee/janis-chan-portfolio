import { useState } from 'react';
import HeadingBar from './utilities/HeadingBar';

import MoneyTracker from './works-info/MoneyTracker';
import Worldwise from './works-info/Worldwise';
import './MyWork.css';

export default function MyWork() {
  const [clickedProjectId, setClickedProjectId] = useState('');

  function handleProjectClick(e) {
    e.preventDefault();
    setClickedProjectId(e.target.dataset.id);
    e.target.scrollTo({
      top: e.target.offsetTop,
      left: 0,
      behavior: 'smooth',
    });

    if (document.querySelector('#projectsList .active') !== null) {
      document
        .querySelector('#projectsList .active')
        .classList.remove('active');
    }
    e.target.classList.add('active');
  }

  return (
    <div className='myWork side-wrapper'>
      <HeadingBar />

      <div className='content'>
        <ul
          className='projects to-right animation-common'
          onClick={handleProjectClick}
          id='projectsList'
        >
          <li data-id='moneyTracker'>Money Tracker Project</li>
          <li data-id='worldwise'>Worldwise Project</li>
          <li data-id='weather'>Weather Project</li>
          <li data-id='forkify'>Forkify Recipe Project</li>
          <li data-id='pigGame'>Pig Game</li>
          <li data-id='ticTacToe'>Tic Tac Toe Game</li>
          <li data-id='dictionary'>Dictionary Project</li>
          <li data-id='shoppingList'>Shopping List Project</li>
          <li data-id='movieRating'>Movie Rating Project</li>
          <li data-id='reactQuiz'>React Quiz Project</li>
        </ul>
        {clickedProjectId === 'moneyTracker' ? <MoneyTracker /> : ''}
        {clickedProjectId === 'worldwise' ? <Worldwise /> : ''}
      </div>
    </div>
  );
}
