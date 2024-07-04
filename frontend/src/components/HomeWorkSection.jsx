import React from "react";
import { GoArrowRight } from "react-icons/go";
import WorkCard from "./WorkCard";
import { workSpecsData } from "../utils/works";


const HomeWorkSection = () => {
    
	return (
		<div className=" w-full px-4 py-6 space-y-4 ">
            
			<div className="font-futura text-3xl flex flex-col font-bold">
				<span className="">Escape to Your</span>
				<span className="text-orange-normal"> Own Work</span>
			</div>
			<p className="font-poppins text-orange-dark_hover">
				Discover a range of luxurious accommodations designed for your ultimate
				comfort and relaxation. Choose from private villas, cozy cottages,
				glamping tents, and more, all set in serene natural surroundings.
				Whether you seek solitude or adventure, find your perfect escape here.
			</p>
            <div className="grid grid-cols-1 gap-3">
                {workSpecsData.slice(0,3).map((item) => <WorkCard data={item}/>)}
                
            </div>
            
			
			<div className="w-full px-20 pb-5">
				<button className="bg-orange-normal rounded-full px-4 p-2 font-poppins text-white flex items-center justify-between w-full">
					<span>Discover More</span>
					<GoArrowRight className="text-2xl " />
				</button>
			</div>
		</div>
	);
};

export default HomeWorkSection;
