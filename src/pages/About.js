import { useEffect, useMemo, useState } from 'react';
import './About.css';
import HeadingBar from './utilities/HeadingBar.js';
// import cartoonJanis from '../images/cartoon-janis.png';
// import cartoonJanisTwo from '../images/cartoon-janis-two.jpg';

export default function About() {
  const theta = Math.PI / 4.0;
  const [scrollTheta, setScrollTheta] = useState(0);

  const cardPositions = useMemo(() => {
    let new_theta = 0.0;
    let new_x = 0.0;
    let new_y = 0.0;
    let wheel_radius = 200.0;

    const cards = [0, 0, 0, 0, 0, 0, 0, 0];

    const center = {
      x: 150,
      y: 100,
    };

    return cards.map((card, index) => {
      new_theta = theta * index;
      new_x = Math.cos(new_theta) * wheel_radius;
      new_y = -1 * Math.sin(new_theta) * wheel_radius;
      return { x: `${center.x + new_x}px`, y: `${center.y + new_y}px` };
    });
  }, []);

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

  // useEffect(() => {
  //   const handleWheel = (event) => {
  //     console.log(event);
  //     setScrollTheta((prevTheta) => prevTheta + event.deltaY);
  //   };

  //   document.addEventListener('wheel', handleWheel);

  //   return () => {
  //     document.removeEventListener('wheel', handleWheel);
  //   };
  // }, []);

  return (
    <div className='about side-wrapper'>
      {/* <HeadingBar /> */}
      {/* 
      <img
        className='janis-image'
        src={cartoonJanis}
        alt='Janis Chan'
        title='Janis Chan'
      /> */}
      {/* <img
        className='janis-image-two'
        src={cartoonJanisTwo}
        alt='Janis Chan'
        title='Janis Chan'
      /> */}

      <div
        className='wheel'
        style={{ transform: `translate(-50%, -50%) rotate(${scrollTheta}deg)` }}
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
            ></div>
          );
        })}
      </div>
    </div>
  );
}
