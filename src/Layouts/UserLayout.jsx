import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='bg-[#4C3BCF] min-h-screen'>
        <Navbar />
        <div className='w-full px-10 pt-[150px]'>
            <Outlet />
        </div>
    </div>
  )
}

export default UserLayout