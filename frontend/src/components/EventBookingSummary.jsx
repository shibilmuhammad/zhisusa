import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdAddCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const EventBookingSummary = ({ data,setCost,cost }) => {
	const initialPrice = data?.details?.price || 0;
	const [price, setPrice] = useState({
		ticketCount: 1,
		pricePerTicket: initialPrice  , // assuming a base price per ticket
		subTotal: initialPrice,
		gst: initialPrice  * 0.18 , // 18% of the initial subTotal
		total: initialPrice + (initialPrice  * 0.18),
	});

	const calculateTotalWithGST = (ticketCount, pricePerTicket) => {
		const subTotal = ticketCount * pricePerTicket;
		const gst = subTotal * 0.18; // Calculate 18% GST
		const total = subTotal + gst;
		return { subTotal, gst, total };
	};

	const handleIncrease = () => {
		setPrice((prevPrice) => {
			const newTicketCount = prevPrice.ticketCount + 1;
			const { subTotal, gst, total } = calculateTotalWithGST(
				newTicketCount,
				prevPrice.pricePerTicket
			);
			return {
				...prevPrice,
				ticketCount: newTicketCount,
				subTotal,
				gst,
				total,
			};
		});
	};

	const handleDecrease = () => {
		setPrice((prevPrice) => {
			const newTicketCount =
				prevPrice.ticketCount > 1 ? prevPrice.ticketCount - 1 : 1;
			const { subTotal, gst, total } = calculateTotalWithGST(
				newTicketCount,
				prevPrice.pricePerTicket
			);
			return {
				...prevPrice,
				ticketCount: newTicketCount,
				subTotal,
				gst,
				total,
			};
		});
	};

	const formatDate = (dateString) => {
		const date = new Date(dateString);

		const options = {
			weekday: "short",
			day: "2-digit",
			month: "long",
			year: "numeric",
		};

		return new Intl.DateTimeFormat("en-GB", options).format(date);
	};
	const formatTime = (timeString) => {
		const [hour, minute] = timeString.split(":").map(Number);
		const period = hour >= 12 ? "PM" : "AM";
		const formattedHour = hour % 12 || 12; // Convert hour to 12-hour format, handling midnight and noon
		return `${formattedHour}:${minute.toString().padStart(2, "0")} ${period}`;
	};
	const navigate = useNavigate();
	useEffect(() => {
		const initialPrice = data?.details?.price || 0;
		setPrice({
			ticketCount: 1,
			pricePerTicket: initialPrice,
			subTotal: initialPrice,
			gst: initialPrice * 0.18, // 18% of the initial subTotal
			total: initialPrice + initialPrice * 0.18,
		});
	}, [data]);
	useEffect(() => {
		setCost(price)
	},[price])
	return (
		<div className="font-poppins px-4 flex flex-col justify-between h-full md:w-5/12 md:mt-8">
			<div>
				<h1 className="text-xl font-bold pb-1 border-b-2 border-gray-400 w-max">
					Booking Summary
				</h1>
				<div className="flex justify-between items-center my-4 md:my-3">
					<div className="space-y-1">
						<h1 className="text-lg font-bold">{data?.title}</h1>
						<div className="flex items-center gap-4">
							<span className="text-gray-500">{price.ticketCount} Ticket </span>
							<div className="flex items-center ">
								<button
									type="button"
									onClick={handleDecrease}
									className="text-white bg-navyBlue-normal text-base h-6 w-6 rounded-full flex items-center justify-center">
									<FaMinus />
								</button>
								<span className="text-xl text w-8 text-center">
									{price.ticketCount}
								</span>
								<button
									type="button"
									onClick={handleIncrease}
									className="text-white bg-navyBlue-normal text-base h-6 w-6 rounded-full flex items-center justify-center">
									<FaPlus />
								</button>
							</div>
						</div>
					</div>
					<span className="text-lg font-bold">₹ {data?.details?.price} </span>
				</div>

				<hr />
				<div className="flex flex-col mt-5">
					<span>{formatDate(data?.details?.schedule?.date || "2024/12/12")}</span>
					<span>{formatTime(data?.details?.schedule?.time || "00:00")}</span>
				</div>
				<div className="flex flex-col my-5 md:my-3">
					<span>Venue</span>
					<span>{data?.details?.location?.venue}</span>
				</div>
				<hr />
				<div className="flex flex-col my-5 gap-2 md:my-3">
					<div className="flex justify-between items-center">
						<span>Sub Total</span>
						<span>₹ {price.subTotal}</span>
					</div>
					<div className="flex justify-between items-center">
						<span>GST (18%)</span>
						<span>₹ {price?.gst}</span>
					</div>
					<div className="flex justify-between items-center">
						<span>convenience Fee</span>
						<span>₹ 30</span>
					</div>
				</div>
				<hr />
				<div className="flex justify-between items-center my-5 font-bold text-lg md:my-3">
					<span>Total Amount</span>
					<span>₹ {price.total + 30}</span>
				</div>
			</div>

			<button
				onClick={() => navigate("/eventBookingStatus")}
				className=" bg-navyBlue-normal rounded-md p-2 text-white mb-5">
				Pay Now
			</button>
		</div>
	);
};

export default EventBookingSummary;
