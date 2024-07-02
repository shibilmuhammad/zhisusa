import React from "react";
import { MdBookmarkAdded } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const SpecsCard = ({ id, data,page }) => {
	return (
		<div
			className={`md:flex gap-12 ${
				id % 2 === 0 ? "flex-row-reverse" : "flex-row"
			} `}>
			<div className={`flex ${id % 2 === 0 ? 'justify-end w-full':'justify-start w-5/6 md:w-full'} `}>
				<div
					className={` ${
						id % 2 === 0 ? "rounded-s-full w-5/6 md:w-full" : "rounded-e-full w-full md:full"
					} ${page === 'work' ? 'border-orange-normal' : 'border-y-navyBlue-normal'}  border-2 h-44 md:h-80`}>
					<img
						className={`${
							id % 2 === 0 ? "rounded-s-full " : "rounded-e-full"
						} h-full w-full  object-cover`}
						src={data?.thumbnail}
						alt="thumb"
					/>
				</div>
			</div>

			<div className="space-y-3 mt-5 md:w-full md:space-y-6 px-6 md:pr-36 md:pl-24">
				<h1 className="font-poppins text-2xl font-medium">{data?.title}</h1>
				<p className="font-poppins text-sm text-navyBlue-dark_hover md:text-base">
					{data?.description}
				</p>
				<button className={`flex items-center text-white ${page === 'work' ? 'bg-orange-normal_hover' : 'bg-navyBlue-dark_hover'} p-2 px-5 gap-3 rounded-full`}>
					<MdBookmarkAdded />
					<span className="font-poppins ">Book Now</span>
					<GoArrowRight />
				</button>
			</div>
		</div>
	);
};

export default SpecsCard;
