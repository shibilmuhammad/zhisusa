import React from "react";
import StripedIntro from "../componets/StripedIntro";
import MobileStripedIntro from "../componets/MobileStripedIntro";
import { eventsParticipateIntro } from "../utils/events";
import EventCard from "../componets/EventCard";
import PastEvents from "../componets/PastEvents";

const ParticipateEvents = () => {
	return (
		<div>
            
			<div className="hidden md:block">
				<StripedIntro type={"participate"} data={eventsParticipateIntro} />
			</div>
			<div className="md:hidden block">
				<MobileStripedIntro
					type={"participate"}
					data={eventsParticipateIntro}
				/>
			</div>
			<div className="px-6 my-4">
				<h1 className="text-2xl md:text-3xl font-poppins font-bold">
					Discover Upcoming Events
				</h1>
				<div className="mt-3">
					<div className="space-y-1">
						<span className="text-lg md:text-lg font-bold font-poppins">Music Shows</span>
						<div className="h-[2px] bg-gray-400"></div>
					</div>
					<div className="my-5 grid grid-cols-1 md:grid-cols-4">
						<EventCard />
					</div>
					<div>
						<div className="space-y-1">
							<span className="text-lg font-bold font-poppins">
								Music Shows
							</span>
							<div className="h-[2px] bg-gray-400"></div>
						</div>
						<div className="my-5 grid grid-cols-1 md:grid-cols-4">
							<EventCard />
						</div>
					</div>
				</div>
			</div>
            <PastEvents/>
		</div>
	);
};

export default ParticipateEvents;
