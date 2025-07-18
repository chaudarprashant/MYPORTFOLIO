import React from 'react';
import './Menus.css';
import { IoHomeOutline } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { FaStackOverflow } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { BsProjector } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { Link } from 'react-scroll';

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className='navbar-profile-pic'>
            <img src="passportSizepic.jpg" alt="profile pic" />
          </div>

          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                  <IoHomeOutline title='home' />
                  Home
                </Link>
              </div>
              <div className='nav-link'>
                <Link to='abouts' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout />
                  About
                </Link>
              </div>
              <div className='nav-link'>
                <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                  <MdCastForEducation />
                  Education
                </Link>
              </div>
              <div className='nav-link'>
                <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
                  <FaStackOverflow />
                  Tech Stack
                </Link>
              </div>
              <div className='nav-link'>
                <Link to='projects' spy={true} smooth={true} offset={-100} duration={100}>
                  <BsProjector />
                  Projects
                </Link>
              </div>
              <div className='nav-link'>
                <Link to='workex' spy={true} smooth={true} offset={-100} duration={100}>
                  <GiGiftOfKnowledge />
                  Work Experience
                </Link>
              </div>
              <div className='nav-link'>
                <Link to='contacts' spy={true} smooth={true} offset={-100} duration={100}>
                  <IoIosContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='nav-item'>
          <div className='nav-link'>
            <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
              <IoHomeOutline title='home' />
            </Link>
          </div>
          <div className='nav-link'>
            <Link to='abouts' spy={true} smooth={true} offset={-100} duration={100}>
              <FcAbout />
            </Link>
          </div>
          <div className='nav-link'>
            <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
              <MdCastForEducation />
            </Link>
          </div>
          <div className='nav-link'>
            <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
              <FaStackOverflow />
            </Link>
          </div>
          <div className='nav-link'>
            <Link to='projects' spy={true} smooth={true} offset={-100} duration={100}>
              <BsProjector />
            </Link>
          </div>
          <div className='nav-link'>
            <Link to='workex' spy={true} smooth={true} offset={-100} duration={100}>
              <GiGiftOfKnowledge />
            </Link>
          </div>
          <div className='nav-link'>
            <Link to='contacts' spy={true} smooth={true} offset={-100} duration={100}>
              <IoIosContact />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
