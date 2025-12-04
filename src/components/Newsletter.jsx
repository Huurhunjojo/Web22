import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full    px-16 py-8 text-white">
      <div className="relative rounded-2xl bg-blue-500 w-full">
        <div className=" absolute top-0 right-0 h-full w-1/2 z-0 bg-blue-700 rounded-br-2xl rounded-tr-2xl clip-custom z-1"></div>
        <div className="py-16 px-8  flex justify-between z-10 ">
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold">Subcribe newsletter</h2>
            <p>
              Best cooks and best delivery guys all at your service. Hot tasty
              food
            </p>
          </div>
          <div className=" w-1/2 z-10 px-16">
            <input
              type="text"
              placeholder="Enter your email address"
              className=" py-4 px-4 rounded-tl-xl rounded-bl-xl w-1/2 placeholder-gray-400 bg-white focus:outline-none "
            />
            <button className="bg-green-600 py-4 px-4 rounded-tr-xl rounded-br-xl">
              <p className="m-0">
                Discover <b className="font-bold">→</b>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;