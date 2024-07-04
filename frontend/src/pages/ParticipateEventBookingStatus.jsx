import React, { useState } from "react";
import EventBookingInformation from "../components/EventBookingInformation";
import EventBookingSummary from "../components/EventBookingSummary";
import SimplePageIntro from "../components/SimplePageIntro";
import { IoHomeOutline } from "react-icons/io5";
import animationData from "../lottie/success.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";

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
		</div>
	);
};

export default ParticipateEventBookingStatus;
