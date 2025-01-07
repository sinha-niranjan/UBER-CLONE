import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
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
          <h3 className="text-lg font-medium mb-2">What's your email </h3>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full border  text-lg placeholder:text-base "
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full border  text-lg placeholder:text-base "
          />
          <button className="bg-[#111] text-[#fff] font-semibold  mb-3 rounded px-4 py-2 w-full   text-lg placeholder:text-base ">
            Login
          </button>
          <p className="text-center ">
            You don't have an account ?{" "}
            <Link to={"/signup"} className="text-blue-600 ">
              Create new Account{" "}
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link to={"/captain-login"}  className="bg-[#10b461] flex items-center justify-center text-[#fff] font-semibold  mb-7 rounded px-4 py-2 w-full   text-lg placeholder:text-base ">
          Sign in as Captain{" "}
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
