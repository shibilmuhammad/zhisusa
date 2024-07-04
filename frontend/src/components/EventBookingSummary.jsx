import React from "react";
import { MdAddCircle } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

const EventBookingSummary = () => {
    const navigate = useNavigate()
	return (
		<div className="font-poppins px-4 flex flex-col justify-between h-full md:w-5/12 md:mt-8">
			<div>
				<h1 className="text-xl font-bold pb-1 border-b-2 border-gray-400 w-max">
					Booking Summary
				</h1>
				<div className="flex justify-between items-center my-4 md:my-3">
					<div className="space-y-1">
						<h1 className="text-lg font-bold">Music Fest by Anirudh</h1>
						<div className="flex items-center gap-4">
							<span className="text-gray-500">1 Ticket </span>
							<button className="text-2xl text-navyBlue-normal">
								<MdAddCircle />
							</button>
						</div>
					</div>
					<span className="text-lg font-bold">₹ 1000 </span>
				</div>

				<hr />
				<div className="flex flex-col mt-5">
					<span>Fri,05 July 2024</span>
					<span>8.30 PM</span>
				</div>
				<div className="flex flex-col my-5 md:my-3">
					<span>Venue</span>
					<span>Alampara, Chennai</span>
				</div>
				<hr />
				<div className="flex flex-col my-5 gap-2 md:my-3">
					<div className="flex justify-between items-center">
						<span>Sub Total</span>
						<span>₹ 1000</span>
					</div>
					<div className="flex justify-between items-center">
						<span>GST (18%)</span>
						<span>₹ 180</span>
					</div>
					<div className="flex justify-between items-center">
						<span>convenience Fee</span>
						<span>₹ 50</span>
					</div>
				</div>
				<hr />
				<div className="flex justify-between items-center my-5 font-bold text-lg md:my-3">
					<span>Total Amount</span>
					<span>₹ 1230</span>
				</div>
			</div>

			<button onClick={()=> navigate('/eventBookingStatus')} className=" bg-navyBlue-normal rounded-md p-2 text-white mb-5">
				Pay Now
			</button>
		</div>
	);
};

export default EventBookingSummary;
