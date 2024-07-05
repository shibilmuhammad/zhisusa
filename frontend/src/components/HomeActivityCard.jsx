import React from "react";
import { MdBookmarkAdded } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const HomeActivityCard = ({ id, data }) => {
	return (
		<div
			className={`md:flex px-4 gap-6 ${
				id % 2 === 0 ? "flex-row-reverse" : "flex-row"
			} `}>
			<div
				className={`my-5 border-2 border-PrimaryBlue-normal rounded-xl h-44 md:h-80`}>
				<img
					className={` h-full w-full rounded-xl object-cover`}
					src={data?.thumbnail}
					alt="thumb"
				/>
			</div>

			<div className="space-y-3 mt-5 md:w-full md:space-y-6 md:pr-36 md:pl-24">
				<h1 className="font-poppins text-2xl font-medium">{data?.title}</h1>
				<p className="font-poppins text-sm text-navyBlue-dark_hover md:text-base">
					{data?.description}
				</p>
				<button
					className={`flex items-center text-white p-2 px-5 gap-3 rounded-full bg-PrimaryBlue-normal`}>
					<MdBookmarkAdded />
					<span className="font-poppins ">Book Now</span>
					<GoArrowRight />
				</button>
			</div>
		</div>
	);
};

export default HomeActivityCard;
