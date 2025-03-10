import { useState } from 'react';
import HeadingBar from './utilities/HeadingBar';
import DiscoveryApp from './works-info/DiscoveryApp';
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

import discoveryApp from '../images/works/discovery-app.png';
import dictionary from '../images/works/dictionary-project.png';
import forkify from '../images/works/forkifyRecipe.png';
import moneyTracker from '../images/works/money-tracker.png';
import movieRating from '../images/works/movie-rating-app.png';
import pigGame from '../images/works/pig-game.png';
import reactQuiz from '../images/works/react-quiz-app.png';
import shoppingList from '../images/works/shopping-list.png';
import ticTacToe from '../images/works/tictactoe.png';
import weather from '../images/works/weather-app.png';
import worldwise from '../images/works/worldwise.png';

const MyWorkDesktop = () => {
  const [clickedProjectId, setClickedProjectId] = useState('');
  console.log(clickedProjectId);

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
    <div className='myWork-desktop'>
      <div className='content'>
        <ul
          className='projects to-right animation-common'
          onClick={handleProjectClick}
          id='projectsList'
        >
          <li data-id='discoveryApp'>Discovery App Project</li><li data-id='moneyTracker'>Money Tracker Project</li>
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
        {clickedProjectId === 'discoveryApp' ? <DiscoveryApp /> : ''}
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
};

const MyWorkMobile = () => {
  const [clickedProjectId, setClickedProjectId] = useState('');

  function handleProjectClick(e) {
    setClickedProjectId(e.target.dataset.id);
    console.log(clickedProjectId);

    document.querySelector('.module-work').classList.remove('displayNone');
  }

  function handleCloseModule() {
    document.querySelector('.module-work').classList.add('displayNone');
  }

  return (
    <div className='myWork-mobile'>
      <h1>My Work</h1>
      <div className='mobile-work'>
             <div
          className='mobile-work-container'
          data-id='moneyTracker'
          onClick={handleProjectClick}
          id='projectsList'
        >
          <img
            className='mobile-workImage'
            src={discoveryApp}
            alt='Discovery App'
            title='Discovery App'
            data-id='discoveryApp'
          />
          <div className='text-over-workImage' data-id='discoveryApp'>
            Discovery App
          </div>
        </div>
        <div
          className='mobile-work-container'
          data-id='moneyTracker'
          onClick={handleProjectClick}
          id='projectsList'
        >
          <img
            className='mobile-workImage'
            src={moneyTracker}
            alt='Money Tracker'
            title='Money Tracker'
            data-id='moneyTracker'
          />
          <div className='text-over-workImage' data-id='moneyTracker'>
            Money Tracker
          </div>
        </div>
        <div
          className='mobile-work-container'
          onClick={handleProjectClick}
          data-id='worldwise'
        >
          <img
            className='mobile-workImage'
            src={worldwise}
            alt='Worldwise Project'
            title='Worldwise Project'
            data-id='worldwise'
          />
          <div className='text-over-workImage' data-id='worldwise'>
            Worldwise Project
          </div>
        </div>
        <div
          className='mobile-work-container'
          onClick={handleProjectClick}
          data-id='weather'
        >
          <img
            className='mobile-workImage'
            src={weather}
            alt='Weather Project'
            title='Weather Project'
            data-id='weather'
          />
          <div className='text-over-workImage' data-id='weather'>
            Weather Project
          </div>
        </div>
        <div
          className='mobile-work-container'
          onClick={handleProjectClick}
          data-id='forkify'
        >
          <img
            className='mobile-workImage'
            src={forkify}
            alt='Forkify Recipe'
            title='Forkify Recipe'
            data-id='forkify'
          />
          <div className='text-over-workImage' data-id='forkify'>
            Forkify
          </div>
        </div>
        <div
          className='mobile-work-container'
          onClick={handleProjectClick}
          data-id='pigGame'
        >
          <img
            className='mobile-workImage'
            src={pigGame}
            alt='Pig Game'
            title='Pig Game'
            data-id='pigGame'
          />
          <div className='text-over-workImage' data-id='pigGame'>
            Pig Game
          </div>
        </div>
        <div
          className='mobile-work-container'
          onClick={handleProjectClick}
          data-id='ticTacToe'
        >
          <img
            className='mobile-workImage'
            src={ticTacToe}
            alt='Tic Tac Toe Game'
            title='Tic Tac Toe Game'
            data-id='ticTacToe'
          />
          <div className='text-over-workImage' data-id='ticTacToe'>
            Tic Tac Toe Game
          </div>
        </div>
        <div
          className='mobile-work-container'
          onClick={handleProjectClick}
          data-id='dictionary'
        >
          <img
            className='mobile-workImage'
            src={dictionary}
            alt='Dictionary Project'
            title='Dictionary Project'
            data-id='dictionary'
          />
          <div className='text-over-workImage' data-id='dictionary'>
            Dictionary Project
          </div>
        </div>
        <div
          className='mobile-work-container'
          onClick={handleProjectClick}
          data-id='shoppingList'
        >
          <img
            className='mobile-workImage'
            src={shoppingList}
            alt='Shopping List Project'
            title='Shopping List Project'
            data-id='shoppingList'
          />
          <div className='text-over-workImage' data-id='shoppingList'>
            Shopping List Project
          </div>
        </div>
        <div
          className='mobile-work-container'
          onClick={handleProjectClick}
          data-id='movieRating'
        >
          <img
            className='mobile-workImage'
            src={movieRating}
            alt='Movie Rating Project'
            title='Movie Rating Project'
            data-id='movieRating'
          />
          <div className='text-over-workImage' data-id='movieRating'>
            Movie Rating Project
          </div>
        </div>
        <div
          className='mobile-work-container'
          onClick={handleProjectClick}
          data-id='reactQuiz'
        >
          <img
            className='mobile-workImage'
            src={reactQuiz}
            alt='React Quiz Project'
            title='React Quiz Project'
            data-id='reactQuiz'
          />
          <div className='text-over-workImage' data-id='reactQuiz'>
            React Quiz Project
          </div>
        </div>
      </div>
      <div className='module-work displayNone'>
        <div className='crossModule' onClick={handleCloseModule}>
          &times;
        </div>
        {clickedProjectId === 'discoveryApp' ? <DiscoveryApp /> : ''}
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
};

export default function MyWork() {
  return (
    <div className='myWork side-wrapper'>
      <HeadingBar />
      <MyWorkDesktop />
      <MyWorkMobile />
    </div>
  );
}
