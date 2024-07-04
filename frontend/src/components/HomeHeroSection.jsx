import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const HomeHeroSection = () => {
	return (
		<div className={`  h-[70vh] md:h-[100vh] object-center flex justify-center items-center  z-10  relative mb-16`}>
			<img
				className="h-full w-full object-cover absolute -z-20"
				src="../images/retreat-hub.jpeg"
				alt=""
			/>
			<div className="absolute z-20 flex flex-col gap-5 justify-between items-center h-[40vh] md:h-[100vh] px-6 md:px-24 md:items-center">
				<div className="space-y-3 ">
					<h3 className="text-orange-normal text-center text-xl md:text-5xl font-poppins font-medium">
						Work, Live, and Leisure
					</h3>
					<h1 className="text-white font-futura text-3xl text-center font-extrabold md:text-lg md:text-center md:w-5/6">
						Discover Your Oasis of Calm
					</h1>
				</div>

				<span className="text-white font-poppins text-center mt-10">
					Work, Live, and Leisure in Harmony - Tailored Experiences for Every
					Lifestyle
				</span>
			</div>
            <div className="absolute w-5/6 bg-white shadow-xl p-4 z-50 -bottom-12">
                <div className="flex border-gray-500 border-2 rounded-md font-poppins">
                    <input className="w-full pl-8" type="text" name="" id="" disabled placeholder="Work ... Live ... Leisure"/>
                    <button className="bg-PrimaryBlue-normal p-3 text-white text-2xl">
                        <IoSearchOutline/>
                    </button>
                </div>
            </div>

			<div className="absolute  bg-transparent p-8 w-full bg-gradient-to-t from-black  z-10 -bottom-1 right-0"></div>

			<div className="absolute inset-0 z-10 md:h-[100vh] h-[70vh] bg-black opacity-70"></div>
		</div>
	);
};

export default HomeHeroSection;
