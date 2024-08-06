import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-scroll';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <>
    <footer className="bg-[#0059a6] text-white font-sans px-10">
      <div className="container mx-auto py-4 px-6">
        <div className="flex flex-wrap justify-between">
          {/* Left Column */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h1 className="mb-4">ZPS. </h1>
            <p className="text-[1rem] pb-4 font-[Poppins] pr-5">
            Online ZPS Graphics Services is a leading graphics services, working in Social, Education, eCommerce, MarketPlace. We are specialized in 3D-Wallpaper services.
            </p>
            <p className="text-[18px] pt-8 pr-6">
              <span className="font-bold ">Contact Us</span>
              <br />
              03226967072
              <br />
              contact@zaptatech.com
              <br />
                Zahid Printing Services 53/2.L Road, Near Fauji Foundation School, Okara, Pakistan. 
            </p>
          </div>
          
          {/* Middle Column */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                    <h6 className="uppercase font-bold mb-4">Services</h6>
                    <ul>
                        <li className="mb-2">
                            <RouterLink to="/#service/Flex Printing" className="hover:underline cursor-pointer">
                                Flex Printing
                            </RouterLink>
                        </li>
                        <li className="mb-2">
                            <Link to="/#service/Business Card" smooth={true} duration={500} className="hover:underline cursor-pointer">
                                Business Card
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/#service/3D Wallpaper" smooth={true} duration={500} className="hover:underline cursor-pointer">
                                3D-WallPaper
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/#service/Social Poster" smooth={true} duration={500} className="hover:underline cursor-pointer">
                                Social Poster
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/#service/Logo Design" smooth={true} duration={500} className="hover:underline cursor-pointer">
                                Logo Design
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/#service/Shadi Card" smooth={true} duration={500} className="hover:underline cursor-pointer">
                                Shadi Card
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Column */}
                <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                    <h6 className="uppercase font-bold mb-4">Quick Links</h6>
                    <ul>
                        <li className="mb-2">
                            <Link to="about" smooth={true} duration={500} className="hover:underline cursor-pointer">
                                About Us
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="Service" smooth={true} duration={500} className="hover:underline cursor-pointer">
                                Services
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/template" smooth={true} duration={500} className="hover:underline cursor-pointer">
                                Template
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="contact" smooth={true} duration={500} className="hover:underline cursor-pointer">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <span className=' text-lg font-semibold'>Follow Me</span>
                <div className='flex space-x-7 mt-3'> 
                <a href={'https://www.facebook.com/profile.php?id=61561119974018'} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className='bg-[#0059a6] text-white rounded-md px-2 py-1' size={40} />
                </a>
                <a href={'https://www.instagram.com/zahidprintingservics'} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className='bg-[#0059a6] text-white rounded-md px-2 py-1' size={40} />
                </a>
                <a href={'https://www.youtube.com/channel/UCD3mk7Y93Yjncte8gt5hfqg'} target="_blank" rel="noopener noreferrer">
                  <FaYoutube className='bg-[#0059a6] text-white rounded-md px-2 py-1' size={40} />
                </a>
                </div>
                
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div>
            
          </div>
          
        </div>

        <div className="mt-6 border-t border-white-700 pt-4 text-center">
          <p className="text-[16px]">&copy; 2024 Copyrights Zahid Printing Services. All rights are reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}