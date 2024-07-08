import React from "react";
import { FaMinus,FaPlus } from "react-icons/fa6";

const RoomsQuantityCard = () => {
	return (
		<div className="w-full space-y-3">
			<div className="flex items-center justify-between font-poppins w-full ">
                
				<span className="dark:text-white">Rooms</span>
				<div className="flex gap-4 items-center">
					<button className="text-white bg-PrimaryBlue-normal text-lg h-7 w-7 rounded-full flex items-center justify-center">
						<FaMinus />
					</button>
                    <span className="text-xl dark:text-white">1</span>
                    <button className="text-white bg-PrimaryBlue-normal text-lg h-7 w-7 rounded-full flex items-center justify-center">
						<FaPlus />
					</button>
				</div>
			</div>
            <div className="flex items-center justify-between font-poppins w-full">
				<span className="dark:text-white">Adults</span>
				<div className="flex gap-4 items-center ">
					<button className="text-white bg-PrimaryBlue-normal text-lg h-7 w-7 rounded-full flex items-center justify-center">
						<FaMinus />
					</button>
                    <span className="text-xl dark:text-white">1</span>
                    <button className="text-white bg-PrimaryBlue-normal text-lg h-7 w-7 rounded-full flex items-center justify-center">
						<FaPlus />
					</button>
				</div>
			</div>
            <div className="flex items-center justify-between font-poppins w-full ">
				<span className="dark:text-white">Child</span>
				<div className="flex gap-4 items-center ">
					<button className="text-white bg-PrimaryBlue-normal text-lg h-7 w-7 rounded-full flex items-center justify-center">
						<FaMinus />
					</button>
                    <span className="text-xl dark:text-white">1</span>
                    <button className="text-white bg-PrimaryBlue-normal text-lg h-7 w-7 rounded-full flex items-center justify-center">
						<FaPlus />
					</button>
				</div>
			</div>
		</div>
	);
};

export default RoomsQuantityCard;
