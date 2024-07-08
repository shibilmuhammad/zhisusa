import React from "react";
import { eventHostCardsData } from "../utils/events";

const HostEventIntro = () => {
	return (
		<div className="bg-orange-active p-6 md:h-[100vh] md:flex items-center flex-col md:px-32">
			<div className="space-y-3 md:flex items-center md:flex-col md:w-full md:gap-4 md:pt-24">
				<h1 className="font-futura text-orange-normal text-2xl md:text-5xl md:text-center">
					Host Your Dream Events with Unparalleled Elegance and Expertise
				</h1>
				<p className="text-orange-dark_hover font-poppins text-sm md:text-lg md:w-3/5 md:text-center">
					Discover enchanting weddings, inspiring art shows, and vibrant
					performances, all set in stunning natural beauty.
				</p>
				<button className="px-6 md:px-8 text-sm md:text-lg p-2 rounded-full bg-orange-normal font-poppins text-white">
					Host Your Event
				</button>
			</div>
			<div className="grid grid-cols-2 mt-5 md:mt-16 gap-4 md:grid-cols-4 w-full md:px-8">
				{eventHostCardsData.map((item) => (
					<div className="relative rounded-3xl h-40 md:h-44 xl:h-60">
						<img
							className="absolute object-cover h-full w-full rounded-3xl z-0"
							src={item.img}
							alt="thumb"
						/>
						<div className="absolute bg-transparent p-8 w-full bg-gradient-to-t from-black  z-10 bottom-0 rounded-3xl"></div>
						<span className="absolute z-30 bottom-3 left-3 text-white font-poppins xl:text-xl">
							{item.title}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default HostEventIntro;
