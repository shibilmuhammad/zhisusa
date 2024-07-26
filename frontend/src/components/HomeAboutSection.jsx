import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const HomeAboutSection = () => {
	const letters = ["Z", "H", "I", "S", "U", "S", "A"];
	const navigate = useNavigate()
	return (
		<div className="p-4 relative md:flex gap-10 md:px-24 md:h-[80vh] items-center 2xl:px-44">
			<div className="space-y-10 md:hidden">
				<div className="rounded-xl relative ">
					<div className="absolute inset-0 z-10  h-full rounded-xl bg-black opacity-70"></div>
					<video
						className="rounded-xl"
						src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
						muted
						loop
						autoPlay></video>
				</div>
				<div className="rounded-xl relative">
					<div className="absolute inset-0 z-10  h-full rounded-xl bg-black opacity-70"></div>
					<video
						className="rounded-xl"
						src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
						muted
						loop
						autoPlay></video>
				</div>
				<div className="flex flex-col absolute -top-6 z-20 left-[47%]">
					{letters.map((item, index) => (
						<span
							className={`${
								index === 3
									? "text-PrimaryBlue-normal text-8xl -my-2"
									: "strokeText text-6xl"
							}  font-extrabold`}>
							{item}
						</span>
					))}
				</div>
			</div>

			<div className="mt-5 space-y-4 md:w-7/12 md:space-y-8 2xl:space-y-14">
				<h1 className="text-7xl 2xl:text-8xl font-poppins font-extrabold text-PrimaryBlue-normal hidden md:block">
					ZHISUSA
				</h1>
				<p className="font-poppins text-skyBlue-dark_active 2xl:w-5/6">
					This proposal outlines the development of a retreat home on a 60-cent
					property located in Chennai, overlooking the serene Alamparai
					backwaters. The project is designed by a team of skillful architects
					who will draw inspiration from the tropical aesthetics of Bali and the
					vibrant, coastal lifestyle of Florida. This unique retreat will blend
					luxury and nature, providing an idyllic escape from the hustle and
					bustle of city life.
				</p>
				<button onClick={() => navigate('/aboutus')} className="border-PrimaryBlue-normal flex items-center gap-5 pl-8 justify-between font-poppins border-[1px] rounded-full ">
					<span className="text-PrimaryBlue-normal">Know More</span>

					<FiArrowUpRight className=" rounded-full h-10 w-10 bg-PrimaryBlue-normal text-white p-2" />
				</button>
			</div>
			<div className="hidden md:block md:w-5/12">
				<div class="container">
					<div class="letter-z">
						<img src="../images/bg4.jpeg" alt="Image1" />
						
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default HomeAboutSection;
