import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      username: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    setFirstName("");
    setLastName("");
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
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              required
              placeholder="Last name"
              className="bg-[#eeeeee]  rounded px-4 py-2 w-1/2 border text-base placeholder:text-sm "
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <h3 className="text-base font-medium mb-2">What's your email </h3>
          <input
            type="email"
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full border  text-base placeholder:text-sm  "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            placeholder="Password"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full border  text-base placeholder:text-sm  "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-[#111] text-[#fff] font-semibold  mb-3 rounded px-4 py-2 w-full   text-lg placeholder:text-base ">
            Sign up
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
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy</span> Policy and{" "}
          <span className="underline">Terms of Service apply</span> .
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
