import React from "react";

const ContactAddress = () => {
	return (
		<div className="font-poppins p-6 space-y-5 w-full">
			<div className="space-y-3">
				<h1 className="text-2xl font-bold">BOOKING</h1>
				<div className="flex flex-col space-y-1">
					<span>+91 1234567890</span>
					<span>Toll free number for booking</span>
				</div>
			</div>
            <div className="space-y-3">
				<h1 className="text-2xl font-bold">CORPORATE OFFICES</h1>
				<div className="flex flex-col space-y-1">
                    <h2 className="text-xl font-bold">CHENNAI OFFICE</h2>
					<span>+91 1234567890</span>
					<span>Alamparai Backwaters, Chennai
                    Tamilnadu - 640035</span>
				</div>
                <div className="flex flex-col space-y-1">
                    <h2 className="text-xl font-bold">COIMBATORE OFFICE</h2>
					<span>+91 1234567890</span>
					<span>Alamparai Backwaters, Chennai
                    Tamilnadu - 640035</span>
				</div>
			</div>

		</div>
	);
};

export default ContactAddress;
