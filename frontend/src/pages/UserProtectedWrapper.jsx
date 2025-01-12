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
    if (token)
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setUser(response.data?.user);
          }
        })
        .catch((error) => {
          if (error.status === 401) {
            console.log("unauthorize");
          } else console.log("user error : ", error);
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
