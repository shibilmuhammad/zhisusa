import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const EventRelatedCard = () => {
  return (
    <div className='border-2 rounded-2xl '>
        <img className='rounded-t-2xl h-32 w-full object-cover' src="../images/music.jpg" alt="thumb" />
        <div className='font-poppins p-3'>
            <span className='text-skyBlue-dark_active text-sm'>July 14 | 6.30 PM</span>
            <h3 className=' font-bold'>Music Festivel - Team Thaikkudam Bridge</h3>
            <div className='flex mt-1 items-center gap-1 text-skyBlue-dark_active'>
                <CiLocationOn/>
                <span className='text-sm'>Alamparai, Chennai</span>
            </div>
        </div>
        
    </div>
  )
}

export default EventRelatedCard