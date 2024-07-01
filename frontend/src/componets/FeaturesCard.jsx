import React from "react";

const FeaturesCard = () => {
	return (
		<div className="bg-white rounded-lg flex items-center p-2.5 gap-3 md:flex-col md:items-start">
			<div className="">
				<div className="bg-orange-active p-6 h-20 w-20 rounded-full ">
					<img src="../images/Support.png" alt="icon" />
				</div>
			</div>

			<div className="w-full space-y-2">
				<h1 className="font-poppins text-xl font-medium">High-Speed Internet</h1>
				<p className="font-poppins text-PrimaryBlue-darker text-sm">
					Stay connected with lightning-fast internet, ensuring seamless
					communication and productivity.
				</p>
			</div>
		</div>
	);
};

export default FeaturesCard;
