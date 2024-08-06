import { TypeAnimation } from 'react-type-animation';
import React from 'react'

export const Typewriter = () => {
    return (
      <div className='mt-2 text-[10px] md:text-[20px] lg:text-[24px]'>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          
          'Graphics Designer 🎨🖌️',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Youtuber 📺▶️',
          1000,
          'Video-Editor 🎬🎞️',
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
  
  
  