import React from "react";
import { GoArrowRight } from "react-icons/go";
import WorkCard from "./WorkCard";
import { workSpecsData } from "../utils/works";

const HomeWorkSection = () => {
	return (
		<div className=" w-full px-4 py-6 space-y-4 md:flex flex-col md:w-full items-center md:h-[100vh]">
			<div className="md:flex flex-col items-center md:w-4/6 md:gap-4 xl:gap-10">
				<div className="font-futura text-3xl flex flex-col font-bold md:text-5xl md:text-center">
					<span className="">Escape to Your</span>
					<span className="text-orange-normal"> Own Work</span>
				</div>
				<p className="font-poppins text-orange-dark_hover md:text-center md:text-lg">
					Discover a range of luxurious accommodations designed for your
					ultimate comfort and relaxation. Choose from private villas, cozy
					cottages, glamping tents, and more, all set in serene natural
					surroundings. Whether you seek solitude or adventure, find your
					perfect escape here.
				</p>
				
			</div>
			<div>
				<div className="grid grid-cols-1 xl:mt-10 gap-3 md:grid-cols-3 md:gap-8 md:px-12 xl:px-32 2xl:gap-24">
					{workSpecsData.slice(0, 3).map((item) => (
						<WorkCard data={item} />
					))}
				</div>
			</div>

			<div className="w-full px-20 pb-5 md:flex justify-center">
				<button className="bg-orange-normal rounded-full md:gap-6 px-4 p-2 font-poppins text-white flex items-center justify-between w-full md:w-max">
					<span>Discover More</span>
					<GoArrowRight className="text-2xl " />
				</button>
			</div>
		</div>
	);
};

export default HomeWorkSection;
