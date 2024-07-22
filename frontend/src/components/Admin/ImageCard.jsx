import React from 'react'
import { IoClose } from "react-icons/io5";

const ImageCard = ({img,index,removeImage}) => {
  
  return (
    <div className='border-2 rounded-md  h-28 relative'>
        <img className='h-full w-full object-cover rounded-md' src={img} alt='icon' />
        { <button type='button' onClick={() => removeImage(index)} className='absolute top-0 right-0 bg-slate-50 h-5 w-5 rounded-full flex items-center justify-center' >
           <IoClose className='text-PrimaryBlue-normal'/>
        </button> }
    </div>
  )
}

export default ImageCard