import React from "react";
import PackageInfoCard from "../components/PackageInfoCard";
import { allPackages } from "../utils/packages";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeAboutSection from "../components/HomeAboutSection";
import HomeLiveSection from "../components/HomeLiveSection";
import HomeWorkSection from "../components/HomeWorkSection";
import HostEventIntro from "../components/HostEventIntro";
import ParticipateEventIntro from "../components/ParticipateEventIntro";
import HomeActivitySection from "../components/HomeActivitySection";
import Header from '../components/Header';
import AvailabilitySideBar from "../components/AvailabilitySideBar";
const Home = () => {
	return (
		<div className=" ">
			<Header />
			<AvailabilitySideBar/>
			<HomeHeroSection />
			<HomeAboutSection />
			<div className="md:px-24 p-4 space-y-3 md:flex md:flex-col items-center gap-8 2xl:px-44 md:pb-12">
                <h1 className="text-2xl font-poppins font-bold md:text-4xl">Choose your Perfect &nbsp;<span className="text-PrimaryBlue-normal">Escape </span></h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-5 md:gap-12 lg:gap-x-24  2xl:gap-24 2xl:gap-x-36">
					{allPackages.map((item, id) => (
						<PackageInfoCard data={item} id={id + 1} />
					))}
				</div>
			</div>

			<HomeLiveSection />
			<HomeWorkSection />
			<HostEventIntro />
			<ParticipateEventIntro />
			<HomeActivitySection />
		</div>
	);
};

export default Home;
