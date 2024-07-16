import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import SideBar from "../../components/Admin/SideBar";
import DeletePopup from "../../components/Admin/DeletePopup";
import CategoriesEditPopup from "../../components/Admin/CategoriesEditPopup";
import CategoriesAddPopup from "../../components/Admin/CategoriesAddPopup";
import TableControllBar from "../../components/Admin/TableControllBar";
import axios from "axios";
import ListDataSection from "../../components/Admin/ListDataSection";

const Categories = () => {
	const [showDelete, setShowDelete] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [showAdd, setShowAdd] = useState(false);
	const [rowID, setRowID] = useState("");
	const tableHeaders = [
		"Category ID",
		"Category",
		"Main Category",
		"Types Count",
		"Status",
		"Action",
	];
	const tableValues = [
		"_id",
		"title",
		"main_category",
		"types_count",
	];
	const [categoryList,setCategoryList] = useState([])
	useEffect(() => {
		async function getData (){
			const {data} = await axios.get('/api/admin/getAllCategories')
			setCategoryList(data)
		}
		getData()
	},[showAdd,showDelete,showEdit])
	return (
		<div className="bg-[#F2F2F2] min-h-screen">
			{showDelete && (
				<DeletePopup
					rowID={rowID}
					type="product"
					setShowDelete={setShowDelete}
					dataList={categoryList}
				/>
			)}
			{showEdit && <CategoriesEditPopup rowID={rowID} setShowEdit={setShowEdit} dataList={categoryList} />}
			{showAdd && <CategoriesAddPopup rowID={rowID} setShowAdd={setShowAdd} />}
			<div className="h-16 bg-PrimaryBlue-normal flex justify-between px-10 items-center">
				<a href="">
					<img className="w-40" src="/images/Logo.png" alt="" />
				</a>
				<a href="/admin/logOut">
					<img className="h-5" src="/images/logout white.png" alt="" />
				</a>
			</div>
			<main className="px-10 flex w-full">
				<SideBar />
				<div className="mt-12 flex items-center flex-col w-full pl-12 gap-6">
					<TableControllBar setShowAdd={setShowAdd} />
					<ListDataSection setRowID={setRowID} setShowDelete={setShowDelete} setShowEdit={setShowEdit} tableValues={tableValues} tableHeaders={tableHeaders} dataList={categoryList} />
				</div>
			</main>
		</div>
	);
};

export default Categories;
