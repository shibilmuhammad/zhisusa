import React from 'react'
import { BsCake2Fill } from 'react-icons/bs';
import { FaClipboardList, FaMusic } from 'react-icons/fa6';
import { GiOfficeChair } from 'react-icons/gi';
import { MdBedroomParent, MdCategory, MdDashboard, MdSurfing } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SideBar = ({active}) => {
    const sideBar = [
    
        { title: "Dashboard", src: "", icon: MdDashboard },
        { title: "Bookings", src: "", icon: FaClipboardList },
        { title: "Categories", src: "/admin/categories", icon: MdCategory },
        { title: "Live Types", src: "/admin/live", icon: MdBedroomParent },
        { title: "Work Types", src: "", icon: GiOfficeChair },
        { title: "Activity Types", src: "/admin/activity", icon: MdSurfing },
        { title: "Event Types", src: "/admin/events", icon: BsCake2Fill },
        { title: "Zhisusa Events", src: "/admin/zhisusaEvents", icon: FaMusic },
      ];
  return (
    <div className="left mt-28  space-y-4 border-r-[.1px] border-gray-400 w-fit pt-1 pb-1 pr-10">
            {sideBar.map((item)=>
                <Link
                to={item.src}
                className={`${active === item.title ? 'bg-PrimaryBlue-normal text-white rounded-lg hover:bg-PrimaryBlue-normal' : 'bg-transparent rounded-sm hover:bg-gray-200'} flex items-center whitespace-nowrap space-x-2 cursor-pointer  px-3 py-3`}
            >
                <item.icon />
                <h2 className={`${active === item.title ? ' text-white' : 'text-[#7E7878]'} text-base font-semibold `}>
                {item.title}
                </h2>
            </Link>
            )}
          
        </div>
  )
}

export default SideBar