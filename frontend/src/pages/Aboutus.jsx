import React from "react";
import SimplePageIntro from "../components/SimplePageIntro";
import AboutusCard from "../components/AboutusCard";
import { aboutSpecsData } from "../utils/aboutus";

const Aboutus = () => {
	return (
		<div>
			<SimplePageIntro
				data={{
					thumb: "../images/tent.jpg",
					title: "About us",
				}}
			/>
            <div className="hidden md:flex bg-navyBlue-light">
                
            </div>
			<div className="my-3 p-4 font-poppins space-y-2 md:flex gap-10 items-center md:px-24" >
				<h1 className="text-xl font-medium md:hidden">Our Company</h1>
                <img className="hidden md:block h-64 rounded-xl" src="../images/about.jpg" alt="home" />
				<p className="text-sm md:text-lg">
					Welcome to a place where the harmony of work, life, and leisure
					creates unforgettable experiences. Our unique blend of natural
					surroundings, modern amenities, and engaging activities offers an
					idyllic setting for both relaxation and productivity. Discover more
					about what makes our project a haven for those seeking the perfect
					balance.
				</p>
                <div className="md:hidden h-1 bg-PrimaryBlue-normal mt-5 w-full rounded-full"></div>
			</div>
            
			<div>
				{aboutSpecsData.map((item,index) => (
					<AboutusCard data={item} id={index+1} />
				))}
			</div>
		</div>
	);
};

export default Aboutus;
