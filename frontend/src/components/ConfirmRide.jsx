import React from "react";

const ConfirmRide = ({ setConfirmRidePanel }) => {
  return (
    <div>
      {" "}
      <h5
        onClick={() => {
          setConfirmRidePanel((prev) => !prev);
        }}
        className="absolute top-0 w-[93%] p-3 text-center"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-300"></i>
      </h5>
      <h3 className="mb-5 text-2xl font-semibold">Confirm your Ride</h3>
      <div>
        <img src="car.webp" alt="car" />
      </div>
    </div>
  );
};

export default ConfirmRide;
