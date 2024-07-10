import React from "react";
import { MdTaskAlt } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";

const PackageInfoCard = ({ id, data }) => {
	return (
		<div
			className={`rounded-2xl ${
				id % 2 === 0 ? "bg-orange-normal" : " bg-navyBlue-normal"
			} p-3 relative overflow-x-hidden lg:h-72 lg:w-11/12 `}>
			<div className=" lg:flex flex-col items-center px-2 text-white font-poppins space-y-3 ">
				<div className="space-y-2">
					<h1 className="text-xl font-medium lg:text-2xl lg:mb-2">{data?.title}</h1>
					<p className="text-sm w-9/12 text-gray-100 lg:mb-6 lg:text-base 2xl:w-8/12">{data?.description}</p>
					</div>
				<div>
					<div className="flex flex-wrap gap-1 2xl:w-9/12">
						{data?.features.map((item) => (
							<div className="flex items-center gap-2 pr-8 lg:mb-4 lg:mr-6">
								<MdTaskAlt className="lg:text-2xl" />
								<span className="text-sm lg:text-base">{item}</span>
							</div>
						))}

					</div>
				</div>
			</div>
			<div className="h-full w-56 lg:h-72 lg:w-72 absolute bg-white rounded-full -right-36 lg:-right-32 top-0"></div>
            <button className="flex items-center gap-1  absolute top-2 right-2  text-sm border-black border-2 bg-white rounded-full px-4 font-poppins p-1 shadow-2xl">
                See Details
                <FaCircleArrowRight className="text-xl"/>
            </button>
            <img className="absolute bottom-1 right-2 lg:right-8 h-24 lg:h-36" src={data?.img} alt="icon" />
		</div>
	);
};

export default PackageInfoCard;
