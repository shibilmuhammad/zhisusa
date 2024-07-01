import React from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
	return (
		<div className="relative bg-black px-6 md:px-24 py-6 pb-24 flex items-center flex-col gap-3 md:gap-8">
			
			<h1 className="text-white text-2xl font-poppins font-medium md:text-5xl">
				Explore Our Features
			</h1>
			<p className="text-white font-poppins text-center text-sm md:text-xl md:w-5/6">
				Explore the essence of our activities through our standout features.
				From breathtaking locations to expert guidance and top-tier equipment,
				each activity promises a memorable experience.
			</p>
			<div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3 md:w-8/12">
				{}
				<FeaturesCard />
				<FeaturesCard />
				<FeaturesCard />
			</div>
		</div>
	);
};

export default Features;
