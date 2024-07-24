import React, { useEffect, useState } from "react";
import SideBar from "../../components/Admin/SideBar";
import DeletePopup from "../../components/Admin/DeletePopup";
import TableControllBar from "../../components/Admin/TableControllBar";
import axios from "axios";
import ListDataSection from "../../components/Admin/ListDataSection";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Admin/Header";
import ActivitiesAddPopup from "../../components/Admin/ActivitiesAddPopup";
import ActivitiesEditPopup from "../../components/Admin/ActivitiesEditPopup";
import EventsAddPopup from "../../components/Admin/EventsAddPopup";
import EventsEditPopup from "../../components/Admin/EventsEditPopup";
const EventsTypes = () => {
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
	const [eventList, setEventList] = useState([]);
	const [eventListDup, setEventListDup] = useState([]);
	useEffect(() => {
		async function getData (){
			try{
				const {data} = await axios.get(`/api/admin/getAllEvents`)
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
					endpoint={'deleteEvent'}
				/>
			)}
			{showEdit && (
				<EventsEditPopup
					rowID={rowID}
					setShowEdit={setShowEdit}
					dataList={eventList}
					setLoadData={setLoadData}
					loadData={loadData}
				/>
			)}
			{showAdd && <EventsAddPopup loadData={loadData} rowID={rowID} setLoadData={setLoadData} setShowAdd={setShowAdd} />}
			{<Header />}
			<main className="px-10 flex w-full">
				<SideBar active={"Event Types"} />
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

export default EventsTypes;
