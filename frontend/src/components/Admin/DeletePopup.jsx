import axios from "axios";
import React, { useState } from "react";
import { TiWarningOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
const DeletePopup = ({ type, setShowDelete, rowID, dataList }) => {
	const navigate = useNavigate();
	const [error,setError] = useState("")
	const handleSubmit = async (e) => {
		try {
			const response = await axios.post(
				`/api/admin/deleteCategory`,
				{ id: dataList[rowID]?._id,main: dataList[rowID]?.main_category,title : dataList[rowID]?.title}
			);
			setShowDelete(false);
		} catch (error) {
			if (error.response.status === 401 ) {
				setError('Unauthorized');
				navigate('/admin/login')
			} else {
				setError('Server error: ' + error.response.status);
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
					<div class="w-full mt-4">
						<div class="flex flex-col lg:flex-row gap-3">
							<button
								onClick={handleSubmit}
								class="w-full bg-red-600 text-white font-medium p-2 rounded-sm">
								Delete {type}
							</button>
							<div
								onClick={() => setShowDelete(false)}
								type="button"
								class="w-full border cursor-pointer text-black font-medium p-2 rounded-sm ">
								Cancel
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeletePopup;
