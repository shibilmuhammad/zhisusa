import React from "react";
import Header from "../components/Header";
import { RiArrowDropDownLine } from "react-icons/ri";
import BookRoomProgressCard from "../components/BookRoomProgressCard";
import RoomDeatilsModificationButton from "../components/RoomDeatilsModificationButton";
import MutlitpleRoomBooking from "../components/MutlitpleRoomBooking";
import RoomDetailsCard from "../components/RoomDetailsCard";


import HomeSearchCard from "../components/HomeSearchCard";

import PriceCard from "../components/PriceCard";
const BookRoom = () => {
  return (
    <div>
      <Header bgColor={"white"} />
      <div className="mt-16">
        <BookRoomProgressCard  active={1}/>
      </div>
      <div className="block lg:hidden">
        <RoomDeatilsModificationButton />
      </div>
      <div>
        <div className="w-full h-[80vh] hidden lg:block relative">
          <img
            className="w-full h-full object-cover"
            src="../images/RESORT2.jpeg"
          ></img>
          <div className="absolute inset-0 flex justify-center top-96">
            <HomeSearchCard />
          </div>
        </div>
      </div>

      <MutlitpleRoomBooking />
      <div className="text-sm flex justify-between items-center lg:px-12 px-3 mt-2">
        <h1 className="font-semibold">Showing Result(14)</h1>
        <div className="flex items-center text-[#666666]">
          <p>SORT BY</p>
          <div className="text-3xl">
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>
     <div className="flex lg:space-x-8 lg:px-10 lg:pt-3">
        <RoomDetailsCard />
       <PriceCard />
     </div>
    </div>
  );
};

export default BookRoom;
