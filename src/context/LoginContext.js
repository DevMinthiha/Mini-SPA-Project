import React, { createContext, useContext, useState } from "react";
const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

const LoginContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const value = { loggedIn, setLoggedIn };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginContextProvider;
