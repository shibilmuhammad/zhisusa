import React from "react";
import EventCard from "./EventCard";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const PastEvents = () => {
	return (
		<div className="bg-navyBlue-normal p-5 md:flex md:justify-center ">
			<div className="flex flex-col md:flex-row w-full items-center gap-2 md:gap-8 md:justify-center">
				<div className="text-2xl md:text-6xl font-poppins flex gap-2 md:flex-col">
					<span className="text-white">Past</span>
					<span className="text-PrimaryBlue-normal">Events</span>
				</div>
				<div className="md:hidden h-[2px] w-3/6 bg-white"></div>
                <div className="hidden md:block w-[2px] h-4/6 bg-white"></div>
			</div>
			<div className=" w-full items-center mt-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />

				</div>
				<div className="flex gap-8 justify-center">
					<button className="text-white p-2 h-8 w-8 rounded-full text-3xl">
						<IoIosArrowDropleft />
					</button>
					<button className="text-white p-2 h-8 w-8 rounded-full text-3xl">
						<IoIosArrowDropright />
					</button>
				</div>
			</div>
		</div>
	);
};

export default PastEvents;
