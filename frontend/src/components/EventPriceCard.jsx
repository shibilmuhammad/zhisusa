import React from "react";

const EventPriceCard = () => {
	return (
		<div className="flex font-poppins justify-between items-center bg-white p-3 shadow-2xl px-5 rounded-lg md:rounded-none md:shadow-none">
			<span className="text-lg font-bold">₹ 1000 onwards </span>
			<button className="px-6 rounded-md bg-navyBlue-normal p-2 text-white">Book Now</button>
		</div>
	);
};

export default EventPriceCard;
