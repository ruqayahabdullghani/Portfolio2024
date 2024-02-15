import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-[#51bcff]'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] uppercase'>
      Ruqayah Abdullghani

      </h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        I'm a Web Developer.
      </h2>
      <p className='text-[#8892b0] py-4 max-w-[700px]'>
      I recently graduated with a Bachelor's degree in Information Technology and Computing, 
      fueling my fervor for developing impactful digital solutions. 
      I am eagerly seeking challenging projects to showcase my skills and contribute to the ever-evolving tech landscape. 
      Let's collaborate on shaping the future! 🚀
      </p>
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-full hover:bg-[#3a6bc0] hover:border-[#3a6bc0]'>
          View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Home