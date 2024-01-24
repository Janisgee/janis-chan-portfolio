import { useState } from 'react';
import './Coding.css';
import HeadingBar from './utilities/HeadingBar.js';

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
            <div className='displayFlex'>
              <div>
                <h3>Front-end Skills</h3>
                <h3> Html, Css, JS</h3>
              </div>
              <div>
                <h3>Back-end Skills</h3>
                <h3> Html, Css, JS</h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
