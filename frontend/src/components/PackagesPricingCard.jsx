import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { dailyEscape } from '../utils/packages';
import {MdTaskAlt} from 'react-icons/md'
const PackagesPricingCard = ({amenities,title,per}) => {
  return (
    <div>
      <div className="lg;px-10 px-3">
        <div className="bg-navyBlue-normal  text-white w-full  px-5 rounded-lg py-5 mb-10">
                    <h1 className="lg:flex justify-center text-lg lg:text-3xl font-semibold font-poppins">Pricing for &nbsp;<span>{title}</span></h1>

                    <div className="lg:flex justify-around items-center lg:px-20 lg:mt-10 mt-4 ">
                        <div className="lg:grid space-y-4  grid-cols-2 gap-x-28 gap-y-5 text-sm font-medium "> 
                            <div className="flex space-x-2 items-center  ">
                                <div className="text-xl">
                                    <MdTaskAlt/>
                                </div>
                                <p>Private Luxuary room</p>
                            </div>
                            {amenities.map((data)=>{
                                return(
                                    <div className="flex space-x-2 items-center  ">
                                    <div className="text-xl">
                                        <MdTaskAlt/>
                                    </div>
                                    <p>{data.title}</p>
                                    </div>
    
                                )
                            })}
                        </div>
                        <div className="flex flex-col space-y-3 justify-center items-center mt-4">
                            <p className="lg:text-3xl text-xl font-semibold">$500/{per}</p>
                            <button className="lg;px-8 w-full py-2 text-black bg-skyBlue-normal font-semibold font-poppins rounded-lg">Book Your Slot</button>
                        </div>
                    </div>
            </div>
    </div>
    </div>
  )
}

export default PackagesPricingCard
