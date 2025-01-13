import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  useEffect(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 24,
        duration: 0.5, // Add duration
        ease: "power2.out", // Smooth easing
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 0,
        duration: 0.5,
        ease: "power2.in", // Smooth easing
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [panelOpen]);

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
      <div className="absolute top-0 flex h-screen w-full flex-col justify-end overflow-hidden">
        <div className="relative h-[30%] bg-white p-6">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute right-6 top-6 text-2xl opacity-0"
          >
            <i class="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold"> Find a trip </h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute left-10 top-[45%] h-16 w-1 rounded-full bg-gray-900"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="mt-5 w-full rounded-lg bg-[#eee] px-12 py-2 text-base"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-3 w-full rounded-lg bg-[#eee] px-12 py-2 text-base"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel />
        </div>
      </div>
      <div className="fixed bottom-0 z-10 w-full bg-gray-100 px-3 py-8">
        <h3 className="mb-5 text-2xl font-semibold">Choose a Vehicle</h3>
        <div className="mb-2 flex w-full items-center justify-between rounded-xl border-2 border-gray-300 bg-white p-3 active:border-black">
          <img className="h-12" src="car.webp" alt="car" />
          <div className="ml-2 w-1/2">
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
        <div className="mb-2 flex w-full items-center justify-between rounded-xl border-2 border-gray-300 bg-white p-3 active:border-black">
          <img className="h-12" src="bike.webp" alt="car" />
          <div className="ml-2 w-1/2">
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
        <div className="mb-2 flex w-full items-center justify-between rounded-xl border-2 border-gray-300 bg-white p-3 active:border-black">
          <img className="h-12" src="auto.webp" alt="car" />
          <div className="ml-2 w-1/2">
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
    </div>
  );
};

export default Home;
