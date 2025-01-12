import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen">
      <img className="absolute left-5 top-5 w-16" src="logo.png" alt="logo" />
      <div className="h-screen w-screen">
        {/* image for temporary user  */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map gif"
        />
      </div>
      <div className="absolute top-0 flex h-screen w-full flex-col justify-end">
        <div className="h-[30%] bg-white p-5">
          <h4 className="text-2xl font-semibold"> Find a trip </h4>
          <form>
            {" "}
            <input
              className="mt-5 w-full rounded-lg bg-[#eee] px-12 py-2 text-base"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              className="mt-3 w-full rounded-lg bg-[#eee] px-12 py-2 text-base"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div className="h-[70%] bg-red-400"></div>
      </div>
    </div>
  );
};

export default Home;
