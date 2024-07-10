import React from "react";
import { GoArrowRight } from "react-icons/go";
import WorkCard from "./WorkCard";
import { workSpecsData } from "../utils/works";

const HomeWorkSection = () => {
	return (
		<div className="lg:relative w-full px-4 py-6 space-y-4 lg:space-y-0 lg:py-0 lg:flex flex-col lg:w-full items-center lg:justify-center lg:h-[100vh]">
			<img className="lg:absolute h-full w-full z-0 hidden lg:block" src="../images/workMinimalsit.jpg" alt="th" />
			<div className="lg:absolute hidden lg:block inset-0 z-10 h-[100vh] bg-black opacity-60"></div>
			<div className="lg:flex flex-col space-y-4 items-center lg:w-4/6 lg:gap-4 xl:gap-10 lg:z-20">
				<div className="font-futura text-3xl flex flex-col font-bold lg:text-5xl lg:text-center">
					<span className="lg:text-white">Escape to Your</span>
					<span className="text-orange-normal"> Own Work</span>
				</div>
				<p className="font-poppins text-orange-dark_hover lg:text-white text-sm lg:text-base lg:text-center">
					Discover a range of luxurious accommodations designed for your
					ultimate comfort and relaxation. Choose from private villas, cozy
					cottages, glamping tents, and more, all set in serene natural
					surroundings. Whether you seek solitude or adventure, find your
					perfect escape here.
				</p>
				
			</div>
			<div className="lg:z-20 ">
				<div className="grid grid-cols-1 xl:mt-10 gap-3 lg:grid-cols-3 lg:gap-16 lg:px-12 xl:px-32 2xl:gap-24">
					{workSpecsData.slice(0, 3).map((item) => (
						<WorkCard data={item} />
					))}
				</div>
			</div>

			<div className="w-full px-20 pb-5 lg:flex justify-center lg:z-20 ">
				<button className="bg-orange-normal lg:bg-white lg:text-black lg:mt-3 rounded-full lg:gap-6 px-4 p-2 font-poppins text-white flex items-center justify-between w-full lg:w-max">
					<span>Discover More</span>
					<GoArrowRight className="text-2xl " />
				</button>
			</div>
		</div>
	);
};

export default HomeWorkSection;
