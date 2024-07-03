import React from "react";
import Slider from "react-slick";
import settings from "../utils/sliderSettings";
import { DailyEscapeCard } from "../utils/packages";
const PackageCard = () => {
  return (
    <div>
      <div className="mt-5 border border-black lg:mx-10 lg:px-5  p-2 mx-2 rounded-lg ">
        <div>
          <h1 className="flex justify-center lg:hidden lg:ml-3 lg:mt-3 items-center text-2xl font-semibold font-poppins ">
            A Day and Night{" "}
            <span className="ml-2 text-PrimaryBlue-normal"> With Us</span>
          </h1>
          <div className="lg:flex">
            <div className="relative lg:hidden">
              <Slider {...settings}>
                <div className="mt-5">
                  <img
                    className="w-full h-56 rounded-lg"
                    src="../images/luxuaryroom.jpeg"
                    alt=""
                  />
                </div>
                <div className="mt-5">
                  <img
                    className="w-full h-56 rounded-lg"
                    src="../images/room2.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-5">
                  <img
                    className="w-full h-56 rounded-lg"
                    src="../images/room3.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-5">
                  <img
                    className="w-full h-56 rounded-lg"
                    src="../images/room4.jpg"
                    alt=""
                  />
                </div>
              </Slider>
              <style jsx>{`
                .slick-dots li.slick-active div {
                  background-color: white !important;
                }
              `}</style>
            </div>
            <div className="lg:w-1/2 ">
              <h1 className="lg:block justify-center hidden lg:ml-3 lg:mt-3 items-center text-2xl font-semibold font-poppins ">
                A Day and Night{" "}
                <span className="ml-2 text-PrimaryBlue-normal"> With Us</span>
              </h1>
              <div className=" space-y-3 mt-4 ">
                {DailyEscapeCard.map((data)=>{
                    return(
                    <div className="flex    ">
                    <div className="mx-2">
                    <div className="w-2 h-2 mt-[10px] ml-2 rounded-full bg-black whitespace-nowrap "></div>
                    </div>
                    <p className="">
                    <span className="text-PrimaryBlue-normal">{data.title}:&nbsp;</span>{data.des}
                    </p>
                    </div>
                    )
                })}
               
               
              </div>
            </div>
            <div className="relative hidden lg:block lg:w-1/2">
              <Slider {...settings}>
                <div className="mt-5">
                  <img
                    className="w-full h-96 rounded-lg"
                    src="../images/luxuaryroom.jpeg"
                    alt=""
                  />
                </div>
                <div className="mt-5">
                  <img
                    className="w-full  h-96 rounded-lg"
                    src="../images/room2.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-5">
                  <img
                    className="w-full h-96 rounded-lg"
                    src="../images/room3.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-5">
                  <img
                    className="w-full h-96 rounded-lg"
                    src="../images/room4.jpg"
                    alt=""
                  />
                </div>
              </Slider>
              <style jsx>{`
                .slick-dots li.slick-active div {
                  background-color: white !important;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
