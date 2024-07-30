import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const EventBookingInformation = ({ setFilled }) => {
	const navigate = useNavigate();
	const methods = ["Card", "Net Banking", "UPI"];
	const [selectedOption, setSelectedOption] = useState("Card");
	const changeMethod = (e) => {
		setSelectedOption(e);
	};
	const [errMsg, setErrMsg] = useState({ server: false });
	const formData = useRef({
		fullName: null,
		email: null,
		phone: null,
	});
	const [error, setError] = useState({
		fullName: null,
		email: null,
		phone: null,
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { data } = await axios.post("/api/createOrder", { test: "f" });
		const options = {
			key: process.env.REACT_APP_API_KEY, // Enter the Key ID generated from the Dashboard
			amount: data.amount,
			currency: data.currency,
			name: "Zhisusa",
			description: "Test Transaction",
			order_id: data.id,
			handler: async (response) => {
				const paymentId = response.razorpay_payment_id;
				const orderId = response.razorpay_order_id;
				const signature = response.razorpay_signature;

				//   Verify the payment in your backend
				const finalFormData = {};
				for (let key in formData.current) {
					finalFormData[key] = formData.current[key]?.value;
				}
				finalFormData["id"] = "66a72bcd7b63ebdb3c8724c6";

				if (validateForm()) {
					try {
						const response = await axios.post(
							"/api/bookZhisusaEvent",
							finalFormData
						);
					} catch (error) {
						if (error.response.status === 401) {
							setError("Unauthorized");
							navigate("/admin/login");
						} else {
							setErrMsg((errMsg) => ({ ...errMsg, server: true }));
							setError("Server error: " + error.response.status);
						}
					}
				}
				const { data } = await axios.post("/api/payment/verify", {
					paymentId,
					orderId,
					signature,
					finalFormData,
				});

				console.log(data);
			},
			prefill: {
				name: "Rafeeq",
				email: "email@example.com",
				contact: "9567983967",
			},
			notes: {
				address: "Corporate Office",
			},
			theme: {
				color: "#F37254",
			},
		};

		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const validateForm = () => {
		const newErrorState = { ...error };
		for (const key in newErrorState) {
			newErrorState[key] = false;
		}
		let isValid = true;
		for (const key in formData.current) {
			if (
				formData.current.hasOwnProperty(key) &&
				formData.current[key] !== null
			) {
				if (formData.current[key].value.trim() === "") {
					newErrorState[key] = true;
					isValid = false;
					setError(newErrorState);
					formData.current[key].focus();
					formData.current[key].style.outlineColor = "red";
					return false; // Prevent form submission
				}
			}
		}
		setError(newErrorState);

		return isValid;
	};

	return (
		<div className="font-poppins p-4 relative h-[80vh] md:w-7/12 md:mt-4">
			<h1 className="text-xl font-bold pb-1 border-b-2 border-gray-400 w-max">
				Contact Information
			</h1>
			<form
				className="space-y-3 mt-4 flex flex-col justify-between h-full"
				onSubmit={handleSubmit}>
				<div className="">
					<div className="flex flex-col gap-3">
						<label htmlFor="name">Full Name</label>
						<input
							ref={(el) => (formData.current.fullName = el)}
							className="border-2 rounded-md p-2 placeholder:text-sm"
							type="text"
							placeholder="Enter Your Full Name .."
						/>
						{error.fullName && (
							<span class=" text-[10px] text-red-600 space-y-0">
								full name can't be empty !
							</span>
						)}
					</div>
					<div className="flex flex-col gap-3 mt-3">
						<label htmlFor="name">Email ID</label>
						<input
							ref={(el) => (formData.current.email = el)}
							className="border-2 rounded-md p-2 placeholder:text-sm"
							type="email"
							placeholder="Enter Your Email ID .."
						/>
						{error.email && (
							<span class=" text-[10px] text-red-600 space-y-0">
								email can't be empty !
							</span>
						)}
					</div>
					<div className="flex flex-col gap-3 mt-3">
						<label htmlFor="name">Phone Number</label>
						<input
							ref={(el) => (formData.current.phone = el)}
							className="border-2 rounded-md p-2 placeholder:text-sm"
							type="phone"
							placeholder="Enter Your Phone Number .."
						/>
						{error.phone && (
							<span class=" text-[10px] text-red-600 space-y-0">
								phone can't be empty !
							</span>
						)}
					</div>
					<h1 className="text-xl mt-5 font-bold pb-1 border-b-2 border-gray-400 w-max">
						Payment Method
					</h1>
					<div className="flex gap-5 mt-3">
						{methods.map((item, index) => (
							<div className="font-poppins flex items-center gap-2 ">
								<input
									onChange={(e) => changeMethod(e.target.value)}
									type="radio"
									name="dynamic-radio"
									id={`radion-${index}`}
									value={item}
									checked={selectedOption === item}
								/>
								<span className="">{item}</span>
							</div>
						))}
					</div>
				</div>

				<button className="md:hidden bg-navyBlue-normal rounded-md p-2 text-white">
					Continue
				</button>
			</form>
		</div>
	);
};

export default EventBookingInformation;
