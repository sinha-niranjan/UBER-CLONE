import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setUser, isLoading, setIsLoading } = useUser();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
        }
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("token");
        navigate("/login");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  if (isLoading) return <> Loading ...... </>;
  return <> {children}</>;
};

export default UserProtectedWrapper;
