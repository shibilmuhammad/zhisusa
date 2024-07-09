import React from "react";

const BookRoomProgressCard = ({active}) => {
  const ProgressBooking = [
    "PLAN YOUR STAY",
    "CHOOSE YOUR ROOM",
    "PERSONAILIZE YOUR STAY",
    "CONFIRM YOUR STAY",
  ];
  return (
    <div>
      <div className="bg-navyBlue-normal text-white px-4  py-4  ">
        <h1 className="font-semibold font-poppins mt-1 lg:hidden">
          {ProgressBooking[active]}
        </h1>
        <div className="flex justify-between lg:justify-normal lg:space-x-4  mt-4">
          {ProgressBooking.map((item,index) => {
            return (
              <div className="flex items-center space-x-3">
                <div className={`p-4 ${index==active?"bg-white text-black ":""} rounded-full  border border-white w-4 h-4 flex justify-center items-center`}  >
                  <p className=" "> {index+1}</p>
                </div>
                <p className={` ${index==active?"text-white font-semibold":"text-[#DBDEE4]"} hidden lg:block text-sm`}>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookRoomProgressCard;
