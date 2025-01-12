import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCaptain } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState("");

  const navigate = useNavigate();
  const { captain, setCaptain } = useCaptain();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/login`,
        captain,
      );

      if (response.status === 200) {
        const data = response.data;

        setCaptain(data.user);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.log("error : ", error);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex min-h-screen flex-col justify-between p-7">
      <div>
        <img className="mb-10 w-16" src="captain_logo.png" alt="" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="mb-2 text-lg font-medium">What's your email </h3>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="email@example.com"
            className="mb-7 w-full rounded border bg-[#eeeeee] px-4 py-2 text-lg placeholder:text-base"
          />
          <h3 className="mb-2 text-lg font-medium">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
            className="mb-7 w-full rounded border bg-[#eeeeee] px-4 py-2 text-lg placeholder:text-base"
          />
          <button className="mb-3 w-full rounded bg-[#111] px-4 py-2 text-lg font-semibold text-[#fff] placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            Already Joined the company ?{" "}
            <Link
              to={"/captain-signup"}
              className="font-semibold text-blue-600"
            >
              Register as a captain{" "}
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to={"/login"}
          className="mb-7 flex w-full items-center justify-center rounded bg-[#fc621b] px-4 py-2 text-lg font-semibold text-[#fff] placeholder:text-base"
        >
          Sign in as User{" "}
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
