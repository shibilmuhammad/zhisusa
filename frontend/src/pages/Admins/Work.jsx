
import React, { useEffect, useState } from "react";
import SideBar from "../../components/Admin/SideBar";
import DeletePopup from "../../components/Admin/DeletePopup";
import TableControllBar from "../../components/Admin/TableControllBar";
import axios from "axios";
import ListDataSection from "../../components/Admin/ListDataSection";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Admin/Header";
import RoomsAddPoupup from "../../components/Admin/RoomsAddPopup";
import {useDispatch, useSelector} from 'react-redux'
import RoomsEditPopup from "./RoomsEditPopup";
import WorkAddPopup from "../../components/Admin/WorkAddPopup";
import WorkEditPopup from "./WorkEditPopup";
const Work = () => {
    const navigate = useNavigate()
	const [showDelete, setShowDelete] = useState(false); 
	const [loading,setLoading] = useState(false);
	const [loadData,setLoadData] = useState(false)
	const [workTypes,setWorkTypes] = useState([])
	const [workTypesDup,setWorkTypesDup] = useState([])
	const [showEdit, setShowEdit] = useState(false);
	const [showAdd, setShowAdd] = useState(false);
	const [error,setError] = useState("")
	const [rowID, setRowID] = useState("");
	const [tableHeaders, setTableHeaders] =
		useState
			([{
				name: "Rooms",
				sort: true,
				sortType: "letter",
				value: "title",
				asc: true,
			},
			{
				name: "SubCategory",
				sort: true,
				sortType: "letter",
				value: "subcategory",
				asc: true,
			},
			{
				name: "Availability",
				sort: false,
				sortType: "",
				value: "",
				asc: true,
			},
			{ name: "Price", sort: true, sortType: "number", value: "perDay", asc: true },
			{
				name: "Status",
				sort: false,
				sortType: "",
				value: "",
				asc: true,
			},
			{ name: "Action", sort: false, sortType: "", value: "", asc: true }
		]);
	const tableValues = ["title", "subcategory", "details.availability" ,"details.price.perDay" ]
	const filterValues = ["All", "Active", "Blocked"];
	const searchValues = [
		{ text: "Room", value: "title" },
		{ text: "Type", value: "subcategory" },
	];
	const [categoryList, setCategoryList] = useState([]);
	const [categoryListDup, setCategoryListDup] = useState([]);
	const dispatch = useDispatch();
	const categoiesFromRedux = useSelector((state)=>state.adminCategories.categories);

	useEffect(() => {
		async function fetchCategories (){
			try{
				const {data} = await axios.get(`/api/admin/getAllCategories`)
				setCategoryList(data);

				
			}catch(err){
				if (err?.response?.status === 401 ) {
                    setError('Unauthorized');
					navigate('/admin/login')
                } else {
                    setError('Server error: ' + error?.response?.status);
                }
			}
		}
		async function fetchWorkingSpaces (){
			try{
				const {data} = await axios.get(`/api/admin/getworktypes`)
				setWorkTypes(data);
				setWorkTypesDup(data)
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
		const fetchData = async () => {
			setLoading(true);
			await Promise.all([fetchCategories(), fetchWorkingSpaces()]);
			setLoading(false);
		  };
	  
		  fetchData();
	}, [loadData]);
	useEffect(()=>{
		setCategoryListDup([...categoryList].filter((item)=>item?.main_category =='Work'));
		
	},[categoryList])

	return (
		<div className="bg-[#F2F2F2] min-h-screen">
			{showDelete && (
				<DeletePopup
					rowID={rowID}
					type="Space"
					setShowDelete={setShowDelete}
					dataList={workTypes}
					endpoint={'deletework'}
					loadData={loadData}
					setLoadData={setLoadData}
				/>
			)}
			{showEdit && (
				<WorkEditPopup
				setLoadData={setLoadData}
					loadData={loadData}
					rowID={rowID}
					setShowEdit={setShowEdit}
					dataList={workTypes}
					categoryList={categoryListDup}
				/>
			)}
			{ showAdd && <WorkAddPopup loadData={loadData} setLoadData={setLoadData} loading={loading} categoryList={categoryListDup} setShowAdd={setShowAdd} />}
			{<Header />}
			<main className="px-10 flex w-full">
				<SideBar  active={'Work Types'}/>
				<div className="mt-12 flex items-center flex-col w-full pl-12 gap-6">
					<TableControllBar 
						setList={setWorkTypes}
					 	dataList={workTypesDup}
						searchValues={searchValues}
						filterValues={filterValues}
						setShowAdd={setShowAdd}
					/>
					<ListDataSection
						setTableHeaders={setTableHeaders}
						setList={setWorkTypes}
						newList={workTypesDup}
						setRowID={setRowID}
						setShowDelete={setShowDelete}
						setShowEdit={setShowEdit}
						tableValues={tableValues}
						tableHeaders={tableHeaders}
						
						dataList={workTypes}
					/>
				</div>
			</main>
		</div>
    )
}

export default Work
