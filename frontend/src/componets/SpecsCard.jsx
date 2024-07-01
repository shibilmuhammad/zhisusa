import React from "react";
import { MdBookmarkAdded } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const SpecsCard = () => {
	return (
		<div className="md:flex gap-12">
			<div className="rounded-e-full border-orange-500 border-2 h-44 md:h-72 w-11/12 ">
                <img className="rounded-e-full h-full w-full  object-cover" src="../images/conference.jpeg" alt="thumb" />
            </div>
			<div className="space-y-3 mt-5 md:w-full md:space-y-6 px-6 md:pr-36">
				<h1 className="font-poppins text-2xl font-medium">Quiet Zones</h1>
				<p className="font-poppins text-sm text-navyBlue-dark_hover md:text-base">
					Retreat to our quiet zone for uninterrupted focus and concentration.
					Designed for individuals who require a tranquil environment, this
					space offers peace and serenity away from distractions, allowing you
					to maximize productivity and creativity.p
				</p>
                <button className="flex items-center text-white bg-orange-normal_hover p-2 px-5 gap-3 rounded-full">
                    <MdBookmarkAdded/>
                    <span className="font-poppins ">Book Now</span>
                    <GoArrowRight/>
                </button>
			</div>
		</div>
	);
};

export default SpecsCard;
