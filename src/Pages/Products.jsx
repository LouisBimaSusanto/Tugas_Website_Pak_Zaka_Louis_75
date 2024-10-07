import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowOutward } from "react-icons/md"
import ProductImg from "../assets/product-img.png"
import Bear from "../assets/bear.png"
import Sigma from "../assets/sigma.png"

const Products = () => {
  return (
    <div className='pb-10'>
        <div className='w-full'>
            <div className='flex justify-between items-center mb-10'>
                <h1 className='text-4xl font-bold text-white'>This is the game project we are making</h1>
                <Link to={`/`} className='flex items-center gap-3 bg-[#D9D9D9] p-3 rounded-md'>
                    <span className='text-[#3DC2EC] font-semibold'>View More Games</span>
                    <MdOutlineArrowOutward color='black' size={15} />
                </Link>
            </div>
            <img src={ProductImg} alt="" className='w-full' />
            <p className='mt-5 text-white italic'>Note: Coming Soon! An epic adventure awaits, but remember, the real-life experience may differ from the in-game one.</p>
        </div>

        <div className='w-full mt-12'>
            <div className='flex justify-between items-start'>
                <div className=''>
                    <h1 className='text-3xl font-bold text-white'>Project We've Created</h1>
                    <span className='text-white'>Lorem, ipsum.</span>
                </div>
                <Link to={`/`} className='flex items-center gap-3 bg-[#D9D9D9] p-3 rounded-md'>
                    <span className='text-[#3DC2EC] font-semibold'>View More Game</span>
                    <MdOutlineArrowOutward color='black' size={15} />
                </Link>
            </div>
            <div className='grid grid-cols-2 mt-10 gap-32'>
                <div className='flex flex-col gap-3'>
                    <img src={Bear} alt="bear" loading='lazy' className='' />
                    <p className='text-white'>Udin's Tax is a game that introduces tax to young children.</p>
                    <Link to={`/`} className='text-[#3DC2EC] underline'>More About This Game</Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <img src={Sigma} alt="bear" loading='lazy' className='' />
                    <p className='text-white'>Udin's Tax is a game that introduces tax to young children.</p>
                    <Link to={`/`} className='text-[#3DC2EC] underline'>More About This Game</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products