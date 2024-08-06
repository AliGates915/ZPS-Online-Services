import { TypeAnimation } from 'react-type-animation';
import React from 'react';
export const TypeWriter = () => {
    return (
      <div className=''>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Professional in | Flex-Designing',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Professional in | Business-Card',
          1000,
          'Professional in | Shadi-Card',
          1000,
          'Professional in | Letter-Pad',
          1000,
          'Professional in | 3D-WallPaper',
          1000,
          'Professional in | Memo',
          1000,
          'Professional in | Social-Poster',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
      </div>
    );
  };
  
  
  