import React from 'react'

const AmenitiesCard = ({data,index}) => {
  return (
    <div>
      <div className="lg:px-32 ">
              <div className="lg:flex justify-center items-center  ">
                <div className={`w-full lg:w-1/2 flex justify-center items-center mt-8  ${index%2===0?"hidden lg:hidden ":" lg:block hidden"}  `}>
                  <div className={`h-60 lg:h-72 w-9/12 rounded-xl relative   `}>
                    <img
                      className={`h-full w-full  object-cover rounded-xl relative shadow-lg`}
                      src={data.imgUrl}
                    ></img>
                    <div className="w-2/3 h-20 absolute -right-12 lg:-right-32 rounded-xl flex justify-center items-center top-[60%] bg-white shadow-lg font-poppins font-medium text-navyBlue-normal">
                      <h1 className="text-xs">{data.imageCaption}</h1>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <h1 className="font-poppins font-semibold text-2xl mb-5">
                    {data.title}
                  </h1>
                  <div className="space-y-6 ">
                    <div className="">
                      <div className="flex space-x-4 items-center ">
                        <div className="text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit">
                          <data.point1Icon />
                        </div>
                        <div>
                          <h3 className="font-semibold  text-[#333333] ">
                            {data.point1Title}
                          </h3>
                          <p className="text-[#666666] text-sm ">
                            {data.point1Des}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <div className="flex space-x-4 items-center ">
                        <div className="text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit">
                          <data.point2Icon />
                        </div>
                        <div>
                          <h3 className="font-semibold  text-[#333333] ">
                            {data.point2Title}
                          </h3>
                          <p className="text-[#666666] text-sm ">
                            {" "}
                            {data.point2Des}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <div className="flex space-x-4 items-center ">
                        <div className="text-navyBlue-normal text-3xl p-4 border-navyBlue-normal rounded-xl border w-fit h-fit">
                          <data.point3Icon />
                        </div>
                        <div>
                          <h3 className="font-semibold  text-[#333333] ">
                            {data.point3Title}
                          </h3>
                          <p className="text-[#666666] text-sm ">
                            {" "}
                            {data.point3Des}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`w-full lg:w-1/2  justify-center items-center mt-8   ${index%2===0?"flex ":"flex lg:hidden "}`}>
                  <div className="h-60 w-9/12 lg:h-72 rounded-xl relative  ">
                    <img
                      className="h-full w-full  object-cover rounded-xl relative shadow-lg"
                      src={data.imgUrl}
                    ></img>
                    <div className="w-2/3 h-20  absolute -right-12 lg:-left-16 rounded-xl flex justify-center items-center top-[60%] bg-white shadow-lg font-poppins font-medium text-navyBlue-normal">
                      <h1 className="text-xs">Find your Best Meal !!</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default AmenitiesCard
