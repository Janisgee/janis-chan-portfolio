// import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import australia1 from '../../images/about-janis/aboutImage/australia-1.jpg';
import australia2 from '../../images/about-janis/aboutImage/australia-2.jpg';
import australia3 from '../../images/about-janis/aboutImage/australia-3.jpg';

export default function Australia() {
  return (
    <div className='aboutMessage fade-in-text'>
      <h1>Australia</h1>
      <div className='aboutImage'>
        <img src={australia1} alt='Perth City' title='Perth City' />
        <img src={australia2} alt='Cottesloe Beach' title='Cottesloe Beach' />
        <img src={australia3} alt='Kangaroo' title='Kangaroo' />
      </div>
      <h5 className='aboutParagraph'>
        <TypeAnimation
          sequence={[
            `Australia is my second home🏡. \nI have been living and working💼 in Australia for a long time.\n I love the weather☀️ and temperature in Perth so much!`,
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
