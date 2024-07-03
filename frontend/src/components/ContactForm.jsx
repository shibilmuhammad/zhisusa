import React from "react";

const ContactForm = () => {
	return (
		<div className="font-poppins p-6 space-y-5 w-full">
			<h1 className="text-3xl md:text-4xl tracking-widest text-navyBlue-normal mb-3">
				ENQUIRIES & RESERVATIONS
			</h1>
			<span className="text-skyBlue-dark_active md:text-lg">
				Send us your questions ,comments and requests by filling out the form
				below.
			</span>
			<form className="space-y-3" action="">
				<div className="flex flex-col gap-3">
					<label htmlFor="type">Enquiry Type</label>
					<select className="border-navyBlue-normal border-2 rounded-md p-2" name="" id="">
						<option value="General Enquiry">General Enquiry</option>
					</select>
				</div>
				<div className="flex flex-col gap-3">
					<label htmlFor="name">Name</label>
					<input className="border-2 rounded-md p-2 placeholder:text-sm" type="text" placeholder="Enter Your Name .."/>
				</div>
                <div className="flex flex-col gap-3">
					<label htmlFor="name">Email ID</label>
					<input className="border-2 rounded-md p-2 placeholder:text-sm" type="email" placeholder="Enter Your Email ID .."/>
				</div>
                <div className="flex flex-col gap-3">
					<label htmlFor="name">Contact Number</label>
					<input className="border-2 rounded-md p-2 placeholder:text-sm" type="phone" placeholder="Enter Your Phone Number .."/>
				</div>
                <div className="flex flex-col gap-3">
					<label htmlFor="name">Message</label>
					<textarea className="border-2 rounded-md p-2 min-h-52" type="phone" placeholder=""/>
				</div>
                <div className="flex gap-3 items-center pb-3">
					<input type="checkbox" />
					<span className="text-xs">I agree to the Privacy Policy of Zhususa, LLC</span>
				</div>
                <button className="bg-navyBlue-normal rounded-md w-full p-2 text-white">
                    Send Message
                </button>
			</form>
		</div>
	);
};

export default ContactForm;
