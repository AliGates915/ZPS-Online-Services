import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

interface IconProps {
  className?: string;
}

const WhatsappIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`icon ${className}`}>
    <FaWhatsapp />
  </div>
);

const FacebookIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`icon ${className}`}>
    <FaFacebook />
  </div>
);

const YoutubeIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`icon ${className}`}>
    <FaYoutube />
  </div>
);

const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`icon ${className}`}>
    <FaInstagram />
  </div>
);

export { WhatsappIcon, FacebookIcon, YoutubeIcon, InstagramIcon };
