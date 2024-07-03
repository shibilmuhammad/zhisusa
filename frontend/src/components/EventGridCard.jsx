import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const EventGridCard = ({ data, id }) => {
	return (
		<div
			id={data?.navigate}
			className={`bg-navyBlue-light flex ${
				id % 2 === 0 ? "flex-row" : "flex-row-reverse"
			}`}>
			<div className="w-full ">
				<img className="md:h-72 h-44  object-cover" src={data?.img} alt="thumb" />
			</div>
			<div className="font-poppins p-0 space-y-2 md:space-y-4 w-full md:flex flex-col justify-center">
				<div className="font-poppins p-3 space-y-2 md:space-y-4 flex flex-col justify-between h-full">
					<h3 className=" text-navyBlue-normal text-sm md:text-xl">
						{data?.date}
					</h3>
					<h1 className="text-navyBlue-normal text-sm font-bold md:text-xl">
						{data?.title}
					</h1>
				    <button className="text-PrimaryBlue-normal text-sm font-poppins flex gap-8 items-center ">
                        Book Your Spot 
                        <IoIosArrowRoundForward className="text-3xl"/>
                    </button>
				</div>
			</div>
		</div>
	);
};

export default EventGridCard;
