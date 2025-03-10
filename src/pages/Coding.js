import { useState } from 'react';
import './Coding.css';
import HeadingBar from './utilities/HeadingBar.js';
import FlippingCard from './utilities/FlippingCard.js';

import react2 from '../images/skills/react2.png';
import javaScript from '../images/skills/js.png';
import css from '../images/skills/css.png';
import html from '../images/skills/html.png';
import nodeJs from '../images/skills/Node.js_logo.png';
import expressjs from '../images/skills/ExpressJS-logo.png';
import mongoDB from '../images/skills/MongoDB_Logo.svg.png';
import vsCode from '../images/skills/visual-studio.png';
import github from '../images/skills/github.png';
import netlify from '../images/skills/netlify_logo.png';
import bootstrap from '../images/skills/bootstrap.png';
import render from '../images/skills/render.png';
import photoshop from '../images/skills/photoshop.png';

const CodingDesktop = () => {
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
    <div className='coding-desktop'>
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
};

const CodingMobile = () => {
  return (
    <div className='coding-mobile'>
      <h2>Coding Skill</h2>
      <div className='mobile-flippingCard'>
        <input
          className='skillBar'
          type='checkbox'
          id='skillBar'
          name='skillBar'
        />
        <label htmlFor='skillBar'>
          <span className='titleOne'>
            front-end<span className='titleTwo'>back-end</span>
          </span>
        </label>
        <div className='card-3d-wrap '>
          <div className='card-3d-wrapper'>
            <div className='card-front'>
              <div className='skill-wrap'>
                <h4 className='mb-5'>Front-end</h4>
                <div className='skill-label'>
                  <div className='displayFlex '>
                    <img
                      className='skill-logo'
                      src={html}
                      alt='HTML'
                      title='HTML'
                    />
                    <img
                      className='skill-logo'
                      src={css}
                      alt='CSS'
                      title='CSS'
                    />
                    <img
                      className='skill-logo'
                      src={javaScript}
                      alt='JavaScript'
                      title='JavaScript'
                    />
                    <img
                      className='skill-logo'
                      src={react2}
                      alt='HTML'
                      title='HTML'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='card-back'>
              <div className='skill-wrap'>
                <h4 className='mb-5'>Back-end</h4>
                <div className='skill-label'>
                  <div className='displayFlex '>
                    <img
                      className='skill-logo'
                      src={nodeJs}
                      alt='Node.JS'
                      title='Node.JS'
                    />
                    <img
                      className='skill-logo'
                      src={expressjs}
                      alt='Express JS'
                      title='Express JS'
                    />
                    <img
                      className='skill-logo'
                      src={mongoDB}
                      alt='MongoDB'
                      title='MongoDB'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className='build-tools'>
        <h3>The build tools I use and more!</h3>
        <div className='tools'>
          <img
            className='skill-logo tech-logo'
            src={vsCode}
            alt='Visual Studio Code'
            title='Visual Studio Code'
          />
          <img
            className='skill-logo tech-logo'
            src={github}
            alt='GitHub'
            title='GitHubas'
          />
          <img
            className='skill-logo tech-logo'
            src={netlify}
            alt='Netlify'
            title='Netlify'
          />
          <img
            className='skill-logo tech-logo'
            src={bootstrap}
            alt='Bootstrap'
            title='Bootstrap'
          />
          <img
            className='skill-logo tech-logo'
            src={render}
            alt='Render'
            title='Render'
          />
          <img
            className='skill-logo tech-logo'
            src={photoshop}
            alt='Photoshop'
            title='Photoshop'
          />
        </div>
      </div>
    </div>
  );
};

export default function Coding() {
  return (
    <div className='coding side-wrapper'>
      <HeadingBar />
      <CodingDesktop />
      <CodingMobile />
    </div>
  );
}
