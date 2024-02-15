import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin, FaMail,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlinePhone } from 'react-icons/hi';

import Resume from './assets/RuqayahAbdulghani.pdf'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <a href='/' alt='Logo Image' className='text-5xl ml-8 text-white'>R<span className='text-[#51bcff]'>Q.</span></a>
      </div>

      {/* menu */}
      <ul className='hidden md:flex mr-8 '>
        <li className=' hover:text-[#51bcff]'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=' hover:text-[#51bcff]'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=' hover:text-[#51bcff]'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=' hover:text-[#51bcff]'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li >
        <li className=' hover:text-[#51bcff]'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-2xl hover:text-[#51bcff]'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-2xl hover:text-[#51bcff]'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-2xl hover:text-[#51bcff]'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-2xl hover:text-[#51bcff]'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-2xl hover:text-[#51bcff]'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a
  className='flex justify-between items-center w-full text-gray-300'
  href='https://www.linkedin.com/in/ruqayah-abdullghani'
  target='_blank' rel='noopener noreferrer'
>
              Linkedin<FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/ruqayahabdullghani' target='_blank' rel='noopener noreferrer'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href='mailto:ruqayahabdullghani@gmail.com'
>
  Email <HiOutlineMailOpen size={30} />
</a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-900'>
          <a className='flex justify-between items-center w-full text-gray-300' download href={Resume} 
          target='_blank' rel='noopener noreferrer'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
          <a className='flex justify-between items-center w-full text-gray-300'  href='tel:+966509843910'>
            Phone <HiOutlinePhone size={30} />
            </a>
          </li>
        
        </ul>
      </div>
    </div>
  )
}

export default Navbar