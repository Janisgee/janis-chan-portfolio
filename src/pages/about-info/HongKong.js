// import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import hongkong1 from '../../images/about-janis/aboutImage/hongkong-1.jpg';
import hongkong2 from '../../images/about-janis/aboutImage/hongkong-2.jpg';
import hongkong3 from '../../images/about-janis/aboutImage/hongkong-3.jpg';

export default function HongKong() {
  return (
    <div className='aboutMessage fade-in-text'>
      <h1>Hong Kong</h1>
      <div className='aboutImage'>
        <img src={hongkong1} alt='Hong Kong' title='Hong Kong' />
        <img src={hongkong2} alt='Dim Sum' title='Dim Sum' />
        <img src={hongkong3} alt='Hawker Stall' title='Hawker Stall' />
      </div>
      <h5 className='aboutParagraph'>
        <TypeAnimation
          sequence={[
            `I was born in Hong Kong. \nI have a lot of family and friends👯 in there.\n The food in Kong Kong is really good😋, especially dim sum, tea restaurants, and hawker stalls.`,
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
