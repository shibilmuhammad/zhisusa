import React from 'react'

import FullScreenPage from "../components/FullScreenPage";

import { monthlyEscape, monthlyHavenCard, weeklyEscape, weeklyEscapeCard, yearlySanctuary } from "../utils/packages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PackageFeatureCard from "../components/PackageFeatureCard";

import PackagesButton from "../components/PackagesButton";
import PackageCard from "../components/PackageCard";
import PackagesPricingCard from "../components/PackagesPricingCard";
import Header from '../components/Header';
const Yearly = () => {
  return (
    <div>
         <Header />
    <FullScreenPage
      Heading={"Yearly"}
      span={"Sanctury"}
      button={"Book Your Slot "}
      Description={
       "Join our Yearly Sanctuary package for a transformative journey of growth and renewal. Experience luxurious accommodations, daily gourmet meals, and tailored wellness programs. Engage in skill development, personal growth, and community events for a year of inspiration and fulfillment."
      }
    />
    <PackagesButton activeButton={"yearly"} />
    <PackageCard title={"A Year of Blissful Retreats"} data={monthlyHavenCard} />
    <div className="mt-4">
      <h1 className="flex justify-center items-center text-xl font-bold font-futura my-6   ">
        Embrace Your{" "}
        <span className="ml-2 text-PrimaryBlue-normal"> Perfect Year</span>
      </h1>
      <div className="px-5 pb-10 mt-5 space-y-5 lg:space-y-0 lg:grid grid-cols-4 lg:gap-10 gap-4 lg:px-10">
        {yearlySanctuary.map((data) => {
          return <PackageFeatureCard data={data} />;
        })}
      </div>
    </div>
    <PackagesPricingCard
      per={"Year"}
      title={"Yearly Sanctury"}
      amenities={yearlySanctuary}
    />
  </div>
  )
}

export default Yearly
