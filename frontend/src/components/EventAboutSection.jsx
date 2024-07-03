import React from "react";
import { IoBookmarkOutline, IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

const EventAboutSection = () => {
	return (
		<div className="md:border-2 md:rounded-lg md:p-3 space-y-2 mt-3">
			<h1 className="font-bold text-lg">Music Fest by Anirudh</h1>
			<div className="flex gap-2 items-center ">
				<IoBookmarkOutline className="text-2xl" />
				<span>Music</span>
			</div>
			<div className="flex gap-2 items-center ">
				<MdDateRange className="text-2xl" />
				<span>July 14 | 6.30 PM</span>
			</div>
			<div className="flex gap-2 items-center ">
				<IoLocationOutline className="text-2xl" />
				<span>Alampara, Chennai</span>
			</div>
		</div>
	);
};

export default EventAboutSection;
