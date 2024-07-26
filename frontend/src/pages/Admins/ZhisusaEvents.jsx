import React, { useEffect, useState } from "react";
import SideBar from "../../components/Admin/SideBar";
import DeletePopup from "../../components/Admin/DeletePopup";
import TableControllBar from "../../components/Admin/TableControllBar";
import axios from "axios";
import ListDataSection from "../../components/Admin/ListDataSection";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Admin/Header";
import ZhisusaEventsAddPopup from "../../components/Admin/ZhisusaEventsAddPopup";
import ZhisusaEventsEditPopup from "../../components/Admin/ZhisusaEventsEditPopup";
const ZhisusaEvents = () => {
	const navigate = useNavigate()
	const [showDelete, setShowDelete] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [showAdd, setShowAdd] = useState(false);
	const [error,setError] = useState("")
	const [rowID, setRowID] = useState("");
	const [loadData, setLoadData] = useState(false);
	const [tableHeaders, setTableHeaders] = useState([
			{name: "Title",sort: true,sortType: "letter",value: "title",asc: true,},
			{name: "Type",sort: true,sortType: "letter",value: "type",asc: true,},
			{name: "Place",sort: false,sortType: "",value: "details.location.venue",asc: true,},
			{name: "Price",sort: true,sortType: "number",value: "details.price",asc: true,},
			{ name: "Status", sort: false, sortType: "", value: "", asc: true },
			{ name: "Action", sort: false, sortType: "", value: "", asc: true }
		]);
	const tableValues = ["title", "type", "details.location.venue","details.price"];
	const filterValues = ["All", "Available", "Not Available"];
	const searchValues = [
		{ text: "Title", value: "title" },
		{ text: "Type", value: "type" },
		{ text: "Place", value: "details.location.venue" },
	];
	const [eventList, setEventList] = useState([]);
	const [eventListDup, setEventListDup] = useState([]);
	useEffect(() => {
		async function getData (){
			try{
				const {data} = await axios.get(`/api/admin/getAllZhisusaEvents`)
				setEventList(data)
				setEventListDup(data)
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
					type="event"
					setShowDelete={setShowDelete}
					dataList={eventList}
					setLoadData={setLoadData}
					loadData={loadData}
					main={'Events'}
					endpoint={'deleteZhisusaEvent'}
				/>
			)}
			{showEdit && (
				<ZhisusaEventsEditPopup
					rowID={rowID}
					setShowEdit={setShowEdit}
					dataList={eventList}
					setLoadData={setLoadData}
					loadData={loadData}
				/>
			)}
			{showAdd && <ZhisusaEventsAddPopup loadData={loadData} rowID={rowID} setLoadData={setLoadData} setShowAdd={setShowAdd} />}
			{<Header />}
			<main className="px-10 flex w-full">
				<SideBar active={"Zhisusa Events"} />
				<div className="mt-12 flex items-center flex-col w-full pl-12 gap-6">
					<TableControllBar
						setList={setEventList}
						dataList={eventListDup}
						searchValues={searchValues}
						filterValues={filterValues}
						setShowAdd={setShowAdd}
					/>
					<ListDataSection
						setTableHeaders={setTableHeaders}
						setList={setEventList}
						newList={eventListDup}
						setRowID={setRowID}
						setShowDelete={setShowDelete}
						setShowEdit={setShowEdit}
						tableValues={tableValues}
						tableHeaders={tableHeaders}
						dataList={eventList}
					/>
				</div>
			</main>
		</div>
	);
};

export default ZhisusaEvents;
