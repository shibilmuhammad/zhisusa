import React from "react";
import { MdBookmarkAdded } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const HomeActivityCard = ({ id, data }) => {
	return (
		<div
			className={`md:flex px-4 gap-6 md:gap-12 ${
				id % 2 === 0 ? "flex-row-reverse" : "flex-row"
			} `}>
			<div
				className={`my-5 border-2 border-PrimaryBlue-normal rounded-xl h-44 md:h-80 2xl:h-96 md:w-5/12`}>
				<img
					className={` h-full w-full rounded-xl object-cover`}
					src={data?.thumbnail}
					alt="thumb"
				/>
			</div>

			<div className="space-y-3 mt-5 md:w-6/12 md:space-y-6 md:flex md:justify-center md:flex-col">
				<h1 className="font-poppins text-2xl font-medium md:text-3xl">{data?.title}</h1>
				<p className="font-poppins  text-sm md:text-lg text-navyBlue-dark_hover">
					{data?.description}
				</p>
				<button
					className={`flex items-center text-white p-2 px-5 gap-3 md:w-max rounded-full bg-PrimaryBlue-normal`}>
					<MdBookmarkAdded />
					<span className="font-poppins ">Book Now</span>
					<GoArrowRight />
				</button>
			</div>
		</div>
	);
};

export default HomeActivityCard;
