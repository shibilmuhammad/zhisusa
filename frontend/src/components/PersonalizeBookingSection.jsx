import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";

import { FaPlus } from "react-icons/fa6";
import PersonalizeAccordion from "./PersonalizeAccordion";
import useIsMobile from "../hooks/useIsMobile";

const PersonalizeBookingSection = () => {
	const [amenities, setAmenities] = useState(true);
    const [activities, setActivities] = useState(false);
    const isMobile = useIsMobile()
	const changeType = (type) => {
        type === 'Amenities' ? setAmenities(!amenities) : setActivities(!activities)
    }
	return (
		<div className="font-poppins mt-4 flex items-center w-full flex-col px-3 lg:px-0 ">
			<div onClick={() => changeType('Amenities')} className="cursor-pointer bg-PrimaryBlue-light_active md:bg-white px-4 lg:px-0 p-3 flex items-center gap-2 w-full">
				{amenities ? (
					<FaMinus className="md:hidden"/>
				) : (
					<FaPlus className="md:hidden"/>
				)}
				<div className="text-sm md:text-xl md:font-bold">
					<span>Enhance Your Stay with </span>
					<span className="text-PrimaryBlue-normal">Luxurious Amenties</span>
				</div>
			</div>
			{(amenities || !isMobile) && <PersonalizeAccordion type={"Amenities"} />}
			<div onClick={() => changeType('Activities')} className="cursor-pointer bg-PrimaryBlue-light_active md:bg-white mt-2 px-4 lg:px-0 p-3 flex items-center gap-2 w-full">
				{activities ? (
					<FaMinus className="md:hidden"  />
				) : (
					<FaPlus className="md:hidden"  />
				)}
				<div className="text-sm md:text-xl md:font-bold">
					<span>Discover Your Adventure </span>
					<span className="text-PrimaryBlue-normal">Exciting Activities</span>
				</div>
			</div>
			{(activities || !isMobile) && <PersonalizeAccordion type={"Activities"} />}
		</div>
	);
};

export default PersonalizeBookingSection;
