import React from "react";
import Header from "../components/Header";
import BookRoomProgressCard from "../components/BookRoomProgressCard";
import RoomDeatilsModificationButton from "../components/RoomDeatilsModificationButton";
import MutlitpleRoomBooking from "../components/MutlitpleRoomBooking";
import PersonalizeBookingSection from "../components/PersonalizeBookingSection";
import PriceCard from '../components/PriceCard'

const PersonalizeBooking = () => {
	return (
		<div>
			<Header bgColor={"white"} />
			<div className="mt-16">
				<BookRoomProgressCard />
			</div>
			<div className="md:hidden">
				<RoomDeatilsModificationButton />
			</div>
      <div className="md:flex md:px-12">
        <PersonalizeBookingSection />
        <PriceCard/>
      </div>
			
		</div>
	);
};

export default PersonalizeBooking;
