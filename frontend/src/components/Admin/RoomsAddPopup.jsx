import React, { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PackageInputCard from "./PackageInputCard";
import ImageCard from "./ImageCard";
const RoomsAddPoupup = ({ setShowAdd, categoryList }) => {
  const [errMsg, setErrMsg] = useState({});
  const [imageFiles, setImageFiles] = useState([]);
  const amenityRef = useRef(null);
  const [amenitites, setAmenities] = useState([]);
  const [images, setImages] = useState([]);
  const [progress,setProgress] = useState(false)
  const formData = {
    title: useRef(null),
    subCategory:useRef(null),
    shortDescription: useRef(null),
    description: useRef(null),
    adultCapacity: useRef(null),
    childCapacity: useRef(null),
    size: useRef(null),
    status: useRef('active'),
    roomNumber:useRef(null),
    floor: useRef(null),
    view: useRef(null),
    availability: useRef('available'),
    proximityToAmenities: useRef(null),
    perNight: useRef(null),
    perWeek:useRef(null),
    perMonth: useRef(null),
  };
  // const titleRef = useRef(null);
  // const subCategoryRef = useRef(null)
  // const shortDescriptionRef = useRef(null);
  // const descriptionRef = useRef(null);
  // const sizeRef = useRef(null)
  // const adultCapacityRef = useRef(null);
  // const childCapacityRef = useRef(null);
  // const roomNumberRef = useRef(null);
  // const floorRef = useRef(null);
  // const viewRef = useRef(null);
  // const proximityToAmenitiesRef = useRef(null);
  // const perNightRef = useRef(null);
  // const perWeekRef = useRef(null);
  // const perMonthRef = useRef(null);

  const validateForm = () => {
    const errors = {};
    if (formData.title.current.value.trim() === '') {
      
      errors.title = "Title can't be empty!";
      formData.title.current.focus()
    } else if (formData.subCategory.current.value == 'Select') {
      errors.subCategory = "Select a subcategory from the list!";
      formData.subCategory.current.focus()
    } else if (formData.shortDescription.current.value.trim() === '') {
      errors.shortDescription = "Short description can't be empty!";
      formData.shortDescription.current.focus()
    } else if (formData.description.current.value.trim()==='') {
      errors.description = "Description can't be empty!";
      formData.description.current.focus()
    } else if (formData.adultCapacity.current.value.trim() ==='') {
      errors.adultCapacity = "Adult capacity can't be empty!";
      formData.adultCapacity.current.focus()
    } else if (formData.childCapacity.current.value.trim()==='') {
      errors.childCapacity = "Child capacity can't be empty!";
      formData.childCapacity.current.focus()
    } else if (formData.size.current.value.trim()==='') {
      errors.size = "Size can't be empty!";
      formData.size.current.focus()
    } else if (formData.roomNumber.current.value.trim()==='') {
      errors.roomNumber = "Room number can't be empty!";
      formData.roomNumber.current.focus()
    } else if (formData.floor.current.value.trim()==='') {
      errors.floor = "Floor can't be empty!";
      formData.floor.current.focus()
    } else if (formData.view.current.value.trim()==='') {
      errors.view = "View can't be empty!";
      formData.view.current.focus()
    } else if (formData.proximityToAmenities.current.value.trim()==='') {
      errors.proximityToAmenities = "Proximity to amenities can't be empty!";
      formData.proximityToAmenities.current.focus()
    } else if (formData.perNight.current.value.trim==='') {
      errors.perNight = "Price per night can't be empty!";
      formData.perNight.current.focus()
    } else if (formData.perWeek.current.value.trim()==='') {
      errors.perWeek = "Price per week can't be empty!";
      formData.perWeek.current.focus()
    } else if (formData.perMonth.current.value.trim() ==='') {
      errors.perMonth = "Price per month can't be empty!";
      formData.perMonth.current.focus()
    }else if (amenitites.length==0){
      errors.amenitites = "Amenities can't be empty !";
    }else if(imageFiles.length==0){
      errors.images = "Images can't be empty!";
    }

    setErrMsg(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    formData[name] = value;
    setErrMsg((prevErrMsg) => ({ ...prevErrMsg, [name]: "" }));
  };
  const AddAmenitites = (value) => {
    if(value.trim()==='') return
    amenityRef.current.value = "";
    setAmenities((list) => [...list, value]);
  };
  const removePackage = (index) => {
    const filterddata = amenitites.filter((_, i) => i !== index);
    setAmenities(filterddata);
  };
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imagesBlob = files.map((image) => URL.createObjectURL(image));
    setImages((prev) => [...prev, ...imagesBlob]);
    setImageFiles((prev) => [...prev, ...files]);
  };
  const removeImage = (index) => {
    const filteredData = images.filter((_, i) => i !== index);
    const filteredDataFiles = imageFiles.filter((_, i) => i !== index);
    setImages(filteredData);
    setImageFiles(filteredDataFiles);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setProgress(true)
    const data = new FormData();
  
    for (let key in formData ){
      data.append(key,formData[key].current.value)
    }
    // Append amenities
    amenitites.forEach((amenity, index) => {
      data.append(`amenities[${index}]`, amenity);
    });

    // Append images
    imageFiles.forEach((image, index) => {
      data.append(`images`, image);
    });
    try {
      const response = await axios.post("/api/admin/addrooms", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProgress(false)
      setShowAdd(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrMsg({ server: true });
    }
  };
  return (
    <div
      class="font-poppins fixed inset-0 flex justify-center z-[999]  items-center bg-[rgba(0,0,0,0.3)]"
      id="categoryEditPopup"
    >
      <form onSubmit={handleSubmit} class="  w-6/12  h-[80vh] relative">
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
                  ref={formData.title}
                  placeholder="eg:Mountain View Room"
                  className={`px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg  ${errMsg.title ? 'border-red-500 focus:outline-red-400' : ''
                }`}
                />
                {errMsg.title && (
                  <span className="text-[10px] text-red-600 space-y-0">
                    {errMsg.title}
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
                ref={formData.subCategory}
                   className={`border-gray-400 border-[.1px] w-full rounded-lg text-left text-xs px-2 text-gray-500 p-2 ${errMsg.subCategory ? 'border-red-500 focus:outline-red-400' : ''
                  }`}
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
                {errMsg.subCategory && (
                  <span className="text-[10px] text-red-600 space-y-0">
                    {errMsg.subCategory}
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
                ref={formData.shortDescription}
                placeholder="eg:Naturally lit, with a large picture window and Lutyens' style furnishings."
                name="shortDescription"
                className={`min-h-12 px-2 border-gray-400 border-[.1px]  w-full p-2 rounded-lg ${errMsg.shortDescription ? 'border-red-500 focus:outline-red-400' : ''
              }`}
              />
             {errMsg.shortDescription && (
                <span className="text-[10px] text-red-600 space-y-0">
                  {errMsg.shortDescription}
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
                placeholder="eg:A private space to relax and unwind. Views of our croquet lawns, flower beds and rockeries are best enjoyed from your window with a cup of tea, coffee or in room dining. While the outside presents an English style garden, inside, your room has been designed with equal measure of heritage style; from the two poster king sized bed, ottoman and Victorian style lamps, to hand carved chairs and a writing desk."
                ref={formData.description}
                className={`min-h-28 px-2 placeholder:text-xs placeholder:text-gray-400 border-gray-400 border-[.1px] w-full p-2 rounded-lg ${errMsg.description ? 'border-red-500 focus:outline-red-400' : ''
                  }`}
              />
             {errMsg.description && (
                <span className="text-[10px] text-red-600 space-y-0">
                  {errMsg.description}
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
                    type="number"
                    name="adultCapacity"
                    ref={formData.adultCapacity}
                    className={`px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg ${errMsg.adultCapacity ? 'border-red-500 focus:outline-red-400' : ''
                      }`}
                    onChange={handleChange}
                  />
                  
                </div>

                <div className="flex items-center">
                  <p className="p-2 bg-gray-100">Child</p>
                  <input
                  ref={formData.childCapacity}
                    type="number"
                    name="childCapacity"
                    className={`px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg ${errMsg.childCapacity ? 'border-red-500 focus:outline-red-400' : ''
                  }`}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errMsg.adultCapacity && (
                    <span className="text-[10px] text-red-600 space-y-0">
                      {errMsg.adultCapacity}
                    </span>
                  )}
                   {errMsg.childCapacity && (
                    <span className="text-[10px] text-red-600 space-y-0">
                      {errMsg.childCapacity}
                    </span>
                  )}
            </div>
            <div class="w-full space-y-1">
              <label className="" for="">
                Size
              </label>
              <div className="">
                <input
                  type="number"
                  name="size"
                  onChange={handleChange}
                  ref={formData.size}
                  placeholder="In Square Feet (sq ft)"
                  class={`px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg ${errMsg.size? 'border-red-500 focus:outline-red-400':'' } `}
                />
                {errMsg.size && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                  {errMsg.size}
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
                  ref={formData.status}
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
                ref={formData.roomNumber}
                  type="text"
                  name="roomNumber"
                  placeholder="eg:221B"
                  onChange={handleChange}
                  className={`px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg ${errMsg.roomNumber ? 'border-red-500 focus:outline-red-400' : ''
                }`}
                />
                {errMsg.roomNumber && (
                  <span className="text-[10px] text-red-600 space-y-0">
                    {errMsg.roomNumber}
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
                  placeholder="eg:First"
                  ref={formData.floor}
                  onChange={handleChange}
                  className={`px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg ${errMsg.floor ? 'border-red-500 focus:outline-red-400' : ''
                }`}

                />
                {errMsg.floor && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                   {errMsg.floor}
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
                  placeholder="eg:Mountain View"
                  name="view"
                  ref={formData.view}
                  onChange={handleChange}
                  className={`px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg ${errMsg.view ? 'border-red-500 focus:outline-red-400' : ''
                }`}
                />
                {errMsg.view && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                    {errMsg.view}
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
                  ref={formData.availability}
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
                  ref={formData.proximityToAmenities}
                  type="text"
                  name="proximityToAmenities"
                  placeholder="eg:Gym"
                  onChange={handleChange}
                  className={`px-2 border-gray-400 border-[.1px] w-full p-2 rounded-lg ${errMsg.proximityToAmenities ? 'border-red-500 focus:outline-red-400' : ''
                }`}
                />
                {errMsg.proximityToAmenities && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                   {errMsg.proximityToAmenities}
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
            <div className={`rounded-lg  border-[.1px] w-8/12 flex items-center ${errMsg.perNight || errMsg.perWeek || errMsg.perMonth ? 'border-red-500 focus:outline-red-400':'border-gray-400'}`}>
              <div className="bg-gray-100 rounded-l-lg p-2 px-2 flex items-center justify-end">
                <span>Night</span>
              </div>
              <span className="px-2">₹</span>
              <input
                className={`w-full px-2 py-1.5 h-full ${errMsg.perNight?'border-red-500 focus:outline-red-400' : ''}`}
                type="number"
                ref={formData.perNight}
                name="perNight"
                placeholder="eg:1500"
                onChange={handleChange}
                id=""
              />
              <div className="bg-gray-100 p-2 px-2 flex items-center justify-end">
                <span>Week </span>
              </div>
              <span className="px-2">₹</span>
              <input
                 className={`w-full px-2 py-1.5 h-full ${errMsg.perWeek?'border-red-500 focus:outline-red-400' : ''}`}
                type="number"
                placeholder="10,500"
                name="perWeek"
                ref={formData.perWeek}
                onChange={handleChange}
                id=""
              />
              <div className="bg-gray-100 p-2 px-2 flex items-center justify-end">
                <span>Month </span>
              </div>
              <span className="px-2">₹</span>
              <input
                 className={`w-full px-2 py-1.5 h-full ${errMsg.perMonth?'border-red-500 focus:outline-red-400' : ''}`}
                type="number"
                name="perMonth"
                placeholder="42,000"
                ref={formData.perMonth}
                onChange={handleChange}
                id=""
              />
              
            </div>
            
          </div>
          {errMsg.perNight && (
                  <span class=" text-[10px] text-red-600 space-y-0 flex  justify-evenly">
                   {errMsg.perNight}
                  </span>
                )}
                {errMsg.perWeek && (
                  <span class=" text-[10px] text-red-600 space-y-0 flex  justify-evenly">
                   {errMsg.perWeek}
                  </span>
                )}
                {errMsg.perMonth && (
                  <span class=" text-[10px] text-red-600 space-y-0 flex  justify-evenly">
                   {errMsg.perMonth}
                  </span>
                )}
          {/* package includes */}
          <div className="flex items-center gap-5 w-full">
            <label className="w-4/12" for="">
              Amenitites
            </label>
            <div className="w-8/12">
              <div className={`w-full  flex border-gray-400 border-[.1px] rounded-lg justify-between ${errMsg.amenitites?'border-red-500 focus:outline-red-400':''}`}>
                <input
                  onChange={()=> setErrMsg((prevErrMsg) => ({ ...prevErrMsg, amenitites: "" }))}
                  ref={amenityRef}
                  type="text"
                  name="capacity"
                  class="p-2 m-1 w-full"
                  placeholder="eg:Internet Access"
                />
                <button
                  type="button"
                  className="bg-PrimaryBlue-normal px-4 text-white rounded-r-lg"
                  onClick={() => AddAmenitites(amenityRef.current.value)}
                >
                  Add
                </button>
                
              </div>
              {errMsg.amenitites && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                   {errMsg.amenitites}
                  </span>
                )}
              {/* packages cards */}
              <div className="flex flex-wrap space-x-1">
                {amenitites?.map((item, index) => (
                  <PackageInputCard
                    index={index}
                    text={item}
                    removePackage={removePackage}
                  />
                ))}
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
                    className={`flex px-8 flex-col items-center justify-center w-full p-2 h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 ${errMsg.images?'border-red-300 focus:outline-red-400':''} `}
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
                  <ImageCard
                    img={item}
                    index={index}
                    removeImage={removeImage}
                    key={index}
                  />
                ))}
              </div>
              {errMsg.images && (
                  <span class=" text-[10px] text-red-600 space-y-0">
                   {errMsg.images}
                  </span>
                )}
            </div>
          </div>

          {errMsg.server && (
            <span class=" text-[10px] text-red-600 space-y-0">
              Unexpected Error Occured ! Please Try again.
            </span>
          )}

          <div class="w-full flex justify-end">
            <button
              type={`${progress ? "button" : "submit"}`}
              class="bg-[#DAA520] text-white rounded-full p-2 text-base font-normal flex justify-center items-center mt-5 w-44"
            >
              {!progress ? (
							<span id="saveSpanEdit">Save</span>
						) : (
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
