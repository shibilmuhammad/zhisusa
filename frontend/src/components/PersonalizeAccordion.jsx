import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { roomPersonalize } from "../utils/personalize";
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "keep-react";
import {
	decrementCount,
	incrementCount,
	resetCount,
} from "../utils/packageSlice";
import useIsMobile from "../hooks/useIsMobile";


const PersonalizeAccordion = ({ type }) => {
	const [desktop,setDesktop] = useState(false)
	const isMobile = useIsMobile()
	const data = useSelector((state) => state?.package?.data);
	const dispatch = useDispatch();
	const list = roomPersonalize.filter((item) => item.type === type);
	const [selectedPackage, setSelectedPackage] = useState("");
	const openAccordion = (index) => {
		list[index].category === selectedPackage
			? setSelectedPackage("")
			: setSelectedPackage(list[index].category);
	};
	const selectSubPackage = (item, checked) => {
		if (!checked) {
			dispatch(resetCount({ name: item }));
		} else {
			dispatch(incrementCount({ name: item }));
		}
	};
	const increaseCount = (item) => {
		dispatch(incrementCount({ name: item }));
	};
	const descreaseCount = (item) => {
		dispatch(decrementCount({ name: item }));
	};
	return (
		<div className="w-full px-8 mt-3">
			{list.map((item, index) => (
				<div
					id={``}
					className={`${
						selectedPackage === item.category
							? "bg-[#F4F4F4] md:bg-white md:rounded-none md:border-none rounded-lg border-[1px] border-skyBlue-dark_active pb-4 px-3"
							: "bg-white"
					}`}>
					<div
						onClick={() => {
							if(isMobile) openAccordion(index)
						}}
						className="flex cursor-pointer justify-between w-full p-2 ">
						<span className="font-bold md:text-lg">
							{index + 1}. {item.category}
						</span>
						<button className="md:hidden">
							{selectedPackage === list[index].category ? (
								<MdOutlineKeyboardArrowUp className="text-2xl" />
							) : (
								<MdOutlineKeyboardArrowDown className="text-2xl" />
							)}
						</button>
					</div>

					{(item.category === selectedPackage || !isMobile) && (
						<div className="md:flex">
							{item?.subList?.map((item, index) => (
								<div className="space-y-5 ">
									<div
										className={`${
											data.find((pkg) => pkg.name === item).count > 0
												? "border-[1px] mb-3 border-gray-300 rounded-lg w-max py-2 md:mr-3"
												: ""
										} space-y-2`}>
										<div className="flex gap-2 items-center px-4 my-2">
											<div className="h-5 flex items-center">
												<input
													onChange={(e) =>
														selectSubPackage(item, e.target.checked)
													}
													checked={
														data.find((pkg) => pkg.name === item).count > 0
															? true
															: false
													}
													className="w-5 h-5 border rounded bg-green-500 focus:ring-3 focus:ring-blue-300"
													type="checkbox"
													name=""
													id=""
												/>
											</div>

											<span>{item}</span>
										</div>
										{data.find((pkg) => pkg.name === item).count > 0 && !desktop &&(
											<div className="flex items-center gap-5 font-poppins w-full px-4">
												<span className="text-sm text-gray-500">Guests</span>
												<div className="flex gap-2 items-center">
													<button
														onClick={() => descreaseCount(item)}
														className="text-white bg-PrimaryBlue-normal text-sm h-5 w-5 rounded-full flex items-center justify-center">
														<FaMinus />
													</button>
													<span className="text-sm text-gray-500">
														{data.find((pkg) => pkg.name === item).count}
													</span>
													<button
														onClick={() => increaseCount(item)}
														className="text-white bg-PrimaryBlue-normal text-xs h-5 w-5 rounded-full flex items-center justify-center">
														<FaPlus />
													</button>
												</div>
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default PersonalizeAccordion;
