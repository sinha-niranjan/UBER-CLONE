import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import FinishRide from "../components/FinishRide";
import gsap from "gsap";


const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidepanelRef = useRef(null);
  useEffect(() => {
    if (finishRidePanel) {
      gsap.to(finishRidepanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidepanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);
  return (
    <div className="h-screen">
      <div className="fixed top-0 flex w-screen items-center justify-between p-3">
        <img className="w-16" src="logo.png" alt="logo" />
        <Link
          to={"/captain-home"}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map gif"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        onClick={() => setFinishRidePanel(true)}
        className="relative flex h-1/5 items-center justify-between bg-yellow-300 px-2 py-6"
      >
        <h5
          onClick={() => {
            setRidePopupPanel((prev) => !prev);
          }}
          className="absolute top-0 w-[90%] text-center"
        >
          <i className="ri-arrow-up-wide-line text-3xl text-gray-800"></i>
        </h5>
        <h4 className="text-xl font-semibold"> 4 KM away</h4>
        <button className="rounded-lg bg-green-600 p-3 px-10 font-semibold text-white">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidepanelRef}
        className="fixed bottom-0 z-10 w-full bg-gray-100 px-3 py-6 pt-14"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
