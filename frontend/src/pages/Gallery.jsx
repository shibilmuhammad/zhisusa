import React, { useState } from "react";
import SimplePageIntro from "../components/SimplePageIntro";
import { gallery, galleryIntro } from "../utils/gallery";
import Header from '../components/Header';
const Gallery = () => {
	const [selection, setSelection] = useState("All Images");
	const [updatedImages, setUpdatedImages] = useState(gallery);
	const [title, setTitle] = useState("Events Gallery");
	const [desc, setDesc] = useState(
		"Browse stunning photos of our enchanting weddings, sophisticated art exhibitions, joyful birthday celebrations, and dynamic musical festivals."
	);

	return (
		<div>
			 <Header />
			<SimplePageIntro
				data={{
					thumb: "../images/tent.jpg",
					title: "Gallery",
				}}
			/>
			<div className="mt-4 md:px-24 md:py-12">
				<div className="font-poppins flex flex-col items-center gap-2 px-3">
					<div className="hidden md:flex rounded-full mb-4 w-full border-2 border-navyBlue-dark_hover">
						{galleryIntro.map((data,index) => (
							<button
								onClick={(e) => {
									setSelection(data.type);
									const updatedList = [...gallery].filter(
										(item) => item.type === data.type
									);
									setUpdatedImages(updatedList);
									const title = [...galleryIntro].filter(
										(item) => item.type === data.type
									);
									const desc = [...galleryIntro].filter(
										(item) => item.type === data.type
									);
									setDesc(desc[0]?.description);
									setTitle(title[0]?.title);
									
								}}
								className={`${data.type === selection ? 'bg-navyBlue-normal text-white':'bg-white text-navyBlue-normal'} bg-navyBlue-normal p-2  ${index === 1 || index === 2 ? 'rounded-none': index === 0 ? 'rounded-s-full' : 'rounded-e-full'} text-lg font-poppins w-full`}>
								{data.type}
							</button>
						))}
					</div>
					<select
						className="md:hidden w-full rounded-lg border-2 border-navyBlue-normal p-2"
						name=""
						onChange={(e) => {
							setSelection(e.target.value);
							const updatedList = [...gallery].filter(
								(item) => item.type === e.target.value
							);
							setUpdatedImages(updatedList);
							const title = [...galleryIntro].filter(
								(item) => item.type === e.target.value
							);
							const desc = [...galleryIntro].filter(
								(item) => item.type === e.target.value
							);
							setDesc(desc[0]?.description);
							setTitle(title[0]?.title);
						}}
						id="">
						{galleryIntro.map((item) => (
							<option value={item.type}>{item.type}</option>
						))}
					</select>
					<span className="text-2xl text-navyBlue-normal md:text-4xl md:font-bold">
						{title}
					</span>
					<p className="text-navyBlue-dark_hover text-sm text-center md:text-lg md:w-7/12">
						{desc}
					</p>
				</div>
				<div className="grid grid-cols-1 mt-4 md:grid-cols-3 md:gap-5">
					{updatedImages.map((item) => (
						<img
							className="h-56 w-full object-cover"
							src={item.image}
							alt="thumb"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
