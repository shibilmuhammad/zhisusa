import React from "react";
import { IoLanguage } from "react-icons/io5";
import { TbMan } from "react-icons/tb";

const EventGuideSection = ({data}) => {
	return (
		<div className="md:border-2 md:rounded-lg md:p-3 space-y-2 mt-5">
			<h1 className="font-bold text-lg">Event Guide</h1>
			<div className="flex gap-4 items-center ">
				<TbMan className="text-2xl" />
                <div className="flex flex-col">
                    <span className="text-gray-500">For Age(s)</span>
                    <span>{data?.details?.ageGroup} +</span>
                </div>
				
			</div>
			<div className="flex gap-4 items-center ">
				<IoLanguage className="text-2xl" />
                <div className="flex flex-col">
                    <span className="text-gray-500">Language</span>
                    <span>{data?.details?.language}</span>
                </div>
				
			</div>
		</div>
	);
};

export default EventGuideSection;
