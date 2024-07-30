import React, { useState } from "react";
import EventBookingInformation from "../components/EventBookingInformation";
import EventBookingSummary from "../components/EventBookingSummary";
import SimplePageIntro from "../components/SimplePageIntro";
import Header from '../components/Header';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const ParticipateEventBooking = () => {
	const [filled, setFilled] = useState(false);
	const list = useSelector((state) => state.zhisusaEvents.zhisusaEvents)
	const location = useLocation()
	const {title} = location.state
	const data = list.find((item) => item.title === title)
	return (
		<div className="h-[90vh]">
			 <Header />
			<div className="bg-navyBlue-normal flex justify-between w-full p-3 h-12 md:hidden"></div>
			<div className="hidden md:block">
				<SimplePageIntro
					data={{
						thumb: data?.details?.images[0],
						title: data?.title,
					}}
				/>
			</div>
      <div className="hidden md:flex px-24 w-full gap-32">
          <EventBookingInformation/>
          <EventBookingSummary data={data}/>
      </div>
			<div className="my-5 md:hidden">
				{!filled && <EventBookingInformation setFilled={setFilled} />}
				{filled && <EventBookingSummary data={data} />}
			</div>
		</div>
	);
};

export default ParticipateEventBooking;
