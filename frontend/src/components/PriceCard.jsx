import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
const PriceCard = () => {
  return (
    <div className="lg:w-4/12 font-poppins"> 
      <div className="  px-3 py-4 bg-[#F4F4F4] border-[#666666] border-[.2px] rounded-lg mt-3 hidden lg:block">
        <div className="border-b-[.2px] border-b-[#666666]">
          <h1 className="text-2xl">Your Stay Details</h1>
          <div className="flex space-x-10 text-sm py-5">
            <div className="space-y-2">
              <p className="font-semibold">Check-in</p>
              <p>After 3:00 PM</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Check-out</p>
              <p>After 3:00 PM</p>
            </div>
          </div>
        </div>
        <div className="border-b-[.2px] border-b-[#666666] pb-5 ">
          <h1 className="font-semibold">Room1</h1>
          <p className="text-[#333333] text-sm mt-1">
            Wed Jun 12 ,2024 - Thu Jun 13 ,2024
          </p>
          <p className="text-sm text-[#333333]">2 Adults</p>
          <div className="flex items-center justify-between mt-2 ">
            <p className="font-medium underline">Mountain View Room</p>
            <p className="font-bold">₹17,550.00</p>
          </div>
          <div className="flex items-center -space-x-1 text-sm underline cursor-pointer ">
            <p>2 Nights</p>
            <RiArrowDropDownLine className="text-3xl font-thin text-[#555555]" />
          </div>
          <div className="flex items-center justify-between mt-2 ">
            <p className="font-medium underline">Taxes And Fees</p>
            <p className="font-bold">₹3200.00</p>
          </div>
          <div className="flex items-center -space-x-1 text-sm underline cursor-pointer ">
            <p>Details</p>
            <RiArrowDropDownLine className="text-3xl font-thin text-[#555555]" />
          </div>
          <div className="flex  space-x-5 mt-2">
         
            <div className="flex items-center space-x-1 underline text-[#333333] cursor-pointer">
              <MdDelete className="text-xl" />
              <p>Remove</p>
            </div>
          </div>
          <div className="flex items-center space-x-1 mt-4 cursor-pointer">
            <div className="w-5 h-5 rounded-full flex justify-center items-center bg-orange-normal text-white text-xs">
              <FaPlus />
            </div>
            <p className="text-xs underline">Add a room</p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mt-2 ">
            <p className="font-medium "> Total:</p>
            <div>
              <p className="font-bold">₹20,945.00</p>
              <p className="text-xs text-[#666666]">(INR Tax Included)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
