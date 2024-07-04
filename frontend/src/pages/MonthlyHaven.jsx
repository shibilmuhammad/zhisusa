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
         "Escape the hustle and bustle of daily life with our Monthly Haven package, offering a sanctuary for a month-long retreat. Immerse yourself in a serene environment where you can work, relax, and rejuvenate at your f pace. Enjoy luxurious accommodations, all-inclusive amenities, and a variety of activities designed to nourish your body, mind, and soul. Whether you're seeking a quiet space for focused work, opportunities for personal growth, or simply a peaceful getaway, our Monthly Haven provides the perfect setting for a transformative experience."
        }
      />
      <PackagesButton activeButton={"monthly"} />
      <PackageCard title={"A Month of Serenity"} data={monthlyHavenCard} />
      <div className="mt-4">
        <h1 className="flex justify-center items-center text-2xl font-bold font-futura my-6   ">
          Experience your{" "}
          <span className="ml-2 text-PrimaryBlue-normal"> Perfect Month</span>
        </h1>
        <div className="px-5 pb-10 mt-5 space-y-5 lg:space-y-0 lg:grid grid-cols-3 gap-4 lg:px-10">
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
