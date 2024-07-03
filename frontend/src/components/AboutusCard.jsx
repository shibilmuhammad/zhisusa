import React from "react";

const AboutusCard = ({ data, id }) => {
	return (
		<div
			className={`bg-navyBlue-light md:flex ${
				id % 2 === 0 ? "flex-row" : "flex-row-reverse"
			}`}>
			<div className="md:w-full ">
				<img
					className="md:h-[60vh] object-cover"
					src={data?.thumbnail}
					alt="thumb"
				/>
			</div>
			<div className="font-poppins p-4 md:p-0 space-y-2 md:space-y-4 md:w-full md:flex flex-col justify-center">
				<div className="font-poppins md:px-10 md:space-y-4">
					<h3 className=" italic text-navyBlue-normal md:text-xl">
						{data?.type}
					</h3>
					<h1 className="text-navyBlue-normal text-xl font-medium md:text-3xl">
						{data?.title}
					</h1>
					<p className="text-black text-sm md:text-lg">{data?.description}</p>
				</div>
			</div>
		</div>
	);
};

export default AboutusCard;
