import React from 'react'
import { IoIosMenu } from 'react-icons/io'

const PackagesButton = () => {
  return (
    <div>
        <div className="flex justify-center  text-xs   px-2 w-full mt-3  ">
        <div className="flex bg-white drop-shadow-[0_2px_0px_rgba(0,0,0,.4)] rounded-full  ">
          <div className="  py-2 px-4 lg:px-20 lg:text-base  flex justify-center items-center border-r bg-blue-500 text-white rounded-l-full ">
            <span>Daily Escape</span>
          </div>
          <div className="  py-2 lg:px-20 px-4  lg:text-base flex justify-center items-center border-r  ">
            <span>Weekly Retreat</span>
          </div>
          <div className="  py-2 px-4 lg:text-base lg:px-20 flex justify-center items-center border-r  ">
            <span>Monthly haven</span>
          </div>
          <div className="  py-2 px-4 rounded-r-full lg:text-base lg:px-20  justify-center items-center border-r hidden lg:flex  ">
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
