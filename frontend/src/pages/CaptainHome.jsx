import React from "react";
import { Link } from "react-router-dom";

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed top-0 flex w-screen items-center justify-between p-3">
        <img className="w-16" src="logo.png" alt="logo" />
        <Link
          to={"/home"}
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
      <div className="h-2/5 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="person.jpg"
              alt="person"
            />
            <h4 className="text-lg font-medium">Rahul Karak </h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">₹250.26</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>
        <div className="mt-6 flex items-start justify-center gap-5 rounded-xl bg-gray-100 p-3">
          <div className="text-center">
            <i className="ri-timer-2-line mb-2 text-3xl font-thin"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="ri-speed-up-line mb-2 text-3xl font-thin"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="ri-booklet-line mb-2 text-3xl font-thin"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
