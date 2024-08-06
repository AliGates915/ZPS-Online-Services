import React from 'react';
import { useState, useEffect } from 'react';
import {TypeWriter} from './TypeWriter'
// import { Services } from './Services'
import Bgimg from './1.jpg'
import {
  WhatsappIcon, FacebookIcon, YoutubeIcon, InstagramIcon
} from './SocailMediaDependencies';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import NavLink from './NavLinks';
import {  ShinnyButton } from './ShinnyButton'
import { PuffLoader } from 'react-spinners';
import { Link } from 'react-scroll';


export const Navbar: React.FC = () => {
  
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
  }

  return (  
    <>
      <div className='flex w-full justify-between items-center bg-[#0059A6]  h-[60px]   px-16 absolute z-10 text-white'>
        <div>
          <h1> ZPS.😍</h1>
        </div>

        {/* All NavLinks Start Here*/}
        <NavLink />

        {/* Hamburger Icon for Responsive */}
        <div onClick={handleNav} className='md:hidden z-10'>
          {nav ? <AiOutlineClose size={20} className='text-white' /> : <HiOutlineMenuAlt4 size={20} />}
        </div>

        {/* for Responsive Navbar is Hidden Show */}
        <div onClick={handleNav} className={nav ? 'absolute text-white left-0 top-0 w-full bg-gray-900 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul className=''>
            <h1>ZPS.</h1>
            <div className='flex flex-col justify-center items-center'>
              <li className='border-b '><Link to='Homepage'>Home</Link></li>
              <li className='border-b'>About</li>
              <li className='border-b'>Service</li>
              <li className='border-b'>Template</li>
              <li className='border-b'>Contact</li>
            </div>
            <div className='flex flex-col'>
              <button className='my-6'>Search</button>
            </div>
            <div className='flex justify-evenly my-6'>
              <FacebookIcon />
              <InstagramIcon />
              <YoutubeIcon />
              <WhatsappIcon />
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export function Homepage() {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full h-full absolute bg-white">
      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <PuffLoader color="#123456" />
        </div>
      ) : (
        <>
        <img src={Bgimg} className='w-full h-screen' />
          <div className="absolute top-0 w-full h-full flex flex-col pt-40 text-center text-white p-4 text-wrap">
            <h1 className="text-[10px] lg:text-3xl md:text-2xl lg:font-bold md:font-bold 
            text-[#0059A6] mb-6">
              <TypeWriter />
            </h1>

            <form className="flex sm:flex-row flex-row mt-5 max-w-[700px] mx-auto w-full border p-2 rounded-full bg-gray-100">
              <div className="flex-1">
                <input 
                  className="pl-4 h-full w-full bg-gray-100 font-[Arial] focus:outline-none text-black"
                  type="text"
                  placeholder="Search Template"
                />
              </div>
              <div className="flex justify-center sm:justify-end mt-2 sm:mt-1">
                <button className="px-2 py-2 rounded-full bg-[#0059A6] text-white">
                  <AiOutlineSearch size={20} className="icon" />
                </button>
              </div>
            </form>

            <div className=" mt-8 mb-60">
              <Link to="Service" smooth={true} duration={500}>
                <ShinnyButton />
              </Link>
            </div>
            
          </div>
        </>
      )}
    </div>
    
  );
}

