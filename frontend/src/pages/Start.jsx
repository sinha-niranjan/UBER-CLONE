import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="flex h-screen w-full flex-col justify-between bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center pt-5">
        <img className="ml-8 w-16" src="logo.png" alt="" />
        <div className="bg-white px-4 py-4">
          <h2 className="text-3xl font-bold">Get Started with Uber </h2>
          <Link
            to={"/login"}
            className="mt-5 flex w-full items-center justify-center rounded-lg bg-black py-3 text-white"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
