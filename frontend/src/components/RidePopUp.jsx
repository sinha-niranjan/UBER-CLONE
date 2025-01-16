import React from "react";

const RidePopUp = ({ setRidePopupPanel, setConfirmRidePopupPanel }) => {
  return (
    <div>
      {" "}
      <h5
        onClick={() => {
          setRidePopupPanel((prev) => !prev);
        }}
        className="absolute top-0 w-[93%] p-3 text-center"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-300"></i>
      </h5>
      <h3 className="mb-5 text-2xl font-semibold">New Ride Available!</h3>
      <div className="mt-4 flex items-center justify-between rounded-lg bg-yellow-300 p-3">
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
        <div className="flex w-full items-center justify-center gap-10">
          <button
            onClick={() => {
              setRidePopupPanel((prev) => !prev);
            }}
            className="rounded-lg bg-gray-300 p-3 px-8 font-semibold text-gray-700"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              setConfirmRidePopupPanel((prev) => !prev);
            }}
            className="rounded-lg bg-green-500 p-3 px-8 font-semibold text-white"
          >
            Accept
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
