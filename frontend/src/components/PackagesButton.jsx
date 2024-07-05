import React, { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button, Popover } from "flowbite-react";
const PackagesButton = ({ activeButton }) => {
  const popupref = useRef()
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);
  const popupContainer = useRef()
  const handleMenu = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleClickOutside = (event) => {
    if(!popupContainer.current.contains(event.target) ){
      setIsPopupVisible(false)
    }
    
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className="flex justify-center  text-xs    px-2 w-full mt-3  ">
        <div className="flex bg-white drop-shadow-[0_2px_0px_rgba(0,0,0,.4)] rounded-full  ">
          <Link
            to={"/dailyescape"}
            className={`py-2 lg:px-20 px-4  lg:text-base flex justify-center items-center border-r rounded-l-full ${
              activeButton == "daily"
                ? "bg-blue-500 text-white"
                : ":bg-white text-black"
            }`}
          >
            <span>Daily Escape</span>
          </Link>
          <Link
            to={"/weeklyretreat"}
            className={`py-2 lg:px-20 px-4  lg:text-base flex justify-center items-center border-r ${
              activeButton == "weekly"
                ? "bg-blue-500 text-white"
                : ":bg-white text-black"
            }`}
          >
            <span>Weekly Retreat</span>
          </Link>
          <div ref={popupContainer} className="relative">
            <Link
              to={"/monthlyhaven"}
              className={`py-2 lg:px-20 px-4  lg:text-base flex justify-center items-center border-r ${
                activeButton == "monthly"
                  ? "bg-blue-500 text-white"
                  : ":bg-white text-black"
              }`}
            >
              <span>Monthly haven</span>
            </Link>
            <div ref={popupref}   className={`absolute -bottom-5 ${isPopupVisible ? 'block' : 'hidden'}`}>
              <Link
               onClick={()=>setIsPopupVisible(false)}
                to={"/yearly"}
                className={`py-2  px-[2.3rem] bg-white
                }`}
              >
                <span>Yeaarly </span>
              </Link>
            </div>
          </div>
          <div onClick={handleMenu} className="  py-2 px-2  flex justify-center items-center lg:hidden  ">
            <IoIosMenu />
          </div>
          <Link
           
            to={"/yearly"}
            className={`py-2 lg:px-20 px-4 hidden lg:text-base lg:flex justify-center items-center border-r rounded-r-full ${
              activeButton == "yearly"
                ? "bg-blue-500 text-white"
                : ":bg-white text-black"
            }`}
          >
            <span>Yearly Sanctury</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackagesButton;
