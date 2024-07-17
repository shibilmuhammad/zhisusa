import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const TableControllBar = ({
	setShowAdd,
	setList,
	sortValues,
	filterValues,
	searchValues,
	dataList,
}) => {
	const [searchFormData, setSearchFormData] = useState({
		input: "",
		type: searchValues[0].value,
	});
	const [filterData, setFilterData] = useState(filterValues[0]);
	const searchFormHandler = (e) => {
		e.preventDefault();

		const list = [...dataList].filter((item) =>
			item[searchFormData.type]
				.toLowerCase()
				.includes(searchFormData.input.toLowerCase())
		);
		setList(list);
	};
	const searchChangeHandler = (e) => {
		const { name, value } = e.target;
		setSearchFormData({
			...searchFormData,
			[name]: value,
		});
	};
	const filterHandler = (e) => {
		setFilterData(e.target.value);
		if (e.target.value === "All") {
			setList(dataList);
		} else {
			const filteredList = [...dataList].filter(
				(item) => item.status === e.target.value
			);
			setList(filteredList);
		}
	};
	return (
		<div className="searchandsort flex justify-between w-full">
			<div className="flex space-x-7">
				<div className="flex space-x-7">
					{/* filter */}
					<div>
						<label className="text-base text-[#333333] mr-2" htmlFor="sortHow">
							Filter by
						</label>
						<select
							name="categoryFilter"
							value={filterData}
							onChange={filterHandler}
							className="outline outline-[.1px] outline-gray-400 rounded-md px-2 py-2.5 text-xs text-[#666666]">
							{filterValues.map((item) => (
								<option value={item}>{item}</option>
							))}
						</select>
					</div>
				</div>
				{/* search */}
				<div>
					<form
						onSubmit={searchFormHandler}
						className="flex items-center rounded-md bg-white text-[#666666] outline outline-[.1px] outline-gray-400 ">
						<div className="bg-gray-100 h-fit">
							<select
								name="type"
								id=""
								value={searchFormData.type}
								onChange={searchChangeHandler}
								className="text-sm bg-transparent h-10 px-3">
								{searchValues.map((item, index) => (
									<option value={item.value} className="">
										{item.text}
									</option>
								))}
							</select>
						</div>
						<input
							value={searchFormData.input}
							onChange={searchChangeHandler}
							type="text"
							className="outline-none h-full py-2.5 px-6 rounded-md pl-3 text-xs w-80 placeholder:text-xs"
							name="input"
							placeholder="Search here.."
						/>
						<button
							type="submit"
							className="bg-orange-normal px-2 py-1.5 rounded-md h-full cursor-pointer z-0">
							<IoMdSearch className="text-white text-2xl" />
						</button>
					</form>
				</div>
			</div>
			<div
				class="relative flex justify-end  cursor-pointer"
				onClick={() => setShowAdd(true)}>
				<img class="h-6 ml-64" src="../images/uploadIcon.png" alt="" />
				<h2 class="text-white absolute top-1 right-4 text-xs font-semibold ">
					Upload
				</h2>
			</div>
		</div>
	);
};

export default TableControllBar;
