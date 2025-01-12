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
      data,
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
    <div className="flex min-h-screen flex-col justify-between p-7">
      <div>
        <img className="mb-10 w-16" src="logo.png" alt="" />
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
            You don't have an account ?{" "}
            <Link to={"/signup"} className="font-semibold text-blue-600">
              Create new Account{" "}
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to={"/captain-login"}
          className="mb-7 flex w-full items-center justify-center rounded bg-[#10b461] px-4 py-2 text-lg font-semibold text-[#fff] placeholder:text-base"
        >
          Sign in as Captain{" "}
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
