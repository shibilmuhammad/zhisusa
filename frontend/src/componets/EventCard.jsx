import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const EventCard = () => {
	return (
		<div className="rounded-xl h-48 relative">
			<img
				className="rounded-xl h-full w-full object-cover absolute z-0"
				src="../images/music.jpg"
				alt="thumb"
			/>
			<div className="absolute flex justify-between z-20 flex-col p-5 w-full h-full">
				<span className="text-white font-poppins text-xl">Music Fest</span>
				<div className="space-y-1">
					<div className="flex gap-4 items-center text-white font-poppins">
						<BsCalendarDate className="text-xl" />
						<span className="">June 6 - June 8</span>
					</div>
					<div className="flex gap-4 items-center text-white font-poppins">
						<CiLocationOn className="text-xl"/>
						<div className="flex flex-col">
							<span>Main Auditorium</span>
							<span className="text-xs">Park,Chennai</span>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute inset-0 z-10 rounded-xl bg-black opacity-70"></div>
		</div>
	);
};

export default EventCard;
