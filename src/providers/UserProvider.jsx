import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserProcider = (props) => {
  const { children } = props;
  const contextName = "さく";
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
