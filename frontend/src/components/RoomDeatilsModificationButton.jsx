import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
const RoomDeatilsModificationButton = () => {
  return (
    <div>
       <div className="flex justify-between px-2 bg-PrimaryBlue-normal text-white text-sm items-center">
        <div className="flex justify-between items-center border-r py-4 pr-2  border-r-white">
          <div>
            <p>
              Your stay : <span>June 24 2024 - June 25 2024 </span>
            </p>
            <p>
              Guests : <span>2 Adults , 0 childrens </span>
            </p>
          </div>
          <button className="px-2  text-lg">
            <FaAngleDown />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p>₹0.00</p>
          <FaAngleDown className="text-lg" />
        </div>
      </div>

    </div>
  )
}

export default RoomDeatilsModificationButton
