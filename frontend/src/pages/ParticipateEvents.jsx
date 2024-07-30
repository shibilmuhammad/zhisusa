import React, { useEffect, useState } from "react";
import StripedIntro from "../components/StripedIntro";
import MobileStripedIntro from "../components/MobileStripedIntro";
import { eventsParticipateIntro } from "../utils/events";
import EventCard from "../components/EventCard";
import PastEvents from "../components/PastEvents";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { addToEvents } from "../utils/zhisusaEventsSlice";
const ParticipateEvents = () => {
	const navigate = useNavigate();
	const [eventsList, setEventsList] = useState([]);
	const [typeList, setTypeList] = useState([]);
	const [error, setError] = useState([]);
	const dispatch = useDispatch()

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
	}, []);
	useEffect(() => {
		const uniqueTypes = [...new Set(eventsList.map((item) => item.type))];
		setTypeList(uniqueTypes);
	}, [eventsList]);
	return (
		<div>
			<Header />

			<div className="hidden md:block">
				<StripedIntro type={"participate"} data={eventsParticipateIntro} />
			</div>
			<div className="md:hidden block">
				<MobileStripedIntro
					type={"participate"}
					data={eventsParticipateIntro}
				/>
			</div>
			<div className="px-6 my-4">
				<h1 className="text-2xl md:text-3xl font-poppins font-bold">
					Discover Upcoming Events
				</h1>
				<div className="mt-3">
					{typeList.map((item) => (
						<>
							<div className="space-y-1">
								<span className="text-lg md:text-lg font-bold font-poppins">
									{item}
								</span>
								<div className="h-[2px] bg-gray-400"></div>
							</div>

							<div className="my-5 grid grid-cols-1 md:grid-cols-4">
								{eventsList
									?.filter((type) => type.type === item)
									?.map((data) => (
										<EventCard data={data} />
									))}
							</div>
						</>
					))}
				</div>
			</div>
			<PastEvents />
		</div>
	);
};

export default ParticipateEvents;
