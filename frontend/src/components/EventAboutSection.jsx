import React from "react";
import { IoBookmarkOutline, IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import EventPriceCard from "./EventPriceCard";

const EventAboutSection = ({data}) => {
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = { month: 'short', day: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	}
	const formatTime = (timeString) => {
		const [hour, minute] = timeString && timeString.split(':').map(Number);
		const period = hour >= 12 ? 'PM' : 'AM';
		const formattedHour = hour % 12 || 12; // Convert hour to 12-hour format, handling midnight and noon
		return `${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`;
	  }
	return (
		<div className="md:border-2 md:rounded-lg md:p-3 space-y-2 mt-3">
			<h1 className="font-bold text-lg">{data?.title}</h1>
			<div className="flex gap-2 items-center ">
				<IoBookmarkOutline className="text-2xl" />
				<span>{data?.type}</span>
			</div>
			<div className="flex gap-2 items-center ">
				<MdDateRange className="text-2xl" />
				<span>{formatDate(data?.details?.schedule?.date)} | {formatTime(data?.details?.schedule?.time || '00:00')}</span>
			</div>
			<div className="flex gap-2 items-center ">
				<IoLocationOutline className="text-2xl" />
				<span>{data?.details?.location?.venue}</span>
			</div>
			<div className="hidden md:block">
				<EventPriceCard data={data}/>
			</div>
		</div>
	);
};

export default EventAboutSection;
