import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";


const ListDataSection = ({dataList,setShowDelete,setShowEdit,tableHeaders,tableValues,setRowID,newList,setList,setTableHeaders}) => {
	console.log('datalist is ',dataList);
	const openDelete = (id) => {
		setRowID(id);
		setShowDelete(true);
	};
	const openEdit = (id) => {
		setRowID(id);
		setShowEdit(true);
	};
	//to get nested object values
	const getNestedValue = (obj, path) => {
		return path.split('.').reduce((acc, part) => acc && acc[part], obj);
	  };
	const [idSort, setIdSort] = useState(true);
	const sortHandler = async (value, type, order,asc,index) => {
		if (value === "id") {
			const sortedList = newList.reverse();
			setList(sortedList);
			setIdSort(!idSort);
		} else {
			const updatedList = [...tableHeaders];
			updatedList[index] = { ...updatedList[index], ...{asc:!asc}} ;
			setTableHeaders(updatedList);
			

			if (type === "number") {
				if (order === "asc") {
					const sortedList = [...newList].sort((a, b) => a[value] - b[value]);
					setList(sortedList);
				} else {
					const sortedList = [...newList].sort((a, b) => b[value] - a[value]);
					setList(sortedList);
				}
			} else {
				if (order === "asc") {
					const sortedList = [...newList].sort((a, b) => (b[value] > a[value]) ? -1 :  ((b[value] > a[value]) ? 1 : 0));

					setList(sortedList);
				} else {
					const sortedList = [...newList].sort((a, b) => (b[value] > a[value]) ? 1 :  ((b[value] > a[value]) ? -1 : 0));
					setList(sortedList);
				}
			}
		}
	
	}
	useEffect(() => {

	},[tableHeaders])
	return (
		<div className="right w-full">
			<table className="w-full mt-2">
				<thead className="">
					<tr className="bg-PrimaryBlue-normal  text-white text-left font-medium rounded-tl-md">
						<th className="rounded-tl-md font-medium ps-3 flex items-center gap-2 py-2 text-left " >
							S NO
							<div className="text-white -space-y-1">
								{idSort ? 
									<IoMdArrowDropup
										className="cursor-pointer"
										onClick={() => sortHandler("id", "number", "desc")}
									/>
								 : 
									<IoMdArrowDropdown
										className="cursor-pointer"
										onClick={() => sortHandler("id", "number", "asc")}
									/>
								}
							</div>
						</th>
						{tableHeaders?.map((item, index) => (
							<th
								className={`${
									index + 1 === tableHeaders.length
										? "rounded-tr-md"
										: "rounded-none"
								} font-medium py-2 text-left `}>
								<div className="flex items-center gap-3">
									{item.name}
									{item.sort && (
										<div className="text-white -space-y-1">
											{item.asc ? (<IoMdArrowDropup
												onClick={() =>
													sortHandler(
														item.value,
														item.type,
														"asc",
														item.asc,index
													)
												}
												className="cursor-pointer "
											/>):(
											<IoMdArrowDropdown
												onClick={() =>
													sortHandler(item.value, item.type, "desc",item.asc,index)
												}
												className="cursor-pointer "
											/>)}
										</div>
									)}
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody id="table-container ">
					{dataList?.map((item, index) => (
						<tr className="bg-white text-base">
							<td className="text-left pl-4 py-2"># {index + 1}</td>
							{tableValues.map((key) => (
								<td className="text-left py-2">{getNestedValue(item,key)}</td>
							))}

							<td className="flex justify-center items-center mt-1 py-2 -translate-x-8">
								<div
									className={`${
										item?.status === "Active" || item?.status === "Available"
											? "bg-[#DBFCDF] text-[#189E34]"
											: "bg-red-50 text-red-500"
									} font-poppins font-bold py-1 w-2/3 px-2  rounded-full text-center`}>
									{item?.status}
								</div>
							</td>
							<td className="py-2">
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
