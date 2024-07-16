import React from "react";
import { IoMdSearch } from "react-icons/io";

const TableControllBar = ({setShowAdd}) => {
	return (
		<div className="searchandsort flex justify-between w-full">
			<div className="flex space-x-7">
				<div className="flex space-x-7">
					<form
						action=""
						method="post"
						id="CategorySortForm"
						className="flex space-x-1">
						<div className="flex items-center space-x-1">
							<label className="text-base text-[#333333]" htmlFor="">
								sort
							</label>
							<select
								name=""
								id="sortSelect"
								className="rounded-md px-2 py-2.5 text-xs text-[#666666] outline outline-[.1px] outline-gray-400">
								<option value="CategoryName">Category name</option>
								<option value="ProductCount">Product count</option>
							</select>
						</div>
						<div className="flex items-center space-x-1">
							<label className="text-base text-[#333333]" htmlFor="sortHow">
								by
							</label>
							<select
								name="sortValue"
								id="sortHow"
								className="outline  outline-[.1px] outline-gray-400 rounded-md px-2 py-2.5 text-xs text-[#666666]"></select>
						</div>
					</form>
					<form action="" method="post" id="filterForm">
						<select
							name="categoryFilter"
							id="categoryFilter"
							className="outline outline-[.1px] outline-gray-400 rounded-md px-2 py-2.5 text-xs text-[#666666]">
							<option value="filterBy">Filter by</option>
							<option value="All">All</option>
							<option value="Active">Active</option>
							<option value="Blocked">Blocked</option>
						</select>
					</form>
				</div>

				<form action="/admin/category/search" method="post">
					<div className="flex items-center rounded-md bg-white text-[#666666] outline outline-[.1px] outline-gray-400">
						<input
							type="text"
							className="outline-none h-full py-2.5 px-6 rounded-md pl-3 text-xs w-80 placeholder:text-xs"
							name="categorySearch"
							placeholder="Search by Category name.."
						/>
						<button
							type="submit"
							className="bg-orange-normal px-2 py-1.5 rounded-md h-full cursor-pointer z-0">
							<IoMdSearch className="text-white text-2xl" />
						</button>
					</div>
				</form>
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
