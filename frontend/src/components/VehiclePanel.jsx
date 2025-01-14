import React from "react";

const VehiclePanel = ({ setVehiclePanelOpen, setConfirmRidePanel }) => {
  return (
    <div>
      <h5
        onClick={() => {
          // setPanelOpen((prev) => !prev);
          setVehiclePanelOpen((prev) => !prev);
        }}
        className="absolute top-0 w-[93%] p-3 text-center"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-300"></i>
      </h5>
      <h3 className="mb-5 text-2xl font-semibold">Choose a Vehicle</h3>
      <div
        onClick={() => setConfirmRidePanel((prev) => !prev)}
        className="mb-2 flex w-full items-center justify-between rounded-xl border-2 border-gray-300 bg-white p-3 active:border-black"
      >
        <img className="h-12" src="car_bg_.png" alt="car" />
        <div className="w-1/2">
          <h4 className="text-sm font-semibold">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>

          <h2 className="text-sm font-medium"> 2 mins away</h2>
          <p className="text-xs font-normal text-gray-600">
            Affordable compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.30</h2>
      </div>{" "}
      <div
        onClick={() => setConfirmRidePanel((prev) => !prev)}
        className="mb-2 flex w-full items-center justify-between rounded-xl border-2 border-gray-300 bg-white p-3 active:border-black"
      >
        <img className="h-12" src="bike.webp" alt="car" />
        <div className="w-1/2">
          <h4 className="text-sm font-semibold">
            Moto
            <span>
              <i className="ri-user-3-fill">1</i>
            </span>
          </h4>

          <h2 className="text-sm font-medium"> 3 mins away</h2>
          <p className="text-xs font-normal text-gray-600">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹63.30</h2>
      </div>
      <div
        onClick={() => setConfirmRidePanel((prev) => !prev)}
        className="mb-2 flex w-full items-center justify-between rounded-xl border-2 border-gray-300 bg-white p-3 active:border-black"
      >
        <img className="h-12" src="auto.webp" alt="car" />
        <div className="w-1/2">
          <h4 className="text-sm font-semibold">
            UberAuto
            <span>
              <i className="ri-user-3-fill">3</i>
            </span>
          </h4>

          <h2 className="text-sm font-medium"> 3 mins away</h2>
          <p className="text-xs font-normal text-gray-600">
            Affordable Auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹113.30</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
