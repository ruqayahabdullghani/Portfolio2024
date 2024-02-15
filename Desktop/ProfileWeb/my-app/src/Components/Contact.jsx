import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#0a192f] flex justify-center items-center p-4 pt-[100px]'>
    <form method='POST' action="https://getform.io/f/QeZkLRap" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#51bcff] text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or shoot me an email </p>
        </div>
        <input className='bg-[#1e314e] p-2 rounded-xl' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#1e314e] rounded-xl' type="email" placeholder='Email' name='email' />
        <textarea className=' bg-[#1e314e] p-2 rounded-xl' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#3a6bc0] hover:border-[#3a6bc0] rounded-full px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
    </form>
</div>
  )
}

export default Contact