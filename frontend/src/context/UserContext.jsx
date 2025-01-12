import React, { createContext, useContext, useState } from "react";

export const UserDataContext = createContext();

export const useUser = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("use Captain must be used within a Captain Provider ");
  }
  return context;
};
const userContext = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const updateUser = (userData) => {
    setCaptain(userData);
  };

  const value = { user, setUser, isLoading, setIsLoading, updateUser };
  return (
    <div>
      <UserDataContext.Provider value={value}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default userContext;
