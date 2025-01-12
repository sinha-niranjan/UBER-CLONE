import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext, useCaptain } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useCaptain();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/register`,
        captainData
      );

      if (response.status === 201) {
        const data = response.data;

        setCaptain(data.user);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.log("error : ", error);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };
  return (
    <div className="p-7 flex flex-col justify-between min-h-screen">
      <div>
        <img className="w-16 mb-10" src="captain_logo.png" alt="" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="mb-10"
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
          <h3 className="text-base font-medium mb-2"> Vehicle Information</h3>
          <div className="flex gap-4 mb-3">
            <input
              type="text"
              required
              placeholder="Vehicle Color"
              className="bg-[#eeeeee]  rounded px-4 py-2 w-1/2 border  text-base placeholder:text-sm "
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              required
              placeholder="Vehicle Plate"
              className="bg-[#eeeeee]  rounded px-4 py-2 w-1/2 border  text-base placeholder:text-sm "
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-4 mb-5">
            <input
              type="number"
              required
              placeholder="Vehicle Capacity"
              className="bg-[#eeeeee]  rounded px-4 py-2 w-1/2 border  text-base placeholder:text-sm "
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />{" "}
            <select
              required
              className="bg-[#eeeeee]  rounded px-4 py-2 w-1/2 border  text-base placeholder:text-sm "
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option
                value={""}
                disabled
                className="text-gray-400 hover:text-gray-700 transition-all duration-300 ease-in-out"
              >
                Select Vehicle Type
              </option>
              <option
                className="hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                value={"car"}
              >
                Car
              </option>
              <option
                className="hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                value={"auto"}
              >
                Auto
              </option>
              <option
                className="hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                value={"moto"}
              >
                Moto
              </option>
            </select>
          </div>
          <button className="bg-[#111] text-[#fff] font-semibold  mb-3 rounded px-4 py-2 w-full   text-lg placeholder:text-base ">
            Create Captain Account
          </button>
          <p className="text-center ">
            Already have an account as Captain ?{" "}
            <Link
              to={"/captain-login"}
              className="text-blue-600 font-semibold "
            >
              Login here as Captain{" "}
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[12px] leading-tight ">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy</span> Policy and{" "}
          <span className="underline">Terms of Service apply</span> .
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
