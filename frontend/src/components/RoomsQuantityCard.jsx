import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
	decrementAdults,
	decrementChildren,
	incrementAdults,
	incrementChildren,
	removeRoom,
} from "../utils/roomCountSlice";
import { IoClose } from "react-icons/io5";

const RoomsQuantityCard = ({ data }) => {
	const dispatch = useDispatch();
	return (
		<div className="w-full space-y-3 mb-3">
			<div className="flex font-poppins w-full justify-between items-center">
				<div className="space-y-2 w-full">
					<span className="dark:text-white text-black">{data.name}</span>
					<div className="dark:bg-white bg-black h-[1px] w-full rounded-full" />
				</div>
				{data.id > 1 && (
					<IoClose
						onClick={() => {
							if (data.id > 1) dispatch(removeRoom({ id: data.id }));
						}}
						className="dark:text-white text-black text-xl"
					/>
				)}
			</div>
			<div className="space-y-2">
				<div className="flex items-center justify-between font-poppins w-full">
					<span className="dark:text-white">Adults</span>
					<div className="flex items-center ">
						<button
							onClick={() => dispatch(decrementAdults({ id: data.id }))}
							className="dark:text-white text-black bg-PrimaryBlue-normal text-base h-6 w-6 rounded-full flex items-center justify-center">
							<FaMinus />
						</button>
						<span className="text-xl dark:text-white text w-8 text-center">
							{data.adults}
						</span>
						<button
							onClick={() => dispatch(incrementAdults({ id: data.id }))}
							className="text-white bg-PrimaryBlue-normal text-base h-6 w-6 rounded-full flex items-center justify-center">
							<FaPlus />
						</button>
					</div>
				</div>
				<div className="flex items-center justify-between font-poppins w-full">
					<span className="dark:text-white">Child</span>
					<div className="flex items-center ">
						<button
							onClick={() => dispatch(decrementChildren({ id: data.id }))}
							className="text-white bg-PrimaryBlue-normal text-base h-6 w-6 rounded-full flex items-center justify-center">
							<FaMinus />
						</button>
						<span className="text-xl dark:text-white w-8 text-center">
							{data.children}
						</span>
						<button
							onClick={() => dispatch(incrementChildren({ id: data.id }))}
							className="text-white bg-PrimaryBlue-normal text-base h-6 w-6 rounded-full flex items-center justify-center">
							<FaPlus />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoomsQuantityCard;
