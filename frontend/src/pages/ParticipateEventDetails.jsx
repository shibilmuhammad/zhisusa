import React, { useEffect } from "react";
import Header from '../components/Header';
import SimplePageIntro from "../components/SimplePageIntro";
import EventAboutSection from "../components/EventAboutSection";
import EventGuideSection from "../components/EventGuideSection";
import EventDetailsSection from "../components/EventDetailsSection";
import EventPriceCard from "../components/EventPriceCard";
import EventRelatedCard from "../components/EventRelatedCard";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const ParticipateEventDetails = () => {

	useEffect(() => {
		async function getData() {
			try {
				const { data } = await axios.get(`/api/getAllZhisusaEvents`);
				setEventsList(data);
				dispatch(addToEvents(data))

			} catch (err) {
				if (err?.response?.status === 401) {
					setError("Unauthorized");
					navigate("/admin/login");
				} else {
					setError("Server error: " + error?.response?.status);
				}
			}
		}
		getData();
		window.scroll(0,0)
	},[])
	return (
		<div className="relative">
			 <Header />
			<SimplePageIntro
				data={{
					thumb: data?.details?.images[0],
					title: data?.title,
				}}
			/>
			<div className=" md:flex md:flex-row-reverse font-poppins p-4 md:gap-10 xl:gap-32 md:px-24">
				<div className="md:w-5/12">
					<h1 className="md:hidden text-xl font-medium border-b-2 border-gray-400 pb-1">
						About
					</h1>
					<EventAboutSection data={data} />
					<EventGuideSection data={data} />
				</div>
				<div className="md:w-8/12">
					<EventDetailsSection  data={data}/>
				</div>
			</div>
			{/* Related Events */}
			<div className="p-5 md:px-24">
				<h1 className="text-xl font-poppins font-bold border-b-2 border-gray-400 pb-1">
					You may also like this
				</h1>
				<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
					{list?.map((item) => <EventRelatedCard data={item} />)}
					
				</div>
			</div>
			{/* Price card */}
			<div className="fixed bottom-4 w-full px-6 md:hidden">
				<EventPriceCard data={data} />
			</div>
		</div>
	);
};

export default ParticipateEventDetails;
