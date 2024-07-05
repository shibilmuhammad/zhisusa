import React, { useState } from "react";
import EventBookingInformation from "../components/EventBookingInformation";
import EventBookingSummary from "../components/EventBookingSummary";
import SimplePageIntro from "../components/SimplePageIntro";
import Header from '../components/Header';
const ParticipateEventBooking = () => {
	const [filled, setFilled] = useState(false);
	return (
		<div className="h-[90vh]">
			 <Header />
			<div className="bg-navyBlue-normal flex justify-between w-full p-3 h-12 md:hidden"></div>
			<div className="hidden md:block">
				<SimplePageIntro
					data={{
						thumb: "../images/music.jpg",
						title: "Music Fest By Anirudh R",
					}}
				/>
			</div>
      <div className="hidden md:flex px-24 w-full gap-32">
          <EventBookingInformation/>
          <EventBookingSummary/>
      </div>
			<div className="my-5 md:hidden">
				{!filled && <EventBookingInformation setFilled={setFilled} />}
				{filled && <EventBookingSummary />}
			</div>
		</div>
	);
};

export default ParticipateEventBooking;
