import React from "react";
import SimplePageIntro from "../components/SimplePageIntro";

const Gallery = () => {
	return (
		<div>
			<SimplePageIntro
				data={{
					thumb: "../images/tent.jpg",
					title: "Gallery",
				}}
			/>
			<div className="mt-4">
				<div className="font-poppins flex flex-col items-center gap-2 px-3">
                    <select className="w-full rounded-lg border-2 border-navyBlue-normal p-2" name="" id="">
                        <option value="Events">Events</option>
                        <option value="Activities">Activities</option>
                    </select>
					<span className="text-2xl text-navyBlue-normal">Events Gallery</span>
					<p className="text-navyBlue-dark_hover text-sm text-center">
						Browse stunning photos of our enchanting weddings, sophisticated art
						exhibitions, joyful birthday celebrations, and dynamic musical
						festivals.
					</p>
				</div>
                <div className="grid grid-cols-1 mt-4">
                    <div>
                        <img className="h-56 w-full object-cover" src="../images/celebration.jpg" alt="thumb" />
                    </div>
                    <div>
                        <img className="h-56 w-full object-cover" src="../images/wedding.jpg" alt="thumb" />
                    </div>
                    <div>
                        <img className="h-56 w-full object-cover" src="../images/art.jpg" alt="thumb" />
                    </div>
                    <div>
                        <img className="h-56 w-full object-cover" src="../images/music.jpg" alt="thumb" />
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Gallery;
