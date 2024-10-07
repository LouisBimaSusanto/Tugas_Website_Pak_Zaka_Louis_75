import React from 'react'
import Logo from "../assets/Logo.png"
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <img src={Logo} className='w-full h-auto max-w-[492px]' alt="Logo Corsa Studio" loading='lazy' />
        <div className='flex flex-col gap-10 justify-center'>
            <h1 className='text-xl md:text-5xl font-bold text-white max-w-xl'>Create Together Play Forever</h1>
            <div>
                <p className='text-white text-lg max-w-md'>Let’s Join Us To Create A Beautiful Game, Together We Stronger</p>
                <Link to="/about" className='bg-[#D9D9D9] text-[#3DC2EC] p-3 mt-5 rounded-lg font-bold flex items-center gap-2 w-fit'><span>About Us</span> <MdOutlineArrowOutward size={20} color='black' /></Link>
            </div>
        </div>
    </div>
  )
}

export default Home