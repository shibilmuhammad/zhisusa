import React from "react";

const WorkCard = ({ data }) => {
	return (
		<div className=" rounded-3xl font-poppins lg:bg-white lg:h-[21rem] shadow-[0_2px_0px_rgba(0,0,0,.4)] lg:shadow-none">
			<img
				className="rounded-t-3xl h-40 w-full object-cover"
				src={data?.thumbnail}
				alt="thumb"
			/>
			<div className="flex flex-col justify-between w-full md:px-6 items-center gap-2 my-3 h-36">
				<div className="flex flex-col items-center gap-2">
					<h1 className="text-xl font-bold">{data?.title}</h1>
					<p className="text-center text-sm w-4/6 lg:w-auto">{data?.shortDec}</p>
				</div>

				<button className="rounded-xl px-12 p-2 text-white bg-PrimaryBlue-normal text-sm">
					{data?.buttonText}
				</button>
			</div>
		</div>
	);
};

export default WorkCard;
