import React, { useState } from "react";
import { MdArrowBackIos, MdMan } from "react-icons/md";
import { tabs } from "../utils/home";
import { LuBedDouble } from "react-icons/lu";
import {
	Button,
	DatePicker,
	Dropdown,
	DropdownAction,
	DropdownContent,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "keep-react";
import { Calendar } from "phosphor-react";
import { format } from "date-fns";
import RoomsQuantityCard from "./RoomsQuantityCard";

const AvailabilitySideBar = () => {
	const [selected, setSelected] = useState("Work");
	return (
		<div className="hidden fixed inset-0 h-full z-[999] bg-white font-poppins">
			<div className="flex items-center gap-16">
				<button className="bg-PrimaryBlue-normal p-4 text-xl flex items-center justify-center text-white">
					<MdArrowBackIos />
				</button>
				<h1 className="text-lg font-bold">RESERVE YOUR SLOTS</h1>
			</div>
			<div className="p-4">
				<div className="border-[1px] flex w-full rounded-md border-PrimaryBlue-normal">
					{tabs.map((item, index) => (
						<button
							onClick={() => setSelected(item.title)}
							className={`${
								index === 0 || index === 1
									? "border-[1px] border-r-PrimaryBlue-normal"
									: "border-none"
							} ${
								selected === item.title
									? "bg-PrimaryBlue-normal text-white"
									: "bg-white text-PrimaryBlue-normal"
							} ${
								index === 0
									? "rounded-l-md "
									: index === 2
									? "rounded-r-md"
									: "rounded-none"
							} border-none flex items-center gap-3 justify-center w-full p-2.5`}>
							<item.icon />
							<span>{item.title}</span>
						</button>
					))}
				</div>
				<div className="mt-8 space-y-4">
					<div className="font-poppins space-y-2 flex flex-col w-full">
						<h2 className=" font-bold">Accommodation</h2>
						<div className="flex gap-3 rounded-lg border-[1px] border-PrimaryBlue-normal p-3 px-6 ">
							<LuBedDouble className="text-2xl text-PrimaryBlue-normal " />
							<select
								className="text-PrimaryBlue-normal outline-none text-sm w-full"
								name=""
								id="">
								<option value="Private Villa">Private Villa</option>
								<option value="Private Villa">Simple Living</option>
								<option value="Private Villa">Tent Stay</option>
								<option value="Private Villa">Luxury Room</option>
							</select>
						</div>
						<div className="font-poppins space-y-2 flex flex-col  w-full">
							<h2 className="font-bold">Check In & Check Out</h2>

							<div className="flex gap-3 rounded-lg border-[1px] border-PrimaryBlue-normal">
								<div className="dark:bg-white">
									<Popover showArrow={false} placement="top-start">
										<PopoverTrigger asChild>
											<Button
												className="w-max justify-start gap-2 rounded-lg text-left text-body-4 font-normal dark:bg-white dark:text-PrimaryBlue-normal "
												variant=""
												color="">
												<Calendar size={25} className="" />
												{selected ? (
													<>
														{format(selected?.from ?? new Date(), "LLL dd, y")}{" "}
														- {format(selected?.to ?? new Date(), "LLL dd, y")}
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
						<div className="font-poppins space-y-2 flex flex-col w-full">
							<h2 className=" font-bold">Quests & Rooms</h2>

							<Dropdown className="" placement="top">
								<DropdownAction className="hover:bg-white p-3 bg-none w-full bg-inherit items-start justify-start px-6 border-[1px] border-PrimaryBlue-normal flex gap-2">
									<MdMan className="text-2xl text-PrimaryBlue-normal " />
									<span className="text-PrimaryBlue-normal">
										1 Rooms,2 Adult
									</span>
								</DropdownAction>
								<DropdownContent>
									<RoomsQuantityCard />
								</DropdownContent>
							</Dropdown>
						</div>
                        <button className="w-full text-white mt-12 bg-PrimaryBlue-normal rounded-md p-2.5 ">
                            Search
                        </button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AvailabilitySideBar;
