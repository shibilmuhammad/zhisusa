import React from "react";
import Header from "../components/Header";
import BookRoomProgressCard from "../components/BookRoomProgressCard";
import RoomDeatilsModificationButton from "../components/RoomDeatilsModificationButton";
import ActivityDetailsCard from "../components/ActivityDetailsCard";
import {useSelector} from 'react-redux'
const ActivityDetailsMob = () => {
    const activities = useSelector((state) => state.activities.activities);
	return (
		<div className="h-[100vh] flex flex-col justify-between">
			<div>
				<Header bgColor={"white"} />
				<div className="mt-16">
					<BookRoomProgressCard active={2} />
				</div>
				<div className="block lg:hidden">
					<RoomDeatilsModificationButton />
				</div>
				<div className="p-4 font-poppins">
					<h1 className="text-lg font-bold underline underline-offset-8 ">
						Activity Details
					</h1>
					<div className="mt-5 grid grid-cols-1 gap-3">
                        {activities.map((item) => <ActivityDetailsCard data={item} />)}
						
					</div>
				</div>
			</div>

			<div className="font-poppins p-4 space-y-3 ">
				<hr />
				<div className="flex justify-between text-sm">
					<span>Activities Cost </span>
					<span>₹17550.00 </span>
				</div>
				<div className="flex justify-between text-sm">
					<span>Taxes and Fees </span>
					<span>₹550.00 </span>
				</div>
				<span className="underline">Details</span>
				<span></span>
				<hr />
				<div className="flex justify-between text-sm font-bold">
					<span>Total Cost </span>
					<span>₹17550.00 </span>
				</div>
				<button className="w-full bg-orange-normal p-2.5 text-white rounded-lg">
					Continue
				</button>
			</div>
		</div>
	);
};

export default ActivityDetailsMob;
