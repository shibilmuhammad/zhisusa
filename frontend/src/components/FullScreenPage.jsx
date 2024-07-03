import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const FullScreenPage = ({Heading,Description,button,span}) => {
  return (
    <div>
      <div className="w-full h-[50vh] lg:h-[100vh] bg-red-300">
        <div className="w-full h-full relative">
          <div className="bg-black h-full w-full absolute opacity-70"></div>
          <img
            className="w-full h-full object-cover"
            src="../images/retreat-hub.jpeg"
          ></img>
          <div className="absolute inset-0 flex flex-col  justify-center items-center text-white">
            <h1 className="font-futura text-center text-3xl lg:text-5xl font-bold">
              {Heading}{" "}
              <span className="text-orange-normal"> {span}</span>
            </h1>
            <p className="p-4 text-center text-sm lg:text-lg lg:max-w-2xl ">
             {Description}
            </p>
            <button className="px-4 mt-4 lg:mt-12 py-2 border rou rounded-full flex items-center space-x-2 justify-center group ">
              <span>{button}</span>
              <div className="group-hover:-rotate-45 text-lg rotate-0 transition-all duration-100">
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenPage;
