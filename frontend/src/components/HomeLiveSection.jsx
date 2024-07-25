import React from "react";
import {
	FiArrowRight,
	FiArrowRightCircle,
	FiArrowUpRight,
} from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { accomodationSpecsData } from "../utils/accomodation";
import { useNavigate } from "react-router-dom";

const HomeLiveSection = () => {
	const navigate = useNavigate()
	return (
		<div className="  lg:relative bg-navyBlue-light w-full px-4 py-6 lg:py-0 lg:px-0 space-y-4 lg:space-y-0 lg:flex lg:h-[100vh] items-center">
			<img className="lg:absolute h-full w-full z-0 hidden lg:block" src="../images/bg2.jpeg" alt="th" />
			<div className="lg:absolute hidden lg:block inset-0 z-10 h-[100vh] bg-black opacity-60"></div>
			<div className=" lg:w-full z-20 lg:px-16 lg:flex lg:flex-col gap-5 lg:gap-10 space-y-3 lg:space-y-0 justify-center xl:w-5/6">
				<div className="font-futura text-3xl flex flex-col font-bold lg:text-5xl">
					<span className="text-PrimaryBlue-normal lg:text-white">Escape to Your</span>
					<span className="lg:text-orange-normal"> Perfect Stay</span>
				</div>
				<p className="font-poppins text-navyBlue-normal text-sm lg:text-lg lg:text-white lg:w-9/12">
					Discover a range of luxurious accommodations designed for your
					ultimate comfort and relaxation. Choose from private villas, cozy
					cottages, glamping tents, and more, all set in serene natural
					surroundings. Whether you seek solitude or adventure, find your
					perfect escape here.
				</p>
				<div className="w-full pb-5 hidden lg:block">
					<button onClick={()=> navigate('/accommodation')} className="bg-PrimaryBlue-normal lg:bg-transparent lg:border-[1px] lg:border-r-white rounded-full px-4 p-2 font-poppins text-white flex items-center justify-between w-max gap-6 h-max">
						<span>Discover More</span>
						<GoArrowRight className="text-2xl " />
					</button>
				</div>
			</div>

			<div className="lg:w-full xl:w-5/6 lg:z-20 lg:pr-16">
				<div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:grid-rows-custom-layout">
					{accomodationSpecsData.map((item, index) => (
						<div
							className={`rounded-xl relative h-48 lg:h-[12rem]  ${
								index === 0
									? "lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1 "
									: index === 1
									? "lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-2 lg:h-[24.6rem]"
									: index === 2
									? "lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-1"
									: "lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-3 lg:h-[16rem]"
							} `}>
							<img
								className="absolute h-full w-full object-cover rounded-xl z-0"
								src={item?.thumbnail}
								alt="thumb"
							/>
							<div className="absolute bottom-3 left-3 w-full text-white text-xl font-poppins z-30 flex justify-between items-center">
								<span>{item?.title}</span>
							</div>
							<button className="absolute bottom-3 right-3 z-30 text-2xl flex items-center justify-center text-white h-10 w-10 rounded-full border-2 border-white">
								<FiArrowUpRight />
							</button>
							<div className="absolute rounded-xl h-full bg-transparent p-8 w-full bg-gradient-to-t from-black  z-10 -bottom-1 right-0"></div>
						</div>
					))}
				</div>
			</div>

			<div className="w-full px-20 pb-5 lg:hidden">
				<button className="bg-PrimaryBlue-normal rounded-full px-4 p-2 font-poppins text-white flex items-center justify-between w-full">
					<span>Discover More</span>
					<GoArrowRight className="text-2xl " />
				</button>
			</div>
		</div>
	);
};

export default HomeLiveSection;
