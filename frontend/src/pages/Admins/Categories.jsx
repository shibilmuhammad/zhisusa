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
	const [loadData, setLoadData] = useState(false);
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
				const {data} = await axios.get(`/api/admin/getAllCategories`)
				setCategoryList(data)
				setCategoryListDup(data)
			}catch(err){
				console.log(err);
				if (err?.response?.status === 401 ) {
                    setError('Unauthorized');
					navigate('/admin/login')
                } else {
                    setError('Server error: ' + error?.response?.status);
					
                }
			}
		}
		getData();
	}, [loadData]);
	return (
		<div className="bg-[#F2F2F2] min-h-screen">
			{showDelete && (
				<DeletePopup
					rowID={rowID}
					type="category"
					setShowDelete={setShowDelete}
					dataList={categoryList}
					setLoadData={setLoadData}
					loadData={loadData}
				/>
			)}
			{showEdit && (
				<CategoriesEditPopup
					rowID={rowID}
					setShowEdit={setShowEdit}
					dataList={categoryList}
					setLoadData={setLoadData}
					loadData={loadData}
				/>
			)}
			{showAdd && <CategoriesAddPopup loadData={loadData} rowID={rowID} setLoadData={setLoadData} setShowAdd={setShowAdd} />}
			{<Header />}
			<main className="px-10 flex w-full">
				<SideBar active={"Categories"} />
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
