import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between min-h-screen">
      <div>
        <img className="w-16 mb-10" src="logo.png" alt="" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base font-medium mb-2">What's your name </h3>
          <div className="flex gap-4 mb-5">
            <input
              type="text"
              required
              placeholder="First name"
              className="bg-[#eeeeee]  rounded px-4 py-2 w-1/2 border  text-base placeholder:text-sm "
            />{" "}
            <input
              type="text"
              required
              placeholder="Last name"
              className="bg-[#eeeeee]  rounded px-4 py-2 w-1/2 border text-base placeholder:text-sm "
            />
          </div>

          <h3 className="text-base font-medium mb-2">What's your email </h3>
          <input
            type="email"
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full border  text-base placeholder:text-sm  "
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            placeholder="Password"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full border  text-base placeholder:text-sm  "
          />
          <button className="bg-[#111] text-[#fff] font-semibold  mb-3 rounded px-4 py-2 w-full   text-lg placeholder:text-base ">
            Login
          </button>
          <p className="text-center ">
            Already have an account ?{" "}
            <Link to={"/login"} className="text-blue-600 font-semibold ">
              Login here{" "}
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[12px] leading-tight">
          By proceeding, you consent to get calls, whatsApp or SMS messages,
          including by automated from Uber and its affiliates to the number
          provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
