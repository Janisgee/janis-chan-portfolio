import { useState } from 'react';
import HeadingBar from './utilities/HeadingBar';

import MoneyTracker from './works-info/MoneyTracker';
import Worldwise from './works-info/Worldwise';
import './MyWork.css';
import Weather from './works-info/Weather';
import ForkifyRecipe from './works-info/ForkifyRecipe';
import PigGame from './works-info/PigGame';
import TicTacToe from './works-info/TicTacToe';
import Dictionary from './works-info/Dictionary';
import ShoppingList from './works-info/ShoppingList';
import MovieRating from './works-info/MovieRating';
import ReactQuiz from './works-info/ReactQuiz';
import Navbar from './utilities/Navbar';

export default function MyWork() {
  const [clickedProjectId, setClickedProjectId] = useState('');

  function handleProjectClick(e) {
    e.preventDefault();
    console.log(e.target);
    setClickedProjectId(e.target.dataset.id);
    e.target.parentElement.scrollTo({
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
      <Navbar />
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
        {clickedProjectId === 'weather' ? <Weather /> : ''}
        {clickedProjectId === 'forkify' ? <ForkifyRecipe /> : ''}
        {clickedProjectId === 'pigGame' ? <PigGame /> : ''}
        {clickedProjectId === 'ticTacToe' ? <TicTacToe /> : ''}
        {clickedProjectId === 'dictionary' ? <Dictionary /> : ''}
        {clickedProjectId === 'shoppingList' ? <ShoppingList /> : ''}
        {clickedProjectId === 'movieRating' ? <MovieRating /> : ''}
        {clickedProjectId === 'reactQuiz' ? <ReactQuiz /> : ''}
      </div>
    </div>
  );
}
