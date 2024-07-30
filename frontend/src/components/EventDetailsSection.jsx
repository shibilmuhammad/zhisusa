import React from "react";

const EventDetailsSection = ({data}) => {
	return (
		<div className="space-y-3 mt-4">
			<h1 className="font-bold text-lg md:text-xl">About the event</h1>
			<p className="text-sm md:text-base">
				{data?.details?.description}
			</p>
			<h1 className="font-bold text-lg md:text-xl">Venue</h1>
			<p className="text-sm md:text-base">
				{data?.details?.location?.venue}
			</p>
			{data?.details?.location?.map && (<button className="border-2 rounded-md p-2 px-4 text-sm">
				Get Direction
			</button>)}
			<h1 className="font-bold text-lg md:text-xl">Terms & Conditions</h1>
			<p className="text-sm md:text-base">
				{data?.details?.termsAndConditions}
			</p>
		</div>
	);
};

export default EventDetailsSection;
