import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = ({ setRidePopupPanel, setConfirmRidePopupPanel }) => {
  const [otp, setOtp] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h5
        onClick={() => {
          setConfirmRidePopupPanel((prev) => !prev);
          setRidePopupPanel(true);
        }}
        className="absolute top-0 w-[93%] p-3 text-center"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-300"></i>
      </h5>
      <h3 className="mb-5 text-2xl font-semibold">
        Confirm this ride to Start !
      </h3>
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
        <div className="mt-6 flex w-full flex-col gap-3 p-2">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="flex w-full items-center justify-between gap-4">
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-2/3 rounded-lg bg-gray-300 px-12 py-2 font-mono text-base"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <h4 className="flex w-1/3 items-center justify-center rounded-lg bg-yellow-400 py-2 font-semibold">
                OTP
              </h4>
            </div>
            <Link
              to={"/captain-riding"}
              className="mt-5 flex w-full items-center justify-center rounded-lg bg-green-500 p-3 text-lg font-semibold text-white"
            >
              Confirm
            </Link>{" "}
            <button
              onClick={() => {
                setConfirmRidePopupPanel((prev) => !prev);
                setRidePopupPanel(false);
              }}
              className="mt-2 w-full rounded-lg bg-red-500 p-3 text-lg font-semibold text-white"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
