// import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import design1 from '../../images/about-janis/aboutImage/design-1.jpg';
import design2 from '../../images/about-janis/aboutImage/design-2.jpg';
import design3 from '../../images/about-janis/aboutImage/design-3.jpg';

export default function Design() {
  return (
    <div className='aboutMessage fade-in-text'>
      <h1>Design</h1>
      <div className='aboutImage'>
        <img src={design1} alt='Photoshop' title='Photoshop' />
        <img src={design2} alt='Company Catalog' title='Company Catalog' />
        <img src={design3} alt='Restaurant Menu' title='Restaurant Menu' />
      </div>
      <h5 className='aboutParagraph'>
        <TypeAnimation
          sequence={[
            `I have worked on small creative projects using Photoshop, helping companies🏬 and restaurants🍽️ design their catalogs and menus.\n`,
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
