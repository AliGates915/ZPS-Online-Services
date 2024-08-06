import { useState } from "react";
import { FiPhoneCall } from 'react-icons/fi';
import React from 'react';
import { IoMailOutline } from 'react-icons/io5';
import './styles.css';

import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';


// eslint-disable-next-line react-refresh/only-export-components
export function Social_Icons() {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            {/* For Contact and Social Media Icons*/}
            <div className="flex flex-wrap pl-14 bg-gray-900 text-white p-3 pr-14 sm:justify-between justify-center ">
                {/* Left-Side Mobile Number && Email*/}
                <div className='flex  font-medium '>
                    {/* Mobile Number */}
                    <div className="flex"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ textDecoration: isHovered ? 'underline' : 'none' }}>
                        <FiPhoneCall className='pt-1 mr-2' size={22} /> +923226967072
                    </div>

                    {/* Email */}
                    <div className="ml-24 custom-hidden">
                        <EmailLink />
                    </div>
                </div>

                {/* Right-Side Social Media Icons */}
                <div className='gap-4 text-white cust-hidden'>
                    <div className="flex">
                        <WhatsappIc />
                    </div>
                    <div className="flex">
                        <FacebookIc />
                    </div>
                    <div className="flex">
                        <InstagramIc />
                    </div>
                    <div className="flex">
                        <YoutubeIc />
                    </div>
                </div>
            </div>
        </>
    )
}

// Social Accounts Original Links
export const EmailLink = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const emailAddress = 'zps322698@gmail.com';
    return (
        <a className='flex' href={`mailto:${emailAddress}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ textDecoration: isHovered ? 'underline' : 'none' }}>
            <IoMailOutline className='pt-1 mr-2' size={23} />
            {emailAddress}
        </a>
    );
};
export const WhatsappIc = () => {
    const whatsappNumber = '+923226967072'; // Replace this with your WhatsApp number

    return (
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={23} />
        </a>
    );
};
export const FacebookIc = () => {
    const facebookUrl = 'https://www.facebook.com/profile.php?id=61561119974018';

    return (
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={23} />
        </a>
    );
};
export const InstagramIc = () => {
    const instagramUrl = 'https://www.instagram.com/zahidprintingservics/'; // Replace this with your Instagram URL

    return (
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={23} />
        </a>
    );
};
export const YoutubeIc = () => {
    const youtubeUrl = 'https://www.youtube.com/channel/UCD3mk7Y93Yjncte8gt5hfqg'; // Replace this with your Instagram URL

    return (
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            <FaYoutube size={23} />
        </a>
    );
};
