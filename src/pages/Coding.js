import { useState } from 'react';
import './Coding.css';
import HeadingBar from './utilities/HeadingBar.js';
import FlippingCard from './utilities/FlippingCard.js';
import Navbar from './utilities/Navbar.js';

export default function Coding() {
  const [enterClicked, setEnterClicked] = useState(false);

  function handleEnterClick(e) {
    e.preventDefault();

    console.log('Enter');
    e.target.parentElement.classList.add('to-left');
    setTimeout(() => {
      console.log('Delayed for 4 second.');
      e.target.parentElement.classList.add('hidden');
      setEnterClicked(true);
    }, '2500');
  }
  return (
    <div className='coding side-wrapper'>
      <Navbar />
      <HeadingBar />
      <div className='to-right animation-common'>
        <div className='codingbackground'>Skill in Coding</div>
        <div className='enterSign codingbackground' onClick={handleEnterClick}>
          ENTER►
        </div>
      </div>
      {enterClicked ? (
        <div className='codingSkills right-to-left'>
          <div className='displayFlex skill '>
            <h1>
              Skills
              <br />
              in <br />
              Coding
            </h1>
            <FlippingCard />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
