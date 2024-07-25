import React from "react";
import SimplePageIntro from "../components/SimplePageIntro";
import AboutusCard from "../components/AboutusCard";
import { aboutSpecsData } from "../utils/aboutus";
import { Link,ScrollLink } from "react-scroll";
import Header from '../components/Header';
const Aboutus = () => {
	return (
		<div>
			 <Header />
			<SimplePageIntro
				data={{
					thumb: "../images/bg3.jpeg",
					title: "About us",
				}}
			/>
			<div className="hidden md:flex bg-navyBlue-light w-full p-4 font-poppins font-medium text-lg gap-16 px-12">
				{aboutSpecsData.map((item) => (
					<Link className="hover:border-b-2 border-black cursor-pointer transition duration-700" to={item.navigate}
					offset={-100}
					smooth={true}
					duration={600}
					isDynamic={true}>{item.type}
					
					</Link>
				))}
			</div>
			<div className="my-3 p-4 font-poppins space-y-2 md:flex gap-10 items-center md:px-24">
				<h1 className="text-xl font-medium md:hidden">Our Company</h1>
				<img
					className="hidden md:block h-64 rounded-xl"
					src="../images/bg2.jpeg"
					alt="home"
				/>
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
				{aboutSpecsData.map((item, index) => (
					<AboutusCard data={item} id={index + 1} />
				))}
			</div>
		</div>
	);
};

export default Aboutus;
