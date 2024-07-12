import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import SideBar from "../../components/Admin/SideBar";
import DeletePopup from "../../components/Admin/DeletePopup";
import CategoriesEditPopup from "../../components/Admin/CategoriesEditPopup";
import CategoriesAddPopup from "../../components/Admin/CategoriesAddPopup";

const Categories = () => {
  const [showDelete,setShowDelete] = useState(false)
  const [showEdit,setShowEdit] = useState(false)
  const [showAdd,setShowAdd] = useState(false)
  const openDelete = (id) => {
    setShowDelete(true)
  }
  const openEdit = (id) => {
    setShowEdit(true)
  }
  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      {showDelete && <DeletePopup type="product" setShowDelete={setShowDelete}/> }
      {showEdit && <CategoriesEditPopup setShowEdit={setShowEdit}/>}
      {showAdd && <CategoriesAddPopup setShowAdd={setShowAdd}/>}
      <div className="h-16 bg-PrimaryBlue-normal flex justify-between px-10 items-center">
        <a href="">
          <img className="w-40" src="/images/Logo.png" alt="" />
        </a>
        <a href="/admin/logOut">
          <img className="h-5" src="/images/logout white.png" alt="" />
        </a>
      </div>
      <main className="px-10 flex">
        
        <SideBar/>
        <div className="right mt-20 ml-16 w-full">
          <div className="searchandsort flex justify-between">
            <div className="flex space-x-7">
              <div className="flex space-x-7">
                <form
                  action=""
                  method="post"
                  id="CategorySortForm"
                  className="flex space-x-1"
                >
                  <div className="flex items-center space-x-1">
                    <label className="text-xs text-[#333333]" htmlFor="">
                      sort
                    </label>
                    <select
                      name=""
                      id="sortSelect"
                      className="rounded-md px-2 py-1 text-xs text-[#666666] outline outline-[.1px] outline-gray-400"
                    >
                      <option value="CategoryName">Category name</option>
                      <option value="ProductCount">Product count</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-1">
                    <label className="text-xs text-[#333333]" htmlFor="sortHow">
                      by
                    </label>
                    <select
                      name="sortValue"
                      id="sortHow"
                      className="outline outline-[.1px] outline-gray-400 rounded-md px-2 py-1 text-xs text-[#666666]"
                    ></select>
                  </div>
                </form>
                <form action="" method="post" id="filterForm">
                  <select
                    name="categoryFilter"
                    id="categoryFilter"
                    className="outline outline-[.1px] outline-gray-400 rounded-md px-2 py-1 text-xs text-[#666666]"
                  >
                    <option value="filterBy">Filter by</option>
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Blocked">Blocked</option>
                  </select>
                </form>
              </div>

              <form action="/admin/category/search" method="post">
                <div className="flex items-center rounded-md bg-white text-[#666666] outline outline-[.1px] outline-gray-400">
                  <input
                    value="<%=locals.searchvalue%>"
                    type="text"
                    className="outline-none h-full rounded-md pl-3 text-xs w-80 placeholder:text-xs"
                    name="categorySearch"
                    placeholder="Search by Category name.."
                  />
                  <button
                    type="submit"
                    className="bg-[#DAA520] px-1 py-1 rounded-md h-full cursor-pointer"
                  >
                    <IoMdSearch className="text-white h-4" />
                  </button>
                </div>
              </form>
            </div>
            <form
              action=""
              className="relative flex justify-end cursor-pointer"
              onClick="showCategoryEdit()"
            >
              <img className="h-6 ml-64" src="/images/uploadIcon.png" alt="" />
              <h2 className="text-white absolute top-1 right-4 text-xs font-semibold">
                Upload
              </h2>
            </form>
          </div>

          <table className="w-full mt-2">
            <thead>
              <tr className="bg-PrimaryBlue-normal text-white text-left font-medium">
                <th className="font-medium ps-3 rounded-tl-md py-2">
                  Category ID
                </th>
                <th className="font-medium text-left">Category</th>
                <th className="font-medium text-center">Products</th>
                <th className="font-medium text-center">Status</th>
                <th className="rounded-tr-md font-medium">Action</th>
              </tr>
            </thead>
            <tbody id="table-container">
              <tr className="bg-white text-sm">
                <td className="ps-3 py-2 max-w-[14rem] truncate pr-6">id</td>
                <td className="max-w-[14rem] truncate pr-6 font-semibold text-left">
                  category name
                </td>
                <td className="text-center">product count</td>
                <td className="flex justify-center items-center mt-1">
                  <div className="bg-[#DBFCDF] text-[#189E34] w-2/3 px-2 rounded-full text-center">
                    status
                  </div>
                </td>
                <td>
                  <div className="flex space-x-4">
                    <MdEdit onClick={() => openEdit(1)} className="text-PrimaryBlue-normal text-lg cursor-pointer" />
                    <MdDelete onClick={() => openDelete(1)} className="text-red-600 text-lg cursor-pointer" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Categories;
