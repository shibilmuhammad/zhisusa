import React, { useState } from "react";
import HomeActivityCard from "./HomeActivityCard";
import { activitySpecsData } from "../utils/activities";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "../utils/sliderSettings";
import { MdBookmarkAdded } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const HomeActivitySection = () => {
	const [title, setTitle] = useState(activitySpecsData[0].title);
	const [description, setDiscription] = useState(activitySpecsData[0].description);
	const changeSlide = (index) => {
		setTitle(activitySpecsData[index].title);
		setDiscription(activitySpecsData[index].description);
	};
	return (
		<div>
			<div className="bg-navyBlue-light px-4 py-4">
				<div className="relative lg:hidden">
					<Slider
						beforeChange={(index, newindex) => changeSlide(newindex)}
						{...settings}
						speed={1000}>
						{activitySpecsData.map((item) => (
							<div className="mt-5">
								<img
									className="w-full h-56 rounded-2xl"
									src={item?.thumbnail}
									alt=""
								/>
							</div>
						))}
					</Slider>
					<style jsx>{`
						.slick-dots li.slick-active div {
							background-color: white !important;
						}
					`}</style>
				</div>
				<div className="font-poppins space-y-5">
					<h5 className="text-PrimaryBlue-normal mb-3"># Season now</h5>
					<div className="flex flex-col gap-2 text-3xl">
						<span className=" ">Lets have a nice </span>
						<span className="text-PrimaryBlue-normal font-bold ">
							{title}&nbsp;
						</span>
						<span className="text-3xl ">Experience</span>
					</div>

					<p className="text-gray-500 text-sm">{description}</p>
					<button
						className={`flex items-center text-white p-2 px-5 gap-3 rounded-full bg-PrimaryBlue-normal`}>
						<MdBookmarkAdded />
						<span className="font-poppins ">Book Now</span>
						<GoArrowRight />
					</button>
				</div>
			</div>
			<div>
				{activitySpecsData.map((item, index) => (
					<HomeActivityCard data={item} id={index + 1} />
				))}
			</div>
		</div>
	);
};

export default HomeActivitySection;
