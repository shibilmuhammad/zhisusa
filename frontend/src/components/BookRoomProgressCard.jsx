import React from 'react'

const BookRoomProgressCard = () => {
  return (
    <div>
         <div className="bg-navyBlue-normal text-white px-4  py-4  ">
        <h1 className="font-semibold font-poppins mt-1">CHOOSE YOUR ROOM</h1>
        <div className="flex justify-between  mt-4">
          <div className=" p-4  rounded-full border bg-white text-black border-white w-4 h-4 flex justify-center items-center ">
            <p className=" "> 1</p>
          </div>
          <div className=" p-4  rounded-full border border-white w-4 h-4 flex justify-center items-center ">
            <p className=" "> 2</p>
          </div>
          <div className=" p-4  rounded-full border border-white w-4 h-4 flex justify-center items-center ">
            <p className=" "> 3</p>
          </div>
          <div className=" p-4  rounded-full border border-white w-4 h-4 flex justify-center items-center ">
            <p className=" "> 4</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookRoomProgressCard
