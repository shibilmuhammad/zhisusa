import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";

import { FaPlus } from "react-icons/fa6";
import PersonalizeAccordion from "./PersonalizeAccordion";

const PersonalizeBookingSection = () => {
	const [amenities, setAmenities] = useState(true);
    const [activities, setActivities] = useState(false);
	const changeType = (type) => {
        type === 'Amenities' ? setAmenities(!amenities) : setActivities(!activities)
    }
	return (
		<div className="font-poppins mt-4 flex items-center w-full flex-col px-3">
			<div onClick={() => changeType('Amenities')} className="cursor-pointer bg-PrimaryBlue-light_active px-4 p-3 flex items-center gap-2 w-full">
				{amenities ? (
					<FaMinus className=""/>
				) : (
					<FaPlus className=""/>
				)}
				<div className="text-sm">
					<span>Enhance Your Stay with </span>
					<span className="text-PrimaryBlue-normal">Luxurious Amenties</span>
				</div>
			</div>
			{amenities && <PersonalizeAccordion type={"Amenities"} />}
			<div onClick={() => changeType('Activities')} className="cursor-pointer bg-PrimaryBlue-light_active mt-2 px-4 p-3 flex items-center gap-2 w-full">
				{activities ? (
					<FaMinus className=""  />
				) : (
					<FaPlus className=""  />
				)}
				<div className="text-sm">
					<span>Discover Your Adventure </span>
					<span className="text-PrimaryBlue-normal">Exciting Activities</span>
				</div>
			</div>
			{activities && <PersonalizeAccordion type={"Activities"} />}
		</div>
	);
};

export default PersonalizeBookingSection;
