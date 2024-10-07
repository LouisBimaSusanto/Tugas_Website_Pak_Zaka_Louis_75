import React from 'react'
import ContactImg from "../assets/contact-img.png"
import Contact2 from "../assets/contact-img2.png"
import { MdOutlineArrowOutward } from "react-icons/md"

import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div className='pb-20'>
      <div></div>
      <div className='flex justify-center items-center gap-x-10'>
        <div className='bg-[#D9D9D9] rounded-xl flex items-center justify-center gap-2 p-2'>
          <img src={ContactImg} alt="contact img" className='' />
          <div className='flex flex-col justify-center gap-2'>
            <h1 className='text-3xl font-bold'>Get To Know</h1>
            <p className='max-w-sm'>Join 200k+ other subscribers and get the major announcements from Gamico Studio straight in your inbox.</p>
            <Link to={`/`} className='border rounded-lg flex items-center gap-3 p-2 w-fit border-black hover:bg-black hover:text-white transition ease-in-out'>
              <span>Email Address</span>
              <MdOutlineArrowOutward size={20} />
            </Link>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-10 bg-cover p-5 rounded-[50px]' style={{ backgroundImage: `url(${Contact2})`} }>
          <h1 className='font-bold text-3xl text-center max-w-sm'>Interested in Making Magic With Us?</h1>
          <p className='max-w-sm text-2xl text-center'>See Your Opportunity and Our Current Open Roles Here</p>
          <Link to={`/`} className='border-2 rounded-lg flex items-center gap-3 p-2 w-fit border-black hover:bg-black hover:text-white transition ease-in-out'>
              <span>Email Address</span>
              <MdOutlineArrowOutward size={20} />
            </Link>
        </div>

      </div>
        
    </div>
  )
}

export default Contact