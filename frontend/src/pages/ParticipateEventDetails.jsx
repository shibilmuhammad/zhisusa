import React from "react";

import SimplePageIntro from "../components/SimplePageIntro";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoLanguageOutline } from "react-icons/io5";
import EventAboutSection from "../components/EventAboutSection";
import EventGuideSection from "../components/EventGuideSection";
import EventDetailsSection from "../components/EventDetailsSection";
import EventPriceCard from "../components/EventPriceCard";
import EventRelatedCard from "../components/EventRelatedCard";
const ParticipateEventDetails = () => {
	return (
		<div className="relative">
			<SimplePageIntro
				data={{
					thumb: "../images/music.jpg",
					title: "Music Fest By Anirudh R",
				}}
			/>
			<div className=" flex md:flex-row-reverse font-poppins  p-4">
				<div>
					<div>
						<h1 className="text-xl font-medium border-b-2 border-black pb-1">
							About
						</h1>
						<EventAboutSection />
						<EventGuideSection />
					</div>
					<div>
						<EventDetailsSection />
					</div>
				</div>
			</div>
			{/* Related Events */}
			<div className="p-5">
				<h1 className="text-xl font-poppins font-bold border-b-2 border-gray-400 pb-1">
                    You may also like this
				</h1>
                <div className="mt-4">
                    <EventRelatedCard />
                </div>
				
			</div>
			{/* Price card */}
			<div className="fixed bottom-4 w-full px-6">
				<EventPriceCard />
			</div>
		</div>
	);
};

export default ParticipateEventDetails;
