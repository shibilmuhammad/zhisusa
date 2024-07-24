import React from "react";
import EventGridCard from "./EventGridCard";
import { eventsParticipateGridData } from "../utils/events";
import { useNavigate } from "react-router-dom";

const ParticipateEventIntro = () => {
	const navigate = useNavigate()
	return (
		<div className="w-full flex flex-col items-center md:h-[100vh] md:p-8 py-8 md:px-16">
			<div className="md:flex flex-row-reverse gap-10">
				<div className="space-y-3 px-4 md:space-y-8 md:w-full md:pt-32">
					<div className="flex flex-col md:gap-5 font-poppins text-3xl md:text-5xl w-full font-bold">
						<span>Immerse Yourself in </span>
						<span className="text-PrimaryBlue-normal">Unique Experiences </span>
					</div>
					<p className="text-navyBlue-normal font-poppins md:text-lg">
						Dive into a vibrant calendar of events that invite you to
						participate and enjoy unique experiences. From wedding showcases to
						art exhibitions, birthday parties, and musical festivals, there’s
						always something happening. Join us and be part of the excitement!
					</p>
				</div>
				<div className="mt-5 md:w-full">
					{eventsParticipateGridData.map((item, index) => (
						<EventGridCard id={index + 1} data={item} />
					))}
				</div>
			</div>

			<button onClick={() => navigate('/eventsParticipate')} className="md:mt-10 mt-8 text-white font-poppins bg-PrimaryBlue-normal rounded-full px-8 p-2 md:px-12">
				Discover More Events
			</button>
		</div>
	);
};

export default ParticipateEventIntro;
