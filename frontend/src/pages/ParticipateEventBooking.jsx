import React, { useEffect, useState } from "react";
import EventBookingInformation from "../components/EventBookingInformation";
import EventBookingSummary from "../components/EventBookingSummary";
import SimplePageIntro from "../components/SimplePageIntro";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
const ParticipateEventBooking = () => {
	const [filled, setFilled] = useState(false);
	const [details, setDetails] = useState({});
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	let query = useQuery();
	const id = query.get("id");
	const [cost,setCost] = useState({})
	useEffect(() => {
		async function getData() {
			try {
				const { data } = await axios.get(`/api/getEventDetails?id=${id}`);
				setDetails(data);
				
			} catch (err) {
				if (err?.response?.status === 401) {
					console.log("Unauthorized");
					//navigate("/admin/login");
				} else {
					console.log(err?.response?.status);
				}
			}
		}
		window.scroll(0, 0);
		getData();
	}, []);

	return (
		<div className="h-[90vh]">
			<Header />
			<div className="bg-navyBlue-normal flex justify-between w-full p-3 h-12 md:hidden"></div>
			<div className="hidden md:block">
				<SimplePageIntro
					data={{
						thumb: details?.details?.images[0],
						title: details?.title,
					}}
				/>
			</div>
			<div className="hidden md:flex px-24 w-full gap-32">
				<EventBookingInformation id={id} cost={cost} />
				<EventBookingSummary setCost={setCost} data={details} />
			</div>
			<div className="my-5 md:hidden">
				{!filled && <EventBookingInformation id={id} cost={cost} setFilled={setFilled} />}
				{filled && <EventBookingSummary setCost={setCost} cost={cost} data={details} />}
			</div>
		</div>
	);
};

export default ParticipateEventBooking;
