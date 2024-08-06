import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../motion';
import { Typewriter } from './Typewritter';
import { IoMailOutline } from 'react-icons/io5';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import heroImg from './HeroImg.png';
import CountUp from 'react-countup';
function About() {
  return (
    <>
      <section className='pt-5 lg:px-12 px-6'>
        <h1 id='about' className="text-[#0059a6] text-[2rem] sm:text-[30px] font-bold flex justify-center">
          About
        </h1>

        <div className='container pt-14'>
          <div className='md:flex items-center  md:flex-row justify-between sm:flex-col'>
            {/* Hero Left content */}
            <div className="w-full md:w-1/2">
              <motion.h3 variants={fadeIn('right', '', 1, 1)} initial="hidden" animate="show" className="font-medium text-smallTextColor">
                Hello Welcome,
              </motion.h3>

              <motion.h1 variants={fadeIn('left', '', 1.5, 1.5)} initial="hidden" animate="show" className="mt-2 leading-10 text-[20px] md:text-2xl font-bold xl:text-4xl sm:leading-12">
                I'm <span className='text-[#0059a6]'>Zahid Sohail Naservi</span>
              </motion.h1>
              <Typewriter />
              <div className='flex items-center gap-6 mt-7'>
                <a className='flex bg-[#0059a6] text-white font-semibold justify-center hover:bg-[#1283e6] hover:text-white ease-in duration-300 py-2 px-4 rounded-lg' href={`mailto:${"zps322698@gmail.com"}`}>
                  <IoMailOutline className='mr-2' size={23} />
                  <span>Contact Me</span>
                </a>
              </div>

              <div className='flex items-center gap-6 mt-14'>
                <span className='text-smallTextColor text-[14px] lg:text-lg font-semibold'>Follow Me: </span>
                <a href={'https://www.facebook.com/profile.php?id=61561119974018'} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className='bg-[#0059a6] text-white rounded-md px-2 py-1' size={30} />
                </a>
                <a href={'https://www.instagram.com/zahidprintingservics'} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className='bg-[#0059a6] text-white rounded-md px-2 py-1' size={30} />
                </a>
                <a href={'https://www.youtube.com/channel/UCD3mk7Y93Yjncte8gt5hfqg'} target="_blank" rel="noopener noreferrer">
                  <FaYoutube className='bg-[#0059a6] text-white rounded-md px-2 py-1' size={30} />
                </a>
              </div>
            </div>
            {/* Hero Left End */}

            {/* Hero Image */}
            <div className='w-full md:w-1/3 mt-10 sm:mt-0'>
              <figure className='flex items-center justify-center'>
                <img src={heroImg} alt="Hero Image" />
              </figure>
            </div>
            {/* Hero Image End */}

            {/* Hero Content Right */}
            <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
              <div className='mb-10'>
                <h2 className='text-headingColor font-[700] text-[32px]'>
                  <CountUp start={0} end={10} duration={2} suffix='+' />
                </h2>
                <h4 className='text-headingColor font-[600] text-[18px]'>
                  Years of Experience
                </h4>
              </div>
              <div className='mb-10'>
                <h2 className='text-headingColor font-[700] text-[32px]'>
                  <CountUp start={0} end={100} duration={2} suffix='%' />
                </h2>
                <h4 className='text-headingColor font-[600] text-[18px]'>
                  Success Rate
                </h4>
              </div>
              <div className='mb-10'>
                <h2 className='text-headingColor font-[700] text-[32px]'>
                  <CountUp start={0} end={1000} duration={2} suffix='+' />
                </h2>
                <h4 className='text-headingColor font-[600] text-[18px]'>
                  Happy Client
                </h4>
              </div>
            </div>
            {/* Hero Content Right End */}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
