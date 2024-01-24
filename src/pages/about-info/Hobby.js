// import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import hobby1 from '../../images/about-janis/aboutImage/hobby-1.jpg';
import hobby2 from '../../images/about-janis/aboutImage/hobby-2.jpg';
import hobby3 from '../../images/about-janis/aboutImage/hobby-3.jpg';

export default function Hobby() {
  return (
    <div className='aboutMessage fade-in-text'>
      <h1>Hobby</h1>
      <div className='aboutImage'>
        <img src={hobby1} alt='Movie' title='Movie' />
        <img src={hobby2} alt='Cooking' title='Cooking' />
        <img src={hobby3} alt='Switch Game' title='Switch Game' />
      </div>
      <h5 className='aboutParagraph'>
        <TypeAnimation
          sequence={[
            `At my free time, i like to watch movie🍿, yoga, and do some cooking🍴. I love to play board game,switch games and computer games🕹️ with friends. \n `,
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
