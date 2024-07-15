import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import SideBar from "../../components/Admin/SideBar";
import DeletePopup from "../../components/Admin/DeletePopup";
import CategoriesEditPopup from "../../components/Admin/CategoriesEditPopup";
import CategoriesAddPopup from "../../components/Admin/CategoriesAddPopup";
import ListDataSesction from "../../components/Admin/ListDataSesction";

const Categories = () => {
	const [showDelete, setShowDelete] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [showAdd, setShowAdd] = useState(false);
  const [rowID, setRowID] = useState('');
	return (
		<div className="bg-[#F2F2F2] min-h-screen">
			{showDelete && (
				<DeletePopup rowID={rowID} type="product" setShowDelete={setShowDelete} />
			)}
			{showEdit && <CategoriesEditPopup setShowEdit={setShowEdit} />}
			{showAdd && <CategoriesAddPopup setShowAdd={setShowAdd} />}
			<div className="h-16 bg-PrimaryBlue-normal flex justify-between px-10 items-center">
				<a href="">
					<img className="w-40" src="/images/Logo.png" alt="" />
				</a>
				<a href="/admin/logOut">
					<img className="h-5" src="/images/logout white.png" alt="" />
				</a>
			</div>
			<main className="px-10 flex">
				<SideBar />
				<ListDataSesction setRowID={setRowID} setShowAdd={setShowAdd} setShowDelete={setShowDelete} setShowEdit={setShowEdit} />
			</main>
		</div>
	);
};

export default Categories;
