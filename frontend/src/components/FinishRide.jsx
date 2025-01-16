import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const FinishRide = ({ setFinishRidePanel }) => {
  return (
    <div>
      <h5
        onClick={() => {
          setFinishRidePanel(false);
        }}
        className="absolute top-0 w-[93%] p-3 text-center"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-300"></i>
      </h5>
      <h3 className="mb-5 text-2xl font-semibold">Finish this Ride !</h3>
      <div className="mt-4 flex items-center justify-between rounded-lg border-2 border-yellow-400 p-3">
        <div className="flex items-center gap-3">
          <img
            src="person2.jpg"
            alt="person"
            className="h-10 w-10 rounded-full object-cover"
          />
          <h2 className="text-lg font-medium">Shristi Kumari</h2>
        </div>
        <h5 className="text-lg font-semibold">2.3 KM</h5>
      </div>
      <div className="flex flex-col items-center justify-between gap-3">
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
        <div className="mt-10 flex w-full flex-col gap-3 p-2">
          <Link
            to={"/captain-home"}
            className="mt-5 flex w-full items-center justify-center rounded-lg bg-green-500 p-3 text-lg font-semibold text-white"
          >
            Finish Ride
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
