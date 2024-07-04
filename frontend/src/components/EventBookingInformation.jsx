import React, { useState } from "react";

const EventBookingInformation = ({ setFilled }) => {
	const methods = ["Card", "Net Banking", "UPI"];
	const [selectedOption, setSelectedOption] = useState(null);
	const changeMethod = (e) => {
		setSelectedOption(e)
	}
	return (
		<div className="font-poppins p-4 relative h-[80vh] md:w-7/12 md:mt-4">
			<h1 className="text-xl font-bold pb-1 border-b-2 border-gray-400 w-max">
				Contact Information
			</h1>
			<form
				className="space-y-3 mt-4 flex flex-col justify-between h-full"
				action="">
				<div className="">
					<div className="flex flex-col gap-3">
						<label htmlFor="name">Full Name</label>
						<input
							className="border-2 rounded-md p-2 placeholder:text-sm"
							type="text"
							placeholder="Enter Your Full Name .."
						/>
					</div>
					<div className="flex flex-col gap-3 mt-3">
						<label htmlFor="name">Email ID</label>
						<input
							className="border-2 rounded-md p-2 placeholder:text-sm"
							type="email"
							placeholder="Enter Your Email ID .."
						/>
					</div>
					<div className="flex flex-col gap-3 mt-3">
						<label htmlFor="name">Phone Number</label>
						<input
							className="border-2 rounded-md p-2 placeholder:text-sm"
							type="email"
							placeholder="Enter Your Phone Number .."
						/>
					</div>
					<h1 className="text-xl mt-5 font-bold pb-1 border-b-2 border-gray-400 w-max">
						Payment Method
					</h1>
					<div className="flex gap-5 mt-3">
						{methods.map((item,index) => (
							<div className="font-poppins flex items-center gap-2 ">
								<input onChange={(e)=>changeMethod(e.target.value)} type="radio" name="dynamic-radio" id={`radion-${index}`} value={item} checked={selectedOption===item} />
								<span className="">{item}</span>
							</div>
						))}
					</div>
				</div>

				<button
					onClick={() => setFilled(true)}
					className="md:hidden bg-navyBlue-normal rounded-md p-2 text-white">
					Continue
				</button>
			</form>
		</div>
	);
};

export default EventBookingInformation;
