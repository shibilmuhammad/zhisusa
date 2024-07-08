import React, { useState } from "react";
import EventBookingInformation from "../components/EventBookingInformation";
import EventBookingSummary from "../components/EventBookingSummary";
import SimplePageIntro from "../components/SimplePageIntro";
import { IoHomeOutline } from "react-icons/io5";
import animationData from "../lottie/success.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import EventRelatedCard from "../components/EventRelatedCard";
import Header from '../components/Header';
const ParticipateEventBookingStatus = () => {
	const navigate = useNavigate()
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const [filled, setFilled] = useState(false);
	return (
		<div className="h-[90vh] font-poppins">
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
			<div className="flex flex-col items-center px-4 gap-3">
				<div>
					<Lottie options={defaultOptions} height={300} width={300} />
				</div>
				<h1 className="text-xl font-bold">Booking Successfully Done..</h1>
				<p className="text-sm text-gray-500 text-center">
					You will receive ticket details via your registered email id and phone
					number. you can show your ticket at event{" "}
				</p>
				<button onClick={()=> navigate('/')} className="text-white flex items-center gap-3 justify-center bg-navyBlue-normal rounded-full px-6 p-2 ">
					<IoHomeOutline className="text-2xl " />
					<span>Back to Home Page</span>
				</button>
			</div>
			{/* Related Events */}
			<div className="p-5 md:px-24">
				<h1 className="text-xl font-poppins font-bold border-b-2 border-gray-400 pb-1">
					You may also like this
				</h1>
				<div className="mt-4 grid grid-cols-1 md:grid-cols-3">
					<EventRelatedCard />
				</div>
			</div>
		</div>
	);
};

export default ParticipateEventBookingStatus;
