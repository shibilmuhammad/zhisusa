import React from "react";
import {
	FiArrowRight,
	FiArrowRightCircle,
	FiArrowUpRight,
} from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { accomodationSpecsData } from "../utils/accomodation";

const HomeLiveSection = () => {
	return (
		<div className="bg-navyBlue-light w-full px-4 py-6 space-y-4">
			<div className="font-futura text-3xl flex flex-col font-bold">
				<span className="text-PrimaryBlue-normal">Escape to Your</span>
				<span> Perfect Stay</span>
			</div>
			<p className="font-poppins text-navyBlue-normal">
				Discover a range of luxurious accommodations designed for your ultimate
				comfort and relaxation. Choose from private villas, cozy cottages,
				glamping tents, and more, all set in serene natural surroundings.
				Whether you seek solitude or adventure, find your perfect escape here.
			</p>
			<div className="grid grid-cols-1 gap-3">
				{accomodationSpecsData.map((item) => (
					<div className="rounded-xl relative h-48 ">
						<img
							className="absolute h-full w-full object-cover rounded-xl z-0"
							src={item?.thumbnail}
							alt="thumb"
						/>
						<div className="absolute bottom-3 left-3 w-full text-white text-xl font-poppins z-30 flex justify-between items-center">
							<span>{item?.title}</span>
						</div>
						<button className="absolute bottom-3 right-3 z-30 text-2xl flex items-center justify-center text-white h-10 w-10 rounded-full border-2 border-white">
							<FiArrowUpRight />
						</button>
						<div className="absolute rounded-xl h-full bg-transparent p-8 w-full bg-gradient-to-t from-black  z-10 -bottom-1 right-0"></div>
					</div>
				))}
			</div>
			<div className="w-full px-20 pb-5">
				<button className="bg-PrimaryBlue-normal rounded-full px-4 p-2 font-poppins text-white flex items-center justify-between w-full">
					<span>Discover More</span>
					<GoArrowRight className="text-2xl "/>
				</button>
			</div>
		</div>
	);
};

export default HomeLiveSection;
