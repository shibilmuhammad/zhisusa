import React, { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PackageInputCard from "./PackageInputCard";
import ImageCard from "./ImageCard";
const RoomsAddPoupup = ({ setShowAdd, categoryList }) => {
  const [errMsg, setErrMsg] = useState(false);
  const [amenitites,setAmenities] = useState([])
  const amenityRef = useRef(null);
  const [images,setImages] = useState([]);
  const formData = useRef({
    title: null,
    subCategory: null,
    shortDescription: null,
    description: null,
    adultCapacity: null,
	childCapacity:null,
    size: null,
    status: 'active',
    roomNumber: null,
    floor: null,
    view: null,
    availability: "available",
    proximityToAmenities: null,
    perNight: null,
    perWeek: null,
    perMonth: null,
    amenitites: [],
    images: [],
  });
  useEffect(() => {
    async function getCategoriesData() {
      await axios.get("");
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    formData.current[name] = value;
    console.log(formData);
  };
  const AddAmenitites = (value) =>{
	amenityRef.current.value = ''
	setAmenities((list)=>[...list,value]);

  }
  const removePackage = (index) =>{
	const filterddata =  amenitites.filter((_,i)=> i!==index);
	setAmenities(filterddata)
  }
  const handleImageUpload = (e) =>{
	const files = Array.from(e.target.files)
	const imagesBlob = files.map((image)=>URL.createObjectURL(image))

	setImages((prev)=>[...prev, ...imagesBlob])
  }
  useEffect(()=>{
	console.log('images is ',images);
  },[images])
  return (
    <div
      class="font-poppins fixed inset-0 flex justify-center z-[999]  items-center bg-[rgba(0,0,0,0.3)]"
      id="categoryEditPopup"
    >
      <form class="  w-6/12  h-[80vh] relative">
        <div className="rounded-lg bg-white w-full   py-8 px-5  space-y-3 text-sm pr-8 pt-10 h-full overflow-auto  ">
          {/* title & main */}
          <div className="flex gap-5">
            <div class="w-full space-y-1">
              <label className="" for="">
                Title
              </label>
              <div className="">
                <input
                  onChange={handleChange}
                  type="text"
                  name="title"
                  class="px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
                />
                {errMsg.title && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                    category can't be empty !
                  </span>
                )}
              </div>
            </div>
            <div class="w-full space-y-1">
              <label className="" for="">
                SubCategory
              </label>
              <div className="">
                <select
                  class="border-gray-400 border-[.1px] w-full rounded-lg text-left text-xs px-2 text-gray-500 p-2"
                  name="subCategory"
                  onChange={handleChange}
                >
                  <option value="Select" selected disabled>
                    Select
                  </option>
                  {categoryList.map((item) => (
                    <option value={item.title}>{item.title}</option>
                  ))}
                </select>
                {errMsg.main && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                    Select a main category from list !
                  </span>
                )}
              </div>
            </div>
          </div>
          {/*short Description */}
          <div class="w-full space-y-1">
            <label className="" for="">
              Short Description
            </label>
            <div className="">
              <textarea
                type="text"
				onChange={handleChange}
                name="shortDescription"
                class="min-h-12 px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
              />
              {errMsg.title && (
                <span class=" text-[10px] text-red-600 space-y-0">
                  category can't be empty !
                </span>
              )}
            </div>
          </div>
          {/* Description */}
          <div class="w-full space-y-1">
            <label className="" for="">
              Description
            </label>
            <div className="">
              <textarea
                type="text"
				onChange={handleChange}
                name="description"
                class="min-h-28 px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
              />
              {errMsg.title && (
                <span class=" text-[10px] text-red-600 space-y-0">
                  category can't be empty !
                </span>
              )}
            </div>
          </div>
          {/* capacity & status */}
          <div className="flex gap-5">
            <div class="w-full space-y-1">
              <label className="" for="">
                Capacity
              </label>
              <div className="flex border rounded-lg">
				<div className="flex items-center">
					<p className="p-2 bg-gray-100 rounded-l-lg"> Adult</p>
					<input
					type="text"
					name="adultCapacity"
					class="px-2 w-full p-2 "
					onChange={handleChange}
					/>
				</div>
               
				<div className="flex items-center">
					<p className="p-2 bg-gray-100">Child</p>
					<input
					type="text"
					name="childCapacity"
					class="px-2  w-full p-2 rounded-r-lg "
					onChange={handleChange}
					/>
				</div>

              </div>
            </div>
            <div class="w-full space-y-1">
              <label className="" for="">
                Size
              </label>
              <div className="">
                <input
                  type="text"
                  name="size"
				  onChange={handleChange}
                  class="px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
                />
                {errMsg.title && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                    category can't be empty !
                  </span>
                )}
              </div>
            </div>
            <div class="w-full space-y-1">
              <label className="" for="">
                Status
              </label>
              <div className="">
                <select
                  class="border-gray-400 border-[.1px] w-full  rounded-lg text-left text-xs px-2 text-gray-500 p-2"
                  name="status"
				  onChange={handleChange}
                >
                  <option value="active" selected>
                    Active
                  </option>
                  <option value="hide">Hide</option>
                </select>
              </div>
            </div>
          </div>

          {/* location & proximity */}
          <div className="flex gap-5">
            <div class="w-full space-y-1">
              <label className="" for="">
                Room Number
              </label>
              <div className="">
                <input
                  type="text"
                  name="roomNumber"
				  onChange={handleChange}
                  class="px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
                />
                {errMsg.title && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                    category can't be empty !
                  </span>
                )}
              </div>
            </div>
            <div class="w-full space-y-1">
              <label className="" for="">
                Floor
              </label>
              <div className="">
                <input
                  type="text"
                  name="floor"
				  onChange={handleChange}
                  class="px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
                />
                {errMsg.title && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                    category can't be empty !
                  </span>
                )}
              </div>
            </div>
            <div class="w-full space-y-1">
              <label className="" for="">
                View
              </label>
              <div className="">
                <input
                  type="text"
                  name="view"
				  onChange={handleChange}
                  class="px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
                />
                {errMsg.title && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                    category can't be empty !
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div class="w-full space-y-1">
              <label className="" for="">
                Availability
              </label>
              <div className="">
                <select
                  class="border-gray-400 border-[.1px] w-full  rounded-lg text-left text-xs px-2 text-gray-500 p-2"
                  name="availability"
				  onChange={handleChange}
                >
                  <option value="available" selected>
                    Available
                  </option>
                  <option value="notAvailable">Not Available</option>
                </select>
              </div>
            </div>
            <div class="w-full space-y-1">
              <label className="" for="">
                proximityToAmenities
              </label>
              <div className="">
                <input
                  type="text"
                  name="proximityToAmenities"
				  onChange={handleChange}
                  class="px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg "
                />
                {errMsg.title && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                    category can't be empty !
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* price */}
          <div className="flex gap-5 w-full items-center">
            <label className="w-4/12" for="">
              Price
            </label>
            <div className="rounded-lg border-gray-400 border-[.1px] w-8/12 flex items-center">
              <div className="bg-gray-100 rounded-l-lg p-2 px-2 flex items-center justify-end">
                <span>Night</span>
              </div>
              <span className="px-2">₹</span>
              <input
                className="w-full px-2 py-1.5 h-full"
                type="number"
                name="perNight"
				onChange={handleChange}
                id=""
              />
              <div className="bg-gray-100 p-2 px-2 flex items-center justify-end">
                <span>Week </span>
              </div>
              <span className="px-2">₹</span>
              <input
                className="w-full px-2 py-1.5 "
                type="number"
                name="perWeek"
				onChange={handleChange}
                id=""
              />
              <div className="bg-gray-100 p-2 px-2 flex items-center justify-end">
                <span>Month </span>
              </div>
              <span className="px-2">₹</span>
              <input
                className="w-full px-2 py-1.5 rounded-r-lg"
                type="number"
                name="perMonth"
				onChange={handleChange}
                id=""
              />
            </div>
          </div>
          {/* package includes */}
          <div className="flex items-center gap-5 w-full">
            <label className="w-4/12" for="">
              Amenitites
            </label>
            <div className="w-8/12">
              <div className="w-full  flex border-gray-400 border-[.1px] rounded-lg justify-between">
                <input ref={amenityRef} type="text" name="capacity" class="p-2 m-1 w-full" />
                <button
                  type="button"
                  className="bg-PrimaryBlue-normal px-4 text-white rounded-r-lg"
					onClick={()=>AddAmenitites(amenityRef.current.value)}
                >
                  Add
                </button>
                {errMsg.title && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                    packages can't be empty !
                  </span>
                )}
              </div>
              {/* packages cards */}
              <div className="flex flex-wrap space-x-1">
                {amenitites?.map((item,index) => <PackageInputCard index={index} text={item} removePackage={removePackage} />)}
              </div>
            </div>
          </div>
          {/* images */}
          <div className="flex gap-5 w-full">
            <label className="w-4/12" for="">
              Images
            </label>
            <div className="w-8/12">
              <div className="grid grid-cols-3 gap-2 mt-2 ">
                <div className="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    className="flex px-8 flex-col items-center justify-center w-full p-2 h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 "
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <i className="bi bi-cloud-arrow-up text-3xl text-gray-500"></i>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Upload</span>
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
					  onChange={handleImageUpload}
                      type="file"
                      multiple
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                </div>
                {images.map((item, index) => (
							<ImageCard img={item} index={index} key={index} />
						))}
              </div>
            </div>
          </div>

          {errMsg.server && (
            <span class=" text-[10px] text-red-600 space-y-0">
              Unexpected Error Occured ! Please Try again.
            </span>
          )}

          <div class="w-full flex justify-end">
            <button
              // type={`${progress ? "button" : "submit"}`}
              class="bg-[#DAA520] text-white rounded-full p-2 text-base font-normal flex justify-center items-center mt-5 w-44"
            >
              {/* {!progress ? (
							<span id="saveSpanEdit">Save</span>
						) : ( */}
              <div
                class="flex items-center justify-center font-normal"
                id="loadingEdit"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4  h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Uploading
              </div>
              )}
            </button>
          </div>
          <button
            class="absolute -top-2 cursor-pointer right-4 text-3xl"
            onClick={() => setShowAdd(false)}
          >
            <IoIosCloseCircle />
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoomsAddPoupup;
