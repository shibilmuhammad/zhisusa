import React from 'react'

const MutlitpleRoomBooking = () => {
  return (
    <div className='lg:px-10'>
          <div className="mt-4 ">
        <h1 className="flex justify-center text-xl font-medium font-poppins lg:text-2xl">
          CHOOSE YOUR ROOM 2
        </h1>
        <div className="px-2  mt-5">
          <div className=" flex justify-evenly lg:justify-normal lg:space-x-10 pt-4 border-y-[.2px] border-y-gray-600 ">
            <div>
              <p className="font-medium ">
                Room 1 | <span className="text-xs font-light">2 ADULTS</span>
              </p>
              <p className="text-sm font-thin "> Choose Room 1</p> 
            </div>
            <div className="border-b-2 border-b-black ">
              <p className="font-medium ">
                Room 2 | <span className="text-xs font-light">2 ADULTS</span>
              </p>
              <p className="text-normal font-medium "> Choose Room 2</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MutlitpleRoomBooking
