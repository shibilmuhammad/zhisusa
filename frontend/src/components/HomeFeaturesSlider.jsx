import React from 'react'
import { sliderData } from '../utils/home'

const HomeFeaturesSlider = () => {
  return (
    <div className='hidden md:flex gap-5 rounded-lg bg-white p-3 px-12  absolute z-30 -bottom-10 shadow-2xl md:gap-12 2xl:gap-16' >
        {sliderData.map((item) => (
            <div className='flex flex-col items-center gap-2 font-poppins text-gray-500'>
                <item.icon className='text-3xl'/>
                <span className='text-lg'>{item?.title}</span>
            </div>
        ))}
    </div>
  )
}

export default HomeFeaturesSlider