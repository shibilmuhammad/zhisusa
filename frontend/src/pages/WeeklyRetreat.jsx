import React from "react";
import FullScreenPage from "../components/FullScreenPage";

import { DailyEscapeCard, weeklyEscape, weeklyEscapeCard } from "../utils/packages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dailyEscape } from "../utils/packages";
import PackageFeatureCard from "../components/PackageFeatureCard";

import PackagesButton from "../components/PackagesButton";
import PackageCard from "../components/PackageCard";
import PackagesPricingCard from "../components/PackagesPricingCard";
const WeeklyRetreat = () => {
  return (
    <div>
    <FullScreenPage
      Heading={"Weekly"}
      span={"Retreat"}
      button={"Book Your Slot "}
      Description={
        "Escape the everyday with our Weekly Retreat package, designed for a perfect balance of work and leisure. Immerse yourself in a serene environment that enhances productivity and relaxation. Enjoy luxurious accommodations, gourmet meals, and a variety of activities tailored to rejuvenate your mind and body. Whether you're seeking solitude for focused work or opportunities for wellness and recreation, our Weekly Retreat offers an ideal sanctuary for your needs."
      }
    />
  <PackagesButton activeButton={"weekly"}/>
  <PackageCard data={weeklyEscapeCard}  />
    <div className="mt-4">
    <h1 className="flex justify-center items-center text-2xl font-bold font-futura my-6   ">
          Experience  your {" "}
          <span className="ml-2 text-PrimaryBlue-normal"> Perfect Day</span>
        </h1>
        <div className="px-5 pb-10 mt-5 space-y-5 lg:space-y-0 lg:grid grid-cols-3 gap-4 lg:px-10">
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
