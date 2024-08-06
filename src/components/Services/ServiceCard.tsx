import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { fadeIn } from '../motion';

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/service/${title}`);
  };

  return (
    <Tilt className='xs:w-[250px] w-full' tiltMaxAngleX={60} tiltMaxAngleY={60} scale={1} transitionSpeed={450}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full p-[1px]  border-solid  border-2 rounded-xl border-[#0059A6] shadow-card'
        onClick={handleCardClick}
        style={{ cursor: 'pointer' }} // Add cursor pointer to indicate clickable
      >
        <div 
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly 
          items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-25 h-25 object-contain'
          />

          <h3 className='text-[#111827] text-[20px] font-extrabold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
