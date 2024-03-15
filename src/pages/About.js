import { useEffect, useMemo, useState } from 'react';
import './About.css';
import { TypeAnimation } from 'react-type-animation';
import HeadingBar from './utilities/HeadingBar.js';

import cartoonJanisTwo from '../images/cartoon-janis-two.jpg';
import australia from '../images/about-janis/australia.png';
import hongKong from '../images/about-janis/hong-kong.png';
import hobby from '../images/about-janis/hobby.png';
import design from '../images/about-janis/design.png';
import personality from '../images/about-janis/personality.png';
import programming from '../images/about-janis/programming.png';
import study from '../images/about-janis/study.png';
import work from '../images/about-janis/work.png';
import resume from '../images/about-janis/resume.png';

import Hobby from '../pages/about-info/Hobby.js';
import Personality from '../pages/about-info/Personality.js';
import Study from './about-info/Study.js';
import Work from './about-info/Work.js';
import Programming from './about-info/Programming.js';
import Design from './about-info/Design.js';
import Australia from './about-info/Australia.js';
import HongKong from './about-info/HongKong.js';
import Intro from './about-info/Intro.js';

const AUSTRALIA = {
  imageSrc: australia,
  name: 'Australia',
  component: <Australia />,
};
const HONG_KONG = {
  imageSrc: hongKong,
  name: 'Hong Kong',
  component: <HongKong />,
};
const HOBBY = { imageSrc: hobby, name: 'Hobby', component: <Hobby /> };
const PERSONALITY = {
  imageSrc: personality,
  name: 'Personality',
  component: <Personality />,
};
const STUDY = { imageSrc: study, name: 'Study', component: <Study /> };
const WORK = { imageSrc: work, name: 'Previous Work', component: <Work /> };
const PROGRAMMING = {
  imageSrc: programming,
  name: 'Programming',
  component: <Programming />,
};
const DESIGN = { imageSrc: design, name: 'Design', component: <Design /> };

const aboutCardData = [
  AUSTRALIA,
  HONG_KONG,
  HOBBY,
  PERSONALITY,
  STUDY,
  WORK,
  PROGRAMMING,
  DESIGN,
];

const AboutDesktop = () => {
  const theta = Math.PI / 4.0;
  const [scrollTheta, setScrollTheta] = useState(0);
  const [clickedAbout, setClickedAbout] = useState(null);

  function handleAboutClick(card) {
    setClickedAbout(card);
    console.log(clickedAbout);
  }

  function handleScrollTo(e) {
    e.target.parentElement.scrollTo({
      top: e.target.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  }

  const cardPositions = useMemo(() => {
    let new_theta = 0.0;
    let new_x = 0.0;
    let new_y = 0.0;
    let wheel_radius = 200.0;

    // const cards = [0, 0, 0, 0, 0, 0, 0, 0];

    const center = {
      x: 150,
      y: 100,
    };

    return aboutCardData.map((image, index) => {
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
    <div className='about-desktop'>
      <div className='aboutChoice'>
        <div className='cardsGroup'>
          <div className='cardContainer'>
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
                    onClick={(e) => {
                      handleAboutClick(card);
                      handleScrollTo(e);
                    }}
                  >
                    <img
                      src={card.image.imageSrc}
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
        </div>
        {clickedAbout === null && <Intro />}
        {clickedAbout !== null && clickedAbout.image.component}

        <a
          href='https://acrobat.adobe.com/id/urn:aaid:sc:AP:32cd7f16-5a03-4d24-baf1-3070bd6720a3'
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
};

const AboutMobile = () => {
  const [openCard, setOpenCard] = useState(null);

  function handleOpenModule(card) {
    setOpenCard(card);
  }

  function handleCloseModule() {
    setOpenCard(null);
  }

  return (
    <div className='about-mobile'>
      <div className='mobile-janisImage'>
        <img
          className='janis-image-two'
          src={cartoonJanisTwo}
          alt='Janis Chan'
          title='Janis Chan'
        />
      </div>
      <div className='mobile-intro'>
        <TypeAnimation
          sequence={[`Hi! I am Janis Chan!`, 30000, '']}
          speed={50}
          style={{
            whiteSpace: 'pre-line',
            fontSize: '1.5em',
            fontWeight: '600',
          }}
          repeat={Infinity}
        />
      </div>
      <div className='mobile-aboutGroup'>
        <div className='mobile-resume'>
          <a
            href='https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:e48ad87d-efda-3c15-bd02-57cba9a1e87a'
            target='_blank'
            alt='Resume'
            rel='noreferrer'
            className='resumeLink'
          >
            <img
              src={resume}
              className='mobile-card card-resume'
              alt='Resume'
              title='Resume'
              data-id='resume'
            />{' '}
          </a>
          <p className='mobile-tag'>Resume</p>
        </div>
        {aboutCardData.map((card, ii) => {
          return (
            <div
              className='mobile-about-card'
              key={ii}
              onClick={() => handleOpenModule(card)}
            >
              <img
                src={card.imageSrc}
                className='mobile-card'
                alt={card.name}
                title={card.name}
              />
              <p className='mobile-tag'>{card.name}</p>
            </div>
          );
        })}
      </div>

      {openCard != null && (
        <div className='mobile-aboutModule'>
          <div className='crossModule' onClick={handleCloseModule}>
            &times;
          </div>
          {openCard.component}
        </div>
      )}
    </div>
  );
};

export default function About() {
  return (
    <div className='about side-wrapper'>
      <HeadingBar />
      <AboutDesktop />
      <AboutMobile />
    </div>
  );
}
