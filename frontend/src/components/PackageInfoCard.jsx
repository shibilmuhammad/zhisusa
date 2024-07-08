import React from "react";
import { MdTaskAlt } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";

const PackageInfoCard = ({ id, data }) => {
	return (
		<div
			className={`rounded-2xl ${
				id % 2 === 0 ? "bg-orange-normal" : " bg-navyBlue-normal"
			} p-3 relative overflow-x-hidden 2xl:h-64`}>
			<div className="flex flex-col gap-4 text-white font-poppins w-10/12 ">
				<h1 className="text-xl md:text-2xl">{data?.title}</h1>
				<p className="text-sm w-9/12 md:text-base 2xl:w-8/12">{data?.description}</p>
				<div className="flex flex-wrap gap-1 2xl:w-9/12">
					{data?.features.map((item) => (
						<div className="flex items-center gap-2 pr-8 ">
							<MdTaskAlt className="md:text-2xl" />
							<span className="text-sm md:text-base">{item}</span>
						</div>
					))}

					
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
