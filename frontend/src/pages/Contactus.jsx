import React from "react";
import SimplePageIntro from "../components/SimplePageIntro";
import ContactForm from "../components/ContactForm";
import ContactAddress from "../components/ContactAddress";

const Contactus = () => {
	return (
		<div>
			<SimplePageIntro
				data={{
					thumb: "../images/tent.jpg",
					title: "Contact us",
				}}
			/>
            <div className="md:flex md:px-24 md:py-8 gap-28">
                <ContactForm/>
                <ContactAddress/>

            </div>
		</div>
	);
};

export default Contactus;
