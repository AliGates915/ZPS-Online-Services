import React from 'react';
import { motion } from 'framer-motion';
import { services } from './ContentData';
import { textVariant } from '../motion';
import ServiceCard from '../Services/ServiceCard';
import { Link } from "react-router-dom";

interface Service {
  title: string;
  icon: string;
}

export const Services: React.FC = () => {
  return (
    <> 
      <div className='pb-10'>
        <motion.div variants={textVariant(0.1)}>
          <h2 className="text-[#0059A6] font-bold pt-8 mt-80 flex justify-center">Available Services</h2>
        </motion.div>

        <div className='mt-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {services.map((service: Service, index: number) => (
            <Link key={service.title} to={`/services/${service.title}`}>
              <ServiceCard index={index} {...service} />
            </Link>
          ))}
        </div>
      </div>
    </>

  );
};