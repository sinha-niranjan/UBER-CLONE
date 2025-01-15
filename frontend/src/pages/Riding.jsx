import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to={"/home"} className="fixed right-2 top-2 block flex h-10 w-10 items-center justify-center rounded-full bg-white">
        <i className="ri-home-5-line text-lg font-medium"></i>
      </Link>
      <div className="h-1/2">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map gif"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img src="car_bg_.png" alt="car" className="h-12" />
          <div className="text-right">
            <h2 className="text-lg font-medium">Niranjan</h2>
            <h4 className="-mb-1 -mt-1 text-xl font-semibold">MP043 AB 1234</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki alto</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3">
          <div className="mt-5 w-full">
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
        </div>
        <button className="mt-5 w-full rounded-lg bg-green-600 p-2 font-semibold text-white">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
