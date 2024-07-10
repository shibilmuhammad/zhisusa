import React, { useDebugValue, useState } from "react";
import { MdOutlineLaptopMac } from "react-icons/md";
import { LuBedDouble } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { MdMan } from "react-icons/md";
import { format } from "date-fns";
import { Calendar } from "phosphor-react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import {
	Button,
	DatePicker,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "keep-react";
import { Dropdown, DropdownAction, DropdownContent } from "keep-react";
import RoomsQuantityCard from "./RoomsQuantityCard";
import { tabs, textFormat } from "../utils/home";
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { addRoom } from "../utils/roomCountSlice";
const HomeSearchCard = () => {
	const rooms = useSelector((state) => state.roomCount.rooms);
	const [selected, setSelected] = useState(null);
	const [selectedTab, setSelectedTab] = useState("Work");
	const tabChange = (title) => {
		setSelectedTab(title);
	};
	const navigate = useNavigate();
	const dispatch = useDispatch()

	return (
		<div className="hidden z-20 border-[0.5px] border-white md:block glass p-3 rounded-xl xl:w-9/12 h-max">
			<div className="flex w-full gap-20 px-8 h-12">
				{tabs.map((item, index) => (
					<>
						<button
							onClick={() => tabChange(item?.title)}
							className={`flex items-center gap-5 justify-center px-6 w-full  ${
								item.title === selectedTab ? "bg-PrimaryBlue-normal" : "bg-none"
							} p-1 rounded-lg text-white font-poppins`}>
							<item.icon className="text-xl" />
							<span className="">{item?.title}</span>
						</button>
						{index < 2 && <div className="h-full w-[2px] bg-white"></div>}
					</>
				))}
			</div>
			<div className="rounded-xl bg-white p-2 w-full mt-2 flex px-4 h-max gap-3">
				<div className="font-poppins space-y-2 flex flex-col items-center w-full">
					<h2 className=" font-bold">
						{textFormat.filter((item) => item.type === selectedTab)[0].title}
					</h2>
					<div className="flex gap-3 rounded-lg border-[1px] border-PrimaryBlue-normal p-3 px-6 ">
						<MdOutlineSpaceDashboard className="text-2xl text-PrimaryBlue-normal " />
						<select
							className="text-PrimaryBlue-normal outline-none text-sm"
							name=""
							id="">
							{textFormat
								.filter((item) => item.type === selectedTab)[0]
								.list.map((item) => (
									<option value={item}>{item}</option>
								))}
						</select>
					</div>
				</div>
				<div className="h-24 w-[2px] bg-PrimaryBlue-normal rounded-full"></div>
				<div className="font-poppins space-y-2 flex flex-col items-center w-full">
					<h2 className="font-bold">
						{textFormat.filter((item) => item.type === selectedTab)[0].date}
					</h2>

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
											<span>Select Dates</span>
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
				<div className="h-24 w-[2px] bg-PrimaryBlue-normal rounded-full"></div>
				<div className="font-poppins space-y-2 flex flex-col items-center w-full">
					<h2 className=" font-bold">
						{textFormat.filter((item) => item.type === selectedTab)[0].count}
					</h2>

					<Dropdown className="w-max " placement="top">
						<DropdownAction className="hover:bg-white p-3 bg-none bg-inherit border-[1px] border-PrimaryBlue-normal flex items-center gap-5">
							<MdMan className="text-2xl text-PrimaryBlue-normal " />
							<span className="text-PrimaryBlue-normal">1 Rooms,2 Adult</span>
						</DropdownAction>
						<DropdownContent className="">
							{rooms?.map((item) => <RoomsQuantityCard data={item} />)}
							
							<button onClick={()=> dispatch(addRoom(rooms.length+1))} className="mt-4 flex flex-col dark:text-white justify-center items-center w-full">
								<span className="underline ">Add More Rooms</span>
							</button>
						</DropdownContent>
					</Dropdown>
				</div>
				<div className="h-24 w-[2px] bg-PrimaryBlue-normal rounded-full"></div>
				<div className="font-poppins space-y-2 flex flex-col items-center">
					<h2 className="font-bold">Availability</h2>
					<button
						onClick={() => navigate("/bookroom")}
						className="flex gap-3 rounded-lg bg-PrimaryBlue-normal p-3 px-6 text-white w-max items-center">
						<CiSearch className="text-2xl " />
						<span className="font-poppins text-sm"> Search</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomeSearchCard;
