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
        captainData,
      );

      if (response.status === 201) {
        const data = response.data;

        setCaptain(data.user);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.log(" captain error : ", error);
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
    <div className="flex min-h-screen flex-col justify-between p-7">
      <div>
        <img className="mb-10 w-16" src="captain_logo.png" alt="" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="mb-10"
        >
          <h3 className="mb-2 text-base font-medium">What's your name </h3>
          <div className="mb-5 flex gap-4">
            <input
              type="text"
              required
              placeholder="First name"
              className="w-1/2 rounded border bg-[#eeeeee] px-4 py-2 text-base placeholder:text-sm"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              required
              placeholder="Last name"
              className="w-1/2 rounded border bg-[#eeeeee] px-4 py-2 text-base placeholder:text-sm"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <h3 className="mb-2 text-base font-medium">What's your email </h3>
          <input
            type="email"
            required
            placeholder="email@example.com"
            className="mb-5 w-full rounded border bg-[#eeeeee] px-4 py-2 text-base placeholder:text-sm"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="mb-2 text-base font-medium">Enter Password</h3>
          <input
            type="password"
            placeholder="Password"
            className="mb-5 w-full rounded border bg-[#eeeeee] px-4 py-2 text-base placeholder:text-sm"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <h3 className="mb-2 text-base font-medium"> Vehicle Information</h3>
          <div className="mb-3 flex gap-4">
            <input
              type="text"
              required
              placeholder="Vehicle Color"
              className="w-1/2 rounded border bg-[#eeeeee] px-4 py-2 text-base placeholder:text-sm"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              required
              placeholder="Vehicle Plate"
              className="w-1/2 rounded border bg-[#eeeeee] px-4 py-2 text-base placeholder:text-sm"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>
          <div className="mb-5 flex gap-4">
            <input
              type="number"
              required
              placeholder="Vehicle Capacity"
              className="w-1/2 rounded border bg-[#eeeeee] px-4 py-2 text-base placeholder:text-sm"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />{" "}
            <select
              required
              className="w-1/2 rounded border bg-[#eeeeee] px-4 py-2 text-base placeholder:text-sm"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option
                value={""}
                disabled
                className="text-gray-400 transition-all duration-300 ease-in-out hover:text-gray-700"
              >
                Select Vehicle Type
              </option>
              <option
                className="transition-colors duration-300 hover:bg-blue-100 hover:text-blue-700"
                value={"car"}
              >
                Car
              </option>
              <option
                className="transition-colors duration-300 hover:bg-blue-100 hover:text-blue-700"
                value={"auto"}
              >
                Auto
              </option>
              <option
                className="transition-colors duration-300 hover:bg-blue-100 hover:text-blue-700"
                value={"moto"}
              >
                Moto
              </option>
            </select>
          </div>
          <button className="mb-3 w-full rounded bg-[#111] px-4 py-2 text-lg font-semibold text-[#fff] placeholder:text-base">
            Create Captain Account
          </button>
          <p className="text-center">
            Already have an account as Captain ?{" "}
            <Link to={"/captain-login"} className="font-semibold text-blue-600">
              Login here as Captain{" "}
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

export default CaptainSignup;
