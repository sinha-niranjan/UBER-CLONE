import React, { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigation } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigation();

  if (!token) {
    navigate("/login");
  }
  return <> {children}</>;
};

export default UserProtectedWrapper;
