
import React, { useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RoomsAddPoupup = ({ setShowAdd }) => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [progress, setProgress] = useState(false);
	const [formData, setFormData] = useState({
		title: "",
		status: "Active",
		main: "Select",
	});
	const [errMsg, setErrMsg] = useState({
		title: false,
		main: false,
		server: false,
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			setProgress(true);
			try {
				const response = await axios.post("/api/admin/addCategory", formData);
				setProgress(false);
				setShowAdd(false);
			} catch (error) {
				setProgress(false);
				if (error.response.status === 401) {
					setError("Unauthorized");
					navigate("/admin/login");
				} else {
					setError("Server error: " + error.response.status);
				}
			}
		}
	};

	const validateForm = () => {
		setErrMsg({ ...errMsg, title: false, main: false });
		if (!formData.title) {
			setErrMsg({ ...errMsg, title: true });
			return false;
		} else if (formData.main === "Select") {
			setErrMsg({ ...errMsg, main: true });
			return false;
		}
		return true;
	};
	return (
		<div
			class="font-poppins fixed inset-0 flex justify-center z-[999] items-center bg-[rgba(0,0,0,0.3)]"
			id="categoryEditPopup">
			<form
				onSubmit={handleSubmit}
				class=" bg-white rounded-lg w-4/12  py-8 px-5 relative space-y-3 text-sm pr-8 pt-10">
				<div class="w-full flex justify-between items-center">
					<label className="w-4/12" for="">
						Title
					</label>
					<div className="w-8/12">
						<input
							onChange={handleChange}
							type="text"
							name="title"
							value={formData.title}
							class="px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
						/>
						{errMsg.title && (
							<span class=" text-[10px] text-red-600 space-y-0">
								category can't be empty !
							</span>
						)}
						
					</div>
				</div>
				<div class=" flex w-full items-center justify-between">
					<label className="w-4/8" for="">
						Main Category
					</label>
					<div className="w-8/12">
						<select
							class="border-gray-400 border-[.1px] w-full rounded-lg text-left text-xs px-2 text-gray-500 p-2"
							name="main"
							onChange={handleChange}
							value={formData.main}>
							<option value="Select" selected disabled>
								Select
							</option>
							<option value="Live">Live</option>
							<option value="Work">Work</option>
							<option value="Liesure">Liesure</option>
						</select>
						{errMsg.main && (
							<span class=" text-[10px] text-red-600 space-y-0">
								Select a main category from list !
							</span>
						)}
					</div>
				</div>

				<div class=" flex w-full items-center justify-between">
					<label className="w-4/12" for="">
						Status
					</label>
					<div className="w-8/12">
						<select
							class="border-gray-400 border-[.1px] w-full  rounded-lg text-left text-xs px-2 text-gray-500 p-2"
							name="status"
							onChange={handleChange}
							value={formData.status}>
							<option value="Active" selected>
								Active
							</option>
							<option value="Disable">Disable</option>
						</select>
					</div>
				</div>

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
					class="absolute -top-2 cursor-pointer right-2 text-3xl"
					onClick={() => setShowAdd(false)}>
					<IoIosCloseCircle />
				</button>
			</form>
		</div>
	);
};

export default RoomsAddPoupup;