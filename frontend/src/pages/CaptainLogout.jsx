import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/captain/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          localStorage.removeItem("token");
        }
      } catch (error) {}
    };
    const token = localStorage.getItem("token");
    if (!token) navigate("/captain-home");

    logout();
  });

  return <div>Captain Logout</div>;
};

export default CaptainLogout;
