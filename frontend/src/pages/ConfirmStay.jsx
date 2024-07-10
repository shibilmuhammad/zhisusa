import React from "react";
import BookRoomProgressCard from "../components/BookRoomProgressCard";
import Header from "../components/Header";
import RoomDeatilsModificationButton from "../components/RoomDeatilsModificationButton";
import ConfirmStayForm from "../components/ConfirmStayForm";
import PriceCard from "../components/PriceCard";
import { useNavigate } from "react-router-dom";

const ConfirmStay = () => {
  const navigate = useNavigate()
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
        <div className="flex flex-col w-4/12">
					<PriceCard  />

					<button onClick={() => navigate('/confirmstay')} className="w-full lg:mt-6 lg:w-fit lg:px-5 justify-center items-center py-2 bg-orange-normal text-white rounded-lg font-medium">
						Confirm Stay
					</button>
				</div>
       
     </div>
    </div>
  );
};

export default ConfirmStay;
