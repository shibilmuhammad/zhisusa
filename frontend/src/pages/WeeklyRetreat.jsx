import React from "react";
import FullScreenPage from "../components/FullScreenPage";

import { weeklyEscape, weeklyEscapeCard } from "../utils/packages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PackageFeatureCard from "../components/PackageFeatureCard";
import Header from '../components/Header';
import PackagesButton from "../components/PackagesButton";
import PackageCard from "../components/PackageCard";
import PackagesPricingCard from "../components/PackagesPricingCard";
const WeeklyRetreat = () => {
  return (
    <div>
       <Header />
    <FullScreenPage
      Heading={"Weekly"}
      span={"Retreat"}
      button={"Book Your Slot "}
      Description={
        "Escape the everyday with our Weekly Retreat package, balancing work and leisure. Enjoy luxurious accommodations, gourmet meals, and activities to rejuvenate your mind and body. Whether you seek focused solitude or wellness and recreation, our retreat is your perfect sanctuary."
      }
    />
  <PackagesButton activeButton={"weekly"}/>
  <PackageCard title={"A Week of Tranquility"} data={weeklyEscapeCard}  />
    <div className="mt-4">
    <h1 className="flex justify-center items-center text-xl font-bold font-futura my-6   ">
          Experience  your {" "}
          <span className="ml-2 text-PrimaryBlue-normal"> Perfect Week</span>
        </h1>
        <div className="px-5 pb-10 mt-5 space-y-5 lg:space-y-0 lg:grid grid-cols-4 lg:gap-10 gap-4 lg:px-10">
          {weeklyEscape.map((data)=>{
              return(
             <PackageFeatureCard data={data} />
           )
          })}
       
        </div>
    </div>
          <PackagesPricingCard per={"Week"} title={"Weekly Retreat"} amenities={weeklyEscape}/>
  </div>
  )
}

export default WeeklyRetreat
