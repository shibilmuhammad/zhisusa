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
		<div className="xl:gap-10 bg-navyBlue-light w-full px-4 py-6 space-y-4 md:flex md:h-[100vh] items-center">
			<div className="md:w-full md:px-12 md:flex md:flex-col gap-5 justify-center xl:w-5/6">
				<div className="font-futura text-3xl flex flex-col font-bold md:text-5xl">
					<span className="text-PrimaryBlue-normal">Escape to Your</span>
					<span> Perfect Stay</span>
				</div>
				<p className="font-poppins text-navyBlue-normal md:text-lg">
					Discover a range of luxurious accommodations designed for your
					ultimate comfort and relaxation. Choose from private villas, cozy
					cottages, glamping tents, and more, all set in serene natural
					surroundings. Whether you seek solitude or adventure, find your
					perfect escape here.
				</p>
				<div className="w-full pb-5 hidden md:block">
					<button className="bg-PrimaryBlue-normal rounded-full px-4 p-2 font-poppins text-white flex items-center justify-between w-max gap-6">
						<span>Discover More</span>
						<GoArrowRight className="text-2xl " />
					</button>
				</div>
			</div>

			<div className="md:w-full xl:w-5/6">
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:grid-rows-custom-layout">
					{accomodationSpecsData.map((item, index) => (
						<div
							className={`rounded-xl relative h-48 md:h-[12rem]  ${
								index === 0
									? "md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1 "
									: index === 1
									? "md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-2 md:h-[24.6rem]"
									: index === 2
									? "md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1"
									: "md:col-start-1 md:col-span-2 md:row-start-3 md:row-span-3 md:h-[16rem]"
							} `}>
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
			</div>

			<div className="w-full px-20 pb-5 md:hidden">
				<button className="bg-PrimaryBlue-normal rounded-full px-4 p-2 font-poppins text-white flex items-center justify-between w-full">
					<span>Discover More</span>
					<GoArrowRight className="text-2xl " />
				</button>
			</div>
		</div>
	);
};

export default HomeLiveSection;
