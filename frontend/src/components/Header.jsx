import React from 'react'
import { Link } from 'react-router-dom'
import { IoPerson } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div>
        <div className='flex items-center justify-between bg-transparent text-white font-poppins font-semibold px-6 lg:px-10 py-6 fixed top-0 z-50 w-full'>
            <Link to={'/'} className='lg:text-2xl text-xl'>LOGO</Link>
            <div className='flex items-center  space-x-4 lg:space-x-10'>
                <div className='lg:hidden'>LOGIN/JOIN</div>
                <div className='text-2xl text-white lg:hidden'>
                    <IoMenu  />
                </div>
               
                <div className='space-x-6 hidden lg:block'>
                    <Link to={'/aboutus'} className=''>About us</Link>
                    <Link to={'/dailyescape'} className=''>Packages</Link>
                    <Link to={'/accommodation'} className=''>Accommodations</Link>
                    <Link to={'/amenities'} className=''>Amenities</Link>
                    <Link to={'/activites'} className=''>Activites</Link>
                    <Link to={'/events'} className=''>Events</Link>
                    <Link to={'/bookspace'} className=''>Book a space</Link>
                    <Link to={'/gallery'} className=''>Gallery</Link>
                    <Link to={'/contactus'} className=''>Contact</Link>
                </div>
                <div className='hidden lg:block'>
                    <IoPerson />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Header
