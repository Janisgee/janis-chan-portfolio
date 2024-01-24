// import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import personality1 from '../../images/about-janis/aboutImage/personality-1.png';
import personality2 from '../../images/about-janis/aboutImage/personality-2.png';
import personality3 from '../../images/about-janis/aboutImage/personality-3.png';

export default function Personality() {
  return (
    <div className='aboutMessage fade-in-text'>
      <h1>Personality</h1>
      <div className='aboutImage'>
        <img src={personality1} alt='Team Player' title='Team Player' />
        <img src={personality2} alt='Explorer' title='Explorer' />
        <img src={personality3} alt='Problem solving' title='Problem solving' />
      </div>
      <h5 className='aboutParagraph'>
        <TypeAnimation
          sequence={[
            `I am a team player, I like to work in a team. \n I like to explorer and learn new things. When I meet with problems, I will try different ways to solve it. 😉 `,
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
