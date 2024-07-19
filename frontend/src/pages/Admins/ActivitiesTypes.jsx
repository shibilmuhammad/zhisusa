import React, { useEffect, useState } from "react";
import SideBar from "../../components/Admin/SideBar";
import DeletePopup from "../../components/Admin/DeletePopup";
import CategoriesEditPopup from "../../components/Admin/CategoriesEditPopup";
import TableControllBar from "../../components/Admin/TableControllBar";
import axios from "axios";
import ListDataSection from "../../components/Admin/ListDataSection";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Admin/Header";
import ActivitiesAddPopup from "../../components/Admin/ActivitiesAddPopup";
import ActivitiesEditPopup from "../../components/Admin/ActivitiesEditPopup";
const ActivitiesTypes = () => {
	const navigate = useNavigate()
	const [showDelete, setShowDelete] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [showAdd, setShowAdd] = useState(false);
	const [error,setError] = useState("")
	const [rowID, setRowID] = useState("");
	const [loadData, setLoadData] = useState(false);
	const [tableHeaders, setTableHeaders] = useState([
			{name: "Title",sort: true,sortType: "letter",value: "title",asc: true,},
			{name: "Main Category",sort: false,sortType: "",value: "",asc: true,},
			{name: "Place",sort: false,sortType: "",value: "details.location.place",asc: true,},
			{ name: "Status", sort: false, sortType: "", value: "", asc: true },
			{ name: "Action", sort: false, sortType: "", value: "", asc: true }
		]);
	const tableValues = ["title", "mainCategory", "details.location.place"];
	const filterValues = ["All", "Available", "Not Available"];
	const searchValues = [
		{ text: "Title", value: "title" },
		{ text: "Main Category", value: "mainCategory" },
		{ text: "Place", value: "details.location.place" },
	];
	const [activityList, setActiviyList] = useState([]);
	const [activityListDup, setActivityListDup] = useState([]);
	useEffect(() => {
		async function getData (){
			try{
				const {data} = await axios.get(`/api/admin/getAllActivities`)
				setActiviyList(data)
				setActivityListDup(data)
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
					type="activity"
					setShowDelete={setShowDelete}
					dataList={activityList}
					setLoadData={setLoadData}
					loadData={loadData}
				/>
			)}
			{showEdit && (
				<ActivitiesEditPopup
					rowID={rowID}
					setShowEdit={setShowEdit}
					dataList={activityList}
					setLoadData={setLoadData}
					loadData={loadData}
				/>
			)}
			{showAdd && <ActivitiesAddPopup loadData={loadData} rowID={rowID} setLoadData={setLoadData} setShowAdd={setShowAdd} />}
			{<Header />}
			<main className="px-10 flex w-full">
				<SideBar active={"Activity Types"} />
				<div className="mt-12 flex items-center flex-col w-full pl-12 gap-6">
					<TableControllBar
						setList={setActiviyList}
						dataList={activityListDup}
						searchValues={searchValues}
						filterValues={filterValues}
						setShowAdd={setShowAdd}
					/>
					<ListDataSection
						setTableHeaders={setTableHeaders}
						setList={setActiviyList}
						newList={activityListDup}
						setRowID={setRowID}
						setShowDelete={setShowDelete}
						setShowEdit={setShowEdit}
						tableValues={tableValues}
						tableHeaders={tableHeaders}
						dataList={activityList}
					/>
				</div>
			</main>
		</div>
	);
};

export default ActivitiesTypes;
