import React from "react";

const MobileStripedIntro = () => {
	return (
		<div className="flex flex-col gap-3">
			<div className="relative">
				<div>
					<img
						className="rounded-b-3xl "
						src="../images/music.jpg"
						alt="thumb"
					/>
				</div>
				<div className="text-2xl font-poppins font-bold absolute bottom-0 p-4 z-20">
					<span className=" text-white">Host Your Dream</span>
					<span className="block text-orange-normal ">Events</span>
				</div>
                <div className="absolute inset-0 z-10 bg-black opacity-70 rounded-b-3xl"></div>
			</div>
            <div className="px-6 space-y-4">
                
                <p className={'text-orange-dark_hover font-poppins text-sm'}>
					Transform your special occasions into unforgettable experiences with
					our elegant venues and expert planning services. From weddings to art
					exhibitions, birthday celebrations, and music festivals, we offer
					everything you need for a flawless event that leaves lasting
					impressions.
				</p>
                <div className="p-[2px] bg-orange-normal"></div>
            </div>
            
		</div>
	);
};

export default MobileStripedIntro;
