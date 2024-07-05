import React from "react";
import SimplePageIntro from "../components/SimplePageIntro";
import ContactForm from "../components/ContactForm";
import ContactAddress from "../components/ContactAddress";
import Header from '../components/Header';
const Contactus = () => {
	return (
		<div>
			 <Header />
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
