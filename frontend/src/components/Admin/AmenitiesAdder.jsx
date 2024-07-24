import React from "react";
import { MdDone, MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
	addItem,
	addPackage,
	deleteItem,
	deletePackage,
	updateItemTitle,
	updatePackageName,
} from "../../utils/amenitiesAdminSlice";

const AmenitiesAdder = () => {
	const dispatch = useDispatch();
	const updatePackage = (packageId, name) => {
		dispatch(updatePackageName({ packageId, name }));
	};
	const updatePackageItem = (packageId, title, itemId) => {
		dispatch(updateItemTitle({ packageId, title, itemId }));
	};
	const addPackageItem = (packageId, title) => {
		dispatch(addItem({ packageId, title }));
	};
	const addPackageNew = () => {
		dispatch(addPackage());
	};
	const removePackage = (id) => {
		dispatch(deletePackage(id));
	};
	const removePackageItem = (packageId, itemId) => {
		dispatch(deleteItem({ packageId, itemId }));
	};
	const packages = useSelector((state) => state?.amenitiesAdmin?.packages);
	return (
		<div className="border-[1px] rounded-lg p-4 w-full space-y-2">
			<div className="flex justify-between">
				<h1 className="underline font-bold ">Packages</h1>
				<button
					type="button"
					onClick={() => addPackageNew()}
					className="bg-PrimaryBlue-normal px-3 text-xs rounded-md p-1.5 text-white">
					Add Package
				</button>
			</div>
			<div className="grid grid-cols-2 gap-3 w-full">
				{packages?.map((packageItem, packageIndex) => (
					<div className="border-[1px] p-2 w-full">
						<div className=" flex">
							{packageItem.items.length < 1 ? (
								<div className="flex w-full border-[1px] rounded-md ">
									<input
										className="rounded-md w-full placeholder:text-xs px-3"
										type="text"
										value={packageItem.name}
										onChange={(e) =>
											updatePackage(packageItem.id, e.target.value)
										}
										placeholder="Enter Title"
									/>
									<button
										type="button"
										onClick={() => {
											if (packageItem.name.trim() !== "")
												addPackageItem(packageItem.id, "");
										}}
										className="bg-orange-normal p-2 rounded-r-md text-white">
										<MdDone />
									</button>
								</div>
							) : (
								<div className="flex w-full justify-between items-center">
									<span>
										{packageIndex + 1}. {packageItem.name}
									</span>
									<button
										type="button"
										onClick={() => {
											if (
												packageItem?.items[
													packageItem?.items?.length - 1
												]?.title.trim() !== ""
											)
												addPackageItem(packageItem.id, "");
										}}
										className="p-2 text-PrimaryBlue-normal text-xl">
										<IoAdd />
									</button>
								</div>
							)}
							<button
								type="button"
								onClick={() => removePackage(packageItem.id)}
								className=" text-red-500 text-lg ml-2">
								<MdDelete />
							</button>
						</div>
						{packageItem?.items?.map((item, index) => (
							<div className="mt-2">
								<div className="flex w-full border-[1px]">
									<div className=" p-1.5 px-3 h-max">{index + 1}.</div>
									<input
										className={` w-full placeholder:text-xs border-`}
										type="text"
										name=""
										id=""
										value={item.title}
										onChange={(e) =>
											updatePackageItem(packageItem.id, e.target.value, item.id)
										}
										placeholder="Enter Title"
									/>
									{packageItem?.items?.length - 1 === index ? (
										<button
											type="button"
											onClick={() => {
												if (item.title.trim() !== "")
													addPackageItem(packageItem.id, "");
											}}
											className=" p-2 bg-gray-200">
											<MdDone />
										</button>
									) : (
										<button
											onClick={() => removePackageItem(packageItem.id, item.id)}
											type="button"
											className=" p-2 bg-gray-200">
											<MdDelete />
										</button>
									)}
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default AmenitiesAdder;
