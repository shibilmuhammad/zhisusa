import React from "react";
import BookRoomProgressCard from "../components/BookRoomProgressCard";
import Header from "../components/Header";
import RoomDeatilsModificationButton from "../components/RoomDeatilsModificationButton";
import ConfirmStayForm from "../components/ConfirmStayForm";
import PriceCard from "../components/PriceCard";

const ConfirmStay = () => {
  return (
    <div>
      <Header bgColor={"white"} />
      <div className="mt-16">
        <BookRoomProgressCard active={3} />
      </div>
      <div className="block lg:hidden">
        <RoomDeatilsModificationButton />
      </div>
      <div className="flex lg:space-x-8 lg:px-10 lg:pt-3">
        <ConfirmStayForm />
       <PriceCard />
     </div>
    </div>
  );
};

export default ConfirmStay;
