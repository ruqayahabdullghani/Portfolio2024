import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#51bcff]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Ruqayah, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>
              Discovering my passion for web development during my graduation project was a pivotal moment. 
              Through diverse projects, I have honed my skills and deepened my expertise in this dynamic field.
               Committed to ongoing learning,I am enthusiastic about contributing to innovative projects and further enhancing my technical abilities. 
                </p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About