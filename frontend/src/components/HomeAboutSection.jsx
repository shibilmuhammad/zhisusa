import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const HomeAboutSection = () => {
	const letters = ["Z", "H", "I", "S", "U", "S", "A"];
	return (
		<div className="p-4 relative">
			<div className="space-y-10 ">
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
			<div className="mt-5 space-y-4">
				<p className="font-poppins text-skyBlue-dark_active">
					This proposal outlines the development of a retreat home on a 60-cent
					property located in Chennai, overlooking the serene Alamparai
					backwaters. The project is designed by a team of skillful architects
					who will draw inspiration from the tropical aesthetics of Bali and the
					vibrant, coastal lifestyle of Florida. This unique retreat will blend
					luxury and nature, providing an idyllic escape from the hustle and
					bustle of city life.
				</p>
                <button className="border-PrimaryBlue-normal flex items-center gap-5 pl-8 justify-between font-poppins border-[1px] rounded-full ">
                    <span className="text-PrimaryBlue-normal">Know More</span>
            
                    <FiArrowUpRight className=" rounded-full h-10 w-10 bg-PrimaryBlue-normal text-white p-2"/>
                </button>
			</div>
		</div>
	);
};

export default HomeAboutSection;
