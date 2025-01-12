import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
const UserSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const { user, setUser } = useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/user/register`,
      newUser,
    );

    if (response.status === 201) {
      const data = response.data;

      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setFirstName("");
    setLastName("");
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
          <button className="mb-3 w-full rounded bg-[#111] px-4 py-2 text-lg font-semibold text-[#fff] placeholder:text-base">
            Create account
          </button>
          <p className="text-center">
            Already have an account ?{" "}
            <Link to={"/login"} className="font-semibold text-blue-600">
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
