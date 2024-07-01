import React from 'react'
import { MdFastfood } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { MdRoomService } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { GiMountains } from "react-icons/gi";
import { FaSpa } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { IoFitness } from "react-icons/io5"
import { FaPersonSkating } from "react-icons/fa6";
import { IoMdBoat } from "react-icons/io";
import { PiPersonSimpleHikeBold } from "react-icons/pi";
import { MdAssistant } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { MdOutlineAssistWalker } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
const Amenites = () => {
  return (
    <div className=''>
        {/* //header */}
        <div className='w-full h-[50vh] bg-red-300'>
          <div className='w-full h-full relative'>
            <div className='bg-black h-full w-full absolute opacity-70'></div>
            <img className='w-full h-full object-cover' src='../images/retreat-hub.jpeg'></img>
            <div className='absolute inset-0 flex flex-col  justify-center items-center text-white'>
                <h1 className='font-futura text-center text-3xl font-bold'>Amentites for your <span className='text-orange-normal'> Ultimate Comfort</span></h1>
                <p className='p-4 text-center text-sm'>Explore a wide range of amenities designed to enhance your stay. From dining to wellness, we have everything you need for a memorable experience.</p>
                <button className='px-4 mt-4 py-2 border rou rounded-full flex items-center space-x-2 justify-center group '>
                  <span>Book Your Stay</span>
                  <div className='-rotate-45 text-lg group-hover:rotate-0'>
                    <FaArrowRight />
                  </div>
                </button>
            </div>
          </div>
        </div>
        <div className='px-4 py-4 space-y-6'>
        <div className=''>
              <h1 className='font-poppins font-semibold text-2xl mb-5'>Dining Delights</h1>
              <div className='space-y-6'>
                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <MdFastfood />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Gourment Meals</h3>
                        <p className='text-[#666666] text-sm '>Indulge in exquisite dishes prepared with fresh, locally sourced ingredients.</p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <MdRoomService />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>In-Room Service</h3>
                        <p className='text-[#666666] text-sm '> Enjoy the convenience of dining in the comfort of your room..</p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <BiSolidFoodMenu />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>A Menu</h3>
                        <p className='text-[#666666] text-sm '> Choose from a wide selection of breakfast, lunch, dinner, snacks, beverages, and desserts.</p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className='w-full flex justify-center items-center mt-8'>
                <div className='h-60 w-9/12 rounded-xl relative  '>
                  <img className='h-full w-full object-cover rounded-xl relative shadow-lg' src='../images/dining.jpeg'></img>
                  <div className='w-2/3 h-20 absolute -right-12 rounded-xl flex justify-center items-center top-[60%] bg-white shadow-lg font-poppins font-medium text-navyBlue-normal'>
                    <h1 className='text-xs'>
                      Find your Best Meal !!
                    </h1>
                  </div>
                </div>
          
              </div>


            </div>

            <div className=''>
              <h1 className='font-poppins font-semibold text-2xl mb-5'>Spa & Wellness</h1>
              <div className='space-y-6'>
                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <FaSpa />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Luxurious Spa Treatments:</h3>
                        <p className='text-[#666666] text-sm '>Pamper yourself with massages, facials, and more.</p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <GiMeditation />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Participate in yoga, meditation, and other wellness activities.</h3>
                        <p className='text-[#666666] text-sm '> Enjoy the convenience of dining in the comfort of your room..</p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <GiMountains />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Tranquil Atmosphere</h3>
                        <p className='text-[#666666] text-sm '> Relax in a serene and calming environment.</p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className='w-full flex justify-center items-center mt-8'>
                <div className='h-60 w-9/12 rounded-xl relative  '>
                  <img className='h-full w-full object-cover rounded-xl relative shadow-lg' src='../images/wellness.jpeg'></img>
                  <div className='w-2/3 h-20 absolute -right-12 rounded-xl flex justify-center items-center top-[60%] bg-white shadow-lg font-poppins font-medium text-navyBlue-normal'>
                    <h1 className='text-xs'>
                    Find Your Inner Peace !!
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className=''>
              <h1 className='font-poppins font-semibold text-2xl mb-5'>Ready to Stay Fit ?</h1>
              <div className='space-y-6'>
                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <CgGym />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Modern Gym Facilities  :</h3>
                        <p className='text-[#666666] text-sm '>Access state-of-the-art equipment for all your workout needs.</p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <IoFitness />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Fitness Classes</h3>
                        <p className='text-[#666666] text-sm '> Join group fitness sessions for a dynamic workout experience.</p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <FaPersonSkating />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Personal Training</h3>
                        <p className='text-[#666666] text-sm '> Receive personalized fitness plans from professional trainers.</p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className='w-full flex justify-center items-center mt-8'>
                <div className='h-60 w-9/12 rounded-xl relative  '>
                  <img className='h-full w-full object-cover rounded-xl relative shadow-lg' src='../images/gym.jpeg'></img>
                  <div className='w-2/3 h-20 absolute -right-12 rounded-xl flex justify-center items-center top-[60%] bg-white shadow-lg font-poppins font-medium text-navyBlue-normal'>
                    <h1 className='text-xs'>
                    Find Your Inner Peace !!
                    </h1>
                  </div>
                </div>
              </div>
            </div>


            <div className=''>
              <h1 className='font-poppins font-semibold text-2xl mb-5'> Looking for Adventure?</h1>
              <div className='space-y-6'>
                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <IoMdBoat />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Boating and Water Sports </h3>
                        <p className='text-[#666666] text-sm '>Explore serene waters with our boating activities.</p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <PiPersonSimpleHikeBold />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Nature Hikes</h3>
                        <p className='text-[#666666] text-sm '>  Discover picturesque trails with guided nature hikes.</p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <MdOutlineSportsCricket />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Sports Facilities</h3>
                        <p className='text-[#666666] text-sm '> Enjoy tennis courts, swimming pools, and more.</p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className='w-full flex justify-center items-center mt-8'>
                <div className='h-60 w-9/12 rounded-xl relative  '>
                  <img className='h-full w-full object-cover rounded-xl relative shadow-lg' src='../images/surfing.jpeg'></img>
                  <div className='w-2/3 h-20 absolute -right-12 rounded-xl flex justify-center items-center top-[60%] bg-white shadow-lg font-poppins font-medium text-navyBlue-normal'>
                    <h1 className='text-xs'>
                    Find Your Inner Peace !!
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            
          

            <div className=''>
              <h1 className='font-poppins font-semibold text-2xl mb-5'> How Can We Serve You Better?</h1>
              <div className='space-y-6'>
                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <MdAssistant />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Concierge Assistance </h3>
                        <p className='text-[#666666] text-sm '>Get help with bookings, reservations, and other requests.</p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <MdAssistant />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Bespoke Experiences</h3>
                        <p className='text-[#666666] text-sm '>  Tailored activities and experiences to match your interests.</p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <MdOutlineAssistWalker />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Attentive Care</h3>
                        <p className='text-[#666666] text-sm '>Experience top-notch service throughout your stay.</p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className='w-full flex justify-center items-center mt-8'>
                <div className='h-60 w-9/12 rounded-xl relative  '>
                  <img className='h-full w-full object-cover rounded-xl relative shadow-lg' src='../images/personilized.jpeg'></img>
                  <div className='w-2/3 h-20 absolute -right-12 rounded-xl flex justify-center items-center top-[60%] bg-white shadow-lg font-poppins font-medium text-navyBlue-normal'>
                    <h1 className='text-xs'>
                    Find Your Inner Peace !!
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className=''>
              <h1 className='font-poppins font-semibold text-2xl mb-5'> Additional Comforts</h1>
              <div className='space-y-6'>
                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <FaWifi />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>High-Speed Internet </h3>
                        <p className='text-[#666666] text-sm '>Stay connected with reliable and fast internet access.</p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <GiClothes />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Laundry Services</h3>
                        <p className='text-[#666666] text-sm '>  Enjoy the convenience of on-site laundry and dry cleaning.</p>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='flex space-x-4 items-center '>
                      <div className='text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit'>
                        <MdOutlineAssistWalker />
                      </div>
                      <div>
                        <h3 className='font-semibold  text-[#333333] '>Room Amenities</h3>
                        <p className='text-[#666666] text-sm '>Benefit from additional in-room comforts like coffee makers and mini-fridges.</p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className='w-full flex justify-center items-center mt-8'>
                <div className='h-60 w-9/12 rounded-xl relative  '>
                  <img className='h-full w-full object-cover rounded-xl relative shadow-lg' src='../images/additionalComforts.jpg'></img>
                  <div className='w-2/3 h-20 absolute -right-12 rounded-xl flex justify-center items-center top-[60%] bg-white shadow-lg font-poppins font-medium text-navyBlue-normal'>
                    <h1 className='text-xs'>
                    Find Your Inner Peace !!
                    </h1>
                  </div>
                </div>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Amenites
