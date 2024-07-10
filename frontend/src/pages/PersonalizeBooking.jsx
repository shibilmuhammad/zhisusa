import React from "react";
import Header from "../components/Header";
import BookRoomProgressCard from "../components/BookRoomProgressCard";
import RoomDeatilsModificationButton from "../components/RoomDeatilsModificationButton";
import MutlitpleRoomBooking from "../components/MutlitpleRoomBooking";
import PersonalizeBookingSection from "../components/PersonalizeBookingSection";
import PriceCard from "../components/PriceCard";
import { useNavigate } from "react-router-dom";

const PersonalizeBooking = () => {
	const navigate = useNavigate()
	return (
		<div>
			<Header bgColor={"white"} />
			<div className="mt-16">
				<BookRoomProgressCard active={2} />
			</div>
			<div className="md:hidden">
				<RoomDeatilsModificationButton />
			</div>
			<div className="md:flex md:px-12">
				<PersonalizeBookingSection />
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

export default PersonalizeBooking;
