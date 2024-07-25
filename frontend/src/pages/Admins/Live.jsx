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
import RoomsAddPoupup from "../../components/Admin/RoomsAddPopup";
import {useDispatch, useSelector} from 'react-redux'
import { addToCategories } from "../../utils/categoriesDataSlice";
const Live = () => {
    const navigate = useNavigate()
	const [showDelete, setShowDelete] = useState(false); 
	const [loading,setLoading] = useState(false)
	const [liveTypes,setLiveTypes] = useState([])
	const [liveTypesDup,setLiveTypesDup] = useState([])
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
			{ name: "Price", sort: true, sortType: "number", value: "perNight", asc: true },
			{
				name: "Status",
				sort: false,
				sortType: "",
				value: "",
				asc: true,
			},
			{ name: "Action", sort: false, sortType: "", value: "", asc: true }
		]);
	const tableValues = ["title", "subcategory", "details.availability" ,"details.price.perNight" ]
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
				const filteredData = categoryList.filter((item)=>item?.main_category =='Live');
				setCategoryListDup(filteredData)
				console.log('filterData ',filteredData);
			}catch(err){
				if (err?.response?.status === 401 ) {
                    setError('Unauthorized');
					navigate('/admin/login')
                } else {
                    setError('Server error: ' + error?.response?.status);
                }
			}
		}
		async function fetchRooms (){
			try{
				const {data} = await axios.get(`/api/admin/getlivetypes`)
				setLiveTypes(data);
				setLiveTypesDup(data)
			}catch(err){
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
			await Promise.all([fetchCategories(), fetchRooms()]);
			console.log('ivetpyees',liveTypes);
			setLoading(false);
		  };
	  
		  fetchData();
	}, []);
	useEffect(()=>{
		console.log('liveeeeeee',liveTypes);
	},[liveTypes])
	return (
		<div className="bg-[#F2F2F2] min-h-screen">
			{showDelete && (
				<DeletePopup
					rowID={rowID}
					type="category"
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
			{showAdd && <RoomsAddPoupup categoryList={categoryListDup} setShowAdd={setShowAdd} />}
			{<Header />}
			<main className="px-10 flex w-full">
				<SideBar />
				<div className="mt-12 flex items-center flex-col w-full pl-12 gap-6">
					<TableControllBar
						setList={setLiveTypes}
						dataList={liveTypesDup}
						searchValues={searchValues}
						filterValues={filterValues}
						setShowAdd={setShowAdd}
					/>
					<ListDataSection
						setTableHeaders={setTableHeaders}
						setList={setLiveTypes}
						newList={liveTypesDup}
						setRowID={setRowID}
						setShowDelete={setShowDelete}
						setShowEdit={setShowEdit}
						tableValues={tableValues}
						tableHeaders={tableHeaders}
						
						dataList={liveTypes}
					/>
				</div>
			</main>
		</div>
    )
}

export default Live
