import { useEffect, useMemo, useState } from 'react';
import './About.css';
import HeadingBar from './utilities/HeadingBar.js';
// import cartoonJanis from '../images/cartoon-janis.png';
import cartoonJanisTwo from '../images/cartoon-janis-two.jpg';
import australia from '../images/about-janis/australia.png';
import hongKong from '../images/about-janis/hong-kong.png';
import hobby from '../images/about-janis/hobby.png';
import design from '../images/about-janis/design.png';
import personality from '../images/about-janis/personality.png';
import programming from '../images/about-janis/programming.png';
import study from '../images/about-janis/study.png';
import work from '../images/about-janis/work.png';

import Hobby from '../pages/about-info/Hobby.js';
import Personality from '../pages/about-info/Personality.js';
import Study from './about-info/Study.js';
import Work from './about-info/Work.js';
import Programming from './about-info/Programming.js';
import Design from './about-info/Design.js';
import Australia from './about-info/Australia.js';
import HongKong from './about-info/HongKong.js';
import Intro from './about-info/Intro.js';

export default function About() {
  const theta = Math.PI / 4.0;
  const [scrollTheta, setScrollTheta] = useState(0);
  const [clickedAbout, setClickedAbout] = useState('');

  function handleAboutClick(e) {
    e.preventDefault();
    console.log(e.target);
    setClickedAbout(e.target.dataset.id);
    console.log(e.target.dataset.id);
    e.target.parentElement.scrollTo({
      top: e.target.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  }

  const cardPositions = useMemo(() => {
    const cardImages = [
      { src: australia, name: 'Australia' },
      { src: hongKong, name: 'Hong Kong' },
      { src: hobby, name: 'Hobby' },
      { src: personality, name: 'Personality' },
      { src: study, name: 'Study' },
      { src: work, name: 'Previous Work' },
      { src: programming, name: 'Programming' },
      { src: design, name: 'Design' },
    ];

    let new_theta = 0.0;
    let new_x = 0.0;
    let new_y = 0.0;
    let wheel_radius = 200.0;

    // const cards = [0, 0, 0, 0, 0, 0, 0, 0];

    const center = {
      x: 150,
      y: 100,
    };

    return cardImages.map((image, index) => {
      new_theta = theta * index;
      new_x = Math.cos(new_theta) * wheel_radius;
      new_y = -1 * Math.sin(new_theta) * wheel_radius;
      return { x: `${center.x + new_x}px`, y: `${center.y + new_y}px`, image };
    });
  }, [theta]);

  useEffect(() => {
    let stop = false;
    const wheelel = document.getElementsByClassName('wheel');

    wheelel[0].addEventListener('mouseenter', () => (stop = true));
    wheelel[0].addEventListener('mouseleave', () => (stop = false));

    let rafId;
    const rafFn = () => {
      if (!stop) {
        setScrollTheta((prevTheta) => prevTheta + 0.1);
      }
      return (rafId = requestAnimationFrame(rafFn));
    };
    rafId = rafFn();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className='about side-wrapper'>
      <HeadingBar />

      <div className='aboutChoice'>
        <div className='cardsGroup'>
          <img
            className='janis-image-two'
            src={cartoonJanisTwo}
            alt='Janis Chan'
            title='Janis Chan'
          />
          <div
            className='wheel'
            style={{
              transform: `translate(-50%, -50%) rotate(${scrollTheta}deg)`,
            }}
          >
            {cardPositions.map((card, ind) => {
              return (
                <div
                  key={ind}
                  className='card'
                  style={{
                    top: card.y,
                    left: card.x,
                    transform: `translate(-50%, -50%) rotate(${-scrollTheta}deg)`,
                  }}
                  onClick={handleAboutClick}
                >
                  <img
                    src={card.image.src}
                    className='card'
                    alt={card.image.name}
                    title={card.image.name}
                    data-id={card.image.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {clickedAbout === '' && <Intro />}
        {clickedAbout === 'Hobby' && <Hobby />}
        {clickedAbout === 'Personality' && <Personality />}
        {clickedAbout === 'Study' && <Study />}
        {clickedAbout === 'Previous Work' && <Work />}
        {clickedAbout === 'Programming' && <Programming />}
        {clickedAbout === 'Design' && <Design />}
        {clickedAbout === 'Australia' && <Australia />}
        {clickedAbout === 'Hong Kong' && <HongKong />}
        <a
          href='https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:e48ad87d-efda-3c15-bd02-57cba9a1e87a'
          target='_blank'
          alt='Resume'
          rel='noreferrer'
          className='resume'
        >
          📃Resume
        </a>
      </div>
    </div>
  );
}
