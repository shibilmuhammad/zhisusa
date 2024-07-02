import React from "react";
import FeaturesCard from "./FeaturesCard";

const Features = ({data,intro}) => {
	return (
		<div className="relative bg-black px-6 md:px-24 py-6 pb-24 flex items-center flex-col gap-3 md:gap-8">
			
			<h1 className="text-white text-2xl font-poppins font-medium md:text-5xl">
				{intro?.title}
			</h1>
			<p className="text-white font-poppins text-center text-sm md:text-xl md:w-5/6">
				{intro?.description}
			</p>
			<div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3 md:w-9/12">
				{data?.map((item)=> <FeaturesCard data={item} />)}
			</div>
		</div>
	);
};

export default Features;
