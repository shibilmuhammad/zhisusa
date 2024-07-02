import React from "react";

const MobileStripedIntro = ({type,data}) => {
	return (
		<div className="flex flex-col gap-3">
			<div className="relative">
				<div>
					<img
						className="rounded-b-3xl "
						src="../images/music.jpg"
						alt="thumb"
					/>
				</div>
				<div className="text-2xl font-poppins font-bold absolute bottom-0 p-4 z-20">
					<span className=" text-white">{data?.title}</span>
					<span className={`${type === 'host' ? 'text-orange-normal' : 'text-PrimaryBlue-normal'} block `}>Events</span>
				</div>
                <div className="absolute inset-0 z-10 bg-black opacity-70 rounded-b-3xl"></div>
			</div>
            <div className="px-6 space-y-4">
                
                <p className={`${type === 'host' ? 'text-orange-dark_hover':'text-PrimaryBlue-dark_active'} font-poppins text-sm`}>
					{data?.description}
				</p>
                <div className={`${type === 'host' ? 'bg-orange-normal' : 'bg-PrimaryBlue-normal'} p-[2px] `}></div>
            </div>
            
		</div>
	);
};

export default MobileStripedIntro;
