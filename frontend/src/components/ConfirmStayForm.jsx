import React from "react";

const ConfirmStayForm = () => {
  const guestInputs = [
    { content: "First Name", value: "firstName" },
    { content: "Last Name", value: "lastName" },
    { content: "Phone Number", value: "phoneNumber" },
    { content: "Email", value: "email" },
    { content: "Confrim Email", value: "confirmEmail" },
    { content: "Country/Region", value: "country" },
  ];
  return (
    <div className="lg:w-8/12 w-full">
      <form className="pb-10 ">
        <div className="px-4 py-4  ">
          <div className="lg:border-[.2px] lg:border-[#333333] rounded-b-lg rounded-t-lg">
            <h1 className="text-xl py-1   font-medium border-b border-b-[#D9D9D9] w-fit lg:bg-navyBlue-normal lg:w-full lg:flex justify-center items-center lg:rounded-t-md lg:text-white">
              Guest Details
            </h1>
            <div className="mt-5 lg:mt-0 lg:space-y-0  space-y-3  ">
              {guestInputs.map((item, index) => {
                return (
                  <div className={`w-full ${
                    index === guestInputs.length - 1
                      ? "lg:rounded-b-lg"
                      : ""
                  }   space-y-2 lg:space-y-0 lg:flex lg:border-b-[.2px] lg:border-b-[#333333] `}>
                    <p
                      className={`${
                        index === guestInputs.length - 1
                          ? "lg:rounded-bl-lg"
                          : ""
                      } lg:text-base text-sm lg:py-2   lg:w-1/2 lg:bg-[#E7F1FB] lg:pl-2 lg:flex items-center`}
                    >
                      {item.content}*
                    </p>
                    <input
                      className="border-2 w-full lg:border-none outline-none px-2 lg:w-1/2 border-[#D9d9d9] rounded-lg py-2"
                      type="text"
                    ></input>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="px-4 py-4  ">
          <div className="lg:border-[.2px] lg:border-[#333333] rounded-b-lg rounded-t-lg">
            <h1 className="text-xl py-1   font-medium border-b border-b-[#D9D9D9] w-fit lg:bg-navyBlue-normal lg:w-full lg:flex justify-center items-center lg:rounded-t-md lg:text-white">
              Credit Card Details
            </h1>
            <div className="mt-5 lg:mt-0 lg:space-y-0  space-y-3  ">
              <div className="w-full space-y-2 lg:space-y-0 lg:flex lg:border-b-[.2px] lg:border-b-[#333333] ">
                <p className="text-sm lg:text-base lg:py-2   lg:w-1/2 lg:bg-[#E7F1FB] lg:pl-2 lg:flex items-center">
                  Name On Card*
                </p>
                <input
                  className="border-2 w-full lg:border-none outline-none px-2 lg:w-1/2 border-[#D9d9d9] rounded-lg py-2"
                  type="text"
                ></input>
              </div>
              <div className="w-full space-y-2 lg:space-y-0 lg:flex lg:border-b-[.2px] lg:border-b-[#333333] ">
                <p className="text-sm lg:text-base lg:py-2   lg:w-1/2 lg:bg-[#E7F1FB] lg:pl-2 lg:flex items-center">
                  Credit Card Number*
                </p>
                <input
                  className="border-2 w-full lg:border-none outline-none px-2 lg:w-1/2 border-[#D9d9d9] rounded-lg py-2"
                  type="text"
                ></input>
              </div>
              <div className="w-full lg:flex hidden  space-y-2 lg:space-y-0  rounded-b-lg lg:border-b-[.2px] lg:border-b-[#333333] ">
                <p className="text-sm lg:text-base lg:py-2 rounded-bl-lg  lg:w-1/2 lg:bg-[#E7F1FB] lg:pl-2 lg:flex items-center">
                  Credit Card Expiry Date*
                </p>
                <div className=" w-1/2 flex justify-center items-center ">
                  <input
                    placeholder="MONTH"
                    className="lg:border-r  lg:border-r-[#666666] outline-none px-2  w-full  py-2"
                    type="text"
                  ></input>
                  <input
                    placeholder="YEAR"
                    className=" outline-none px-2 w-full   py-2 rounded-br-lg"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="w-full lg:hidden space-y-2 lg:space-y-0  lg:border-b-[.2px] lg:border-b-[#333333] ">
                <div className="flex space-x-3  ">
                  <div className="w-1/2 ">
                    <p className="text-sm lg:text-base lg:py-2   lg:w-1/2 lg:bg-[#E7F1FB] lg:pl-2 lg:flex items-center">
                      Expiry Month*
                    </p>

                    <input
                      className="border-2 w-full lg:border-none outline-none px-2 lg:w-1/2 border-[#D9d9d9] rounded-lg py-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="w-1/2">
                    <p className="text-sm lg:text-base lg:py-2   lg:w-1/2 lg:bg-[#E7F1FB] lg:pl-2 lg:flex items-center">
                      Expiry Year*
                    </p>

                    <input
                      className="border-2 w-full lg:border-none outline-none px-2 lg:w-1/2 border-[#D9d9d9] rounded-lg py-2"
                      type="text"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:p-4">
          <h1 className="text-xl py-1 hidden   font-medium border-b border-b-[#D9D9D9] w-fit lg:bg-navyBlue-normal lg:w-full lg:flex justify-center items-center lg:rounded-t-md lg:text-white">
            TERMS & CONDITIONS
          </h1>
          <div className="flex items-center px-4 space-x-3 text-sm pt-6 pb-4 lg:ml-0 ml-2 lg:border-[.2px] lg:border-[#333333] lg:-mt-1 rounded-b-lg">
            <input type="checkbox"></input>
            <p>
              I've read and accepted the{" "}
              <span className="underline">Terms and Conditions</span>
            </p>
          </div>
        </div>
        <div className="px-4">
        <button  className="w-full block lg:hidden lg:mt-6 lg:w-fit lg:px-5 justify-center items-center py-2 bg-orange-normal text-white rounded-lg font-medium">
						Confirm Stay
					</button>
          </div>
      </form>
    </div>
  );
};

export default ConfirmStayForm;
