import React from "react";

const StripedIntro = ({type,data}) => {
	return (
		<div className={`w-full  flex  ${type === 'host' ? 'bg-orange-active':'bg-PrimaryBlue-light_active'}`}>
			<div className="w-6/12 p-8 space-y-8">
				<div className="text-5xl font-poppins font-bold space-y-2 mt-16">
					<span className=" ">{data?.title}</span>
					<span className={`block ${type === 'host' ? 'text-orange-normal' : 'text-PrimaryBlue-normal'} `}>Events</span>
				</div>
				<p className={`${type === 'host' ? 'text-orange-dark_hover' : 'text-PrimaryBlue-dark_active'} font-poppins w-4/6`}>
					{data?.description}
				</p>
			</div>
			<div className="w-6/12">
				<div className="relative ">
					<div
						className={`parellelogram absolute h-96 w-96 ${type === 'host' ? 'bg-orange-normal': 'bg-PrimaryBlue-normal'}`}
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
