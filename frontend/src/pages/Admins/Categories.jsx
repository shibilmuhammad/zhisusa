import React, { useEffect, useState } from "react";
import SideBar from "../../components/Admin/SideBar";
import DeletePopup from "../../components/Admin/DeletePopup";
import CategoriesEditPopup from "../../components/Admin/CategoriesEditPopup";
import CategoriesAddPopup from "../../components/Admin/CategoriesAddPopup";
import TableControllBar from "../../components/Admin/TableControllBar";
import axios from "axios";
import ListDataSection from "../../components/Admin/ListDataSection";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Admin/Header";
const Categories = () => {
	const navigate = useNavigate()
	const [showDelete, setShowDelete] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [showAdd, setShowAdd] = useState(false);
	const [error,setError] = useState("")
	const [rowID, setRowID] = useState("");
	const [tableHeaders, setTableHeaders] =
		useState
			([{
				name: "Category",
				sort: true,
				sortType: "letter",
				value: "title",
				asc: true,
			},
			{
				name: "Main Category",
				sort: false,
				sortType: "",
				value: "",
				asc: true,
			},
			{
				name: "Types Count",
				sort: true,
				sortType: "number",
				value: "count",
				asc: true,
			},
			{ name: "Status", sort: false, sortType: "", value: "", asc: true },
			{ name: "Action", sort: false, sortType: "", value: "", asc: true }
		]);
	const tableValues = ["title", "main_category", "count"];
	const sortValues = [
		{ text: "Category ID", value: "id" },
		{ text: "Category", value: "title" },
		{ text: "Types Count", value: "count" },
	];
	const filterValues = ["All", "Active", "Blocked"];
	const searchValues = [
		{ text: "Category", value: "title" },
		{ text: "Main Category", value: "main_category" },
	];
	const [categoryList, setCategoryList] = useState([]);
	const [categoryListDup, setCategoryListDup] = useState([]);
	useEffect(() => {
		async function getData (){
			try{
				const {data} = await axios.get('/api/admin/getAllCategories')
				setCategoryList(data)
			}catch(err){
				if (err.response.status === 401 ) {
                    setError('Unauthorized');
					navigate('/admin/login')
                } else {
                    setError('Server error: ' + error.response.status);
                }
			}
		}
		getData();
	}, [showAdd, showDelete, showEdit]);
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
			{showEdit && (
				<CategoriesEditPopup
					rowID={rowID}
					setShowEdit={setShowEdit}
					dataList={categoryList}
				/>
			)}
			{showAdd && <CategoriesAddPopup rowID={rowID} setShowAdd={setShowAdd} />}
			{<Header />}
			<main className="px-10 flex w-full">
				<SideBar />
				<div className="mt-12 flex items-center flex-col w-full pl-12 gap-6">
					<TableControllBar
						setList={setCategoryList}
						dataList={categoryListDup}
						searchValues={searchValues}
						filterValues={filterValues}
						sortValues={sortValues}
						setShowAdd={setShowAdd}
					/>
					<ListDataSection
						setTableHeaders={setTableHeaders}
						setList={setCategoryList}
						newList={categoryListDup}
						setRowID={setRowID}
						setShowDelete={setShowDelete}
						setShowEdit={setShowEdit}
						tableValues={tableValues}
						tableHeaders={tableHeaders}
						dataList={categoryList}
					/>
				</div>
			</main>
		</div>
	);
};

export default Categories;
