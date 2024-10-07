import React from 'react'
import icon3d from '../assets/icon-3d.png'
import aboutImage from "../assets/aboutImage.png"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import about1 from "../assets/about1.png"
import about2 from "../assets/about2.png"
import about3 from "../assets/about3.png"

const About = () => {
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 pb-10'>
            <div className='flex flex-col gap-10'>
                <div className='relative  max-w-[552px]'>
                    <img src={aboutImage} alt="" className='w-full h-auto' />
                    <div className="absolute inset-0 px-1 flex items-end">
                        <h1 className="text-white text-2xl font-bold bg-opacity-50 p-4 rounded-lg">We are the <span className='text-[#3DC2EC]'>game development studio</span> known for crafting distinctive and immersive games that stand out in the market.</h1>
                    </div>
                </div>
                <p className='text-white'>We are an indie game studio based in the heart of Jakarta, Indonesia, dedicated to creating immersive and engaging games that resonate with players of all ages. Our mission is to craft unforgettable gaming experiences that bridge cultures and bring people together. Whether you’re a casual gamer or a hardcore enthusiast, our diverse range of games is designed to captivate and entertain everyone. Join us on our journey as we continue to push the boundaries of creativity and innovation in the world of gaming.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={icon3d} alt="icon 3d" loading='lazy' className='max-w-[450px] w-full' />
                <Link to="/" className='text-[#3DC2EC] flex gap-2 items-center underline text-justify'> <span>More About Us</span> <FaArrowRight size={15} color='black' /></Link>
            </div>
        </div>
        <div className='mt-32'>
            <h1 className='text-3xl text-white text-center font-bold'>What Do We Do?</h1>
            <p className='text-center text-lg max-w-sm mx-auto mt-5 text-white'>Games are a lot of fun. We make games that are fun for everyone</p>
            <div className='grid grid-cols-3 gap-x-10 gap-2 mt-20'>
                <div className='flex flex-col gap-3 justify-betweeen border items-center'>
                    <div className=''>
                        <img src={about1} alt="" className='mx-auto' />
                        <h1 className='text-white text-xl font-bold text-center mt-2'>Game Developer</h1>
                        <p className='text-white text-center max-w-sm mt-2'>Our works have been internationally recognized for their design, stories and art direction. Together, we can  transform your ideas into captivating games, on desktop, mobile or console.</p>
                    </div>
                    <Link to={`/`} className='text-[#3DC2EC]' >More Information</Link>
                </div>
                <div className='flex flex-col gap-3 justify-between border items-center'>
                    <div>
                        <img src={about2} alt="" className='mx-auto' />
                        <h1 className='text-white text-xl font-bold text-center mt-2'>Game Design</h1>
                        <p className='text-white text-center max-w-sm mt-2'>We have long experience in creating educational and serious games with a wide range of topics, from history to ecology.</p>
                    </div>
                    <Link to={`/`} className='text-[#3DC2EC]' >More Information</Link>
                </div>
                <div className='flex flex-col gap-3 justify-between border items-center'>
                    <div>
                        <img src={about3} alt="" className='mx-auto' />
                        <h1 className='text-white text-xl font-bold text-center mt-2'>Game Art</h1>
                        <p className='text-white text-center max-w-sm mt-2'>We make award-winning games with unique art direction. Together, we can transform your ideas into captivating games, on desktop, mobile or console.</p>
                    </div>
                    <Link to={`/`} className='text-[#3DC2EC]' >More Information</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default About