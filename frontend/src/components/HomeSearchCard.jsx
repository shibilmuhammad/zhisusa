import React, { useState } from "react";
import { MdOutlineLaptopMac } from "react-icons/md";
import { LuBedDouble } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { MdMan } from "react-icons/md";
import { format } from "date-fns";
import { Calendar } from "phosphor-react";
import {
	Button,
	DatePicker,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "keep-react";
import { Dropdown, DropdownAction, DropdownContent } from "keep-react";
import RoomsQuantityCard from "./RoomsQuantityCard";
import { tabs } from "../utils/home";

const HomeSearchCard = () => {
	const [selected, setSelected] = useState(null);
	const [selectedTab,setSelectedTab] = useState('Work')
	const tabChange = (title) => {
		setSelectedTab(title)
	}
	return (
		<div className="hidden z-20 border-[1px] border-white md:block backdrop-blur-md bg-white/30 p-3 rounded-lg w-5/6 h-max 2xl:w-9/12">
			<div className="flex w-full gap-20 px-8 h-12">
				{tabs.map((item,index) => (
					<>
						<button onClick={()=>tabChange(item?.title)} className={`flex items-center gap-5 justify-center px-8 w-full  ${item.title === selectedTab ? 'bg-PrimaryBlue-normal':'bg-none'} p-2 rounded-lg text-white font-poppins`}>
							<item.icon className="text-2xl" />
							<span className="text-lg">{item?.title}</span>
						</button>
						{index < 2 && <div className="h-full w-[2px] bg-white"></div>}
						
					</>
				))}
			</div>
			<div className="rounded-lg bg-white p-3 w-full mt-4 flex px-6 h-32 gap-5">
				<div className="font-poppins space-y-3 flex flex-col items-center w-full">
					<h2 className="text-lg font-bold">Accommodation</h2>
					<div className="flex gap-3 rounded-lg border-[1px] border-PrimaryBlue-normal p-3 px-6 ">
						<LuBedDouble className="text-2xl text-PrimaryBlue-normal " />
						<select
							className="text-PrimaryBlue-normal outline-none text-sm"
							name=""
							id="">
							<option value="Private Villa">Private Villa</option>
							<option value="Private Villa">Simple Living</option>
							<option value="Private Villa">Tent Stay</option>
							<option value="Private Villa">Luxury Room</option>
						</select>
					</div>
				</div>
				<div className="h-full w-[2px] bg-PrimaryBlue-normal rounded-full"></div>
				<div className="font-poppins space-y-3 flex flex-col items-center w-full">
					<h2 className="text-lg font-bold">Check In & Check Out</h2>

					<div className="flex gap-3 rounded-lg border-[1px] border-PrimaryBlue-normal px-6 ">
						<div className="dark:bg-white">
							<Popover showArrow={false} placement="top-start">
								<PopoverTrigger asChild>
									<Button
										className="w-max justify-start gap-2 rounded-xl text-left text-body-4 font-normal dark:bg-white dark:text-PrimaryBlue-normal "
										variant=""
										color="">
										<Calendar size={25} className="" />
										{selected ? (
											<>
												{format(selected?.from ?? new Date(), "LLL dd, y")} -{" "}
												{format(selected?.to ?? new Date(), "LLL dd, y")}
											</>
										) : (
											<span>Select Check In & Check Out Date</span>
										)}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="z-50 max-w-min ">
									<DatePicker
										mode="range"
										numberOfMonths={2}
										selected={selected}
										onSelect={setSelected}
										showOutsideDays={true}
									/>
								</PopoverContent>
							</Popover>
						</div>
					</div>
				</div>
				<div className="h-full w-[2px] bg-PrimaryBlue-normal rounded-full"></div>
				<div className="font-poppins space-y-3 flex flex-col items-center w-full">
					<h2 className="text-lg font-bold">Quests & Rooms</h2>

					<Dropdown className="w-max " placement="top">
						<DropdownAction className="hover:bg-white p-3 bg-none bg-inherit border-[1px] border-PrimaryBlue-normal flex items-center gap-5">
							<MdMan className="text-2xl text-PrimaryBlue-normal " />
							<span className="text-PrimaryBlue-normal">1 Rooms,2 Adult</span>
						</DropdownAction>
						<DropdownContent>
							<RoomsQuantityCard />
						</DropdownContent>
					</Dropdown>
				</div>
				<div className="h-full w-[2px] bg-PrimaryBlue-normal rounded-full"></div>
				<div className="font-poppins space-y-3 flex flex-col">
					<h2 className="text-lg font-bold">Availability</h2>
					<button className="flex gap-3 rounded-lg bg-PrimaryBlue-normal p-3 px-6 text-white w-max">
						<CiSearch className="text-2xl " />
						<span className="font-poppins "> Search</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomeSearchCard;
