import React from "react";
import FullScreenPage from "../components/FullScreenPage";
import { IoIosMenu } from "react-icons/io";
import SimpleSlider, { Slideshow } from "../components/Slideshow";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dailyEscape } from "../utils/packages";
import PackageFeatureCard from "../components/PackageFeatureCard";

import PackagesButton from "../components/PackagesButton";
import PackageCard from "../components/PackageCard";
import PackagesPricingCard from "../components/PackagesPricingCard";
const Packages = () => {
  
  return (
    <div>
      <FullScreenPage
        Heading={"Daily"}
        span={"Escape"}
        button={"Book Your Slot "}
        Description={
          "Rejuvenate with a day in nature with our Daily Escape package. Enjoy a gourmet meal, peaceful garden walks, serene lake boating, and relaxing yoga and meditation sessions. Perfect for a quick getaway to refresh and recharge."
        }
      />
    <PackagesButton />
    <PackageCard />
      <div className="mt-4">
      <h1 className="flex justify-center items-center text-2xl font-bold font-futura my-6   ">
            Experience  your {" "}
            <span className="ml-2 text-PrimaryBlue-normal"> Perfect Day</span>
          </h1>
          <div className="px-5 pb-10 mt-5 space-y-5 lg:space-y-0 lg:grid grid-cols-3 gap-4 lg:px-10">
            {dailyEscape.map((data)=>{
                return(
               <PackageFeatureCard data={data} />
             )
            })}
         
          </div>
      </div>
            <PackagesPricingCard />
    </div>
  );
};

export default Packages;