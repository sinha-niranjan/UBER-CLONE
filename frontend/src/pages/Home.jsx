import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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

  useGSAP(
    function () {
      gsap.to(panelRef.current, {
        height: panelOpen ? "70%" : "0%",
        // opacity: panelOpen ? 1 : 0,
      });

      panelOpen
        ? gsap.to(panelCloseRef.current, {
            opacity: 1,
          })
        : gsap.to(panelCloseRef.current, {
            opacity: 0,
          });
    },
    [panelOpen],
  );
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
        <div ref={panelRef} className="h-0 bg-red-400">
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  );
};

export default Home;
