import React, { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ImageCard from "./ImageCard";
const ZhisusaEventsAddPopup = ({ setShowAdd, setLoadData, loadData }) => {
	const navigate = useNavigate();
	const [error, setError] = useState({
		title: false,
		capacity: false,
		description: false,
		location: false,
		proximity: false,
		images: false,
        price : false,
        terms: null,
		time: null,
		date: null,

	});
	const [progress, setProgress] = useState(false);
	const formRefs = useRef({
		title: null,
		capacity: null,
		description: null,
		location: null,
		proximity: null,
		price: null,
		status: "Available",
		ageGroup: null,
		terms: null,
        language : 'Tamil',
        map : null,
        type : 'Music',
		time: '10:00',
		date: new Date().toISOString().slice(0,10),
	});
	const [formData, setFormData] = useState({
		packages: [],
		images: [],
		finalImages: [],
	});


	const handleImageUpload = (e) => {
		const files = Array.from(e.target.files);
		const newImages = files.map((file) => URL.createObjectURL(file));
		setFormData((prevState) => ({
			...prevState,
			images: [...prevState.images, ...newImages],
		}));
		setFormData((prevState) => ({
			...prevState,
			finalImages: [...prevState.finalImages, ...files],
		}));
	};
	const removeImage = (index) => {
		setFormData((prevState) => ({
			...prevState,
			images: prevState.images.filter((_, i) => i !== index),
		}));
		setFormData((prevState) => ({
			...prevState,
			finalImages: prevState.finalImages.filter((_, i) => i !== index),
		}));
	};
	const [errMsg, setErrMsg] = useState({
		title: false,
		main: false,
		server: false,
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		formRefs.current[name] = value;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const finalFormData = new FormData();
		for (let i = 0; i < formData.finalImages.length; i++) {
			finalFormData.append("images", formData.finalImages[i]);
		}
		for (let key in formRefs.current) {
			finalFormData.append(key, formRefs.current[key]);
		}
		if (validateForm()) {
			setProgress(true);
			try {
				const response = await axios.post(
					"/api/admin/addZhisusaEvent",
					finalFormData
				);
				setProgress(false);
				setLoadData(!loadData);
				setShowAdd(false);
			} catch (error) {
				setProgress(false);
				if (error.response.status === 401) {
					setError("Unauthorized");
					navigate("/admin/login");
				} else {
					setErrMsg((errMsg) => ({ ...errMsg, server: true }));
					setError("Server error: " + error.response.status);
				}
			}
		}
	};

	const validateForm = () => {
		const newErrorState = { ...error };
		let isValid = true;

		Object.keys(formRefs.current).forEach((key) => {
			console.log(formRefs.current);
			if (!formRefs.current[key]) {
				newErrorState[key] = true;
				isValid = false;
				setError(newErrorState);
				return false;
			} else {
				newErrorState[key] = false;
			}
		});

		if (formData.images.length < 1) {
			
			setError(prevError => ({ ...prevError, images: true }));
			isValid = false;
			return false;
		}else{
			setError(prevError => ({ ...prevError, images: false }));
			isValid = true;
		}

		setError(newErrorState);

		return isValid;
	};

	return (
		<div
			class="font-poppins fixed inset-0 flex justify-center z-[999] items-center bg-[rgba(0,0,0,0.3)]"
			>
			<form
				onSubmit={handleSubmit}
				encType="multipart/form-data"
				class="relative w-5/12 h-[80vh] ">
				<div className="bg-white rounded-lg w-full  py-8 px-5  space-y-3 text-sm pr-8 pt-10 overflow-auto h-full">
					{/* title & type */}
					<div className="flex gap-5">
						<div class="w-full space-y-1">
							<label className="" htmlFor="">
								Title
							</label>
							<div className="">
								<input
									onChange={handleChange}
									type="text"
									name="title"
									class="px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
								/>
								{error.title && (
									<span class=" text-[10px] text-red-600 space-y-0">
										title can't be empty !
									</span>
								)}
							</div>
						</div>
						<div class="w-full space-y-1">
							<label className="" for="">
								Type
							</label>
							<div className="">
								<select
									class="border-gray-400 border-[.1px] w-full rounded-lg text-left text-xs px-2 text-gray-500 p-2"
									name="type"
									defaultValue={"Music"}>
									<option value="Music">Music</option>
                                    <option value="Art Shows">Art Shows</option>
								</select>
							</div>
						</div>
					</div>
					{/* capacity & price ,status */}
					<div className="flex gap-5">
						<div class="w-full space-y-1">
							<label className="" for="">
								Capacity
							</label>
							<div className="">
								<input
									onChange={handleChange}
									type="number"
									name="capacity"
									class="px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
								/>
								{error.capacity && (
									<span class=" text-[10px] text-red-600 space-y-0">
										capacity can't be empty !
									</span>
								)}
							</div>
						</div>
                        <div class="w-full space-y-1">
							<label className="" for="">
								Price
							</label>
							<div className="flex border-gray-400 border-[.1px] w-full rounded-lg">
                                <div className="bg-gray-100 rounded-l-lg p-2 px-6 flex items-center justify-end">
                                    <span className="px-2">₹</span>
								</div>
								
								<input
									onChange={handleChange}
									type="number"
									name="price"
									class="px-2 p-2 rounded-lg outline-none"
								/>
								{error.price && (
									<span class=" text-[10px] text-red-600 space-y-0">
										price can't be empty !
									</span>
								)}
							</div>
						</div>
						<div class="w-full space-y-1">
							<label className="" for="">
								Status
							</label>
							<div className="">
								<select
									class="border-gray-400 border-[.1px] w-full  rounded-lg text-left text-xs px-2 text-gray-500 p-2"
									name="status"
									onChange={handleChange}
									defaultValue={"Available"}>
									<option value="Available" selected>
										Available
									</option>
									<option value="Not Available">Not Available</option>
								</select>
							</div>
						</div>
					</div>
					{/* language & time */}
					<div className="flex gap-5">
						<div class="w-full space-y-1">
							<label className="" for="">
								Language
							</label>
							<div className="">
								<select
									class="border-gray-400 border-[.1px] w-full  rounded-lg text-left text-xs px-2 text-gray-500 p-2"
									name="language"
									onChange={handleChange}
									defaultValue={"Tamil"}>
									<option value="Tamil">
										Tamil
									</option>
									<option value="English">English</option>
								</select>
							</div>
						</div>
						<div class="w-full space-y-1">
							<label className="" for="">
								Date & Time
							</label>
							<div className=" flex gap-3 border-gray-400 border-[.1px] w-full  rounded-lg px-1.5">
								<div className="py-1.5">
									<input
										type="date"
										name="date"
										id=""
										defaultValue={new Date().toISOString().slice(0,10)}
										onChange={handleChange}
									/>
								</div>
								<div className="px-1 bg-gray-100 flex justify-center items-center">
									
								</div>

								<div className="py-1.5">
									<input
										type="time"
										name="time"
										id=""
										defaultValue={"10:00"}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>
					</div>
					{/* description */}
					<div class="w-full space-y-1">
						<label className="" for="">
							Description
						</label>
						<div className="">
							<textarea
								onChange={handleChange}
								type="text"
								name="description"
								class="min-h-28 px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
							/>
							{error.description && (
								<span class=" text-[10px] text-red-600 space-y-0">
									description can't be empty !
								</span>
							)}
						</div>
					</div>
					{/* location & proximity */}
					<div className="flex gap-5">
						<div class="w-full space-y-1">
							<label className="" for="">
								Location
							</label>
							<div className="">
								<input
									onChange={handleChange}
									type="text"
									name="location"
									class="px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
								/>
								{error.location && (
									<span class=" text-[10px] text-red-600 space-y-0">
										location can't be empty !
									</span>
								)}
							</div>
						</div>
						<div class="w-full space-y-1">
							<label className="" for="">
								Proximity
							</label>
							<div className="">
								<input
									onChange={handleChange}
									type="text"
									name="proximity"
									class="px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
								/>
								{error.proximity && (
									<span class=" text-[10px] text-red-600 space-y-0">
										proximity can't be empty !
									</span>
								)}
							</div>
						</div>
					</div>
                    {/* age group & map */}
					<div className="flex gap-5">
						<div class="w-full space-y-1">
							<label className="" for="">
								Age Group (Minimum)
							</label>
							<div className="">
								<input
									onChange={handleChange}
									type="number"
									name="ageGroup"
									class="px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
								/>
							</div>
						</div>
						<div class="w-full space-y-1">
							<label className="" for="">
								Map Link
							</label>
							<div className="">
								<input
									onChange={handleChange}
									type="text"
									name="map"
									class="px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
								/>
							</div>
						</div>
					</div>
                    {/* terms & conditions */}
					<div class="w-full space-y-1">
						<label className="" for="">
							Terms and Conditions
						</label>
						<div className="">
							<textarea
								onChange={handleChange}
								type="text"
								name="terms"
								class="min-h-28 px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
							/>
							{error.terms && (
								<span class=" text-[10px] text-red-600 space-y-0">
									terms and conditions can't be empty !
								</span>
							)}
						</div>
					</div>
					{/* images */}
					<div className="flex gap-5 w-full">
						<label className="w-4/12" for="">
							Images
						</label>
						<div className="w-8/12">
							<div className="grid grid-cols-3 gap-2 mt-2 ">
								<div className="flex items-center justify-center w-full">
									<label
										for="dropzone-file"
										className="flex px-8 flex-col items-center justify-center w-full p-2 h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 ">
										<div className="flex flex-col items-center justify-center pt-5 pb-6">
											<i className="bi bi-cloud-arrow-up text-3xl text-gray-500"></i>
											<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
												<span className="font-semibold">Upload</span>
											</p>
										</div>
										<input
											id="dropzone-file"
											type="file"
											multiple
											name="images"
											className="hidden"
											accept="image/*"
											onChange={handleImageUpload}
										/>
									</label>
								</div>
								{formData?.images?.map((item, index) => (
									<ImageCard
										removeImage={removeImage}
										img={item}
										index={index}
										key={index}
									/>
								))}
							</div>
							{error.images && (
								<span class=" text-[10px] text-red-600 space-y-0">
									please pick atleast one image !
								</span>
							)}
						</div>
					</div>

					{errMsg.server && (
						<span class=" text-[10px] text-red-600 space-y-0">
							Unexpected Error Occured ! Please Try again.
						</span>
					)}

					<div class="w-full flex justify-end">
						<button
							type={`${progress ? "button" : "submit"}`}
							class="bg-[#DAA520] text-white rounded-full p-2 text-base font-normal flex justify-center items-center mt-5 w-44">
							{!progress ? (
								<span id="saveSpanEdit">Save</span>
							) : (
								<div
									class="flex items-center justify-center font-normal"
									id="loadingEdit">
									<svg
										aria-hidden="true"
										role="status"
										class="inline w-4  h-4 me-3 text-white animate-spin"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="#E5E7EB"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentColor"
										/>
									</svg>
									Uploading
								</div>
							)}
						</button>
					</div>
					<button
						class="absolute -top-2 cursor-pointer right-5 text-3xl"
						onClick={() => setShowAdd(false)}>
						<IoIosCloseCircle />
					</button>
				</div>
			</form>
		</div>
	);
};

export default ZhisusaEventsAddPopup;
