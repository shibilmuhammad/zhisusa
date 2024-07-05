import React from "react";

import FullScreenPage from "../components/FullScreenPage";

import { monthlyEscape, monthlyHavenCard, weeklyEscape, weeklyEscapeCard } from "../utils/packages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PackageFeatureCard from "../components/PackageFeatureCard";

import PackagesButton from "../components/PackagesButton";
import PackageCard from "../components/PackageCard";
import PackagesPricingCard from "../components/PackagesPricingCard";
const MonthlyHaven = () => {
  return (
    <div>
      <FullScreenPage
        Heading={"Monthly"}
        span={"Haven"}
        button={"Book Your Slot "}
        Description={
         "Escape daily life with our Monthly Haven package. Enjoy a month-long retreat in a serene environment, with luxurious accommodations, all-inclusive amenities, and activities to nourish your body, mind, and soul. Whether for focused work, personal growth, or a peaceful getaway, our Monthly Haven is your perfect sanctuary."
        }
      />
      <PackagesButton activeButton={"monthly"} />
      <PackageCard title={"A Month of Serenity"} data={monthlyHavenCard} />
      <div className="mt-4">
        <h1 className="flex justify-center items-center text-lg font-bold font-futura my-6   ">
          Experience your{" "}
          <span className="ml-2 text-PrimaryBlue-normal"> Perfect Month</span>
        </h1>
        <div className="px-5 pb-10 mt-5 space-y-5 lg:space-y-0 lg:grid grid-cols-4 lg:gap-10 gap-4 lg:px-10">
          {monthlyEscape.map((data) => {
            return <PackageFeatureCard data={data} />;
          })}
        </div>
      </div>
      <PackagesPricingCard
        per={"Month"}
        title={"Monthly Haven"}
        amenities={monthlyEscape}
      />
    </div>
  );
};

export default MonthlyHaven;
