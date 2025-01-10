import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/user/login`,
      data
    );

    if (response.status == 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

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
            <Link to={"/signup"} className="text-blue-600 font-semibold">
              Create new Account{" "}
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to={"/captain-login"}
          className="bg-[#10b461] flex items-center justify-center text-[#fff] font-semibold  mb-7 rounded px-4 py-2 w-full   text-lg placeholder:text-base "
        >
          Sign in as Captain{" "}
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
