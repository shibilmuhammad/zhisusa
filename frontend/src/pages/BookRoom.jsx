import React from "react";
import Header from "../components/Header";

import BookRoomProgressCard from "../components/BookRoomProgressCard";
import RoomDeatilsModificationButton from "../components/RoomDeatilsModificationButton";
import MutlitpleRoomBooking from "../components/MutlitpleRoomBooking";
import RoomDetailsCard from "../components/RoomDetailsCard";
const BookRoom = () => {
  return (
    <div>
      <Header bgColor={"white"} />
      <div className="mt-16">
        <BookRoomProgressCard/>
      </div>

    <RoomDeatilsModificationButton />
    <MutlitpleRoomBooking />

     <RoomDetailsCard />
    </div>
  );
};

export default BookRoom;
