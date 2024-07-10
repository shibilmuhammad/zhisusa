import React from "react";
import { MdTaskAlt } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";

const PackageInfoCard = ({ id, data }) => {
	return (
		<div
			className={`rounded-2xl ${
				id % 2 === 0 ? "bg-orange-normal" : " bg-navyBlue-normal"
			} p-3 relative overflow-x-hidden h-60 lg:h-72 lg:w-11/12 `}>
			<div className=" lg:flex flex-col items-center px-2 text-white font-poppins w-8/12 ">
				<div>
					<h1 className="text-xl font-medium md:text-2xl lg:mb-2">{data?.title}</h1>
					<p className="text-sm w-9/12 md:text-base text-gray-100 lg:mb-6 lg:text-xs 2xl:w-8/12">{data?.description}</p>
					</div>
				<div>
					<div className="flex  flex-wrap gap-1 2xl:w-9/12">
						{data?.features.map((item) => (
							<div className="flex items-center gap-2 pr-8 lg:mb-4 lg:mr-6">
								<MdTaskAlt className="md:text-2xl" />
								<span className="text-sm md:text-base">{item}</span>
							</div>
						))}

					</div>
				</div>
			</div>
			<div className="h-full w-56 absolute bg-white rounded-full -right-28 top-0"></div>
            <button className="flex items-center gap-1  absolute top-2 right-2 text-sm border-black border-2 bg-white rounded-full px-4 font-poppins p-1 shadow-2xl">
                See Details
                <FaCircleArrowRight className="text-xl"/>
            </button>
            <img className="absolute bottom-1 right-5 h-28" src={data?.img} alt="icon" />
		</div>
	);
};

export default PackageInfoCard;
