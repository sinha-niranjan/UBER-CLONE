import React from "react";

const ConfirmRide = ({ setConfirmRidePanel, setVehicleFound }) => {
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
      <div className="flex flex-col items-center justify-between gap-3">
        <img className="h-20" src="car_bg_.png" alt="car" />
        <div className="mt-5 w-full">
          <div className="flex items-center gap-5 border-b-2 border-t-2 p-3">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium"> 562/11-A</h3>
              <p className="-mt-1 text-sm text-gray-600">
                {" "}
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 border-b-2 p-3">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium"> 562/11-A</h3>
              <p className="-mt-1 text-sm text-gray-600">
                {" "}
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line text-lg"></i>
            <div>
              <h3 className="text-lg font-medium"> 193.20</h3>
              <p className="-mt-1 text-sm text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setConfirmRidePanel((prev) => !prev);
            setVehicleFound((prev) => !prev);
          }}
          className="mt-5 w-full rounded-lg bg-green-500 p-2 font-semibold text-white"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
