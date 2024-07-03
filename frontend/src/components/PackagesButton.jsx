import React from 'react'
import { IoIosMenu } from 'react-icons/io'

const PackagesButton = ({activeButton}) => {
  return (
    <div>
        <div className="flex justify-center  text-xs   px-2 w-full mt-3  ">
        <div className="flex bg-white drop-shadow-[0_2px_0px_rgba(0,0,0,.4)] rounded-full  ">
        <div className={`py-2 lg:px-20 px-4  lg:text-base flex justify-center items-center border-r rounded-l-full ${activeButton=="daily"?"bg-blue-500 text-white":":bg-white text-black"}`}>
            <span>Daily Escape</span>
          </div>
          <div className={`py-2 lg:px-20 px-4  lg:text-base flex justify-center items-center border-r ${activeButton=="weekly"?"bg-blue-500 text-white":":bg-white text-black"}`}>
            <span>Weekly Retreat</span>
          </div>
          <div className={`py-2 lg:px-20 px-4  lg:text-base flex justify-center items-center border-r ${activeButton=="monthly"?"bg-blue-500 text-white":":bg-white text-black"}`}>
            <span>Monthly haven</span>
          </div>
          <div className={`py-2 lg:px-20 px-4  lg:text-base flex justify-center items-center border-r rounded-r-full ${activeButton=="yearly"?"bg-blue-500 text-white":":bg-white text-black"}`}>
            <span>Yearly Sanctury</span>
          </div>
          <div className="  py-2 px-2 lg:hidden flex justify-center items-center  ">
            <IoIosMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackagesButton
