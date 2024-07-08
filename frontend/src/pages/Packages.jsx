import React from "react";
import FullScreenPage from "../components/FullScreenPage";
import Header from '../components/Header';
import { DailyEscapeCard } from "../utils/packages";
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
       <Header />
      <FullScreenPage
        Heading={"Daily"}
        span={"Escape"}
        button={"Book Your Slot "}
        Description={
          "Rejuvenate with a day in nature with our Daily Escape package. Enjoy a gourmet meal, peaceful garden walks, serene lake boating, and relaxing yoga and meditation sessions. Perfect for a quick getaway to refresh and recharge."
        }
      />
    <PackagesButton activeButton={"daily"}/>
    <PackageCard title={"A Day and Night "} data={DailyEscapeCard}  />
      <div className="mt-4">
      <h1 className="flex justify-center items-center text-xl font-bold font-futura my-6   ">
            Experience  your {" "}
            <span className="ml-2 text-PrimaryBlue-normal"> Perfect Day</span>
          </h1>
          <div className="px-5 pb-10 mt-5 space-y-5 lg:space-y-0 lg:grid grid-cols-4 lg:gap-10 gap-4 lg:px-10">
            {dailyEscape.map((data)=>{
                return(
               <PackageFeatureCard data={data} />
             )
            })}
         
          </div>
      </div>
            <PackagesPricingCard per={"Day"} title={"Daily Escape"} amenities={dailyEscape}/>
    </div>
  );
};

export default Packages;
