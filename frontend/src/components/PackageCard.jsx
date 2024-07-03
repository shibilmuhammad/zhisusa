import React from "react";
import Slider from "react-slick";
import settings from "../utils/sliderSettings";
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
                <div className="flex    ">
                  <div className="mx-2">
                    <div className="w-2 h-2 mt-[10px] ml-2 rounded-full bg-black whitespace-nowrap "></div>
                  </div>
                  <p className="">
                    <span className="text-PrimaryBlue-normal">Spacious Accommodations:</span>Luxurious rooms
                    designed for comfort and relaxation.
                  </p>
                </div>
                <div className="flex    ">
                  <div className="mx-2">
                    <div className="w-2 h-2 mt-[10px] ml-2 rounded-full bg-black whitespace-nowrap "></div>
                  </div>
                  <p className="">
                    <span className="text-PrimaryBlue-normal">Private Balconies:</span>Step outside to breathe in
                    the fresh air and take in serene views.
                  </p>
                </div>
                <div className="flex    ">
                  <div className="mx-2">
                    <div className="w-2 h-2 mt-[10px] ml-2 rounded-full bg-black whitespace-nowrap "></div>
                  </div>
                  <p className="">
                    <span className="text-PrimaryBlue-normal">King-Sized Bed:</span>Sleep soundly in a spacious and
                    luxurious bed.
                  </p>
                </div>
                <div className="flex    ">
                  <div className="mx-2">
                    <div className="w-2 h-2 mt-[10px] ml-2 rounded-full bg-black whitespace-nowrap "></div>
                  </div>
                  <p className="">
                    <span className="text-PrimaryBlue-normal">En-Suite Bathroom:</span>Relax in your own private
                    bathroom with premium amenities.
                  </p>
                </div>
                <div className="flex    ">
                  <div className="mx-2">
                    <div className="w-2 h-2 mt-[10px] ml-2 rounded-full bg-black whitespace-nowrap "></div>
                  </div>
                  <p className="">
                    <span className="text-PrimaryBlue-normal">In-Room Dining:</span>Savor gourmet meals delivered to
                    your room.
                  </p>
                </div>

                <div className="flex    ">
                  <div className="mx-2">
                    <div className="w-2 h-2 mt-[10px] ml-2 rounded-full bg-black whitespace-nowrap "></div>
                  </div>
                  <p className="">
                    <span className="text-PrimaryBlue-normal">Complimentary Wi-Fi:</span>Stay connected with
                    high-speed internet access.
                  </p>
                </div>
                <div className="flex    ">
                  <div className="mx-2">
                    <div className="w-2 h-2 mt-[10px] ml-2 rounded-full bg-black whitespace-nowrap "></div>
                  </div>
                  <p className="">
                    <span className="text-PrimaryBlue-normal">Garden Views:</span>Take in the serene views of our
                    beautiful gardens.
                  </p>
                </div>
                <div className="flex    ">
                  <div className="mx-2">
                    <div className="w-2 h-2 mt-[10px] ml-2 rounded-full bg-black whitespace-nowrap "></div>
                  </div>
                  <p className="">
                    <span className="text-PrimaryBlue-normal">Room Service:</span> 24/7 room service to cater to
                    your needs.
                  </p>
                </div>
                <div className="flex    ">
                  <div className="mx-2">
                    <div className="w-2 h-2 mt-[10px] ml-2 rounded-full bg-black whitespace-nowrap "></div>
                  </div>
                  <p className="">
                    <span className="text-PrimaryBlue-normal">Entertainment System: </span>Enjoy a flat-screen TV
                    with streaming services.
                  </p>
                </div>
                <div className="flex    ">
                  <div className="mx-2">
                    <div className="w-2 h-2 mt-[10px] ml-2 rounded-full bg-black whitespace-nowrap "></div>
                  </div>
                  <p className="">
                    <span className="text-PrimaryBlue-normal">Mini Bar: </span>Refresh with a selection of beverages
                    and snacks.
                  </p>
                </div>
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
