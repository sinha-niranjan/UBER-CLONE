import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useCaptain } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { setCaptain, isLoading, setIsLoading } = useCaptain();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
    setIsLoading(true);
    if (token)
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setCaptain(response.data?.captain);
          }
        })
        .catch((error) => {
          console.log(" c : ", error);
          localStorage.removeItem("token");
          navigate("/captain-login");
        })
        .finally(() => {
          setIsLoading(false);
        });
  }, [token]);

  if (isLoading) return <> Loading ...... </>;
  return <> {children}</>;
};

export default CaptainProtectedWrapper;
