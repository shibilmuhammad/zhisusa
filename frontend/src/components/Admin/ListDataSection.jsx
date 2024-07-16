import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import DeletePopup from "./DeletePopup";
import CategoriesEditPopup from "./CategoriesEditPopup";
import CategoriesAddPopup from "./CategoriesAddPopup";
import TableControllBar from "./TableControllBar";

const ListDataSection = ({
	dataList,
	setShowDelete,
	setShowEdit,
	tableHeaders,
	tableValues,
	setRowID
}) => {
	const openDelete = (id) => {
		setRowID(id)
		setShowDelete(true);
	};
	const openEdit = (id) => {
		setRowID(id)
		setShowEdit(true);
	};
	return (
		<div className="right w-full">
			<table className="w-full mt-2">
				<thead>
					<tr className="bg-PrimaryBlue-normal text-white text-left font-medium">
						{tableHeaders.map((item, index) => (
							<th
								className={`${
									index === 0
										? "rounded-tl-md"
										: index + 1 === tableHeaders.length
										? "rounded-tr-md"
										: "rounded-none"
								} font-medium ps-3  py-2 text-left`}>
								{item}
							</th>
						))}
					</tr>
				</thead>
				<tbody id="table-container ">
					{dataList?.map((item,index) => (
						<tr className="bg-white text-base">
							{tableValues.map((key) => <td className="text-left pl-4 py-2">{item?.[key]}</td>)}
							
							<td className="flex justify-center items-center mt-1 py-2 -translate-x-4">
								<div className={`${item?.status === 'Active' ? 'bg-[#DBFCDF] text-[#189E34]' :'bg-red-50 text-red-500'} font-poppins font-bold py-1 w-2/3 px-2  rounded-full text-center`}>
									{item?.status}
								</div>
							</td>
							<td className="py-2 pl-4">
								<div className="flex space-x-4">
									<MdEdit
										onClick={() => openEdit(index)}
										className="text-PrimaryBlue-normal text-lg cursor-pointer"
									/>
									<MdDelete
										onClick={() => openDelete(index)}
										className="text-red-600 text-lg cursor-pointer"
									/>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ListDataSection;
