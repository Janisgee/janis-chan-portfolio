// import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import study1 from '../../images/about-janis/aboutImage/study-1.jpg';
import study2 from '../../images/about-janis/aboutImage/study-2.jpg';
import study3 from '../../images/about-janis/aboutImage/study-3.jpg';

export default function Study() {
  return (
    <div className='aboutMessage fade-in-text'>
      <h1>Study</h1>
      <div className='aboutImage'>
        <img src={study1} alt='Curtin University' title='Curtin University' />
        <img src={study2} alt='SheCodes' title='SheCodes' />
        <img src={study3} alt='Udemy' title='Udemy' />
      </div>
      <h5 className='aboutParagraph'>
        <TypeAnimation
          sequence={[
            `I have a bachelor degree🎓 in Commerce (Sales, marketing and advertising) at Curtin University. \n After that, I started to feel interested in software🖥️.\n I joined SheCodes and Udemy to enhance my programming skills🆙 in software.`,
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
