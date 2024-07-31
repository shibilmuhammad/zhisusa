import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const EventCard = ({data}) => {
	const navigate = useNavigate()
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
		<div onClick={() => navigate(`/eventDetails?id=${data?.eventId}`)} className="rounded-xl h-48 relative cursor-pointer">
			<img
				className="rounded-xl h-full w-full object-cover absolute z-0"
				src={data?.details?.images[0]}
				alt="thumb"
			/>
			<div className="absolute flex justify-between z-20 flex-col p-5 w-full h-full">
				<span className="text-white font-poppins text-xl">{data?.title}</span>
				<div className="space-y-1">
					<div className="flex gap-4 items-center text-white font-poppins">
						<BsCalendarDate className="text-xl" />
						<span className="">{formatDate(data?.details?.schedule?.date)} | {formatTime(data?.details?.schedule?.time || '00:00')}</span>
					</div>
					<div className="flex gap-4 items-center text-white font-poppins">
						<CiLocationOn className="text-xl"/>
						<div className="flex flex-col">
							<span>{data?.details?.location?.venue}</span>
							<span className="text-xs">{data?.details?.location?.proximityToAmenities}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute inset-0 z-10 rounded-xl bg-black opacity-70"></div>
		</div>
	);
};

export default EventCard;
