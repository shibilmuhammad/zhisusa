import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";

const ActivityDetailsCard = ({data}) => {
	return (
		<div className="border-[1px] rounded-lg flex font-poppins w-full relative">
			<div className="flex items-center justify-center p-3 px-5 bg-gray-200 rounded-l-lg">
				<span className="font-bold ">₹250</span>
			</div>
			<div className="w-full p-3">
            <h2 className="font-bold">{data?.name}</h2>
				<div className="flex justify-between w-full">
					<span className="font-extralight ">Persons</span>
					<div>
						<div className="flex items-center ">
							<button className="text-white bg-orange-normal text-base h-6 w-6 rounded-full flex items-center justify-center">
								<FaMinus />
							</button>
							<span className="text-lg text-black text w-8 text-center">{data?.count}</span>
							<button className="text-white bg-orange-normal text-base h-6 w-6 rounded-full flex items-center justify-center">
								<FaPlus />
							</button>
						</div>
					</div>
				</div>
				<div className="flex justify-between w-full">
					<div className="flex gap-2 font-extralight text-sm">
						<span>Day</span>
						<span>|</span>
						<span>Hour</span>
					</div>

					<div className="">
						<div className="flex items-center">
							<button className="text-white bg-orange-normal text-base h-6 w-6 rounded-full flex items-center justify-center">
								<FaMinus />
							</button>
							<span className="text-lg text-black text w-8 text-center">{data?.days}</span>
							<button className="text-white bg-orange-normal text-base h-6 w-6 rounded-full flex items-center justify-center">
								<FaPlus />
							</button>
						</div>
					</div>
				</div>
			</div>
            <button className="absolute top-0 h-max right-0 bg-orange-normal text-white text-xl px-2 rounded-bl-lg rounded-tr-lg p-1">
                <MdDeleteSweep/>
            </button>
		</div>
	);
};

export default ActivityDetailsCard;
