import React from "react";

const FeaturesCard = ({data,page}) => {
	return (
		<div className="bg-white rounded-lg flex items-center p-2.5 gap-3 md:flex-col md:items-start">
			<div className="">
				<div className={`${page === 'live' ? 'bg-PrimaryBlue-light_active text-PrimaryBlue-normal' : 'bg-orange-active text-orange-normal'}  p-6 h-20 w-20 rounded-full flex items-center justify-center text-3xl`}>
					<data.icon/>
				</div>
			</div>

			<div className="w-full space-y-2">
				<h1 className="font-poppins text-lg font-medium">{data?.title}</h1>
				<p className="font-poppins text-PrimaryBlue-darker text-sm">
					{data?.description}
				</p>
			</div>
		</div>
	);
};

export default FeaturesCard;
