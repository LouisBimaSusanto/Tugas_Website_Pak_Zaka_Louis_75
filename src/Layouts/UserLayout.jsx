import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa"
import { FaSquareSteam } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6";

const UserLayout = () => {
  return (
    <div className='bg-[#4C3BCF] min-h-screen pt-5'>
        <Navbar />
        <div className='w-full px-10 pt-[150px]'>
            <Outlet />
        </div>
        {/* footer */}
        <div className='w-full bg-[#D9D9D9] bg-opacity-50 flex justify-center items-center gap-x-20 p-3 mt-12'>
          <div className='flex items-center gap-3'>
            <FaXTwitter size={30} />
            Twitter
          </div>
          <div className='flex items-center gap-3'>
            <FaFacebookSquare size={30} />
            Facebook
          </div>
          <div className='flex items-center gap-3'>
            <FaYoutube size={30} />
            Youtube
          </div>
          <div className='flex items-center gap-3'>
            <FaSquareInstagram size={30} />
            Instagram
          </div>
          <div className='flex items-center gap-3'>
            <FaSquareSteam size={30} />
            Steam
          </div>
        </div>
    </div>
  )
}

export default UserLayout