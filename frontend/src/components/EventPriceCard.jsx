import React from "react";
import { useNavigate } from "react-router-dom";

const EventPriceCard = ({data}) => {
	const navigate = useNavigate()
	return (
		<div className="flex font-poppins justify-between items-center bg-white p-3 shadow-2xl px-5 rounded-lg md:rounded-none md:shadow-none">
			<span className="text-lg font-bold">₹ {data?.details?.price || 0} onwards </span>
			<button onClick={()=> navigate(`/eventBooking?id=${data?.eventId}`)} className="px-6 rounded-md bg-navyBlue-normal p-2 text-white">Book Now</button>
		</div>
	);
};

export default EventPriceCard;
