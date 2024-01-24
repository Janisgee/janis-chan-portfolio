// import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import programming1 from '../../images/about-janis/aboutImage/programming-1.jpg';
import programming2 from '../../images/about-janis/aboutImage/programming-2.png';
import programming3 from '../../images/about-janis/aboutImage/programming-3.png';

export default function Programming() {
  return (
    <div className='aboutMessage fade-in-text'>
      <h1>Programming</h1>
      <div className='aboutImage'>
        <img src={programming1} alt='Coding' title='Coding City' />
        <img src={programming2} alt='Javascript' title='Javascript' />
        <img src={programming3} alt='App' title='App' />
      </div>
      <h5 className='aboutParagraph'>
        <TypeAnimation
          sequence={[
            `In programming🖥️, I learn mainly Javascript language. \n I have knowledge in React, Express, MongonDB, HTML, CSS, JS. \n I would like to be a full stack software developer👩‍💻.`,
            30000,
            '',
          ]}
          speed={50}
          style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
          repeat={Infinity}
        />
      </h5>
    </div>
  );
}
