import React from "react";

const StripedIntro = () => {
	return (
		<div className="w-full bg-orange-active flex  ">
			<div className="w-6/12 p-8 space-y-8">
				<div className="text-5xl font-poppins font-bold space-y-2">
					<span className=" ">Host Your Dream</span>
					<span className="block text-orange-normal ">Events</span>
				</div>
				<p className={'text-orange-dark_hover font-poppins w-4/6'}>
					Transform your special occasions into unforgettable experiences with
					our elegant venues and expert planning services. From weddings to art
					exhibitions, birthday celebrations, and music festivals, we offer
					everything you need for a flawless event that leaves lasting
					impressions.
				</p>
			</div>
			<div className="w-6/12">
				<div className="relative ">
					<div
						className="parellelogram absolute h-96 w-96 bg-orange-normal"
					/>
					
				</div>
				<div className="trapezoid bg-black w-full h-96 ">
					<img
						className="h-full w-full object-cover "
						src="../images/music.jpg"
						alt="thumb"
					/>
				</div>
			</div>
		</div>
	);
};

export default StripedIntro;
