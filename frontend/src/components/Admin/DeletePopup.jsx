import axios from "axios";
import React, { useState } from "react";
import { TiWarningOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
const DeletePopup = ({ type, setShowDelete, rowID, dataList,setLoadData,loadData }) => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [progress, setProgress] = useState(false);
	const handleSubmit = async (e) => {
		setProgress(true)
		try {
			const endpoint = type === 'activity' ? 'deleteActivity' : 'deleteCategory'
			const response = await axios.post(`/api/admin/${endpoint}`, {
				id: dataList[rowID]?._id,
				main: type === 'activity' ? dataList[rowID]?.mainCategory : dataList[rowID]?.main_category || null,
				title: dataList[rowID]?.title || null,
			});
			setProgress(false)
			setLoadData(!loadData)
			setShowDelete(false);

		} catch (error) {
			setProgress(false)
			if (error.response.status === 401) {
				setError("Unauthorized");
				navigate("/admin/login");
			} else {
				setError("Server error: " + error.response.status);
			}
		}
	};
	return (
		<div
			class="fixed inset-0 flex font-poppins justify-center items-center bg-[rgba(0,0,0,0.3)] z-10"
			id="productDelete">
			<div class=" bg-white rounded-lg w-fit  py-3 px-5  text-sm ">
				<div class="flex flex-col items-center justify-center space-y-2">
					<div class=" flex items-center justify-center px-2 py-2 bg-[#FEE2E1] rounded-full w-14 h-14">
						<TiWarningOutline className="text-3xl text-red-500" />
					</div>
					<div>
						<h2 class="font-semibold text-lg">Are you sure??</h2>
					</div>
					<div class="max-w-xs text-center text-[#666666]">
						<p>
							This action cannot be undone. This {type}
							&nbsp;will be permanently removed
						</p>
					</div>
					<div class="w-full pt-4">
						<div class="flex flex-col lg:flex-row gap-3">
							<button
								type={`${progress ? "button" : "submit"}`}
								onClick={handleSubmit}
								class="w-full bg-red-600 text-white font-medium p-2 rounded-sm flex items-center justify-center">
								{!progress ? <span>Delete {type}</span> : (
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
									Updating
								</div>
								)}
							</button>
							<button
								onClick={() => setShowDelete(false)}
								type="button"
								
								class="w-full border border-gray-400 cursor-pointer text-black font-medium p-2 rounded-sm  flex items-center justify-center">
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeletePopup;
