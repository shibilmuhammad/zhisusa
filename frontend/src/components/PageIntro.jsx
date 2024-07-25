import React from "react";

const PageIntro = ({data}) => {
	return (
		<div className={`  h-[70vh] md:h-[100vh] object-center  z-10  relative`}>
			<img className="h-full w-full object-cover absolute -z-20" src={data?.thumb} alt="" />
			<div className="absolute z-20 flex flex-col gap-5 justify-center h-[70vh] md:h-[100vh] px-6 md:px-24 md:items-center">
				<h1 className="text-white text-2xl md:text-5xl font-poppins font-medium">
					{data?.title}
				</h1>
				<p className="text-white font-poppins text-sm md:text-lg md:text-center md:w-5/6" >
					{data?.description}
				</p>
				<button className="border-[1px] font-poppins text-white rounded-full border-white px-4 p-2.5 md:mt-24">
					{data?.button}
				</button>
			</div>
			
			<div className="absolute  bg-transparent p-8 w-full bg-gradient-to-t from-black  z-10 -bottom-1 right-0"></div>

			<div className="absolute inset-0 z-10 md:h-[100vh] h-[70vh] bg-black opacity-60"></div>
		</div>
	);
};

export default PageIntro;
