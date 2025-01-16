import React from "react";
import { Link } from "react-router-dom";

const CaptainRiding = () => {
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
      <div className="h-3/5">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map gif"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-2/5 px-2 py-6">
       
      </div>
     
     
    </div>
  );
};

export default CaptainRiding;
