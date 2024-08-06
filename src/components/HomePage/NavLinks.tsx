import React from 'react';

import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function NavLinks() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const location = useLocation();

    const handleMouseEnter = (itemName: string | null) => {
        setHoveredItem(itemName);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <ul className='cust-hidden'>
                <RouterLink to='/' onClick={scrollToTop}>
                    <li
                        className={`nav-link ${hoveredItem === 'Home' ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter('Home')}
                        onMouseLeave={handleMouseLeave}>
                        Home
                    </li>
                </RouterLink>

                {location.pathname === '/' ? (
                    <ScrollLink to="Service" smooth={true} duration={500}>
                        <li
                            className={`nav-link ${hoveredItem === 'Service' ? 'hovered' : ''}`}
                            onMouseEnter={() => handleMouseEnter('Service')}
                            onMouseLeave={handleMouseLeave}>
                            Service
                        </li>
                    </ScrollLink>
                ) : (
                    <RouterLink to='/#service'>
                        <li
                            className={`nav-link ${hoveredItem === 'Service' ? 'hovered' : ''}`}
                            onMouseEnter={() => handleMouseEnter('Service')}
                            onMouseLeave={handleMouseLeave}>
                            Service
                        </li>
                    </RouterLink>
                )}
                <ScrollLink to="about" smooth={true} duration={500}>
                <li
                    className={`nav-link ${hoveredItem === 'About' ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter('About')}
                    onMouseLeave={handleMouseLeave}>
                    About
                </li>
                </ScrollLink>
                {/* { <RouterLink to=''>                 */}
                <li 
                    className={`nav-link ${hoveredItem === 'Template' ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter('Template')}
                    onMouseLeave={handleMouseLeave}>
                    Template
                </li>
                {/* </RouterLink> */}

                <ScrollLink to="contact" smooth={true} duration={500}>
                <li
                    className={`nav-link ${hoveredItem === 'Contact' ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter('Contact')}
                    onMouseLeave={handleMouseLeave}>
                    Contact
                </li>
                </ScrollLink>
            </ul>
        </>
    );
}

export default NavLinks;
