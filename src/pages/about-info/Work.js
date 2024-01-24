// import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import work1 from '../../images/about-janis/aboutImage/work-1.png';
import work2 from '../../images/about-janis/aboutImage/work-2.png';
import work3 from '../../images/about-janis/aboutImage/work-3.jpg';

export default function Work() {
  return (
    <div className='aboutMessage fade-in-text'>
      <h1>Work</h1>
      <div className='aboutImage'>
        <img src={work1} alt='Perth City' title='Perth City' />
        <img src={work2} alt='Perth City' title='Perth City' />
        <img src={work3} alt='Perth City' title='Perth City' />
      </div>
      <h5 className='aboutParagraph'>
        <TypeAnimation
          sequence={[
            `Before studying software, I work as a sales representative in food wholesaleing companys. \n Take care clients needs and wants.\n Provide good customer service to customers.`,
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
