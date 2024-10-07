import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky mx-10 left-10 right-10 -top-12 bg-[#D9D9D9] flex justify-between items-center py-5 px-10 rounded-full z-20'>
        <h1 className='text-xl'>Corsa Studio</h1>
        <div className='flex justify-center items-center gap-10'>
            <Link to="/" className='font-bold'>Home</Link>
            <Link to="/about" className=''>About</Link>
            <Link to="/products" className=''>Products</Link>
            <Link to="/contact" className=''>Contacts</Link>
        </div>
    </div>
  )
}

export default Navbar