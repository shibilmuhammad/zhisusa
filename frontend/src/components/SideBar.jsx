import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const SideBar = ({setOpen ,open}) => {
  const menu = [
    { title: "Home", src: "/" },
    { title: "Accomodations", src: "/accommodation" },
    { title: "Amenities", src: "/amenities" },
    { title: "Activities", src: "/activites" },
    { title: "Events", src: "/events" },
    { title: "Packages", src: "/weeklyretreat" },
    { title: "Book a space", src: "/work" },
  ];
  const additionalMenu = [
    { title: "About Us", src: "/aboutus" },
    { title: "Contact Us", src: "/contactus" },
    { title: "Privacy & Policy", src: "/accommodation" },
    { title: "Gallery", src: "/gallery" },
  ];
    
    
    

  return (
    <div className={`h-screen ${open?"translate-x-0":"translate-x-full" } transition-transform duration-500 w-full bg-white top-0  fixed  z-[9999] `}>
      <div className="flex items-center  justify-between px-4 py-4 bg-navyBlue-normal text-white">
        <p className="font-bold text-lg">LOGO</p>
        <div className="flex items-center space-x-5">
          <p>LOIGN/JOIN</p>
          <IoMdClose onClick={()=>setOpen(false)} className="text-2xl" />
        </div>
      </div>

      <div className="text-[#666666]  px-4  mt-6">
        <div className="border-b-[.2px] border-b-[#666666] flex pb-3 flex-col space-y-3">
            {menu.map((item)=>
                 <Link to={item.src}>{item.title}</Link>
            )}     
        </div>

        <div className="border-b-[.2px] border-b-[#666666]  mt-4 flex pb-3 flex-col space-y-3">
            {additionalMenu.map((item)=>
                 <Link to={item.src}>{item.title}</Link>
            )}     
        </div>
      </div>
      <div className="flex space-x-8 px-4 mt-5 text-3xl">
        <FaSquareInstagram />
        <FaFacebookSquare />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default SideBar;
