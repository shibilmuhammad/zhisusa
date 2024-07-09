import React from "react";

const RoomDetailsCard = () => {
  return (
    <div className="w-full lg:w-8/12">
      <div className="p-2 mt-4 m-2 border-[.2px] border-[#666666]   bg-white rounded-lg shadow-2xl  lg:flex lg:space-x-3">
        <div className="lg:w-4/12">
          <img
            className="w-full  lg:w-full lg:h-72 h-48 object-cover rounded-lg"
            src="../images/luxuaryroom.jpeg"
          ></img>
        </div>
        <div className="lg:w-8/12 px-2">

        <div
          className="border-b-[.2px] border-b-gray-500  pb-1 
        "
        >
          <h1 className="text-lg font-semibold lg:pt-0 pt-4 font-poppins">
            Mountain View Room
          </h1>
          <p className="py-2">
            1 King size Bed | 33 M<sup>2</sup>{" "}
          </p>
          <p className="font-semibold font-poppins text-sm text-[#333333]">
            Naturally lit, with a large picture window and Lutyens' style
            furnishings.
          </p>
          <p className="underline font-semibold py-2 ">View More details</p>
        </div>
        <div className="lg:flex justify-between items-center">
          <div>
            <span className="underline text-lg  mt-2">
              Room only Rate &nbsp;
            </span>{" "}
            <span className="no-underline">(BreakFast Excluded) </span>
            <div className="flex items-center space-x-2   ">
              <div className="mt-1">
                <div className="w-2 h-2   rounded-full bg-black whitespace-nowrap "></div>
              </div>
              <p className=""> Accommadation</p>
            </div>
            <div className="flex items-center space-x-2   ">
              <div className="mt-1">
                <div className="w-2 h-2   rounded-full bg-black whitespace-nowrap "></div>
              </div>
              <p className=""> Internet Access</p>
            </div>
          </div>
          <div>
            <div className="mt-4 font-poppins lg:text-right">
              <p className="font-semibold text-2xl">₹16730</p>
              <p className="font-medium text-sm">Per Night</p>
              <p className="text-sm text-[#666666]">Excluding Taxes and Fees</p>
            </div>
            <button className="w-full flex justify-center bg-[#E28314] text-white mt-4 py-2 rounded-md font-semibold text-lg">
              Book Now
            </button>
            <p className="text-sm my-2">
              <span className="text-orange-normal">Login </span>for 15%
              additional savings
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsCard;
