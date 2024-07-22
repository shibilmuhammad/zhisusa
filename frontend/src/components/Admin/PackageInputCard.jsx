import React from 'react'
import { IoCloseCircle } from "react-icons/io5";

const PackageInputCard = ({text,removePackage,index}) => {
  return (
    <div className='rounded-full bg-PrimaryBlue-normal p-1 flex justify-between w-max'>
        <span>{text}</span>
        <button type='button' onClick={()=>removePackage(index)} className='text-xl text-white'>
            <IoCloseCircle/>
        </button>
    </div>
  )
}

export default PackageInputCard